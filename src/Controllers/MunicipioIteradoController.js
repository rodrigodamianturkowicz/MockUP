//version 2
const MunicipioIteradoController = {
    obtenerMunicipio: (req, res) => {
      const { id, nombre } = req.query;
  
      if (id === '1' || nombre?.toLowerCase() === 'berazategui') {
        res.json({
          cantidad_de_opciones: 4,
          textos: 2,
          data: {
            "0": { id: "2", nombre: "Espacio Ciudadano", tipo: "carpeta" },
            "1": { id: "3", nombre: "Espacio Público", tipo: "carpeta" },
            "2": { id: "4", nombre: "Cultura y Turismo", tipo: "carpeta" },
            "3": { id: "5", nombre: "Emergencias", tipo: "carpeta" }
          },
          headerText: "Estamos en el municipio de Berazategui.",
          footerText: "Te puedo ayudar con estos temas"
        });
      } else if (id === '2' || nombre?.toLowerCase() === 'espacio ciudadano') {
        res.json({
          cantidad_de_opciones: 5,
          textos: 2,
          data: {
            "0": { id: "6", nombre: "Tasas Municipales", tipo: "carpeta" },
            "1": { id: "7", nombre: "Tránsito y Licencia de Conducir", tipo: "carpeta" },
            "2": { id: "8", nombre: "Salud", tipo: "carpeta" },
            "3": { id: "9", nombre: "Educación", tipo: "carpeta" },
            "4": { id: "10", nombre: "Obras Particulares", tipo: "carpeta" }
          },
          headerText: "Desde la sección de Espacio Ciudadano vas a poder pagar tus tasas, tramitar tu licencia de conducir e informarte sobre los puntos importantes del municipio",
          footerText: "Elegí una opción y te brindo más información"
        });
      } else if (id === '7' || nombre?.toLowerCase() === 'transito y licencia de conducir') {
        res.json({
          cantidad_de_opciones: 5,
          textos: 2,
          data: {
            "0": { id: "11", nombre: "Licencia de Conducir", tipo: "carpeta" },
            "1": { id: "12", nombre: "Sacar Turno", tipo: "carpeta" },
            "2": { id: "13", nombre: "Infracciones", tipo: "carpeta" },
            "3": { id: "14", nombre: "Estacionamiento Medido", tipo: "carpeta" },
            "4": { id: "15", nombre: "Preguntas Frecuentes", tipo: "carpeta" }
          },
          headerText: "Que ninguna duda te frene",
          footerText: "Acá te dejo varias opciones para darle luz verde a tus consultas"
        });
      } else if (id === '11' || nombre?.toLowerCase() === 'licencia de conducir') {
        res.json({
          cantidad_de_opciones: 4,
          textos: 2,
          data: {
            "0": { id: "16", nombre: "Licencia Particular", tipo: "carpeta" },
            "1": { id: "17", nombre: "Licencia Profesional", tipo: "carpeta" },
            "2": { id: "18", nombre: "Costos", tipo: "carpeta" },
            "3": { id: "19", nombre: "Centros Emisores Municipales", tipo: "carpeta" }
          },
          headerText: "¿Querés conocer los requisitos del trámite? Presioná el tipo de licencia que querés sacar y te llevo a nuestra web",
          footerText: "También te puedo ayudar con estos temas"
        });
      } else if (id === '16' || nombre?.toLowerCase() === 'licencia particular') {
        res.json({
          cantidad_de_opciones: 1,
          textos: 0,
          data: {
            "0": { id: "20", nombre: "https://berazategui.gob.ar/?s=licencia", tipo: "carpeta" }
          },
          headerText: "",
          footerText: ""
        });
      } else {
        res.status(404).json({ message: "No conozco esa opción" });
      }
    }
  };
  
  module.exports = MunicipioIteradoController;

// version 1
// const MunicipioIteradoController = {
//     obtenerMunicipio: (req, res) => {
//       const { id, nombre } = req.query;
  
//       if (id && isNaN(Number(id))) {
//         return res.status(400).json({ error: 'El parámetro "id" debe ser un número.' });
//       }
  
//       if (nombre && typeof nombre !== 'string') {
//         return res.status(400).json({ error: 'El parámetro "nombre" debe ser una cadena de texto.' });
//       }
  
//       const respuestas = {
//         "1": {
//           "cantidad_de_opciones": 4,
//           "textos": 2,
//           "data": {
//             "0": { "id": "2", "nombre": "Espacio Ciudadano", "tipo": "carpeta" },
//             "1": { "id": "3", "nombre": "Espacio Público", "tipo": "carpeta" },
//             "2": { "id": "4", "nombre": "Cultura y Turismo", "tipo": "carpeta" },
//             "3": { "id": "5", "nombre": "Emergencias", "tipo": "carpeta" }
//           },
//           "headerText": "Estamos en el municipio de Berazategui.",
//           "footerText": "Te puedo ayudar con estos temas"
//         },
//         "2": {
//           "cantidad_de_opciones": 5,
//           "textos": 2,
//           "data": {
//             "0": { "id": "6", "nombre": "Tasas Municipales", "tipo": "carpeta" },
//             "1": { "id": "7", "nombre": "Tránsito y Licencia de Conducir", "tipo": "carpeta" },
//             "2": { "id": "8", "nombre": "Salud", "tipo": "carpeta" },
//             "3": { "id": "9", "nombre": "Educación", "tipo": "carpeta" },
//             "4": { "id": "10", "nombre": "Obras Particulares", "tipo": "carpeta" }
//           },
//           "headerText": "Desde la sección de Espacio Ciudadano vas a poder pagar tus tasas, tramitar tu licencia de conducir e informarte sobre los puntos importantes del municipio",
//           "footerText": "Elegí una opción y te brindo más información"
//         },
//         "7": {
//           "cantidad_de_opciones": 5,
//           "textos": 2,
//           "data": {
//             "0": { "id": "11", "nombre": "Licencia de Conducir", "tipo": "carpeta" },
//             "1": { "id": "12", "nombre": "Sacar Turno", "tipo": "carpeta" },
//             "2": { "id": "13", "nombre": "Infracciones", "tipo": "carpeta" },
//             "3": { "id": "14", "nombre": "Estacionamiento Medido", "tipo": "carpeta" },
//             "4": { "id": "15", "nombre": "Preguntas Frecuentes", "tipo": "carpeta" }
//           },
//           "headerText": "Que ninguna duda te frene",
//           "footerText": "Acá te dejo varias opciones para darle luz verde a tus consultas"
//         },
//         "11": {
//           "cantidad_de_opciones": 4,
//           "textos": 2,
//           "data": {
//             "0": { "id": "16", "nombre": "Licencia Particular", "tipo": "carpeta" },
//             "1": { "id": "17", "nombre": "Licencia Profesional", "tipo": "carpeta" },
//             "2": { "id": "18", "nombre": "Costos", "tipo": "carpeta" },
//             "3": { "id": "19", "nombre": "Centros Emisores Municipales", "tipo": "carpeta" }
//           },
//           "headerText": "¿Querés conocer los requisitos del trámite? Presioná el tipo de licencia que querés sacar y te llevo a nuestra web",
//           "footerText": "También te puedo ayudar con estos temas"
//         }
//       };
  
//       const nombreAMapeo = {
//         "berazategui": "1",
//         "espacio ciudadano": "2",
//         "tránsito y licencia de conducir": "7",
//         "licencia de conducir": "11"
//       };
  
//       const idABuscar = id || nombreAMapeo[nombre?.toLowerCase()];
  
//       if (idABuscar && respuestas[idABuscar]) {
//         return res.json(respuestas[idABuscar]);
//       } else {
//         return res.status(404).json({ error: 'Municipio o sección no encontrada.' });
//       }
//     }
//   };
  
//   module.exports = MunicipioIteradoController;