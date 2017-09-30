+function ()
{
    var spread_input_sheet0 = function ( params ) 
    {
        var pgp_spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        
        
        var fn_copyCell = function ( params )
        {
            var pgp_activeSheet = params && params.pgp_activeSheet ? params.pgp_activeSheet : $workBook.getActiveSheet () ;
            var pgp_selectCell = params && params.pgp_selectCell ? params.pgp_selectCell : pgp_activeSheet.getCell ( 2 , 1 ) ;

            var ary_srcCell = 
            [
                pgp_activeSheet.getCell ( 1 , 1 ) ,
                pgp_activeSheet.getCell ( 1 , 2 ) 
            ] ;
            var ary_destCell = 
            [
                $workBook.getSheet ( 1 ).getCell ( 0 , 1 ) ,
                $workBook.getSheet ( 1 ).getCell ( 0 , 3 ) 
            ] ;
            console.log ( "ary_srcCell:" , ary_srcCell ) ;
            $workBook.getSheet ( 1 ).getCell ( 0 , 1 )
            .value
            ( 
                pgp_activeSheet.getCell ( 1 , 1 ).text () 
            ) ;
            // console.log ( "pgp_activeSheet.getCell ( 1 , 2 ).text ():" , pgp_activeSheet.getCell ( 2 , 1 ).text () ) ;

            $workBook.getSheet ( 1 ).getCell ( 0 , 3 )
            .value
            ( 
                pgp_activeSheet.getCell ( 2 , 1 ).text () 
            ) ;
            /*if ( pgp_selectCell.text ( ) )
            {
                pgp_activeSheet.name ( pgp_selectCell.text ( ) ) ;
                // pgp_activeSheet.Cj = pgp_activeSheet.getValue ( 2 , 0 ) ;
                localStorage.activeSheetCj = pgp_selectCell.text ( ) ;

            } ;*/
            

        } ;
        // fn_copyCell () ;
        var fn_addSheet = function ( params )
        {
        var inc_cell = 0 ;
            var pgp_activeSheet = params && params.pgp_activeSheet ? params.pgp_activeSheet : $workBook.getActiveSheet () ;
            var ary_cells = 
            [
                pgp_activeSheet.getCell ( 2 , 0 ) ,
                pgp_activeSheet.getCell ( 3 , 0 ) ,
                pgp_activeSheet.getCell ( 4 , 0 ) ,
                pgp_activeSheet.getCell ( 5 , 0 ) ,
                pgp_activeSheet.getCell ( 6 , 0 ) ,
                pgp_activeSheet.getCell ( 7 , 0 ) 
            ] ;
            var dom_btn = document.querySelector ( ".btn_addSheet" ) ;
            
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
                            "分00" + inc_cell 
                        ) ;
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
        /*spread_input_actSheet 
        (
            {
                pgp_spread : pgp_spread 
                
            }
        ) ;*/
        window.pgp_plugin.AryFn_input_sheet0_cb = 
        [ 
            fn_copyCell
            // , fn_addSheet 
        ] ;
        /*var pgp_plugin = 
        {
            AryFn_input_sheet0_cb : 
            [ 
                fn_copyCell
                // , fn_addSheet 
            ]

        } ;
        window.pgp_plugin = pgp_plugin ;*/
        // console.log ( "window.pgp_plugin:" , window.pgp_plugin) ;
    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_input_sheet0" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_input_sheet0 
            }
        }
    ) ;
    
} () ;
