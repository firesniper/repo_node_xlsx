+function (  )
{
    var fnJary_parseJson = function ( params ) 
    {
        var any_jsonOri = params && params.str_json ? params.str_json : localStorage.str_spread_json ;
        if ( !any_jsonOri ) return ;
        if ( any_jsonOri.constructor.name == "String") 
        {
            var json_Ori = JSON.parse ( any_jsonOri ) ;
        } ;
        // console.log ( "any_jsonOri:" , any_jsonOri ) ;
        var json_sheets = json_Ori.sheets ;
        delete json_sheets.version ;
        console.log ( "json_sheets:" , json_sheets ) ;
        var jary_newSheets = [] ;
        for ( var ka in json_sheets ) 
        {
            if ( !json_sheets.hasOwnProperty ( ka ) ) continue ;
            var pgp_sheet = json_sheets [ ka ]  ;
            // var str_pgp_sheet_firstKey = Object.keys ( pgp_sheet ) [ 0 ] ;
            jary_newSheets.push ( pgp_sheet /*[ str_pgp_sheet_firstKey ]*/ ) ;
            
        } ;
        console.log ( "jary_newSheets:" , jary_newSheets ) ;
        var jary_newSheets2 = [] ;
        for ( var i = 0 ; i < jary_newSheets.length ; i ++ ) 
        {
            var pgp_sheet2 = {} ;
            for ( var kb in jary_newSheets [ i ] ) 
            {
                if ( !( kb == "name" || kb == "data" ) ) continue ;
                if ( kb == "name" )
                {
                    pgp_sheet2 [ kb ] = jary_newSheets [ i ] [ kb ] ;
                } ;
                if ( kb == "data" )
                {
                    var pgp_data = jary_newSheets [ i ] [ kb ] ;
                    var pgp_dataTable = pgp_data [ Object.keys ( pgp_data ) [ 0 ] ] ;
                    var ary_dataTable = [] ;
                    for ( var kc in pgp_dataTable )
                    {
                        if ( !pgp_dataTable.hasOwnProperty ( kc ) ) continue ;
                        var pgp_row = pgp_dataTable [ kc ] ;
                        var ary_row2 = [] ;
                        for ( var kd in pgp_row ) 
                        {
                            if 
                            ( 
                                !( 
                                    pgp_row.hasOwnProperty ( kd ) 
                                    && 
                                    pgp_row [ kd ] [ "value" ]
                                    
                                )
                                ||
                                pgp_row [ kd ] [ "value" ].constructor.name == "Object" 
                            ) { continue } ;
                            ary_row2.push 
                            ( 
                                pgp_row [ kd ] [ "value" ] 
                            ) ;
                        } ;
                        ary_dataTable.push 
                        (
                            ary_row2 
                            // pgp_row
                            /*[ 
                                Object.keys ( pgp_row ) [ 0 ] 
                            ] */
                        ) ;
                    } ;
                    pgp_sheet2 [ kb ] = ary_dataTable ;
                } ;
            } ; 
            jary_newSheets2.push ( pgp_sheet2 ) ;

        } ;
        console.log ( "jary_newSheets2:" , JSON.stringify ( jary_newSheets2 ) ) ;
        return jary_newSheets2 ;
    } ;
    Object.defineProperties
    (
        window ,
        {
            "fnJary_parseJson" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : fnJary_parseJson 
            }
        }
    ) ;

} (  ) ;
// fnJary_parseJson ()