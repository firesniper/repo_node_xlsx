+function ()
{

    var json_initSheet1 = 
    {
        "name": "123",
        "rowCount": 8,
        "columnCount": 7,
        "activeRow": 2,
        "activeCol": 1,
        "data": {
            "dataTable": {
                "0": {
                    "0": {
                        "value": "项目名称"
                    },
                    "1": {
                        "value": ""
                    },
                    "2": {
                        "value": "项目地址"
                    },
                    "3": {
                        "value": ""
                    },
                    "4": {
                        "value": ""
                    },
                    "5": {
                        "value": ""
                    },
                    "6": {
                        "value": ""
                    }
                },
                "1": {
                    "1": {
                        "value": "分项"
                    },
                    "2": {
                        "value": "单位"
                    },
                    "3": {
                        "value": "计量"
                    },
                    "4": {
                        "value": "单价/元"
                    },
                    "5": {
                        "value": "价税小计/元"
                    },
                    "6": {
                        "value": "备注"
                    }
                },
                "2": {
                    "0": {
                        "value": "0"
                    },
                    "1": {
                        "value": "0",
                        "style": {
                            "autoFormatter": {}
                        }
                    },
                    "5": {
                        "value": 0
                    }
                },
                "3": {
                    "0": {
                        "value": "0"
                    },
                    "1": {
                        "value": "0",
                        "style": {
                            "autoFormatter": {}
                        }
                    },
                    "5": {
                        "value": 0
                    }
                },
                "4": {
                    "0": {
                        "value": "0"
                    },
                    "1": {
                        "value": "0",
                        "style": {
                            "autoFormatter": {}
                        }
                    },
                    "5": {
                        "value": 0
                    }
                },
                "5": {
                    "0": {
                        "value": "0"
                    },
                    "1": {
                        "value": "0",
                        "style": {
                            "autoFormatter": {}
                        }
                    },
                    "5": {
                        "value": 0
                    }
                },
                "6": {
                    "0": {
                        "value": "0"
                    },
                    "1": {
                        "value": "0",
                        "style": {
                            "autoFormatter": {}
                        }
                    },
                    "5": {
                        "value": 0
                    }
                },
                "7": {
                    "0": {
                        "value": "合计大写"
                    },
                    "1": {
                        "value": 0,
                        "formula": "SUM(B3:B7)"
                    },
                    "5": {
                        "value": 0
                    }
                }
            },
            "defaultDataNode": {
                "style": {
                    "themeFont": "Body"
                }
            }
        },
        "rowHeaderData": {
            "defaultDataNode": {
                "style": {
                    "themeFont": "Body"
                }
            }
        },
        "colHeaderData": {
            "dataTable": {
                "0": {
                    "0": {
                        "value": "A"
                    },
                    "1": {
                        "value": "B"
                    },
                    "2": {
                        "value": "C"
                    },
                    "3": {
                        "value": "D"
                    },
                    "4": {
                        "value": "E"
                    },
                    "5": {
                        "value": "F"
                    },
                    "6": {
                        "value": "G"
                    }
                }
            },
            "defaultDataNode": {
                "style": {
                    "themeFont": "Body"
                }
            }
        },
        "selections": {
            "0": {
                "row": 2,
                "rowCount": 1,
                "col": 1,
                "colCount": 1
            },
            "length": 1
        },
        "theme": "Office",
        "columns": [
            {
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            }
        ]
    } ;
    /*pgp_initSheet =
    {
        json_initSheet1 : json_initSheet1
    } ;*/
    console.log ( "window.pgp_initSheet:" , window.pgp_initSheet) ;
    Object.defineProperties
    (
        window.pgp_initSheet ,
        {
            json_initSheet1 :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : json_initSheet1

            }

        }
    ) ;
} () ;
