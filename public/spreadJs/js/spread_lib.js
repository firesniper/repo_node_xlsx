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
                                    // newTabVisible : true //隐藏新建标签页按钮
                                }
                            ) ;
                            spread.setSheetCount ( 5 ) ;
                            spread.startSheetIndex ( 2 ) ;
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