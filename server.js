var express = require('express');
var app = express ();
var fs = require('fs');
var http = require('http');
var https = require('https');
var pgp_url = require ('url') ;
var path = require('path');
var router = express.Router () ;
var querystr = require ( "querystring" ) ;

var node_xlsx = require ( __dirname + "/node_xlsx/node_xlsx" ) ;
require ( "./node_xlsx/lib/lib" ) ;
var privateKey  = fs.readFileSync('D:/OPENSSL/demos/private/gu1024.key.pem', 'utf8') ;
var certificate = fs.readFileSync('D:/OPENSSL/demos/certs/gu1024.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var fn_servCb = function ( req , res ) 
{
    //如果你发一个GET到http://127.0.0.1:9000/test
    var url_info = pgp_url.parse(req.url, true);
    //检查是不是给/test的request
    if ( url_info.pathname === '/test' )
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
            console.log ( "pgp_urlInfo:" , pgp_urlInfo) ;

    } ;
} ; 
var httpServer = http.createServer( app , fn_servCb );
var httpsServer = https.createServer( credentials , app , fn_servCb );
var PORT = 18080;
var SSLPORT = 18081;
/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});*/
var setResHeader = function ( params )
{
    var res = params.res ;
    var next = params.next ;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next ();
} ;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});
//Router
router.count = 0 ;
router.get 
(
    '/excel:id' , 
    function ( req , res , next )
    {
        router.count ++ ;
        console.log( "router.count" , router.count);
        // res.send('export successfully');
    }
) ;
router.param
(
    'id' , 
    function (req, res, next, id) 
    {
        router.count ++;
        res.send ({count: router.count}) ;
        // next();
    }
) ;
router.get 
(
    '/exce' , 
    function ( req , res , next )
    {
        setResHeader ( { res : res , next : next } ) ;
        var pgp_urlInfo = pgp_url.parse ( req.url , true ) ;
        /*var str_serhQuery = unescape ( pgp_urlInfo.query ) ;
        console.log ( "str_serhQuery:" , str_serhQuery ) ;*/
        console.log ( "pgp_urlInfo:" , pgp_urlInfo ) ;
       /*node_xlsx.init 
        ( 
            {
                any_srcData : pgp_urlInfo.query.jary
            }  
        ) ;*/
        res.send('exce_successfully');

    }
) ;
// Welcome
app.get 
(
    '/exc', 
    function ( req , res , next ) 
    {
        setResHeader ( { res : res , next : next } ) ;
        if ( req.protocol === 'https' ) 
        {
            // res.status(200).send('Welcome to Safety Land');
        }
        else 
        {
            // res.status(200).send("'Welcome'");
        } ;
        
        //如果你发一个GET到http://127.0.0.1:9000/test
        var pgp_urlInfo = pgp_url.parse ( req.url , true ) ;
        console.log ( "pgp_urlInfo:" , pgp_urlInfo ) ;
        var pgp_serh = pgp_urlInfo.search.fnPgp_cvtSerhStr () ;
        console.log ( "pgp_serh:" , pgp_serh ) ;
        var str_query_unesc = querystr.unescape ( querystr.unescape ( pgp_urlInfo.query.jary ) ) ;
        console.log ( "str_query_unesc:" , str_query_unesc ) ;
        node_xlsx.init 
        ( 
            {
                any_srcData : JSON.parse ( pgp_urlInfo.query.jary )
            }  
        ) ;
        //检查是不是给/test的request
        if(pgp_urlInfo.pathname === '/exc'){
            // res.writeHead(200, {'Content-Type': 'text/plain'});
            res.status(200).send("'exc_success'");
        } ;
    }
) ;
app.get 
(
    '/exc2', 
    function ( req , res ) 
    {
        if ( req.protocol === 'https' ) 
        {
            res.status(200).send('Welcome to Safety Land');
        }
        else 
        {
            res.status(200).send('Welcome2');
        } ;

        //如果你发一个GET到http://127.0.0.1:9000/test
        var pgp_urlInfo = pgp_url.parse ( req.url , true ) ;
        console.log ( "pgp_urlInfo:" , pgp_urlInfo ) ;
        var pgp_serh = pgp_urlInfo.search.fnPgp_cvtSerhStr () ;
        console.log ( "pgp_serh:" , pgp_serh ) ;

        //检查是不是给/test的request
        if(pgp_urlInfo.pathname === '/exc2'){
            // res.writeHead(200, {'Content-Type': 'text/plain'});
            res.status(200).send('Welcome test2');
        } ;
    }
) ;
app.use ( router ) ;
app.use(express.static(path.join(__dirname, 'public')));