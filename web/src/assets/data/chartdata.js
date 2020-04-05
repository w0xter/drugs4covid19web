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
    text1:'Queremos crear un catálogo de medicamentos usados para combatir el COVID-19, según la literatura científica, mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana',
    videoLink:'https://www.youtube.com/embed/1FnGkJtQJDY'
  },
  problems:{
    title0:'Problemas',
    title1:'Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando',
    text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus libero turpis, ut hendrerit erat pulvinar a. Vivamus lobortis varius lectus dapibus sollicitudin. Nulla purus est, accumsan ac libero a, vulputate laoreet mi. Quisque malesuada hendrerit turpis ut ornare. Donec vel ligula et quam mollis aliquam. Mauris congue et lacus eget consequat. Morbi arcu magna, vulputate ut tellus in, fringilla gravida erat. Duis consectetur a urna sit amet accumsan. Nulla dignissim justo sed ultrices gravida. Proin porttitor, metus eu fermentum tempus, orci arcu porta lectus, vitae rhoncus leo lorem in nisl.',
    title2:'¿Cómo interactúan dos medicamentos que se están utilizando con pacientes?',
    text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus libero turpis, ut hendrerit erat pulvinar a. Vivamus lobortis varius lectus dapibus sollicitudin. Nulla purus est, accumsan ac libero a, vulputate laoreet mi. Quisque malesuada hendrerit turpis ut ornare. Donec vel ligula et quam mollis aliquam. Mauris congue et lacus eget consequat. Morbi arcu magna, vulputate ut tellus in, fringilla gravida erat. Duis consectetur a urna sit amet accumsan. Nulla dignissim justo sed ultrices gravida. Proin porttitor, metus eu fermentum tempus, orci arcu porta lectus, vitae rhoncus leo lorem in nisl.'
  }, 
  resources:{
    title0:'La solución se convierte en un nuevo problema',
    title1:'CORD-19',
    text1:'La gran riqueza de documentación científica supone al mismo tiempo un gran problema para su exploración. Si una persona desea conocer la aplicación o uso de un medicamento en el tratamiento del COVID-19, o de predecesores similares, o identificar las relaciones entre medicamentos descritos en un protocolo de actuación, debe navegar por este gran corpus de documentación donde los medicamentos aparecen mencionados con distintos nombres (nombre comercial, principio activo, grupo terapeútico), y en ocasiones la mención de un medicamento informa de su posible utilización y en otros casos puede tratarse de una frase sin relevancia para este objetivo.',
    graphtitle1:'La nomenclatura de los medicamentos varía según el contexto.',
    title2:'Algunos datos:',
    graphtitle2:'Diferentes Idiomas.',
    graphtitle3:'Muchas Fuentes entre las que consultar.',
    graphtitle4:'Distintos Formatos.'
  },
  approach:{
    title0:'Nuestro Enfoque'
  }
}
export default {bar, pie, line, radar,donut, bubble, graph, graphConfig, approach, spanish}