let lib = 
{
    init : function ()
    {
        Object.defineProperties 
        (
            String.prototype ,
            {
                "fnPgp_cvtSerhStr" :
                {
                    enumerable : false ,
                    configurable : true ,
                    writable : true ,
                    value :function ()
                    {
                        let _this = this ;
                        /* if ( settings.data != null ) 
                        {
                            _this += "?" ;
                            for ( var key in settings.data ) 
                            {
                                _this = _this + "&" + key + "=" + settings.data [key] ;
                            } ;
                            console.log( _this );
                        } ;*/
                        var str_url = _this ;
                        var str_serh = str_url.match ( /\?.*/ig) [ 0 ] ;
                        var str_serhParams = str_serh.slice ( 1 ) ;
                        var ary_entry = str_serhParams.split( "&" ) ;
                        var pgp = {} ;
                        for ( var i = 0 ; i < ary_entry.length ; i++ )
                        {
                            var ary_pgp = ary_entry [ i ].split( "=" ) ;
                            pgp [ ary_pgp [ 0 ] ] = ary_pgp [ 1 ] ;
                        } ;
                        return pgp ;
                    }

                } ,
                
                "fnPgp_resolveUri" : 
                {
                    enumerable : false ,
                    configurable : true ,
                    writable : true ,
                    value : function ()
                    {
                        let ary_args = Array.prototype.slice ( arguments ) ;
                        let str_this = this ;
                        let str_separator = str_this.indexOf ( "/" ) > 0 ?
                        "/" :
                        str_this.indexOf ( "\\" ) > 0 ? 
                        "\\" : "" ;
                        str_this = str_this.replace
                        (
                            /(?:\/)+/ig ,
                            str_separator
                        ) ;
                        //console.log ( "resolveUri_this:" , str_this ) ;
                        let str_dir = 
                        str_separator == "" ?
                        "" :
                        str_this.slice ( 0 , str_this.lastIndexOf ( str_separator ) + 1 ) ;
                        // let str_dir = str_this.match ( /.+(?:\/|\\)/ig ) [ 0 ] ;

                        let str_file = str_this.slice 
                        ( 
                            str_separator == "" ?
                            0 : 
                            str_this.lastIndexOf ( str_separator ) + 1 
                            , 
                            str_this.lastIndexOf ( "." ) 
                        ) ;
                        /*let str_file = 
                        str_this.match 
                        ( 
                            str_this.lastIndexOf ( str_separator ) + 1 , 
                            str_this.lastIndexOf ( "." ) 
                        ) ;*/
                        let str_fileBaseName = 
                        str_file.slice
                        (
                            0 ,
                            str_file.indexOf ( "." ) > 0 ? str_file.indexOf ( "." ) : str_file.length  
                        ) ;
                        let str_suffix = 
                        str_file.indexOf ( "." ) == -1 ?
                        "" : 
                        str_file.slice 
                        ( 
                            str_file.indexOf ( "." )  
                            // , 
                            // str_file.lastIndexOf( "." ) 
                        ) ;
                        let str_ext = str_this.slice
                        (
                            str_this.lastIndexOf ( "." ) 
                        ) ;
                        return {
                            "str_dir"           : str_dir ,
                            "str_file"          : str_file ,
                            "str_fileBaseName"  : str_fileBaseName ,
                            "str_suffix"        : str_suffix ,
                            "str_ext"           : str_ext
                        } ;
                    }
                } 
            }
        ) ;
    }
} ;
lib.init () ;
// module.exports = lib.init ;