+function ()
{
    var spread_init_sheet1 = function ( params ) 
    {
        var pgp_spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
         //Sheet data source
        var dataSource = 
        [
            { A: "项目名称", B: "", C:"项目地址",D:"",E:"",F:"",G:"" },
            { B: "分项" , C: "单位" , D : "计量" , E:"单价/元" , F :"价税小计/元" , G : "备注" },
            { A: "1", B : 0 , F: 0.00 } ,
            { A: "2", B : 0 , F: 0.00 } ,
            { A: "3", B : 0 , F: 0.00 } ,
            { A: "4", B : 0 , F: 0.00 } ,
            { A: "5", B : 0 , F: 0.00 } ,
            { "A" : "合计大写" , F: 0.00 }

        ];
        
        var sheet2 = pgp_spread.getSheet(1);
        // sheet2.setDataSource(dataSource);
        sheet2.fromJSON (  window.pgp_initSheet.json_initSheet1  ) ;
        sheet2.name ( "汇总" ) ;
        
        //Table data source
        /*var sheet3 = pgp_spread.getSheet(2);
        sheet3.name("Table data source3");
        sheet3.setDataSource(new GC.Spread.Sheets.Bindings.CellBindingSource({
            name: "Yang",
            age: 24,
            country: "China",
            city: "Xi'an",
            ds: $.extend(true, [], dataSource)
        }));
        sheet3.setBindingPath(0, 1, "name");
        sheet3.setBindingPath(1, 1, "age");
        sheet3.setBindingPath(2, 1, "country");
        sheet3.setBindingPath(3, 1, "city");
        var table = sheet3.tables.add("table1", 4, 1, 1, 1);
        table.bindingPath("ds");
        sheet3.tables.addFromDataSource("table2", 9, 1, $.extend(true, [], dataSource));

        sheet3.options.allowCellOverflow = true;
        sheet3.setValue(4, 4, "Table binding to data source");
        sheet3.setValue(9, 4, "Table created from data source");*/
        // pgp_spread.resumePaint();
    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_init_sheet1" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_init_sheet1 
            }
        }
    )
    
} () ;
