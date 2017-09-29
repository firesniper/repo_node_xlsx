require ( __dirname + "/lib.js" ) ;

var str_url = "http://localhost:8080/adfb?dasdf=1&sadf=2&as1=ad"
var str_serh = str_url.match ( /\?.*/ig ) [ 0 ] ;
var pgp_serh = str_serh.fnPgp_cvtSerhStr () ;
console.log ( "pgp_serh:" , pgp_serh ) ;