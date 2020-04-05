 const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Suministros de Medicamentos',
        backgroundColor: '#0A7AA360',
        borderColor: '#60a5ff',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: '#60a5ff',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
 const bar = {
    labels: ['Artículos', 'Frases','Raw Data', ''],
    datasets: [
      {
        label: 'Fuentes de Datos',
        backgroundColor: '#0A7AA360',
        borderColor: '#0A7AA3',
        borderWidth: 1,
        hoverBackgroundColor: '#0A7AA3',
        hoverBorderColor: '#0A7AA3',
        data: [24928, 52980,30000,0]
      }
    ]
  }; const radar = {
    labels: ['Efecto1', 'Efecto2', 'Efecto3', 'Efecto4', 'Efecto5', 'Efecto6', 'Efecto7'],
    datasets: [
      {
        label: 'Medicamento 1',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'Medicamento 2',
        backgroundColor: '#0A7AA360',
        borderColor: '#60a5ff',
        pointBackgroundColor: '#60a5ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#60a5ff',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  }; const pie = {
    labels: [
        'Inglés',
        'Italiano',
        'Español'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
}; const donut = {
    labels: [
        'RDF',
        'PDF',
        'JSON',
        'CSV', 
        'TXT'
    ],
    datasets: [{
        data: [150,210,300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#acbea3',
        '#a2666f'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#acbea3',
        '#a2666f'
        ]
    }]
}; 
const bubble = {
labels: ['January'],
datasets: [

  {
    label: 'Nombre comercial: KALETRA',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#ff003794',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#fa541c',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fa541c',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:15,y:50, r:35},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Principio activo: LOPINAVIR',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(244, 77, 59, 0.6)',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:19,y:75, r:35},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Principio activo: RITONAVIR',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(147, 12, 196, 0.5)',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:25,y:90, r:35},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Grupo terapéutico: J05AR10',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#008f7ab3',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:30,y:10, r:35,},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },

]
};
const graph = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};
const graphConfig = {
    node: {
        color: "lightgreen",
        size: 500,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};
const approach = [
    {
        step:1,
        title:'Procesar', 
        content:'Procesar e indexar el corpus de artículos, y todas las frases.',
        source:'approach/file_searching.svg'
    }, 
    {
      step:2,
      title:'Clasificar', 
      content:'Anotar cada artículo y cada frase con la información procesada.',
      source:'approach/annotation.svg'
  },
  {
    step:3,
    title:'Validar', 
    content:'Revisar estas anotaciones con la ayuda de científicos ciudadanos.',
    source:'approach/medical_research.svg'
},
{
  step:4,
  title:'Publicar', 
  content:'Publicar un grafo de conocimientos con los datos que sean correctos.',
  source:'approach/kg.svg'
},
]
const spanish = {
  info:{
    title1:'DRUGS4COVID',
    text1:'Queremos crear un catálogo de medicamentos usados para combatir la COVID-19, según la literatura científica, mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana.',
    videoLink:'https://www.youtube.com/embed/1FnGkJtQJDY'
  },
  problems:{
    title0:'Problemas',
    title1:'Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando',
    text1:'Con el aumento del número de pacientes afectados por la COVID-19 e ingresados en las Unidades de Cuidados Intensivos en todo el mundo, se ha incrementado la demanda de los medicamentos necesarios para su tratamiento. Los laboratorios han aumentado la producción, y desde la propia Agencia del Medicamento recuerdan que un mismo principio activo puede encontrar en más de un nombre comercial.<br>Durante años, se ha generado una amplia cantidad de literatura científica una gran ayuda y, al mismo tiempo, un problema para su exploración.',
  }, 
  resources:{
    title0:'La solución se convierte en un nuevo problema',
    title1:'CORD-19',
    text1:'Esta riqueza de documentación científica supone al mismo tiempo el problema. Si una persona desea conocer la aplicación o uso de un medicamento en el tratamiento de la COVID-19 o identificar las relaciones entre medicamentos descritos en un protocolo de actuación, debe navegar por este gran corpus de documentación donde los medicamentos aparecen mencionados con distintos nombres (principio activo, nombre comercial, grupo terapeútico…). En ocasiones la mención de un medicamento informa de su posible utilización y en otros casos puede tratarse de una frase sin relevancia para este objetivo.',
    graphtitle1:'La nomenclatura de los medicamentos varía según el contexto.',
    title2:'Algunos datos:',
    graphtitle2:'Diferentes Idiomas.',
    graphtitle3:'Muchas Fuentes entre las que consultar.',
    graphtitle4:'Distintos Formatos.'
  },
  approach:{
    title0:'Nuestro Enfoque'
  },
  team:{
    title0:'Quienes Somos'
  }
}
const languages= [
  {
    info:{
      title1:'DRUGS4COVID',
      text1:'Queremos crear un catálogo de medicamentos usados para combatir la COVID-19, según la literatura científica, mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana.',
      videoLink:'https://www.youtube.com/embed/1FnGkJtQJDY'
    },
    problems:{
      title0:'Problemas',
      title1:'Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando',
      text1:'Con el aumento del número de pacientes afectados por la COVID-19 e ingresados en las Unidades de Cuidados Intensivos en todo el mundo, se ha incrementado la demanda de los medicamentos necesarios para su tratamiento. Los laboratorios han aumentado la producción, y desde la propia Agencia del Medicamento recuerdan que un mismo principio activo puede encontrar en más de un nombre comercial.<br>Durante años, se ha generado una amplia cantidad de literatura científica una gran ayuda y, al mismo tiempo, un problema para su exploración.',
    }, 
    resources:{
      title0:'La solución se convierte en un nuevo problema',
      title1:'CORD-19',
      text1:'Esta riqueza de documentación científica supone al mismo tiempo el problema. Si una persona desea conocer la aplicación o uso de un medicamento en el tratamiento de la COVID-19 o identificar las relaciones entre medicamentos descritos en un protocolo de actuación, debe navegar por este gran corpus de documentación donde los medicamentos aparecen mencionados con distintos nombres (principio activo, nombre comercial, grupo terapeútico…). En ocasiones la mención de un medicamento informa de su posible utilización y en otros casos puede tratarse de una frase sin relevancia para este objetivo.',
      graphtitle1:'La nomenclatura de los medicamentos varía según el contexto.',
      title2:'Algunos datos:',
      graphtitle2:'Diferentes Idiomas.',
      graphtitle3:'Muchas Fuentes entre las que consultar.',
      graphtitle4:'Distintos Formatos.'
    },
    approach:{
      title0:'Nuestro Enfoque'
    },
    team:{
      title0:'¿Quienes Somos?', 
      title1:'El Equipo', 
      title2:'Con la ayuda de:',
      logo1:'logos/oeg.jpg', 
      logo2:'logos/upm.png',
      logo3:'logos/FacInformatica.jpg'
    }
  },
  {
    info:{
      title1:'DRUGS4COVID',
      text1:'We want to create a catalog of medicines used to combat COVID-19, according to scientific literature, through the use of Artificial Intelligence and Citizen Science techniques.',
      videoLink:'https://www.youtube.com/embed/1FnGkJtQJDY'
    },
    problems:{
      title0:'Problems',
      title1:'Drugs in hospital pharmacy services are running low',
      text1:'With the increase in the number of patients affected by COVID-19 and admitted to Intensive Care Units throughout the world, the demand for the medicines necessary for their treatment has increased. Laboratories have increased production, and the Drug Agency itself recalls that the same active ingredient can be found in more than one trade name.<br>For years, a large amount of scientific literature has been generated, a great help and a problem for its exploration too.',
    }, 
    resources:{
      title0:'The solution becomes the problem',
      title1:'CORD-19',
      text1:'This scientific documentation is at the same time the problem. If a person wants to know the application or use of a drug in the treatment of COVID-19 or identify the relationships between drugs described in a protocol of action, they should navigate this large body of documentation where the drugs are mentioned with different names (active principle, trade name, therapeutic group... ). Sometimes the mention of a medicine informs about its possible use and in other cases it may be a phrase without relevance to this objective.',
      graphtitle1:'La nomenclatura de los medicamentos varía según el contexto.',
      title2:'Some Data:',
      graphtitle2:'Differente languages',
      graphtitle3:'Many sources to consult',
      graphtitle4:'Different formats'
    },
    approach:{
      title0:'Our Approach'
    },
    team:{
      title0:'Who Are We?', 
      title1:'The Team',
      title2:'With the suppport of:',
      logo1:'logos/oeg.jpg', 
      logo2:'logos/upm.png',
      logo3:'logos/FacInformatica.jpg'
    }
  }
]
const teamData = [
  {
    "source":"teamImages/Fotos/OscarCorcho.jpeg",
    "name": "Oscar Corcho",
    "role": "Promoter",
    "group": "",
    "Institución": "UPM",
    "twitter": "ocorcho",
    "github": "ocorcho",
    "linkedin": "https://www.linkedin.com/in/ocorcho/",
    "email": "ocorcho@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/asuncion.jpg",
    "name": "Asun Gómez-Pérez",
    "role": "Promoter",
    "group": "",
    "Institución": "UPM",
    "twitter": "asungomezperez",
    "github": "",
    "linkedin": "http://www.dia.fi.upm.es/es/asun",
    "email": "asun@fi.upm.es"
  },    
  {
    "source":"teamImages/Fotos/DavidChaves.jpg",
    "name": "David Chaves",
    "role": "Knowledge Engineer",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "dchaves",
    "github": "dachafra",
    "linkedin": "https://www.linkedin.com/in/david-chaves-fraga/",
    "email": "dchaves@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/CarlosBadenesOlmedo.png",
    "name": "Carlos Badenes-Olmedo",
    "role": "Product Owner",
    "group": "NLP",
    "Institución": "UPM",
    "twitter": "carbadol",
    "github": "cbadenes",
    "linkedin": "https://www.linkedin.com/in/cbadenes",
    "email": "cbadenes@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/luisPozo.png",
    "name": "Luis Pozo",
    "role": "Web Developer",
    "group": "Dev",
    "Institución": "UPM",
    "twitter": "LuispozoDev",
    "github": "w0xter",
    "linkedin": "https://www.linkedin.com/in/luis-pozo-472b6317a/",
    "email": "luis.pozo@upm.es"
  },
  {
    "source":"teamImages/Fotos/PatriciaMartínChozas.png",
    "name": "Patricia Martín-Chozas",
    "role": "Linguist",
    "group": "NLP",
    "Institución": "UPM",
    "twitter": "pmchozas",
    "github": "pmchozas",
    "linkedin": "https://www.linkedin.com/in/pmchozas/",
    "email": "pmchozas@fi.upm.es"
  },

  {
    "source":"teamImages/Fotos/MariaPoveda.jpg",
    "name": "María Poveda-Villalón",
    "role": "Ontologist",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "MariaPovedaV",
    "github": "mariapoveda",
    "linkedin": "https://www.linkedin.com/in/mpovedavillalon",
    "email": "mpoveda@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/AlbaFernandez.png",
    "name": "Alba Fernández-Izquierdo",
    "role": "Ontologist",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "albafizq",
    "github": "albaizq",
    "linkedin": "https://www.linkedin.com/in/albafernandezizquierdo/",
    "email": "albafernandez@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/AnaIglesiasMolina.jpg",
    "name": "Ana Iglesias-Molina",
    "role": "Knowledge Engineer",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "_aieme",
    "github": "anaigmo",
    "linkedin": "https://www.linkedin.com/in/ana-iglesias-molina/",
    "email": "ana.iglesiasm@upm.es"
  },

  {
    "source":"teamImages/Fotos/PaolaEspinozaArias.jpg",
    "name": "Paola Espinoza-Arias",
    "role": "Ontologist",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "mijaspao",
    "github": "paoespinozarias",
    "linkedin": "https://www.linkedin.com/in/paolaespinoza-arias/",
    "email": "pespinoza@fi.upm.es"
  },
  { "source":"teamImages/Fotos/PabloCallejaIbañez.jpg",
    "name": "Pablo Calleja Ibáñez",
    "role": "Computational Linguistic",
    "group": "NLP",
    "Institución": "UPM",
    "twitter": "SPabloCalleja",
    "github": "serpablo",
    "linkedin": "https://www.linkedin.com/in/pablo-calleja-ib%C3%A1%C3%B1ez-63799064/",
    "email": "pcalleja@fi.upm.es"
  },
  { "source":"teamImages/Fotos/VirginiadePablo.png",
    "name": "Virginia de Pablo",
    "role": "Comunicación",
    "group": "",
    "Institución": "UPM",
    "twitter": "v_depablo",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/vdepablo/",
    "email": "vdepablo@fi-upm.es"
  },
  { "source":"teamImages/Fotos/DanielBermejoSánchez.jpg",
    "name": "Daniel Bermejo Sánchez",
    "role": "Back End Programmer",
    "group": "Dev",
    "Institución": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/daniel-bermejo-sánchez-020712160",
    "email": "daniel.bermejos@alumnos.upm.es"
  },
  { "source":"teamImages/Fotos/ElviraAmador.JPG",
    "name": "Elvira Amador Domínguez",
    "role": "He hecho un poco de todo",
    "group": "NLP",
    "Institución": "UPM",
    "twitter": "elviamador",
    "github": "eamadord",
    "linkedin": "https://www.linkedin.com/in/elvira-amador-dom%C3%ADnguez-746607116/",
    "email": "eamador@fi.upm.es"
  },
  { "source":"teamImages/Fotos/EdnaRuckhaus.png",
    "name": "Edna Ruckhaus Magnus",
    "role": "Knowledge Graph exploitation",
    "group": "KG",
    "Institución": "UPM",
    "twitter": "eruckhaus",
    "github": "ednaru",
    "linkedin": "https://www.linkedin.com/in/eruckhaus/",
    "email": "eruckhaus@fi.upm.es"
  },
  { "source":"teamImages/Fotos/SocorroBernardos.png",
    "name": "Socorro Bernardos Galindo",
    "role": "Ayuda en ontología y consultas",
    "group": "",
    "Institución": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "",
    "email": ""
  },
  { "source":"teamImages/Fotos/EstebanGonzálezGuardia.jpeg",
    "name": "Esteban González Guardia",
    "role": "Frontend programmer",
    "group": "CS (Citizen Science)",
    "Institución": "UPM",
    "twitter": "eglezguardia",
    "github": "esgg",
    "linkedin": "",
    "email": "egonzalez@fi.upm.es"
  }
]
export default {bar, pie, line, radar,donut, bubble, graph, graphConfig, approach, spanish, teamData, languages}