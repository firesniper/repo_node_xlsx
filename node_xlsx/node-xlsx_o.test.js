var xlsx = require('node-xlsx') ; 
var fs = require ( 'fs' ) ;
// require ( "lib/lib.js" ) ;
var jary = xlsx.parse(__dirname + '/myFile.xlsx') ; // parses a file
// var obj = xlsx.parse(fs.readFileSync(__dirname + '/myFile.xlsx')); // parses a buffer
console.log ( "jary:" , JSON.stringify ( jary ) ) ;
// var xlsx = require('node-xlsx') ; 
var data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]; 

var data2 = [{"name":"adfasd","data":[["考试成绩","数学","英语","政治","总分","平均分"],[80,70,90,45,"SUM(B3:B6)","AVERAGE(B3:B6)"],[80],["数学",70],["英语",90],["政治",45],["总分",285],["平均分",71.25]]},{"name":"Sheet data source","data":[["Yang",24],["Wang",35],["Zhang",20]]},{"name":"Sheet3","data":[]}] ;

var buffer1 = xlsx.build( jary ); // returns a buffer

var buffer = xlsx.build([{name: "mySheetName", data: data}]); // returns a buffer
var buffer2 = xlsx.build( data2 ); // returns a buffer
//将文件内容插入新的文件中
fs.writeFileSync( __dirname + '/myFile2.xlsx',buffer1,{'flag':'w'});
fs.writeFileSync( __dirname + '/test1.xlsx',buffer,{'flag':'w'});
fs.writeFileSync( __dirname + '/test2.xlsx',buffer2,{'flag':'w'});