+function ()
{
    var spread_init_sheet0 = function ( params ) 
    {
        var spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        // 获得当前激活的标签页
        var pgp_sheet1 = spread.getSheet ( 0 ) ;
        // console.log ( "activeSheet:" , activeSheet ) ;
        var dataSource = [
            { "A": "封面" , "B" : "" },
            { "A": "报价名称" , "B" : ""  },
            { "A": "项目地址" , "B" : ""  },
            { "A": "报价单位" , "B" : ""  } ,
            { "A": "报价日期" , "B" : ""  } ,
        
        ] ;
        pgp_sheet1.setDataSource ( dataSource ) ;
        pgp_sheet1.name ( "封面" ) ;
        
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
