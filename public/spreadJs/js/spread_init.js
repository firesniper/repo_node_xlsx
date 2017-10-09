+function (  )
{
    var init = function ( params ) 
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
                "pgp_initSheet" :
                {
                    enumerable : false ,
                    configurable : true ,
                    writable : true ,
                    value : {}
                } ,
                
            }
        ) ;
        
    } ;
    var pgp_spread_init = 
    {
        init : init ()
    } ;
    
    Object.defineProperties
    (
        window ,
        {
            "$spread_init" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : pgp_spread_init 
            }
        }
    ) ;

} (  ) ;
// fnJary_parseJson ()