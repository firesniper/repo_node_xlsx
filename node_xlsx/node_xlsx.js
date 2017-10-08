let xlsx = require('node-xlsx') ; 
let fs = require ( 'fs' ) ;
require ( __dirname + "/lib/lib" ) ; 
// require ( "lib/lib.js" ) ;
let ary2d_data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]; 
let jary_data1 = [ { name : "mySheetName" , data: ary2d_data } ] ;
let jary_data2 = [{"name":"adfasd","data":[["考试成绩","数学","英语","政治","总分","平均分"],[80,70,90,45,"SUM(B3:B6)","AVERAGE(B3:B6)"],[80],["数学",70],["英语",90],["政治",45],["总分",285],["平均分",71.25]]},{"name":"Sheet data source","data":[["Yang",24],["Wang",35],["Zhang",20]]},{"name":"Sheet3","data":[]}] ;

let init = function ( params ) 
{
    params = params ? params : {
        // jary_srcJa : jary_data2 ,
        // str_isUri : __dirname + '/myFile.xlsx' ,
        any_srcData : jary_data2
    } ; 
    let any_srcData     = params.any_srcData ;
    
    let paramIsAry = function () 
    {
        let jary_srcJa   = params.any_srcData ;
        console.log ( "jary_srcJa:" , JSON.stringify ( jary_srcJa ) ) ;
        return { 
            "jary_data" : jary_srcJa ,
            // "str_odUri" : __dirname + "/fromJary.od" + ".xlsx"
            "str_odUri" : "./public/downloads/fromJary.od" + ".xlsx"
        } ;
    } ;
    let paramIsStr = function ()
    {
        let str_isUri       = params.any_srcData ;
        let str_odUri       = function () 
        {
            pgp_isUri = str_isUri.fnPgp_resolveUri () ;
            return pgp_isUri.str_dir + pgp_isUri.str_file + ".od" + pgp_isUri.str_ext ;
        } () ;
        console.log ( "str_odUri" , str_odUri ) ;
        // let jary = xlsx.parse ( str_uri ) ; // parses a file
        let jary_isUri = xlsx.parse
        ( 
            fs.readFileSync ( str_isUri ) 
        ) ; // parses a buffer
        console.log ( "jary_isUri:" , JSON.stringify ( jary_isUri ) ) ;
        return { 
            "jary_data" : jary_isUri ,
            "str_odUri" : str_odUri
        } ;
    } ;
    let pgp_cvtData = {} ;
    switch ( any_srcData.constructor.name )
    {
        case "Array" : 
            pgp_cvtData = paramIsAry () ;
        break ; 

        case "String" :
            pgp_cvtData = paramIsStr () ;
        break ;
    } ;

    let buf_pgp_cvtData = xlsx.build ( pgp_cvtData.jary_data ) ; // returns a buffer

    fs.writeFileSync
    ( 
        pgp_cvtData.str_odUri , 
        buf_pgp_cvtData ,
        { 'flag' : 'w' }
    ) ;
    

} ;

let node_xlsx = 
{
    init : init

} ;
/*node_xlsx.init 
( 
    {
        // str_isUri : __dirname + '/myFile.xlsx' ,
        // jary_srcJa : jary_data2 ,
        any_srcData : jary_data2 
    }  
) ;*/

module.exports = node_xlsx ;  