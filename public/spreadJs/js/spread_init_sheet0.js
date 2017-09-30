+function ()
{
    var spread_init_sheet0 = function ( params ) 
    {
        var spread = params.pgp_spread ? params.pgp_spread : $workBook ;
        // 获得当前激活的标签页
        var activeSheet = spread.getActiveSheet();
        // console.log ( "activeSheet:" , activeSheet ) ;
        

        
        
        // 获得第2行2列单元格
        var cell = activeSheet.getCell(1, 1);

        // 对这个单元格进行赋值
        cell.value("SpreadJS");

        //单元格设置字体大小
        cell.font("15pt 宋体");

        // 当前标签页自动进行行、列适应大小
        activeSheet.autoFitColumn(1);
        activeSheet.autoFitRow(1);

            // 获得第2行2列 ~ 第4行5列，并设置背景色
        var cell = activeSheet.getRange(1, 1, 3, 4);
        cell.backColor("#00ff00");

        // 获得LineBorder属性
        var lineBorder = new GC.Spread.Sheets.LineBorder("white", GC.Spread.Sheets.LineStyle.thin);

        // 设置边框
        cell.borderTop(lineBorder);
        cell.borderBottom(lineBorder);
        cell.borderLeft(lineBorder);
        cell.borderRight(lineBorder);

        // 列結合
        activeSheet.addSpan(0, 0, 2, 4, GC.Spread.Sheets.SheetArea.colHeader);
        // 行結合
            activeSheet.addSpan(0, 0, 2, 4, GC.Spread.Sheets.SheetArea.rowHeader);
        // 单元格結合
        activeSheet.addSpan(0, 0, 2, 4, GC.Spread.Sheets.SheetArea.viewport);

        activeSheet.getCell(0, 0).value('考试成绩');
        // 各科成绩
        // activeSheet.getCell(2, 0).value('语文');
        activeSheet.getCell(2, 1).value(80);
        activeSheet.getCell(3, 0).value('数学');
        activeSheet.getCell(3, 1).value(70);
        activeSheet.getCell(4, 0).value('英语');
        activeSheet.getCell(4, 1).value(90);
        activeSheet.getCell(5, 0).value('政治');
        activeSheet.getCell(5, 1).value(45);
        
        // 总分和平均分
        activeSheet.getCell(6, 0).value("总分");      // 总分
        activeSheet.getCell(6, 1).formula("SUM(B3:B6)");   
        activeSheet.getCell(7, 0).value('平均分');        //平均分
        activeSheet.getCell(7, 1).formula("AVERAGE(B3:B6)");

        //数据输出
        function ExportJSON()
        {
            // 获得Spread 对象
            /*var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });*/
            var jsonStr = JSON.stringify(spread.toJSON());
            // console.log ( "jsonStr:" , jsonStr ) ;
            $("#jsonCode").html(jsonStr);
        }  
        ExportJSON()

        ////数据输入
        function ImportJSON()
        {
            // 获得Spread 对象
            /*var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });*/
            var jsonObj = JSON.parse($("#jsonCode").html());
            spread.fromJSON(jsonObj);            
        } 
        ImportJSON()
    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_init_sheet0" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_init_sheet0 
            }
        }
    )
    
} () ;
