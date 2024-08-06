exports.getMunicipio = (req, res) => {
    
    const { municipio } = req.query;
    if (municipio && municipio.toLowerCase() === 'berazategui') {
        res.json({
            "Municipio": "Berazategui",
            "MenuPrincipal": {
                "Texto1": "estamos en el municipio de Berazategui. Te puedo ayudar con estos temas",
                "Opciones": {
                    "Opcion1": {
                        "Espacio Ciudadano": {
                            "Texto1": "Desde la seccion de \"Espacio Ciudadano\" vas a poder pagar tus tasas, tramitar tu licencia de conducir e informarte sobre los puntos importantes del municipio",
                            "Texto2": "Elegi una opcion y te brindo mas informacion",
                            "Opciones": {
                                "Opcion1": {
                                    "Tasas Municipales": {}
                                },
                                "Opcion2": {
                                    "Transito y Licencia de Conducir": {
                                        "Texto1": "¡Que ninguna duda te frene!",
                                        "Texto2": "Aca te dejo varias opciones para darle luz verde a tus consultas",
                                        "Opciones": {
                                            "Opcion1": {
                                                "Licencia de Conducir": {
                                                    "Texto1": "¿Queres conocer los requisitos del tramite?",
                                                    "Texto2": "Tambien te puedo ayudar con estos temas",
                                                    "Opciones": {
                                                        "Opcion1": {
                                                            "Licencia Particular": {
                                                                "Link": "https://berazategui.gob.ar/#"
                                                            }
                                                        },
                                                        "Opcion2": {
                                                            "Licencia Profesional": {
                                                                "Link": "https://berazategui.gob.ar/#"
                                                            }
                                                        },
                                                        "Opcion3": {
                                                            "Costos": {
                                                                "Link": "https://berazategui.gob.ar/#"
                                                            }
                                                        },
                                                        "Opcion4": {
                                                            "Centros Emisores Municipales": {
                                                                "Link": "https://berazategui.gob.ar/#"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "Opcion2": "Sacar Turno",
                                            "Opcion3": "Infracciones",
                                            "Opcion4": "Estacionamiento Medido",
                                            "Opcion5": "Preguntas Frecuentes"
                                        }
                                    }
                                },
                                "Opcion3": "Salud",
                                "Opcion4": "Educacion",
                                "Opcion5": "Obras Particulares"
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