+function ()
{
    var spread_input_sheet1 = function ( params ) 
    {
        var pgp_spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        
        
        var fn_cb = function ( params )
        {
            var pgp_activeSheet = params.pgp_activeSheet ;
            pgp_activeSheet.name ( pgp_activeSheet.getValue ( 2 , 0 ) ) ;
            // pgp_activeSheet.Cj = pgp_activeSheet.getValue ( 0 , 2 ) ;
            if ( pgp_activeSheet.getValue ( 2 , 0 ) )
            {
                localStorage.activeSheetCj = pgp_activeSheet.getValue ( 2 , 0 ) ;

            } ;
            /*var str_sec = new Date ().getSeconds().toString ().slice ( -1 ) ;
            if ( !sessionStorage.getItem ( "toggle" ) || isNaN ( sessionStorage.getItem ( "toggle" ) ) )
            {
                sessionStorage.setItem ( "toggle" , 0 ) ;
            }
            else 
            {
                var num_toggle = Math.cell ( sessionStorage.getItem ( "toggle" ) ) ;
                var bol_toggle = num_toggle ? 0 : 1 ;
                sessionStorage.setItem 
                ( 
                    "toggle" , bol_toggle 
                )
            } ;
            if ( sessionStorage.getItem ( "toggle" ) ) 
            {
                localStorage.activeSheetCj = pgp_activeSheet.getValue ( 0 , 2 ) ;
            }
            else
            {
                localStorage.activeSheetCj = pgp_activeSheet.getValue ( 2 , 0 ) 
            } ;*/
        } ;
        spread_input_actSheet 
        (
            {
                pgp_spread : pgp_spread ,
                fn_cb : fn_cb

            }
        ) ;
    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_input_sheet1" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_input_sheet1 
            }
        }
    ) ;
    
} () ;
