exports.getMunicipio = (req, res) => {
    
    const { municipio } = req.query;
    if (municipio && municipio.toLowerCase() === 'berazategui') {
        res.json({
            "Municipio": "Berazategui",
            "MenuPrincipal": {
              "Texto1": "estamos en el municipio de Berazategui. Te puedo ayudar con estos temas",
              "Opciones": {
                "Opcion1": {
                  "EspacioCiudadano": {
                    "Boton1": "Espacio Ciudadano",
                    "Texto1": "Desde la seccion de \"Espacio Ciudadano\" vas a poder pagar tus tasas, tramitar tu licencia de conducir e informarte sobre los puntos importantes del municipio",
                    "Texto2": "Elegi una opcion y te brindo mas informacion",
                    "Opciones": {
                      "Opcion1": {
                        "TasasMunicipales": {
                          "Boton1": "Espacio Ciudadano"
                        }
                      },
                      "Opcion2": {
                        "TransitoyLicenciadeConducir": {
                          "Boton1": "Transito y Licencia de Conducir",
                          "Texto1": "¡Que ninguna duda te frene!",
                          "Texto2": "Aca te dejo varias opciones para darle luz verde a tus consultas",
                          "Opciones": {
                            "Opcion1": {
                              "LicenciaDeConducir": {
                                "Boton1": "Licencia de Conducir",
                                "Texto1": "¿Queres conocer los requisitos del tramite?",
                                "Texto2": "Tambien te puedo ayudar con estos temas",
                                "Opciones": {
                                  "Opcion1": {
                                    "LicenciaParticular": {
                                      "Boton1": "Licencia Particular",
                                      //"Link": "https://berazategui.gob.ar/#"
                                      "Link": "<a href=\"https://berazategui.gob.ar/#\">https://berazategui.gob.ar/#</a>"
                                    }
                                  },
                                  "Opcion2": {
                                    "LicenciaProfesional": {
                                      "Boton1": "Licencia Profesional",
                                      "Link": "https://berazategui.gob.ar/#"
                                    }
                                  },
                                  "Opcion3": {
                                    "Costos": {
                                      "Boton1": "Costos",
                                      "Link": "https://berazategui.gob.ar/#"
                                    }
                                  },
                                  "Opcion4": {
                                    "CentrosEmisoresMunicipales": {
                                      "Boton1": "Centros Emisores Municipales",
                                      "Link": "https://berazategui.gob.ar/#"
                                    }
                                  }
                                }
                              }
                            },
                            "Opcion2": {
                              "SacarTurno" :{
                                "Boton1": "Sacar Turno"
                              }
                            }, 
                            "Opcion3": {
                              "Infracciones": {
                                "Boton1": "Infracciones"
                              }
                            },
                            "Opcion4": {
                              "EstacionamientoMedido": {
                                "Boton1": "Estacionamiento Medido"
                              }
                            },
                            "Opcion5": {
                              "PreguntasFrecuentes": {
                                "Boton1": "Preguntas Frecuentes"
                              }
                            }
                          }
                        }
                      },
                      "Opcion3": {
                        "Salud": {
                          "Boton1": "Salud"
                        }
                      },
                      "Opcion4": {
                        "Educacion": {
                          "Boton1": "Educacion"
                        }
                      },
                      "Opcion5": {
                        "ObrasParticulares": {
                          "Boton1": "Obras Particulares"
                        }
                      }
                    }
                  }
                },
                "Opcion2": "Espacio Publico",
                "Opcion3": "Cultura y Turismo",
                "Opcion4": "Emergencias"
              }
            }
          });
    } else {
        res.status(404).json({ error: 'Municipio no encontrado' });
    }
}