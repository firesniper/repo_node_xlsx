+function ()
{
    var spread_init_sheet1 = function ( params ) 
    {
        var spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        var activeSheet = spread.getActiveSheet () ;

        var str_json = JSON.stringify
        (
            spread.toJSON( { includeBindingSource: true } )
        ) ; 
        console.log ( "str_json" , str_json ) ;
/*        document.addEventListener 
        (
            "keyup" ,
            function ( e )
            {
                if ( event.code != "ControlRight" ) return ;
                console.log ( "sheet2.getValue:" ,  sheet2.getValue ( 0,0) ) ;
                
                // sheet2.repaint () ;
                // spread.suspendPaint();
                // spread.refresh () ;
                localStorage.str_spread_json =  str_json ;
                // spread.resumePaint();
            }
        ) ;*/
        
        document.addEventListener 
        (
            "" ,
            function ( e )
            {
                if ( event.code != "ControlRight" ) return ;
                console.log ( "activeSheet.getValue:" ,  activeSheet.getValue ( 0,0) ) ;
                
                // activeSheet.repaint () ;
                // spread.suspendPaint();
                // spread.refresh () ;
                localStorage.str_spread_json =  str_json ;
                // spread.resumePaint();
            }
        ) ;
        
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
    ) ;
    
} () ;
