let node_xlsx = require ( __dirname + "/node_xlsx" ) ;

let ary2d_data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]; 
let jary_data1 = [ { name : "mySheetName" , data: ary2d_data } ] ;
let jary_data2 = [{"name":"adfasd","data":[["考试成绩","数学","英语","政治","总分","平均分"],[80,70,90,45,"SUM(B3:B6)","AVERAGE(B3:B6)"],[80],["数学",70],["英语",90],["政治",45],["总分",285],["平均分",71.25]]},{"name":"Sheet data source","data":[["Yang",24],["Wang",35],["Zhang",20]]},{"name":"Sheet3","data":[]}] ;
let str_isUri1 = '/myFile.xlsx' ;
let str_odUri1 = '/myFile2.xlsx' ;
let str_odUri2 = '/test1.xlsx' ;
let str_OdUri3 = '/test2.xlsx' ;

console.log ( "node_xlsx.init:" , node_xlsx ) ;
node_xlsx.init 
( 
    {
        // str_isUri : __dirname + '/myFile.xlsx' ,
        // jary_srcJa : jary_data2 ,
        any_srcData : jary_data2
    }  
) ;