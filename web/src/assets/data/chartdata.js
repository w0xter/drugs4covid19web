 const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Suministros de Medicamentos',
        backgroundColor: '#a2d4e2b0',
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
        backgroundColor: '#a2d4e2b0',
        borderColor: '#60a5ff',
        borderWidth: 1,
        hoverBackgroundColor: '#60a5ff',
        hoverBorderColor: '#60a5ff',
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
        backgroundColor: '#a2d4e2b0',
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
        source:'approach/collecting.new.svg'
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
  source:'approach/report.svg'
},
]
export default {bar, pie, line, radar,donut, bubble, graph, graphConfig, approach}