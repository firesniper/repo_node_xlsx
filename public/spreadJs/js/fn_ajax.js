+function ( $ )
{
    var fn_ajax = function ( params ) 
    {
        var str_jary_esc = escape ( JSON.stringify ( fnJary_parseJson () ) ) ;
        var str_jary    = params && params.str_jary ? params.str_jary : JSON.stringify ( fnJary_parseJson () ) ;
        var str_url     = params && params.str_url ? params.str_url
        : "http://localhost:18080/exc?jary=" + str_jary ;

        var pm01 = new Promise 
        (
            function ( resolve , reject )
            {
                $.ajax
                (
                    {

                        url : str_url  ,
                        // url : governStrBuf.join( "" ) ,
                        // crossDomain : true ,
                        type : "get" ,
                        // dataType : "jsonp" ,
                        mimeType : "text/javascript" ,
                        scriptCharSet : "utf-8" ,
                        // jsonp : "jsonp" ,
                        // jsonpCallback : "mSearchjsonp" + ( ( servCls ) + 1 ) ,
                        success : function ( any_data )
                        {
                            console.log ( "any_data:" , any_data ) ;
                            var num_ms = 0 ;
                            var num_ms_inc = .1 ;
                            var numSiv_a01 = window.setInterval
                            (
                                function ()
                                {
                                    num_ms += num_ms_inc ;
                                    if ( any_data )
                                    {
                                        console.log ( "any_data:" , any_data ) ;
                                        window.clearInterval ( numSiv_a01 ) ;
                                        resolve ( any_data ) ;
                                        console.log ( "num_ms1:" , num_ms ) ;	
                                    } ;
                                } ,
                                num_ms_inc
                            ) ;
                            
                        } ,
                        error : function ( XMLHttpRequest, textStatus, errorThrown )
                        {
                            console.log( "XMLHttpRequest:" , XMLHttpRequest ) ;
                            console.log( "textStatus:" , textStatus ) ;
                            console.log( "errorThrown:" , errorThrown ) ;
                        } ,
                    }
                ) ;
            }
        ) ;
        return pm01 ;
    } ;
    
    Object.defineProperties 
    (
        window ,
        {
            "fn_ajax" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : fn_ajax
            }
        }
    ) ;

} ( window.jQuery ) ;

document.addEventListener 
(
    "keyup" ,
    function ( e ) 
    {
        if ( event.code != "" ) return ;
        var pm01 = fn_ajax () ;
        console.log ( "pm01:" , pm01 ) ;
        pm01.then 
        (
            function ( resolved )
            {
                console.log ( "resolved:" , resolved ) ;
            } ,
            function ( rejected )
            {

            }
        )
    }
) ;
