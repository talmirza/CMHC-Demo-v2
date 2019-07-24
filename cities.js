const cities = {
    'abbotsford': {
        name: 'Abbotsford',
        province: 'BC',
        location: {
            lat: 49.025,
            lng: -122.36
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.232,
                    gas: 0.418,
                    oil: 0
                },
                highrise: {
                    electricity: 0.199,
                    gas: 0.449,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.22,
                    gas: 0.408,
                    oil: 0
                },
                highrise: {
                    electricity: 0.199,
                    gas: 0.439,
                    oil: 0
                }
            }
        }
    },
    'armstrong': {
        name: 'Armstrong',
        province: 'ON',
        location: {
            lat: 50.294,
            lng: -88.905
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.189,
                    gas: 0.665,
                    oil: 0
                },
                highrise: {
                    electricity: 0.168,
                    gas: 0.668,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.186,
                    gas: 0.633,
                    oil: 0
                },
                highrise: {
                    electricity: 0.168,
                    gas: 0.655,
                    oil: 0
                }
            }
        }
    },
    'banff': {
        name: 'Banff',
        province: 'AB',
        location: {
            lat: 51.193,
            lng: -115.552
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.2,
                    gas: 0.545,
                    oil: 0
                },
                highrise: {
                    electricity: 0.173,
                    gas: 0.578,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.202,
                    gas: 0.387,
                    oil: 0
                },
                highrise: {
                    electricity: 0.175,
                    gas: 0.567,
                    oil: 0
                }
            }
        }
    },
    'brandon': {
        name: 'Brandon',
        province: 'MB',
        location: {
            lat: 49.91,
            lng: -99.952
        },
        rate: {
            electricity: 0.058,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.706,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.665,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.69,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.655,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'calgary': {
        name: 'Calgary',
        province: 'AB',
        location: {
            lat: 51.114,
            lng: -114.02
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.224,
                    gas: 0.521,
                    oil: 0
                },
                highrise: {
                    electricity: 0.19,
                    gas: 0.548,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.223,
                    gas: 0.375,
                    oil: 0
                },
                highrise: {
                    electricity: 0.191,
                    gas: 0.536,
                    oil: 0
                }
            }
        }
    },
    'greenwood': {
        name: 'Greenwood',
        province: 'NS',
        location: {
            lat: 44.983,
            lng: -64.917
        },
        rate: {
            electricity: 0.116,
            gas: 0.636,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.223,
                    gas: 0.498,
                    oil: 0
                },
                highrise: {
                    electricity: 0.196,
                    gas: 0.512,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.217,
                    gas: 0.475,
                    oil: 0
                },
                highrise: {
                    electricity: 0.197,
                    gas: 0.501,
                    oil: 0
                }
            }
        }
    },
    'shearwater': {
        name: 'Shearwater',
        province: 'NS',
        location: {
            lat: 44.633,
            lng: -63.5
        },
        rate: {
            electricity: 0.116,
            gas: 0.636,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.226,
                    gas: 0.484,
                    oil: 0
                },
                highrise: {
                    electricity: 0.195,
                    gas: 0.514,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.219,
                    gas: 0.469,
                    oil: 0
                },
                highrise: {
                    electricity: 0.197,
                    gas: 0.503,
                    oil: 0
                }
            }
        }
    },
    'trenton': {
        name: 'Trenton',
        province: 'ON',
        location: {
            lat: 44.117,
            lng: -77.533
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.237,
                    gas: 0.495,
                    oil: 0
                },
                highrise: {
                    electricity: 0.209,
                    gas: 0.508,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.231,
                    gas: 0.472,
                    oil: 0
                },
                highrise: {
                    electricity: 0.21,
                    gas: 0.497,
                    oil: 0
                }
            }
        }
    },
    'charlottetown': {
        name: 'Charlottetown',
        province: 'PE',
        location: {
            lat: 46.286,
            lng: -63.129
        },
        rate: {
            electricity: 0.127,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.645,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.598,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.619,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.589,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'comox': {
        name: 'Comox Valley',
        province: 'BC',
        location: {
            lat: 49.717,
            lng: -124.9
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.225,
                    gas: 0.417,
                    oil: 0
                },
                highrise: {
                    electricity: 0.2,
                    gas: 0.403,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.224,
                    gas: 0.3,
                    oil: 0
                },
                highrise: {
                    electricity: 0.201,
                    gas: 0.396,
                    oil: 0
                }
            }
        }
    },
    'cranbrook': {
        name: 'Cranbrook',
        province: 'BC',
        location: {
            lat: 49.612,
            lng: -115.782
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.231,
                    gas: 0.497,
                    oil: 0
                },
                highrise: {
                    electricity: 0.199,
                    gas: 0.524,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.221,
                    gas: 0.48,
                    oil: 0
                },
                highrise: {
                    electricity: 0.201,
                    gas: 0.514,
                    oil: 0
                }
            }
        }
    },
    'dryden': {
        name: 'Dryden',
        province: 'ON',
        location: {
            lat: 49.827,
            lng: -92.744
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.205,
                    gas: 0.613,
                    oil: 0
                },
                highrise: {
                    electricity: 0.181,
                    gas: 0.617,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.201,
                    gas: 0.582,
                    oil: 0
                },
                highrise: {
                    electricity: 0.181,
                    gas: 0.603,
                    oil: 0
                }
            }
        }
    },
    'edmonton': {
        name: 'Edmonton',
        province: 'AB',
        location: {
            lat: 53.31,
            lng: -113.579
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.212,
                    gas: 0.6,
                    oil: 0
                },
                highrise: {
                    electricity: 0.183,
                    gas: 0.625,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.206,
                    gas: 0.576,
                    oil: 0
                },
                highrise: {
                    electricity: 0.184,
                    gas: 0.61,
                    oil: 0
                }
            }
        }
    },
    'stony plain': {
        name: 'Stony Plain',
        province: 'AB',
        location: {
            lat: 53.548,
            lng: -114.108
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.213,
                    gas: 0.57,
                    oil: 0
                },
                highrise: {
                    electricity: 0.187,
                    gas: 0.593,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.216,
                    gas: 0.409,
                    oil: 0
                },
                highrise: {
                    electricity: 0.188,
                    gas: 0.58,
                    oil: 0
                }
            }
        }
    },
    'estevan': {
        name: 'Estevan',
        province: 'SK',
        location: {
            lat: 49.21,
            lng: -102.966
        },
        rate: {
            electricity: 0.101,
            gas: 0.183,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.219,
                    gas: 0.598,
                    oil: 0
                },
                highrise: {
                    electricity: 0.191,
                    gas: 0.621,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.212,
                    gas: 0.575,
                    oil: 0
                },
                highrise: {
                    electricity: 0.192,
                    gas: 0.605,
                    oil: 0
                }
            }
        }
    },
    'fort mcmurray': {
        name: 'Fort McMurray',
        province: 'AB',
        location: {
            lat: 56.653,
            lng: -111.223
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.19,
                    gas: 0.636,
                    oil: 0
                },
                highrise: {
                    electricity: 0.17,
                    gas: 0.655,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.194,
                    gas: 0.462,
                    oil: 0
                },
                highrise: {
                    electricity: 0.171,
                    gas: 0.64,
                    oil: 0
                }
            }
        }
    },
    'fort st. john': {
        name: 'Fort St John-North Peace',
        province: 'BC',
        location: {
            lat: 56.238,
            lng: -120.74
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.197,
                    gas: 0.622,
                    oil: 0
                },
                highrise: {
                    electricity: 0.173,
                    gas: 0.646,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.199,
                    gas: 0.456,
                    oil: 0
                },
                highrise: {
                    electricity: 0.174,
                    gas: 0.63,
                    oil: 0
                }
            }
        }
    },
    'fredericton': {
        name: 'Fredericton',
        province: 'NB',
        location: {
            lat: 45.869,
            lng: -66.537
        },
        rate: {
            electricity: 0.104,
            gas: 0.325,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.216,
                    gas: 0.543,
                    oil: 0
                },
                highrise: {
                    electricity: 0.188,
                    gas: 0.553,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.211,
                    gas: 0.517,
                    oil: 0
                },
                highrise: {
                    electricity: 0.19,
                    gas: 0.539,
                    oil: 0
                }
            }
        }
    },
    'gander': {
        name: 'Gander',
        province: 'NL',
        location: {
            lat: 48.937,
            lng: -54.558
        },
        rate: {
            electricity: 0.112,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.657,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.612,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.629,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.602,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'goose bay': {
        name: 'Goose Bay',
        province: 'NL',
        location: {
            lat: 53.317,
            lng: -60.417
        },
        rate: {
            electricity: 0.112,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.731,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.684,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.568,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.673,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'grande prairie': {
        name: 'Grande Prairie',
        province: 'AB',
        location: {
            lat: 55.18,
            lng: -118.885
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.197,
                    gas: 0.608,
                    oil: 0
                },
                highrise: {
                    electricity: 0.173,
                    gas: 0.634,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.2,
                    gas: 0.438,
                    oil: 0
                },
                highrise: {
                    electricity: 0.174,
                    gas: 0.618,
                    oil: 0
                }
            }
        }
    },
    'hope': {
        name: 'Hope',
        province: 'BC',
        location: {
            lat: 49.368,
            lng: -121.498
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.228,
                    gas: 0.427,
                    oil: 0
                },
                highrise: {
                    electricity: 0.199,
                    gas: 0.462,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.218,
                    gas: 0.414,
                    oil: 0
                },
                highrise: {
                    electricity: 0.2,
                    gas: 0.452,
                    oil: 0
                }
            }
        }
    },
    'inuvik': {
        name: 'Inuvik-Zubko',
        province: 'NT',
        location: {
            lat: 68.3,
            lng: -133.483
        },
        rate: {
            electricity: 0.49,
            gas: 0,
            oil: 0.8
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.174,
                    gas: 0,
                    oil: 0.798
                },
                highrise: {
                    electricity: 0.158,
                    gas: 0,
                    oil: 0.8
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.181,
                    gas: 0,
                    oil: 0.605
                },
                highrise: {
                    electricity: 0.158,
                    gas: 0,
                    oil: 0.784
                }
            }
        }
    },
    'kamloops': {
        name: 'Kamloops',
        province: 'BC',
        location: {
            lat: 50.702,
            lng: -120.449
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.242,
                    gas: 0.447,
                    oil: 0
                },
                highrise: {
                    electricity: 0.212,
                    gas: 0.475,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.232,
                    gas: 0.432,
                    oil: 0
                },
                highrise: {
                    electricity: 0.213,
                    gas: 0.465,
                    oil: 0
                }
            }
        }
    },
    'kuujjuaq': {
        name: 'Kuujjuaq',
        province: 'QC',
        location: {
            lat: 58.1,
            lng: -68.417
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.8,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.75,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.634,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.742,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'kuujjuarapik': {
        name: 'Kuujjuarapik',
        province: 'QC',
        location: {
            lat: 55.282,
            lng: -77.765
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.762,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.733,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.616,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.724,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'lac-jérôme': {
        name: 'Lac Eon',
        province: 'QC',
        location: {
            lat: 51.867,
            lng: -63.284
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.758,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.707,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.6,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.694,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'lethbridge': {
        name: 'Lethbridge',
        province: 'AB',
        location: {
            lat: 49.695,
            lng: -112.768
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.243,
                    gas: 0.501,
                    oil: 0
                },
                highrise: {
                    electricity: 0.207,
                    gas: 0.529,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.232,
                    gas: 0.484,
                    oil: 0
                },
                highrise: {
                    electricity: 0.207,
                    gas: 0.516,
                    oil: 0
                }
            }
        }
    },
    'london': {
        name: 'London',
        province: 'ON',
        location: {
            lat: 43.033,
            lng: -81.151
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.236,
                    gas: 0.478,
                    oil: 0
                },
                highrise: {
                    electricity: 0.211,
                    gas: 0.499,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.228,
                    gas: 0.459,
                    oil: 0
                },
                highrise: {
                    electricity: 0.211,
                    gas: 0.487,
                    oil: 0
                }
            }
        }
    },
    'medicine hat': {
        name: 'Medicine Hat',
        province: 'AB',
        location: {
            lat: 50.025,
            lng: -110.717
        },
        rate: {
            electricity: 0.07,
            gas: 0.11,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.239,
                    gas: 0.517,
                    oil: 0
                },
                highrise: {
                    electricity: 0.206,
                    gas: 0.544,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.229,
                    gas: 0.498,
                    oil: 0
                },
                highrise: {
                    electricity: 0.206,
                    gas: 0.531,
                    oil: 0
                }
            }
        }
    },
    'miramichi': {
        name: 'Miramichi',
        province: 'NB',
        location: {
            lat: 47.009,
            lng: -65.465
        },
        rate: {
            electricity: 0.104,
            gas: 0.325,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.213,
                    gas: 0.56,
                    oil: 0
                },
                highrise: {
                    electricity: 0.188,
                    gas: 0.569,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.209,
                    gas: 0.533,
                    oil: 0
                },
                highrise: {
                    electricity: 0.189,
                    gas: 0.556,
                    oil: 0
                }
            }
        }
    },
    'mont-joli': {
        name: 'Mont-Joli',
        province: 'QC',
        location: {
            lat: 48.61,
            lng: -68.21
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.682,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.637,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.654,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.627,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'mirabel': {
        name: 'Montreal-Mirabel Intl AP',
        province: 'QC',
        location: {
            lat: 45.681,
            lng: -74.039
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.656,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.62,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.531,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.61,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'longueuil': {
        name: 'Montreal-St-Hubert Longueuil AP',
        province: 'QC',
        location: {
            lat: 45.517,
            lng: -73.417
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.66,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.611,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.632,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.601,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'montreal': {
        name: 'Montreal-Trudeau Intl AP',
        province: 'QC',
        location: {
            lat: 45.471,
            lng: -73.741
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.659,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.61,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.63,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.6,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'moosonee': {
        name: 'Moosonee',
        province: 'ON',
        location: {
            lat: 51.291,
            lng: -80.607
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.178,
                    gas: 0.705,
                    oil: 0
                },
                highrise: {
                    electricity: 0.158,
                    gas: 0.711,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.175,
                    gas: 0.671,
                    oil: 0
                },
                highrise: {
                    electricity: 0.158,
                    gas: 0.696,
                    oil: 0
                }
            }
        }
    },
    'mount forest': {
        name: 'Mount Forest',
        province: 'ON',
        location: {
            lat: 43.983,
            lng: -80.75
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.22,
                    gas: 0.515,
                    oil: 0
                },
                highrise: {
                    electricity: 0.196,
                    gas: 0.529,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.215,
                    gas: 0.491,
                    oil: 0
                },
                highrise: {
                    electricity: 0.197,
                    gas: 0.517,
                    oil: 0
                }
            }
        }
    },
    'north battleford': {
        name: 'North Battleford',
        province: 'SK',
        location: {
            lat: 52.769,
            lng: -108.244
        },
        rate: {
            electricity: 0.101,
            gas: 0.183,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.203,
                    gas: 0.608,
                    oil: 0
                },
                highrise: {
                    electricity: 0.179,
                    gas: 0.628,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.198,
                    gas: 0.584,
                    oil: 0
                },
                highrise: {
                    electricity: 0.18,
                    gas: 0.613,
                    oil: 0
                }
            }
        }
    },
    'north bay': {
        name: 'North Bay-Garland',
        province: 'ON',
        location: {
            lat: 46.364,
            lng: -79.424
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.207,
                    gas: 0.568,
                    oil: 0
                },
                highrise: {
                    electricity: 0.182,
                    gas: 0.58,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.203,
                    gas: 0.54,
                    oil: 0
                },
                highrise: {
                    electricity: 0.182,
                    gas: 0.567,
                    oil: 0
                }
            }
        }
    },
    'ottawa': {
        name: 'Ottawa',
        province: 'ON',
        location: {
            lat: 45.317,
            lng: -75.667
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.23,
                    gas: 0.541,
                    oil: 0
                },
                highrise: {
                    electricity: 0.203,
                    gas: 0.55,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.224,
                    gas: 0.514,
                    oil: 0
                },
                highrise: {
                    electricity: 0.204,
                    gas: 0.536,
                    oil: 0
                }
            }
        }
    },
    'port hardy': {
        name: 'Port Hardy',
        province: 'BC',
        location: {
            lat: 50.681,
            lng: -127.367
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.198,
                    gas: 0.454,
                    oil: 0
                },
                highrise: {
                    electricity: 0.174,
                    gas: 0.441,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.201,
                    gas: 0.319,
                    oil: 0
                },
                highrise: {
                    electricity: 0.176,
                    gas: 0.433,
                    oil: 0
                }
            }
        }
    },
    'prince george': {
        name: 'Prince George',
        province: 'BC',
        location: {
            lat: 53.891,
            lng: -122.679
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.207,
                    gas: 0.55,
                    oil: 0
                },
                highrise: {
                    electricity: 0.177,
                    gas: 0.588,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.207,
                    gas: 0.392,
                    oil: 0
                },
                highrise: {
                    electricity: 0.178,
                    gas: 0.573,
                    oil: 0
                }
            }
        }
    },
    'lesage': {
        name: 'Lesage',
        province: 'QC',
        location: {
            lat: 46.791,
            lng: -71.383
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.671,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.625,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.643,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.615,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'rivière-du-loup': {
        name: 'Riviere-du-Loup',
        province: 'QC',
        location: {
            lat: 47.806,
            lng: -69.549
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.677,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.63,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.649,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.621,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'roberval': {
        name: 'Roberval',
        province: 'QC',
        location: {
            lat: 48.52,
            lng: -72.266
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.697,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.65,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.667,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.639,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'sableisland': {
        name: 'Sable Island',
        province: 'NS',
        location: {
            lat: 43.932,
            lng: -60.009
        },
        rate: {
            electricity: 0.116,
            gas: 0.636,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.204,
                    gas: 0.479,
                    oil: 0
                },
                highrise: {
                    electricity: 0.176,
                    gas: 0.508,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.197,
                    gas: 0.463,
                    oil: 0
                },
                highrise: {
                    electricity: 0.177,
                    gas: 0.497,
                    oil: 0
                }
            }
        }
    },
    'saguenay': {
        name: 'Saguenay-Bagotville',
        province: 'QC',
        location: {
            lat: 48.333,
            lng: -71
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.702,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.656,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.673,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.644,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'saint john': {
        name: 'Saint John',
        province: 'NB',
        location: {
            lat: 45.316,
            lng: -65.89
        },
        rate: {
            electricity: 0.104,
            gas: 0.325,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.207,
                    gas: 0.542,
                    oil: 0
                },
                highrise: {
                    electricity: 0.178,
                    gas: 0.557,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.202,
                    gas: 0.516,
                    oil: 0
                },
                highrise: {
                    electricity: 0.179,
                    gas: 0.545,
                    oil: 0
                }
            }
        }
    },
    'saskatoon': {
        name: 'Saskatoon',
        province: 'SK',
        location: {
            lat: 52.167,
            lng: -106.717
        },
        rate: {
            electricity: 0.101,
            gas: 0.183,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.21,
                    gas: 0.619,
                    oil: 0
                },
                highrise: {
                    electricity: 0.185,
                    gas: 0.639,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.205,
                    gas: 0.594,
                    oil: 0
                },
                highrise: {
                    electricity: 0.186,
                    gas: 0.623,
                    oil: 0
                }
            }
        }
    },
    'sault ste. marie': {
        name: 'Sault Ste Marie',
        province: 'ON',
        location: {
            lat: 46.485,
            lng: -84.51
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.212,
                    gas: 0.555,
                    oil: 0
                },
                highrise: {
                    electricity: 0.185,
                    gas: 0.566,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.207,
                    gas: 0.528,
                    oil: 0
                },
                highrise: {
                    electricity: 0.186,
                    gas: 0.553,
                    oil: 0
                }
            }
        }
    },
    'schefferville': {
        name: 'Schefferville',
        province: 'QC',
        location: {
            lat: 54.805,
            lng: -66.805
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.767,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.722,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.607,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.714,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'sept-iles': {
        name: 'Sept-Iles',
        province: 'QC',
        location: {
            lat: 50.223,
            lng: -66.266
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.69,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.644,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.531,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.635,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'smithers': {
        name: 'Smithers',
        province: 'BC',
        location: {
            lat: 54.825,
            lng: -127.183
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.197,
                    gas: 0.54,
                    oil: 0
                },
                highrise: {
                    electricity: 0.174,
                    gas: 0.578,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.201,
                    gas: 0.377,
                    oil: 0
                },
                highrise: {
                    electricity: 0.176,
                    gas: 0.566,
                    oil: 0
                }
            }
        }
    },
    "st. john's": {
        name: 'St Johns',
        province: 'NL',
        location: {
            lat: 47.619,
            lng: -52.752
        },
        rate: {
            electricity: 0.112,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.635,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.6,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.611,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.589,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'stephenville': {
        name: 'Stephenville',
        province: 'NL',
        location: {
            lat: 48.541,
            lng: -58.55
        },
        rate: {
            electricity: 0.112,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.638,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.606,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.615,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.596,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'summerland': {
        name: 'Summerland',
        province: 'BC',
        location: {
            lat: 49.563,
            lng: -119.649
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.243,
                    gas: 0.437,
                    oil: 0
                },
                highrise: {
                    electricity: 0.212,
                    gas: 0.461,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.232,
                    gas: 0.423,
                    oil: 0
                },
                highrise: {
                    electricity: 0.213,
                    gas: 0.452,
                    oil: 0
                }
            }
        }
    },
    'the pas': {
        name: 'The Pas',
        province: 'MB',
        location: {
            lat: 53.967,
            lng: -101.1
        },
        rate: {
            electricity: 0.058,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.748,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.697,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.717,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.685,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'timmins': {
        name: 'Timmins',
        province: 'ON',
        location: {
            lat: 48.571,
            lng: -81.377
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.194,
                    gas: 0.637,
                    oil: 0
                },
                highrise: {
                    electricity: 0.17,
                    gas: 0.644,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.19,
                    gas: 0.605,
                    oil: 0
                },
                highrise: {
                    electricity: 0.171,
                    gas: 0.629,
                    oil: 0
                }
            }
        }
    },
    'toronto': {
        name: 'Toronto',
        province: 'ON',
        location: {
            lat: 43.677,
            lng: -79.631
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.242,
                    gas: 0.474,
                    oil: 0
                },
                highrise: {
                    electricity: 0.216,
                    gas: 0.496,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.233,
                    gas: 0.456,
                    oil: 0
                },
                highrise: {
                    electricity: 0.216,
                    gas: 0.484,
                    oil: 0
                }
            }
        }
    },
    "val-d'or": {
        name: 'Val-d-Or',
        province: 'QC',
        location: {
            lat: 48.057,
            lng: -77.787
        },
        rate: {
            electricity: 0.074,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.692,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.647,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.664,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.637,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'vancouver': {
        name: 'Vancouver',
        province: 'BC',
        location: {
            lat: 49.195,
            lng: -123.184
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.227,
                    gas: 0.412,
                    oil: 0
                },
                highrise: {
                    electricity: 0.194,
                    gas: 0.438,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.215,
                    gas: 0.402,
                    oil: 0
                },
                highrise: {
                    electricity: 0.194,
                    gas: 0.428,
                    oil: 0
                }
            }
        }
    },
    'victoria': {
        name: 'Victoria',
        province: 'BC',
        location: {
            lat: 48.647,
            lng: -123.426
        },
        rate: {
            electricity: 0.079,
            gas: 0.452,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.223,
                    gas: 0.414,
                    oil: 0
                },
                highrise: {
                    electricity: 0.19,
                    gas: 0.441,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.22,
                    gas: 0.301,
                    oil: 0
                },
                highrise: {
                    electricity: 0.196,
                    gas: 0.392,
                    oil: 0
                }
            }
        }
    },
    'whitehorse': {
        name: 'Whitehorse',
        province: 'YT',
        location: {
            lat: 60.709,
            lng: -135.069
        },
        rate: {
            electricity: 0.192,
            gas: 0,
            oil: 0.75
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.179,
                    gas: 0,
                    oil: 0.599
                },
                highrise: {
                    electricity: 0.159,
                    gas: 0,
                    oil: 0.624
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.185,
                    gas: 0,
                    oil: 0.418
                },
                highrise: {
                    electricity: 0.16,
                    gas: 0,
                    oil: 0.608
                }
            }
        }
    },
    'windsor': {
        name: 'Windsor',
        province: 'ON',
        location: {
            lat: 42.276,
            lng: -82.956
        },
        rate: {
            electricity: 0.127,
            gas: 0.246,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.254,
                    gas: 0.44,
                    oil: 0
                },
                highrise: {
                    electricity: 0.228,
                    gas: 0.458,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.244,
                    gas: 0.424,
                    oil: 0
                },
                highrise: {
                    electricity: 0.228,
                    gas: 0.448,
                    oil: 0
                }
            }
        }
    },
    'winnipeg': {
        name: 'Winnipeg',
        province: 'MB',
        location: {
            lat: 49.917,
            lng: -97.233
        },
        rate: {
            electricity: 0.058,
            gas: 0,
            oil: 0
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.735,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.681,
                    gas: 0,
                    oil: 0
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.703,
                    gas: 0,
                    oil: 0
                },
                highrise: {
                    electricity: 0.668,
                    gas: 0,
                    oil: 0
                }
            }
        }
    },
    'yellowknife': {
        name: 'Yellowknife',
        province: 'NT',
        location: {
            lat: 62.463,
            lng: -114.44
        },
        rate: {
            electricity: 0.465,
            gas: 0,
            oil: 0.78
        },
        EUI: {
            NECB2015: {
                midrise: {
                    electricity: 0.184,
                    gas: 0,
                    oil: 0.694
                },
                highrise: {
                    electricity: 0.167,
                    gas: 0,
                    oil: 0.705
                }
            },
            NECB2017: {
                midrise: {
                    electricity: 0.192,
                    gas: 0,
                    oil: 0.522
                },
                highrise: {
                    electricity: 0.167,
                    gas: 0,
                    oil: 0.692
                }
            }
        }
    }
};

export default cities;