+function ()
{
    var spread_input_sheet1 = function ( params ) 
    {
        var pgp_spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        var pgp_activeSheet = pgp_spread.getActiveSheet () ;
        /*pgp_activeSheet.suspendPaint () ;
        pgp_activeSheet.getCell ( 7 , 1 ).formula ( "SUM(B3:B7)" ) ;
        pgp_activeSheet.resumePaint () ;
        pgp_spread.refresh () ;*/
        var fn_modifyActSheetName = function ( params )
        {
            var pgp_activeSheet = params && params.pgp_activeSheet ? params.pgp_activeSheet : $workBook.getActiveSheet () ;
            var pgp_selectCell = params && params.pgp_selectCell ? params.pgp_selectCell : pgp_activeSheet.getCell ( 2 , 1 ) ;
            if ( pgp_selectCell.text ( ) )
            {
                pgp_activeSheet.name ( pgp_selectCell.text ( ) ) ;
                // pgp_activeSheet.Cj = pgp_activeSheet.getValue ( 2 , 0 ) ;
                localStorage.activeSheetCj = pgp_selectCell.text ( ) ;

            } ;
            

        } ;
        var fn_addSheet = function ( params )
        {
            var pgp_activeSheet = params && params.pgp_activeSheet ? params.pgp_activeSheet : $workBook.getActiveSheet () ;
            var ary_cells = 
            [
                pgp_activeSheet.getCell ( 2 , 1 ) ,
                pgp_activeSheet.getCell ( 3 , 1 ) ,
                pgp_activeSheet.getCell ( 4 , 1 ) ,
                pgp_activeSheet.getCell ( 5 , 1 ) ,
                pgp_activeSheet.getCell ( 6 , 1 ) ,
            ] ;
            var dom_btn = document.querySelector ( ".btn_addSheet" ) ;
            var inc_cell = 0 ;
            var inc_sheet = 3 ;
            dom_btn.addEventListener 
            (
                "click" ,
                function ( e )
                {
                    if (  inc_cell < ary_cells.length && ary_cells [ inc_cell ].text () ) 
                    {
                        var any_cellCtt = ary_cells [ inc_cell ].text () ;
                        var pgp_sheet = new GC.Spread.Sheets.Worksheet 
                        ( 
                            "分00" + ( inc_cell + 1 )
                        ) ;
                        pgp_sheet.fromJSON ( pgp_initSheet.json_initSheet2 ) ;
                        pgp_sheet.Cj = "分00" + ( inc_cell + 1 ) ;
                        $workBook.addSheet
                        (
                            inc_sheet , 
                            pgp_sheet
                        ) ;
                        inc_cell ++ ;
                        inc_sheet ++ ;

                    }
                    else 
                    {
                        return ;
                    } ;
                    
                }
            ) ;
        } ;
        // fn_addSheet () ;
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
        /*var pgp_plugin = 
        {
            AryFn_input_sheet1_cb : 
            [ 
                fn_modifyActSheetName , 
                fn_addSheet 
            ]

        } ;*/
        window.pgp_plugin.AryFn_input_sheet1_cb =  
        [ 
            fn_modifyActSheetName , 
            fn_addSheet 
        ] ;
        /*spread_input_actSheet 
        (
            {
                pgp_spread : pgp_spread ,
                AryFn_input_sheet1_cb : 
                [ 
                    fn_modifyActSheetName , 
                    fn_addSheet 
                ]

            }
        ) ;*/
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
