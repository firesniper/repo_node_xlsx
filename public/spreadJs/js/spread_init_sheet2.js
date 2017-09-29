+function ()
{
    var spread_input_sheet2 = function ( params ) 
    {
        var spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
         //Sheet data source
        var dataSource = [
            { name: "Yang", age: 24 },
            { name: "Wang", age: 35 },
            { name: "Zhang", age: 20 }
        ];
        var sheet2 = spread.getSheet(1);
        sheet2.setDataSource(dataSource);
        sheet2.name("Sheet data source");
        
        //Table data source
        /*var sheet3 = spread.getSheet(2);
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
        // spread.resumePaint();
    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_input_sheet2" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_input_sheet2 
            }
        }
    )
    
} () ;
