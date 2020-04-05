 const bar = {
    labels: ['TRANGOREX', 'DOLQUINE', 'TRANKIMAZIN', 'TRANKIMAZIN RETARD', 'MAXALT MAX', 'PARACETAMOL CINFA EFG', 'ADOFEN', 'NITRODERM TTS', 'DOLOCATIL CODEINA', 'ELECOR', ''],

    datasets: [
      {
        label: 'Number of pharmacies without stock of a specific medicine from 2020-03-23 to 2020-03-29',
        backgroundColor: '#0A7AA360',
        borderColor: '#0A7AA3',
        borderWidth: 1,
        hoverBackgroundColor: '#0A7AA3',
        hoverBorderColor: '#0A7AA3',
        data: [3205, 2846, 2032, 2979, 1820, 1436, 1432, 1031, 1887, 1643, 0]
      }
    ]
  };
 const line = {
    labels: ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Number of Articles per year',
        backgroundColor: '#0A7AA360',
        borderColor: '#0A7AA3',
        borderWidth: 1,
        hoverBackgroundColor: '#0A7AA3',
        hoverBorderColor: '#0A7AA3',
        data: [6, 1, 4, 10, 6, 12, 17, 23, 25, 30, 29, 51, 39, 54, 57, 73, 88, 104, 116, 110, 115, 149, 142, 129, 122, 146, 107, 102, 106, 102, 116, 171, 154, 407, 905, 961, 1079, 1163, 1318, 1492, 1573, 1764, 1859, 2071, 2232, 2438, 2588, 2592, 2822, 2919, 2478]
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
            {x:15,y:75, r:55},
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
            {x:25,y:80, r:55},
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
            {x:22,y:40, r:45,},
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
        source:'approach/file_searching.svg', 
        md:"# MOTIVACIÓN\nFacilitar el procesamiento automático de las publicaciones científicas disponibles en el corpus CORD-19.\n# PROBLEMAS\nEl corpus se distribuye en varias colecciones de documentos comprimidas (formato GZ) y un archivo con metainformación (formato CSV).\n# HIPÓTESIS\nAlmacenar los artículos en repositorios orientados a documentos permitirá que puedan ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP.\n# METODOLOGÍA\n1. Descarga corpus CORD-19 (\npages.semanticscholar.org/coronavirus-research\n)\n1. Descarga metadatos en formato CSV\n2. Descarga artículos de la colección 'Commercial use subset' (16763 artículos en formato JSON)\n3. Descarga artículos de la colección 'Non-commercial use subset ' (4228 artículos en formato JSON)\n4. Descarga artículos de la colección 'Custom license subset ' (19171 artículos en formato JSON)\n5. Descarga artículos de la colección 'bioRxiv/medRxiv subset' (500 artículos en formato JSON)\n2. Creación índice en Solr para almacenar los artículos\n3. Desarrollo código Python para lectura de artículos y registro en índice en Solr\n4. Segmentación de artículos en frases\n5. Creación índice en Solr para almacenar los frases\n6. Desarrollo código Python para extracción de frases a partir del texto de los artículos y registro en índice en Solr\n7. Creación de visualizaciones estadísticas para la exploración de los artículos\n# RESULTADOS\n1. Repositorio de documentos: [librairy.linkeddata.es/data/#/covid/core-overview](http://librairy.linkeddata.es/data/#/covid/core-overview)\n2. Repositorio de frases: [librairy.linkeddata.es/data/#/covid-sentences/core-overview](http://librairy.linkeddata.es/data/#/covid-sentences/core-overview)\n3. Visualización Repositorio (código GIST 4f726911fd9908ffc3a46837b15d8011): [librairy.linkeddata.es/data/dashboard](https://librairy.linkeddata.es/data/dashboard)\n4. Exploración guiada por artículos relacionados a partir de su contenido y sus anotaciones: [librairy.github.io/covid19/explorer.html](https://librairy.github.io/covid19/explorer.html)\n5. Código Python indexado: [github.com/librairy/covid19/blob/master/parallel-index-articles.py](https://github.com/librairy/covid19/blob/master/parallel-index-articles.py)\n# CONCLUSIONES\n1. 33.244 artículos indexados\n2. 5.298.063 frases extraídas automáticamente"
    }, 
    {
      step:2,
      title:'Clasificar', 
      content:'Anotar cada artículo y cada frase con la información procesada.',
      source:'approach/annotation.svg', 
      md:'# MOTIVACIÓN\n Agrupar medicamentos relacionados en el tratamiento del COVID para poder utilizarlos en situaciones de desabastecimiento ([noticia prensa](https://elpais.com/sociedad/2020-03-31/las-uci-recurren-a-farmacos-en-desuso-ante-la-escasez-de-sedantes.html))\n # PROBLEMAS\n 1. Procesamiento masivo de Artículos científicos\n2. Identificación automática de medicamentos\n3. Identificación automática de síntomas\n4. Identificación automática de enfermedades\n5. Identificación automática de trastornos\n6. Descubrimiento de relaciones:\n1. medicamento-vs-síntoma\n2. medicamento-vs-enfermedad\n3. medicamento-vs-trastorno\n # HIPÓTESIS\n La caracterización de medicamentos mediante síntomas, enfermedades y trastornos extraídos automáticamente de la literatura científica permitirá agrupar aquellos que estén relacionados.\n # METODOLOGÍA\n 1. Creación servicio identificación medicamentos y códigos ATC: [librairy.github.io/bio-nlp](http://librairy.github.io/bio-nlp)\n2. Desarrollo y ejecución de un anotador de enfermedades y medicamentos basado en modelos de identificación de entidades (NER). Anotación a dos niveles de profundidad: frase y artículo\n3. Construcción de modelos de agrupamiento global y jerárquico a partir de las representaciones de los medicamentos obtenidas con las anotaciones.\n4. Evaluación de los resultados obtenidos:\n4.1 Para 100 Grupos (0.436208445103141):\n![silouette2](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_2.png)\n4.2 Para 110 Grupos (0.4494331459873356):\n![silouette3](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_3.png)\n4.3 Para 120 Grupos (0.4576435692957037):\n![silouette4](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_4.png)\n4.4 Para 130 Grupos (0.4553701275038375):\n![silouette5](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_5.png)\n4.5 Para 140 Grupos (0.46024923069398316):\n![silouette6](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_6.png)\n5. Extracción de conocimiento a partir de los grupos de medicamentos obtenidos.\n # RESULTADOS\n 1. Anotaciones: 5.274.655 frases y 33.244 artículos\n1.1 Enfermedades (**scipacy_diseases_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t)\n1.2 Síntomas (**annot_cliner_problems_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t)\n1.3 Trastornos (**annot_cliner_treatments_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t)\n1.4 Medicamentos\n1.4.1 sustancia química: (**scispacy_chemicals_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t)\n1.4.2 principio activo (**bionlp_atc5_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t)\n1.4.3 grupo terapeútico (**bionlp_atc4_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t)\n1.4.4 grupo químico (**bionlp_atc3_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t)\n1.2.5 grupo farmacológico (**bionlp_atc2_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t)\n *{\n"id": "03bf182b7a71278632ae83ed10757096dfdad3b7-175",\n"text_t": "Furthermore, volunteer experiments demonstrate that astrovirus exposure generally leads to an increase in anti-astrovirus antibody titer.",\n"scispacy_diseases_complete_t": "astrovirus:52:62",\n"scispacy_diseases_t": "astrovirus",\n"scispacy_chemicals_t": "anti-astrovirus",\n"bionlp_atc2_t": "N04 D10",\n"bionlp_atc3_t": "H05B N06D",\n"bionlp_atc4_t": "L02BA N06DA H01CC D11AF N06DX",\n"bionlp_atc5_t": "J06BB01",\n"\*version\*": 1663037203902627840\n}*\n![annotations](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/annotations-donut2.png)\n 2. Distribución de los medicamentos a partir de las anotaciones:\n2.1 En espacio bi-dimensional:\n![bidimensional](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-bidimensional-latest.png)\n2.2. Por niveles:\n![dendrogram](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-dendrogram-latest.png)\n # CONCLUSIONES\n - Se han identificado 120 grupos de medicamentos de entre todos los mencionados en artículos publicados en CORD-19:\n![clustering](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-cluster-latest.png)\n- A partir de un medicamento, ya sea desde su nombre comercial, grupo farmacológico, terapeútico o principio activo, se pueden sugerir **medicamentos relacionados**.\nPor ejemplo, medicamentos relacionados con el Aciclovir (J05AB01) en este contexto son:\n- ketamine (N01AX03)\n- piperazine (P02CB01)\n- acefylline piperazine (R03DA09)\n- barium sulfate without suspending agents (V08BA02)\n- barium sulfate with suspending agents (V08BA01)\n- chlorhexidine (S01AX09, S03AA04, S02AA09, D09AA12, R02AA05, B05CA02, D08AC02, A01AB03)\n- chlorhexidine, combinations (D08AC52)\n- artesunate (P01BE03)\n- artesunate and pyronaridine (P01BF06)\n- amodiaquine (P01BA06)\n- Se pueden realizar **búsquedas basadas en enfermedades, síntomas, tratamientos o medicamentos** de los artículos científicos publicados en CORD-19.\nPor ejemplo, responder a la siguiente pregunta: ¿se han usado medicamentos que combinan actividad inmunosupresora y antimalárica con antibióticos macrólidos? ¿En qué documentos se mencionan, y relacionados con qué enfermedades? mediante la consulta: [librairy.linkeddata.es/solr/covid/select?fl=url_s, name_s, scispacy_diseases_t&q=labels4_t:J01FA AND labels5_t:P01BA02](https://librairy.linkeddata.es/solr/covid/select?fl=url_s%2C name_s%2C scispacy_diseases_t&q=labels4_t%3AJ01FA AND labels5_t%3AP01BA02) (ya que los medicamentos que combinan la actividad inmunosupresora y antimalárica tienen el principio activo P01BA02; los antibióticos macrólidos pertenecen al grupo terapeútico J01FA)\n- No todas las frases pertenecientes al corpus contienen entidades de relevancia, y en la gran mayoría solo aparece 1![Diseases,Chemicals, atcs2.png](https://taiga.vencealvirus.software.imdea.org/media/attachments/7/4/2/c/88032427ea5df8abb15780aed503ade41f27500d1dbe735178f6f96e8986/diseaseschemicals-atcs2.png#_taiga-refresh=wiki_page:1361)\n- No se detallan suficientes relaciones entre entidades a nivel de frase. Otras tareas adicionales como la identificación de correferencias para trabajar a nivel de párrafo y generación de nuevos modelos para el corpus específico se contemplan como líneas futuras'
  },
  {
    step:3,
    title:'Validar', 
    content:'Revisar estas anotaciones con la ayuda de científicos ciudadanos.',
    source:'approach/medical_research.svg', 
    md:'# MOTIVACIÓN\n Validar las frases extraídas de los artículos que tratan sobre el COVID-19 por ciudadanos con formación y conocimientos en Ciencias de la Salud.\n # PROBLEMAS\n Las palabras clave relacionadas con la enfermedad (síntomas, medicamentos, enfermedades y tratamientos) pueden aparecer en las frases en diferente orden y con un significado distinto, por lo que es difícil una interpretación automática.\n # HIPÓTESIS\n El conocimiento e interpretación de los ciudadanos con formación y conocimientos en Ciencias de la Salud será clave para validar las frases extraídas de los artículos científicos que realiza el procesamiento automático.\n # METODOLOGÍA\n 1. Se construirá un experimento de ciencia ciudadana, a modo de aplicación web, que permita a los usuarios con formción y conocimientos en ciencias de la salud validar las frases extraídas por el sistema de Inteligencia Artificial.\n2. Los datos de entrada del experimento serán las frases extraídas del procesamiento automático [(#1 corpus)](https://taiga.vencealvirus.software.imdea.org/project/ocorcho-salud-un-catalogo-de-medicamentos-usados-para-combatir-el-covid-19-segun-la-literatura-cientifica-y-aplicando-tecnicas-de-inteligencia-artificial-y-ciencia-ciudadana/wiki/1-corpus).\n3. En cumplimiento de la GDPR, se informará al usuario sobre cómo se van a tratar sus datos personales, derecho a creación de perfiles automáticos y derecho al borrado cuando el usuario lo estime adecuado. Además, los datos permanecerán en servidores debidamente securizados.\n4. Todos los datos en bruto ¿del experimento? se publicarán en abierto, anonimizando previamente el identificador del usuario.\n5. La aplicación permitirá:\n - Registrar usuarios y clasificarlos según perfil (médicos de familia, enfermeros, epidemiólogos, farmacéuticos, …). Dicha clasificación se realizará mediante la realización de un tutorial.\n- Se mostrará al usuario una frase extraída del corpus y marcará en ella los síntomas, medicamentos y posibles tratamientos. Ejemplo: [oeg-upm.github.io/drugs4covid19-cs](https://oeg-upm.github.io/drugs4covid19-cs/)\n- La aplicación registrará cada una de las palabras o grupos de palabras marcadas por los usuarios.\n- Los datos validados se enviarán a una API para su almacenamiento en una base de datos.\n- Se calculará un índice de confianza para cada usuario, basado en "gold standards" (tareas previamente validadas por los expertos).  \n\n # RESULTADOS\n - Conjunto y clasificación de los medicamentos adecuados para la enfermedad.\n- Conjunto y clasificación de los síntomas de la enfermedad.\n- Relación síntomas-medicamentos extraídos de las frases.\n- Relación medicamento-medicamento.\n- Relación medicamento-enfermedad.'

},
{
  step:4,
  title:'Publicar', 
  content:'Publicar un grafo de conocimientos con los datos que sean correctos.',
  source:'approach/kg.svg',
  md:'# MOTIVACIÓN\n A partir del Corpus corpus CORD-19, un corpus actualizado de artículos científicos sobre COVID-19 se han generado varios repositorios orientados a documentos que pueden ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP. El repositorio generado de frases de estos artículos contiene anotaciones acerca de enfermedades, síntomas y trastornos y tratamientos (códigos ATC) relacionados con el COVID-19. Actualmente existen diferentes repositorios de datos relacionados con estos aspectos que contienen una descripción detallada de atributos tales como todos los nombres con los que se conoce una medicina, efectos secundarios, entre otros. Se quiere entonces extender las anotaciones generadas inicialmente con aquellas generadas por este tipo de relaciones. Para que la información pueda ser explotada por tanto por personas vinculadas al ámbito sanitario como por el público en general, es necesario que las anotaciones estén alineadas a un vocabulario que describa este dominio del conocimiento. De esta manera, el repositorio original será transformado a un grafo de conocimiento (knowledge graph) mediante técnicas que trabajan con mappings (correspondencias) entre el repositorio de frases y el vocabulario desarrollado.\n # PROBLEMAS\n - Silos de información\n  - Fuentes de datos heterogéneas\n  - Diversidad de formatos y métodos de consulta\n  - Carencia de vocabularios consensuados\n # HIPÓTESIS\n Un punto de acceso único y unificado en forma de grafo permite recuperar información sobre los medicamentos y sus interacciones de forma más efectiva para los expertos.\n # METODOLOGÍA\n 1. Búsqueda y generación de fuentes de datos\n - Index solar 1\n  - Index solar 2\n 1. Búsqueda de fuentes de conocimiento relacionadas a enfermedades, síntomas y trastornos, tratamientos.\n  2. Explorar otros repositorios semánticos que han sido generados a partir de información de COVID-19 para ver la posibilidad de relacionar los grafos de conocimiento\n  3. Generación del vocabulario con reuso de ontologías asociadas a esas fuentes\n  4. Documentación y publicación del vocabulario\n  5. Mapeo de los datos al vocabulario\n  6. Generación del grafo de conocimiento alineado con vocabulario\n  7. Enriquecimiento del grafo con validaciones de expertos (ciencia ciudadana)\n  8. Publicación del grafo de conocimiento\n # RESULTADOS\n - Vocabulario [w3id.org/def/DRUGS4COVID19](https://w3id.org/def/DRUGS4COVID19)\n  - Knowledge graph: [github.com/oeg-upm/drugs4covid19-kg](https://github.com/oeg-upm/drugs4covid19-kg)\n  - Punto de consulta: [librairy.linkeddata.es/sparql](http://librairy.linkeddata.es/sparql)\n  - [Ejemplo de consulta](https://librairy.linkeddata.es/sparql?default-graph-uri=http%3A%2F%2Fdrugs4covid.com%2F542020&query=select+distinct+*+where+%7B%0D%0A%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%23Paper%3E.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%2Fmenciona%3E+%3Fa+.%0D%0A%3Fa+%3Fp+%3Ft+.%0D%0A%0D%0A%7D+limit+10&should-sponge=&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)\n  # CONCLUSIONES\n Hemos integrado de forma estructurada la información sacada de las artículos científicos, sus anotaciones y además la hemos enriquecido con enlaces útiles para los expertos a fuentes externas. De esta manera, esta fuente de información única se puede utilizar para responder preguntas de forma rápida y sencilla.'
},
]
const languages= [
  {
    info:{
      title1:'DRUGS4COVID',
      text1:'Queremos crear un catálogo de medicamentos usados para combatir la COVID-19, según la literatura científica, mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana.',
      videoLink:'https://www.youtube.com/embed/EygR2P_pkyc'
    },
    problems:{
      title0:'Problema',
      title1:'Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando',
      text1:'Con el aumento del número de pacientes afectados por la COVID-19 e ingresados en las Unidades de Cuidados Intensivos en todo el mundo, se ha incrementado la demanda de los medicamentos necesarios para su tratamiento. Los laboratorios han aumentado la producción, y desde la propia Agencia del Medicamento recuerdan que un mismo principio activo puede encontrar en más de un nombre comercial.\nDurante años, se ha generado una amplia cantidad de literatura científica una gran ayuda y, al mismo tiempo, un problema para su exploración.',
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
      title0:'Nuestro Enfoque', 
      data:[
        {
            step:1,
            title:'Procesar', 
            content:'Procesar e indexar el corpus de artículos, y todas las frases.',
            source:'approach/file_searching.svg', 
            md:"# MOTIVACIÓN\nFacilitar el procesamiento automático de las publicaciones científicas disponibles en el corpus CORD-19.\n# PROBLEMAS\nEl corpus se distribuye en varias colecciones de documentos comprimidas (formato GZ) y un archivo con metainformación (formato CSV).\n# HIPÓTESIS\nAlmacenar los artículos en repositorios orientados a documentos permitirá que puedan ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP.\n# METODOLOGÍA\n1. Descarga corpus CORD-19 (\npages.semanticscholar.org/coronavirus-research\n)\n1. Descarga metadatos en formato CSV\n2. Descarga artículos de la colección 'Commercial use subset' (16763 artículos en formato JSON)\n3. Descarga artículos de la colección 'Non-commercial use subset ' (4228 artículos en formato JSON)\n4. Descarga artículos de la colección 'Custom license subset ' (19171 artículos en formato JSON)\n5. Descarga artículos de la colección 'bioRxiv/medRxiv subset' (500 artículos en formato JSON)\n2. Creación índice en Solr para almacenar los artículos\n3. Desarrollo código Python para lectura de artículos y registro en índice en Solr\n4. Segmentación de artículos en frases\n5. Creación índice en Solr para almacenar los frases\n6. Desarrollo código Python para extracción de frases a partir del texto de los artículos y registro en índice en Solr\n7. Creación de visualizaciones estadísticas para la exploración de los artículos\n# RESULTADOS\n1. Repositorio de documentos: [librairy.linkeddata.es/data/#/covid/core-overview](http://librairy.linkeddata.es/data/#/covid/core-overview)\n2. Repositorio de frases: [librairy.linkeddata.es/data/#/covid-sentences/core-overview](http://librairy.linkeddata.es/data/#/covid-sentences/core-overview)\n3. Visualización Repositorio (código GIST 4f726911fd9908ffc3a46837b15d8011): [librairy.linkeddata.es/data/dashboard](https://librairy.linkeddata.es/data/dashboard)\n4. Exploración guiada por artículos relacionados a partir de su contenido y sus anotaciones: [librairy.github.io/covid19/explorer.html](https://librairy.github.io/covid19/explorer.html)\n5. Código Python indexado: [github.com/librairy/covid19/blob/master/parallel-index-articles.py](https://github.com/librairy/covid19/blob/master/parallel-index-articles.py)\n# CONCLUSIONES\n1. 33.244 artículos indexados\n2. 5.298.063 frases extraídas automáticamente"
        }, 
        {
          step:2,
          title:'Clasificar', 
          content:'Anotar cada artículo y cada frase con la información procesada.',
          source:'approach/annotation.svg', 
          md:'# MOTIVACIÓN\n Agrupar medicamentos relacionados en el tratamiento del COVID para poder utilizarlos en situaciones de desabastecimiento ([noticia prensa](https://elpais.com/sociedad/2020-03-31/las-uci-recurren-a-farmacos-en-desuso-ante-la-escasez-de-sedantes.html))\n # PROBLEMAS\n 1. Procesamiento masivo de Artículos científicos\n2. Identificación automática de medicamentos\n3. Identificación automática de síntomas\n4. Identificación automática de enfermedades\n5. Identificación automática de trastornos\n6. Descubrimiento de relaciones:\n1. medicamento-vs-síntoma\n2. medicamento-vs-enfermedad\n3. medicamento-vs-trastorno\n # HIPÓTESIS\n La caracterización de medicamentos mediante síntomas, enfermedades y trastornos extraídos automáticamente de la literatura científica permitirá agrupar aquellos que estén relacionados.\n # METODOLOGÍA\n 1. Creación servicio identificación medicamentos y códigos ATC: [librairy.github.io/bio-nlp](http://librairy.github.io/bio-nlp)\n2. Desarrollo y ejecución de un anotador de enfermedades y medicamentos basado en modelos de identificación de entidades (NER). Anotación a dos niveles de profundidad: frase y artículo\n3. Construcción de modelos de agrupamiento global y jerárquico a partir de las representaciones de los medicamentos obtenidas con las anotaciones.\n4. Evaluación de los resultados obtenidos:\n4.1 Para 100 Grupos (0.436208445103141):\n![silouette2](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_2.png)\n4.2 Para 110 Grupos (0.4494331459873356):\n![silouette3](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_3.png)\n4.3 Para 120 Grupos (0.4576435692957037):\n![silouette4](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_4.png)\n4.4 Para 130 Grupos (0.4553701275038375):\n![silouette5](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_5.png)\n4.5 Para 140 Grupos (0.46024923069398316):\n![silouette6](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_6.png)\n5. Extracción de conocimiento a partir de los grupos de medicamentos obtenidos.\n # RESULTADOS\n 1. Anotaciones: 5.274.655 frases y 33.244 artículos\n1.1 Enfermedades (**scipacy_diseases_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t)\n1.2 Síntomas (**annot_cliner_problems_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t)\n1.3 Trastornos (**annot_cliner_treatments_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t)\n1.4 Medicamentos\n1.4.1 sustancia química: (**scispacy_chemicals_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t)\n1.4.2 principio activo (**bionlp_atc5_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t)\n1.4.3 grupo terapeútico (**bionlp_atc4_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t)\n1.4.4 grupo químico (**bionlp_atc3_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t)\n1.2.5 grupo farmacológico (**bionlp_atc2_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t)\n *{\n"id": "03bf182b7a71278632ae83ed10757096dfdad3b7-175",\n"text_t": "Furthermore, volunteer experiments demonstrate that astrovirus exposure generally leads to an increase in anti-astrovirus antibody titer.",\n"scispacy_diseases_complete_t": "astrovirus:52:62",\n"scispacy_diseases_t": "astrovirus",\n"scispacy_chemicals_t": "anti-astrovirus",\n"bionlp_atc2_t": "N04 D10",\n"bionlp_atc3_t": "H05B N06D",\n"bionlp_atc4_t": "L02BA N06DA H01CC D11AF N06DX",\n"bionlp_atc5_t": "J06BB01",\n"\*version\*": 1663037203902627840\n}*\n![annotations](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/annotations-donut2.png)\n 2. Distribución de los medicamentos a partir de las anotaciones:\n2.1 En espacio bi-dimensional:\n![bidimensional](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-bidimensional-latest.png)\n2.2. Por niveles:\n![dendrogram](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-dendrogram-latest.png)\n # CONCLUSIONES\n - Se han identificado 120 grupos de medicamentos de entre todos los mencionados en artículos publicados en CORD-19:\n![clustering](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-cluster-latest.png)\n- A partir de un medicamento, ya sea desde su nombre comercial, grupo farmacológico, terapeútico o principio activo, se pueden sugerir **medicamentos relacionados**.\nPor ejemplo, medicamentos relacionados con el Aciclovir (J05AB01) en este contexto son:\n- ketamine (N01AX03)\n- piperazine (P02CB01)\n- acefylline piperazine (R03DA09)\n- barium sulfate without suspending agents (V08BA02)\n- barium sulfate with suspending agents (V08BA01)\n- chlorhexidine (S01AX09, S03AA04, S02AA09, D09AA12, R02AA05, B05CA02, D08AC02, A01AB03)\n- chlorhexidine, combinations (D08AC52)\n- artesunate (P01BE03)\n- artesunate and pyronaridine (P01BF06)\n- amodiaquine (P01BA06)\n- Se pueden realizar **búsquedas basadas en enfermedades, síntomas, tratamientos o medicamentos** de los artículos científicos publicados en CORD-19.\nPor ejemplo, responder a la siguiente pregunta: ¿se han usado medicamentos que combinan actividad inmunosupresora y antimalárica con antibióticos macrólidos? ¿En qué documentos se mencionan, y relacionados con qué enfermedades? mediante la consulta: [librairy.linkeddata.es/solr/covid/select?fl=url_s, name_s, scispacy_diseases_t&q=labels4_t:J01FA AND labels5_t:P01BA02](https://librairy.linkeddata.es/solr/covid/select?fl=url_s%2C name_s%2C scispacy_diseases_t&q=labels4_t%3AJ01FA AND labels5_t%3AP01BA02) (ya que los medicamentos que combinan la actividad inmunosupresora y antimalárica tienen el principio activo P01BA02; los antibióticos macrólidos pertenecen al grupo terapeútico J01FA)\n- No todas las frases pertenecientes al corpus contienen entidades de relevancia, y en la gran mayoría solo aparece 1![Diseases,Chemicals, atcs2.png](https://taiga.vencealvirus.software.imdea.org/media/attachments/7/4/2/c/88032427ea5df8abb15780aed503ade41f27500d1dbe735178f6f96e8986/diseaseschemicals-atcs2.png#_taiga-refresh=wiki_page:1361)\n- No se detallan suficientes relaciones entre entidades a nivel de frase. Otras tareas adicionales como la identificación de correferencias para trabajar a nivel de párrafo y generación de nuevos modelos para el corpus específico se contemplan como líneas futuras'
      },
      {
        step:3,
        title:'Validar', 
        content:'Revisar estas anotaciones con la ayuda de científicos ciudadanos.',
        source:'approach/medical_research.svg', 
        md:'# MOTIVACIÓN\n Validar las frases extraídas de los artículos que tratan sobre el COVID-19 por ciudadanos con formación y conocimientos en Ciencias de la Salud.\n # PROBLEMAS\n Las palabras clave relacionadas con la enfermedad (síntomas, medicamentos, enfermedades y tratamientos) pueden aparecer en las frases en diferente orden y con un significado distinto, por lo que es difícil una interpretación automática.\n # HIPÓTESIS\n El conocimiento e interpretación de los ciudadanos con formación y conocimientos en Ciencias de la Salud será clave para validar las frases extraídas de los artículos científicos que realiza el procesamiento automático.\n # METODOLOGÍA\n 1. Se construirá un experimento de ciencia ciudadana, a modo de aplicación web, que permita a los usuarios con formción y conocimientos en ciencias de la salud validar las frases extraídas por el sistema de Inteligencia Artificial.\n2. Los datos de entrada del experimento serán las frases extraídas del procesamiento automático [(#1 corpus)](https://taiga.vencealvirus.software.imdea.org/project/ocorcho-salud-un-catalogo-de-medicamentos-usados-para-combatir-el-covid-19-segun-la-literatura-cientifica-y-aplicando-tecnicas-de-inteligencia-artificial-y-ciencia-ciudadana/wiki/1-corpus).\n3. En cumplimiento de la GDPR, se informará al usuario sobre cómo se van a tratar sus datos personales, derecho a creación de perfiles automáticos y derecho al borrado cuando el usuario lo estime adecuado. Además, los datos permanecerán en servidores debidamente securizados.\n4. Todos los datos en bruto ¿del experimento? se publicarán en abierto, anonimizando previamente el identificador del usuario.\n5. La aplicación permitirá:\n - Registrar usuarios y clasificarlos según perfil (médicos de familia, enfermeros, epidemiólogos, farmacéuticos, …). Dicha clasificación se realizará mediante la realización de un tutorial.\n- Se mostrará al usuario una frase extraída del corpus y marcará en ella los síntomas, medicamentos y posibles tratamientos. Ejemplo: [oeg-upm.github.io/drugs4covid19-cs](https://oeg-upm.github.io/drugs4covid19-cs/)\n- La aplicación registrará cada una de las palabras o grupos de palabras marcadas por los usuarios.\n- Los datos validados se enviarán a una API para su almacenamiento en una base de datos.\n- Se calculará un índice de confianza para cada usuario, basado en "gold standards" (tareas previamente validadas por los expertos).  \n\n # RESULTADOS\n - Conjunto y clasificación de los medicamentos adecuados para la enfermedad.\n- Conjunto y clasificación de los síntomas de la enfermedad.\n- Relación síntomas-medicamentos extraídos de las frases.\n- Relación medicamento-medicamento.\n- Relación medicamento-enfermedad.'
    
    },
    {
      step:4,
      title:'Publicar', 
      content:'Publicar un grafo de conocimientos con los datos que sean correctos.',
      source:'approach/kg.svg',
      md:'# MOTIVACIÓN\n A partir del Corpus corpus CORD-19, un corpus actualizado de artículos científicos sobre COVID-19 se han generado varios repositorios orientados a documentos que pueden ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP. El repositorio generado de frases de estos artículos contiene anotaciones acerca de enfermedades, síntomas y trastornos y tratamientos (códigos ATC) relacionados con el COVID-19. Actualmente existen diferentes repositorios de datos relacionados con estos aspectos que contienen una descripción detallada de atributos tales como todos los nombres con los que se conoce una medicina, efectos secundarios, entre otros. Se quiere entonces extender las anotaciones generadas inicialmente con aquellas generadas por este tipo de relaciones. Para que la información pueda ser explotada por tanto por personas vinculadas al ámbito sanitario como por el público en general, es necesario que las anotaciones estén alineadas a un vocabulario que describa este dominio del conocimiento. De esta manera, el repositorio original será transformado a un grafo de conocimiento (knowledge graph) mediante técnicas que trabajan con mappings (correspondencias) entre el repositorio de frases y el vocabulario desarrollado.\n # PROBLEMAS\n - Silos de información\n  - Fuentes de datos heterogéneas\n  - Diversidad de formatos y métodos de consulta\n  - Carencia de vocabularios consensuados\n # HIPÓTESIS\n Un punto de acceso único y unificado en forma de grafo permite recuperar información sobre los medicamentos y sus interacciones de forma más efectiva para los expertos.\n # METODOLOGÍA\n 1. Búsqueda y generación de fuentes de datos\n - Index solar 1\n  - Index solar 2\n 1. Búsqueda de fuentes de conocimiento relacionadas a enfermedades, síntomas y trastornos, tratamientos.\n  2. Explorar otros repositorios semánticos que han sido generados a partir de información de COVID-19 para ver la posibilidad de relacionar los grafos de conocimiento\n  3. Generación del vocabulario con reuso de ontologías asociadas a esas fuentes\n  4. Documentación y publicación del vocabulario\n  5. Mapeo de los datos al vocabulario\n  6. Generación del grafo de conocimiento alineado con vocabulario\n  7. Enriquecimiento del grafo con validaciones de expertos (ciencia ciudadana)\n  8. Publicación del grafo de conocimiento\n # RESULTADOS\n - Vocabulario [w3id.org/def/DRUGS4COVID19](https://w3id.org/def/DRUGS4COVID19)\n  - Knowledge graph: [github.com/oeg-upm/drugs4covid19-kg](https://github.com/oeg-upm/drugs4covid19-kg)\n  - Punto de consulta: [librairy.linkeddata.es/sparql](http://librairy.linkeddata.es/sparql)\n  - [Ejemplo de consulta](https://librairy.linkeddata.es/sparql?default-graph-uri=http%3A%2F%2Fdrugs4covid.com%2F542020&query=select+distinct+*+where+%7B%0D%0A%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%23Paper%3E.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%2Fmenciona%3E+%3Fa+.%0D%0A%3Fa+%3Fp+%3Ft+.%0D%0A%0D%0A%7D+limit+10&should-sponge=&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)\n  # CONCLUSIONES\n Hemos integrado de forma estructurada la información sacada de las artículos científicos, sus anotaciones y además la hemos enriquecido con enlaces útiles para los expertos a fuentes externas. De esta manera, esta fuente de información única se puede utilizar para responder preguntas de forma rápida y sencilla.'
    },
    ]
    },
    team:{
      title0:'¿Quiénes Somos?', 
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
      videoLink:'https://www.youtube.com/embed/EygR2P_pkyc'
    },
    problems:{
      title0:'Problem',
      title1:'Drugs in hospital pharmacy services are running low',
      text1:'With the increase in the number of patients affected by COVID-19 and admitted to Intensive Care Units throughout the world, the demand for the medicines necessary for their treatment has increased. Laboratories have increased production, and the Drug Agency itself recalls that the same active ingredient can be found in more than one trade name.\nFor years, a large amount of scientific literature has been generated, a great help and a problem for its exploration too.',
    }, 
    resources:{
      title0:'The solution becomes the problem',
      title1:'CORD-19',
      text1:'This scientific documentation is at the same time the problem. If a person wants to know the application or use of a drug in the treatment of COVID-19 or identify the relationships between drugs described in a protocol of action, they should navigate this large body of documentation where the drugs are mentioned with different names (active principle, trade name, therapeutic group... ). Sometimes the mention of a medicine informs about its possible use and in other cases it may be a phrase without relevance to this objective.',
      graphtitle1:'The name of the medicine',
      title2:'Some Data:',
      graphtitle2:'Differente languages',
      graphtitle3:'Many sources to consult',
      graphtitle4:'Different formats'
    },
    approach:{
      title0:'Our Approach', 
      data:[
        {
            step:1,
            title:'Process', 
            content:'Process and index the article corpus, and all the sentences.',
            source:'approach/file_searching.svg', 
            md:"# MOTIVACIÓN\nFacilitar el procesamiento automático de las publicaciones científicas disponibles en el corpus CORD-19.\n# PROBLEMAS\nEl corpus se distribuye en varias colecciones de documentos comprimidas (formato GZ) y un archivo con metainformación (formato CSV).\n# HIPÓTESIS\nAlmacenar los artículos en repositorios orientados a documentos permitirá que puedan ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP.\n# METODOLOGÍA\n1. Descarga corpus CORD-19 (\npages.semanticscholar.org/coronavirus-research\n)\n1. Descarga metadatos en formato CSV\n2. Descarga artículos de la colección 'Commercial use subset' (16763 artículos en formato JSON)\n3. Descarga artículos de la colección 'Non-commercial use subset ' (4228 artículos en formato JSON)\n4. Descarga artículos de la colección 'Custom license subset ' (19171 artículos en formato JSON)\n5. Descarga artículos de la colección 'bioRxiv/medRxiv subset' (500 artículos en formato JSON)\n2. Creación índice en Solr para almacenar los artículos\n3. Desarrollo código Python para lectura de artículos y registro en índice en Solr\n4. Segmentación de artículos en frases\n5. Creación índice en Solr para almacenar los frases\n6. Desarrollo código Python para extracción de frases a partir del texto de los artículos y registro en índice en Solr\n7. Creación de visualizaciones estadísticas para la exploración de los artículos\n# RESULTADOS\n1. Repositorio de documentos: [librairy.linkeddata.es/data/#/covid/core-overview](http://librairy.linkeddata.es/data/#/covid/core-overview)\n2. Repositorio de frases: [librairy.linkeddata.es/data/#/covid-sentences/core-overview](http://librairy.linkeddata.es/data/#/covid-sentences/core-overview)\n3. Visualización Repositorio (código GIST 4f726911fd9908ffc3a46837b15d8011): [librairy.linkeddata.es/data/dashboard](https://librairy.linkeddata.es/data/dashboard)\n4. Exploración guiada por artículos relacionados a partir de su contenido y sus anotaciones: [librairy.github.io/covid19/explorer.html](https://librairy.github.io/covid19/explorer.html)\n5. Código Python indexado: [github.com/librairy/covid19/blob/master/parallel-index-articles.py](https://github.com/librairy/covid19/blob/master/parallel-index-articles.py)\n# CONCLUSIONES\n1. 33.244 artículos indexados\n2. 5.298.063 frases extraídas automáticamente"
        }, 
        {
          step:2,
          title:'Classify', 
          content:'Annotate each article and each sentence with the processed information.',
          source:'approach/annotation.svg', 
          md:'# MOTIVACIÓN\n Agrupar medicamentos relacionados en el tratamiento del COVID para poder utilizarlos en situaciones de desabastecimiento ([noticia prensa](https://elpais.com/sociedad/2020-03-31/las-uci-recurren-a-farmacos-en-desuso-ante-la-escasez-de-sedantes.html))\n # PROBLEMAS\n 1. Procesamiento masivo de Artículos científicos\n2. Identificación automática de medicamentos\n3. Identificación automática de síntomas\n4. Identificación automática de enfermedades\n5. Identificación automática de trastornos\n6. Descubrimiento de relaciones:\n1. medicamento-vs-síntoma\n2. medicamento-vs-enfermedad\n3. medicamento-vs-trastorno\n # HIPÓTESIS\n La caracterización de medicamentos mediante síntomas, enfermedades y trastornos extraídos automáticamente de la literatura científica permitirá agrupar aquellos que estén relacionados.\n # METODOLOGÍA\n 1. Creación servicio identificación medicamentos y códigos ATC: [librairy.github.io/bio-nlp](http://librairy.github.io/bio-nlp)\n2. Desarrollo y ejecución de un anotador de enfermedades y medicamentos basado en modelos de identificación de entidades (NER). Anotación a dos niveles de profundidad: frase y artículo\n3. Construcción de modelos de agrupamiento global y jerárquico a partir de las representaciones de los medicamentos obtenidas con las anotaciones.\n4. Evaluación de los resultados obtenidos:\n4.1 Para 100 Grupos (0.436208445103141):\n![silouette2](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_2.png)\n4.2 Para 110 Grupos (0.4494331459873356):\n![silouette3](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_3.png)\n4.3 Para 120 Grupos (0.4576435692957037):\n![silouette4](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_4.png)\n4.4 Para 130 Grupos (0.4553701275038375):\n![silouette5](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_5.png)\n4.5 Para 140 Grupos (0.46024923069398316):\n![silouette6](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_6.png)\n5. Extracción de conocimiento a partir de los grupos de medicamentos obtenidos.\n # RESULTADOS\n 1. Anotaciones: 5.274.655 frases y 33.244 artículos\n1.1 Enfermedades (**scipacy_diseases_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t)\n1.2 Síntomas (**annot_cliner_problems_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t)\n1.3 Trastornos (**annot_cliner_treatments_t**): [librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t](http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t)\n1.4 Medicamentos\n1.4.1 sustancia química: (**scispacy_chemicals_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t)\n1.4.2 principio activo (**bionlp_atc5_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t)\n1.4.3 grupo terapeútico (**bionlp_atc4_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t)\n1.4.4 grupo químico (**bionlp_atc3_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t)\n1.2.5 grupo farmacológico (**bionlp_atc2_t**): [librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t](http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t)\n *{\n"id": "03bf182b7a71278632ae83ed10757096dfdad3b7-175",\n"text_t": "Furthermore, volunteer experiments demonstrate that astrovirus exposure generally leads to an increase in anti-astrovirus antibody titer.",\n"scispacy_diseases_complete_t": "astrovirus:52:62",\n"scispacy_diseases_t": "astrovirus",\n"scispacy_chemicals_t": "anti-astrovirus",\n"bionlp_atc2_t": "N04 D10",\n"bionlp_atc3_t": "H05B N06D",\n"bionlp_atc4_t": "L02BA N06DA H01CC D11AF N06DX",\n"bionlp_atc5_t": "J06BB01",\n"\*version\*": 1663037203902627840\n}*\n![annotations](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/annotations-donut2.png)\n 2. Distribución de los medicamentos a partir de las anotaciones:\n2.1 En espacio bi-dimensional:\n![bidimensional](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-bidimensional-latest.png)\n2.2. Por niveles:\n![dendrogram](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-dendrogram-latest.png)\n # CONCLUSIONES\n - Se han identificado 120 grupos de medicamentos de entre todos los mencionados en artículos publicados en CORD-19:\n![clustering](https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-cluster-latest.png)\n- A partir de un medicamento, ya sea desde su nombre comercial, grupo farmacológico, terapeútico o principio activo, se pueden sugerir **medicamentos relacionados**.\nPor ejemplo, medicamentos relacionados con el Aciclovir (J05AB01) en este contexto son:\n- ketamine (N01AX03)\n- piperazine (P02CB01)\n- acefylline piperazine (R03DA09)\n- barium sulfate without suspending agents (V08BA02)\n- barium sulfate with suspending agents (V08BA01)\n- chlorhexidine (S01AX09, S03AA04, S02AA09, D09AA12, R02AA05, B05CA02, D08AC02, A01AB03)\n- chlorhexidine, combinations (D08AC52)\n- artesunate (P01BE03)\n- artesunate and pyronaridine (P01BF06)\n- amodiaquine (P01BA06)\n- Se pueden realizar **búsquedas basadas en enfermedades, síntomas, tratamientos o medicamentos** de los artículos científicos publicados en CORD-19.\nPor ejemplo, responder a la siguiente pregunta: ¿se han usado medicamentos que combinan actividad inmunosupresora y antimalárica con antibióticos macrólidos? ¿En qué documentos se mencionan, y relacionados con qué enfermedades? mediante la consulta: [librairy.linkeddata.es/solr/covid/select?fl=url_s, name_s, scispacy_diseases_t&q=labels4_t:J01FA AND labels5_t:P01BA02](https://librairy.linkeddata.es/solr/covid/select?fl=url_s%2C name_s%2C scispacy_diseases_t&q=labels4_t%3AJ01FA AND labels5_t%3AP01BA02) (ya que los medicamentos que combinan la actividad inmunosupresora y antimalárica tienen el principio activo P01BA02; los antibióticos macrólidos pertenecen al grupo terapeútico J01FA)\n- No todas las frases pertenecientes al corpus contienen entidades de relevancia, y en la gran mayoría solo aparece 1![Diseases,Chemicals, atcs2.png](https://taiga.vencealvirus.software.imdea.org/media/attachments/7/4/2/c/88032427ea5df8abb15780aed503ade41f27500d1dbe735178f6f96e8986/diseaseschemicals-atcs2.png#_taiga-refresh=wiki_page:1361)\n- No se detallan suficientes relaciones entre entidades a nivel de frase. Otras tareas adicionales como la identificación de correferencias para trabajar a nivel de párrafo y generación de nuevos modelos para el corpus específico se contemplan como líneas futuras'
      },
      {
        step:3,
        title:'Validate', 
        content:'Review these notes with the help of citizen scientists.',
        source:'approach/medical_research.svg', 
        md:'# MOTIVACIÓN\n Validar las frases extraídas de los artículos que tratan sobre el COVID-19 por ciudadanos con formación y conocimientos en Ciencias de la Salud.\n # PROBLEMAS\n Las palabras clave relacionadas con la enfermedad (síntomas, medicamentos, enfermedades y tratamientos) pueden aparecer en las frases en diferente orden y con un significado distinto, por lo que es difícil una interpretación automática.\n # HIPÓTESIS\n El conocimiento e interpretación de los ciudadanos con formación y conocimientos en Ciencias de la Salud será clave para validar las frases extraídas de los artículos científicos que realiza el procesamiento automático.\n # METODOLOGÍA\n 1. Se construirá un experimento de ciencia ciudadana, a modo de aplicación web, que permita a los usuarios con formción y conocimientos en ciencias de la salud validar las frases extraídas por el sistema de Inteligencia Artificial.\n2. Los datos de entrada del experimento serán las frases extraídas del procesamiento automático [(#1 corpus)](https://taiga.vencealvirus.software.imdea.org/project/ocorcho-salud-un-catalogo-de-medicamentos-usados-para-combatir-el-covid-19-segun-la-literatura-cientifica-y-aplicando-tecnicas-de-inteligencia-artificial-y-ciencia-ciudadana/wiki/1-corpus).\n3. En cumplimiento de la GDPR, se informará al usuario sobre cómo se van a tratar sus datos personales, derecho a creación de perfiles automáticos y derecho al borrado cuando el usuario lo estime adecuado. Además, los datos permanecerán en servidores debidamente securizados.\n4. Todos los datos en bruto ¿del experimento? se publicarán en abierto, anonimizando previamente el identificador del usuario.\n5. La aplicación permitirá:\n - Registrar usuarios y clasificarlos según perfil (médicos de familia, enfermeros, epidemiólogos, farmacéuticos, …). Dicha clasificación se realizará mediante la realización de un tutorial.\n- Se mostrará al usuario una frase extraída del corpus y marcará en ella los síntomas, medicamentos y posibles tratamientos. Ejemplo: [oeg-upm.github.io/drugs4covid19-cs](https://oeg-upm.github.io/drugs4covid19-cs/)\n- La aplicación registrará cada una de las palabras o grupos de palabras marcadas por los usuarios.\n- Los datos validados se enviarán a una API para su almacenamiento en una base de datos.\n- Se calculará un índice de confianza para cada usuario, basado en "gold standards" (tareas previamente validadas por los expertos).  \n\n # RESULTADOS\n - Conjunto y clasificación de los medicamentos adecuados para la enfermedad.\n- Conjunto y clasificación de los síntomas de la enfermedad.\n- Relación síntomas-medicamentos extraídos de las frases.\n- Relación medicamento-medicamento.\n- Relación medicamento-enfermedad.'
    
    },
    {
      step:4,
      title:'Publish', 
      content:'Publish a knowledge graph with the valid data.',
      source:'approach/kg.svg',
      md:'# MOTIVACIÓN\n A partir del Corpus corpus CORD-19, un corpus actualizado de artículos científicos sobre COVID-19 se han generado varios repositorios orientados a documentos que pueden ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP. El repositorio generado de frases de estos artículos contiene anotaciones acerca de enfermedades, síntomas y trastornos y tratamientos (códigos ATC) relacionados con el COVID-19. Actualmente existen diferentes repositorios de datos relacionados con estos aspectos que contienen una descripción detallada de atributos tales como todos los nombres con los que se conoce una medicina, efectos secundarios, entre otros. Se quiere entonces extender las anotaciones generadas inicialmente con aquellas generadas por este tipo de relaciones. Para que la información pueda ser explotada por tanto por personas vinculadas al ámbito sanitario como por el público en general, es necesario que las anotaciones estén alineadas a un vocabulario que describa este dominio del conocimiento. De esta manera, el repositorio original será transformado a un grafo de conocimiento (knowledge graph) mediante técnicas que trabajan con mappings (correspondencias) entre el repositorio de frases y el vocabulario desarrollado.\n # PROBLEMAS\n - Silos de información\n  - Fuentes de datos heterogéneas\n  - Diversidad de formatos y métodos de consulta\n  - Carencia de vocabularios consensuados\n # HIPÓTESIS\n Un punto de acceso único y unificado en forma de grafo permite recuperar información sobre los medicamentos y sus interacciones de forma más efectiva para los expertos.\n # METODOLOGÍA\n 1. Búsqueda y generación de fuentes de datos\n - Index solar 1\n  - Index solar 2\n 1. Búsqueda de fuentes de conocimiento relacionadas a enfermedades, síntomas y trastornos, tratamientos.\n  2. Explorar otros repositorios semánticos que han sido generados a partir de información de COVID-19 para ver la posibilidad de relacionar los grafos de conocimiento\n  3. Generación del vocabulario con reuso de ontologías asociadas a esas fuentes\n  4. Documentación y publicación del vocabulario\n  5. Mapeo de los datos al vocabulario\n  6. Generación del grafo de conocimiento alineado con vocabulario\n  7. Enriquecimiento del grafo con validaciones de expertos (ciencia ciudadana)\n  8. Publicación del grafo de conocimiento\n # RESULTADOS\n - Vocabulario [w3id.org/def/DRUGS4COVID19](https://w3id.org/def/DRUGS4COVID19)\n  - Knowledge graph: [github.com/oeg-upm/drugs4covid19-kg](https://github.com/oeg-upm/drugs4covid19-kg)\n  - Punto de consulta: [librairy.linkeddata.es/sparql](http://librairy.linkeddata.es/sparql)\n  - [Ejemplo de consulta](https://librairy.linkeddata.es/sparql?default-graph-uri=http%3A%2F%2Fdrugs4covid.com%2F542020&query=select+distinct+*+where+%7B%0D%0A%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%23Paper%3E.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%2Fmenciona%3E+%3Fa+.%0D%0A%3Fa+%3Fp+%3Ft+.%0D%0A%0D%0A%7D+limit+10&should-sponge=&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)\n  # CONCLUSIONES\n Hemos integrado de forma estructurada la información sacada de las artículos científicos, sus anotaciones y además la hemos enriquecido con enlaces útiles para los expertos a fuentes externas. De esta manera, esta fuente de información única se puede utilizar para responder preguntas de forma rápida y sencilla.'
    },
    ]
    },
    team:{
      title0:'Who Are We?', 
      title1:'The Team',
      title2:'With the help of:',
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
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
    "twitter": "dchavesf",
    "github": "dachafra",
    "linkedin": "https://www.linkedin.com/in/david-chaves-fraga/",
    "email": "dchaves@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/CarlosBadenesOlmedo.png",
    "name": "Carlos Badenes-Olmedo",
    "role": "Product Owner",
    "group": "NLP",
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
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
    "institution": "UPM",
    "twitter": "mijaspao",
    "github": "paoespinozarias",
    "linkedin": "https://www.linkedin.com/in/paolaespinoza-arias/",
    "email": "pespinoza@fi.upm.es"
  },
  { "source":"teamImages/Fotos/PabloCallejaIbañez.jpg",
    "name": "Pablo Calleja Ibáñez",
    "role": "Computational Linguistic",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "SPabloCalleja",
    "github": "serpablo",
    "linkedin": "https://www.linkedin.com/in/pablo-calleja-ib%C3%A1%C3%B1ez-63799064/",
    "email": "pcalleja@fi.upm.es"
  },
  { "source":"teamImages/Fotos/VirginiadePablo.png",
    "name": "Virginia de Pablo",
    "role": "Comunicación",
    "group": "",
    "institution": "UPM",
    "twitter": "v_depablo",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/vdepablo/",
    "email": "vdepablo@fi-upm.es"
  },
  { "source":"teamImages/Fotos/DanielBermejoSánchez.jpg",
    "name": "Daniel Bermejo Sánchez",
    "role": "Back End Programmer",
    "group": "Dev",
    "institution": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/daniel-bermejo-sánchez-020712160",
    "email": "daniel.bermejos@alumnos.upm.es"
  },
  { "source":"teamImages/Fotos/ElviraAmador.JPG",
    "name": "Elvira Amador Domínguez",
    "role": "He hecho un poco de todo",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "elviamador",
    "github": "eamadord",
    "linkedin": "https://www.linkedin.com/in/elvira-amador-dom%C3%ADnguez-746607116/",
    "email": "eamador@fi.upm.es"
  },
  { "source":"teamImages/Fotos/EdnaRuckhaus.png",
    "name": "Edna Ruckhaus Magnus",
    "role": "Knowledge Graph exploitation",
    "group": "KG",
    "institution": "UPM",
    "twitter": "eruckhaus",
    "github": "ednaru",
    "linkedin": "https://www.linkedin.com/in/eruckhaus/",
    "email": "eruckhaus@fi.upm.es"
  },
  { "source":"teamImages/Fotos/SocorroBernardos.png",
    "name": "Socorro Bernardos Galindo",
    "role": "Ayuda en ontología y consultas",
    "group": "",
    "institution": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "",
    "email": ""
  },
  { "source":"teamImages/Fotos/EstebanGonzálezGuardia.jpeg",
    "name": "Esteban González Guardia",
    "role": "Frontend programmer",
    "group": "CS (Citizen Science)",
    "institution": "UPM",
    "twitter": "eglezguardia",
    "github": "esgg",
    "linkedin": "",
    "email": "egonzalez@fi.upm.es"
  },
  { "source":"teamImages/Fotos/200.png",
  "name": "Beatriz López Centeno",
  "role": "Hospital Pharmacist",
  "group": "",
  "institution": "SERMAS",
  "twitter": "blopezcenteno",
  "github": "",
  "linkedin": "https://www.linkedin.com/in/blopezcenteno/",
  "email": "blcenteno@salud.madrid.org"
}
]
export default {bar, pie, line, radar,donut, bubble, graph, graphConfig, approach, teamData, languages}