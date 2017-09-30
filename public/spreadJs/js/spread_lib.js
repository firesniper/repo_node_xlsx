+function (  )
{
    var pgp_spread_lib = 
    {
        init : function ( params ) 
        {
            var dom_workBookAnch = params && params.dom_workBookAnch ? params.dom_workBookAnch : document.getElementById ( "ss" ) ;

            Object.defineProperties
            (
                window ,
                {
                    "pgp_plugin" :
                    {
                        enumerable : false ,
                        configurable : true ,
                        writable : true ,
                        value : {} 
                    } ,
                    "$workBook" :
                    {
                        enumerable : false ,
                        configurable  : true ,
                        writable : true ,
                        value : function ()
                        {
                            var spread = new GC.Spread.Sheets.Workbook
                            (
                                dom_workBookAnch
                                ,
                                {
                                    // sheetCount : 3,//初始化为3个标签页
                                    newTabVisible : false //隐藏新建标签页按钮
                                }
                            ) ;
                            spread.setSheetCount ( 2 ) ;
                            spread.startSheetIndex ( 0 ) ;
                            // spread.options.tabStripVisible = false; 
                            //Also you can set tabStripVisible to true.
                            // spread.options.newTabVisible = false; 
                            //Also you can set newTabVisible to true.
                            return spread ;
                        } ()
                    }
                }
            ) ;
            
        } 
    } ;
    
    Object.defineProperties
    (
        window ,
        {
            "$spread_lib" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : pgp_spread_lib 
            }
        }
    ) ;

} (  ) ;
// fnJary_parseJson ()