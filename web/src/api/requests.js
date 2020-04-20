import axios from 'axios'

const API = ''

export function getCharts(){
    return new Promise((resolve, reject) => {
        const charts = [
            {
                type:'line',
                config:{
                    title: {
                        visible: true,
                        text: '2000 ~ 2018 ',
                      },
                      description: {
                        visible: true,
                        text: 'This is the description',
                      },
                      padding: [20, 100, 30, 80],
                      forceFit: true,
                      data:[
                        {
                          "name": "China",
                          "year": "2000",
                          "gdp": 1211346869605.24
                        },
                        {
                          "name": "China",
                          "year": "2001",
                          "gdp": 1339395718865.3
                        },
                        {
                          "name": "China",
                          "year": "2002",
                          "gdp": 1470550015081.55
                        },
                        {
                          "name": "China",
                          "year": "2003",
                          "gdp": 1660287965662.68
                        },
                        {
                          "name": "China",
                          "year": "2004",
                          "gdp": 1955347004963.27
                        },
                        {
                          "name": "China",
                          "year": "2005",
                          "gdp": 2285965892360.54
                        },
                        {
                          "name": "China",
                          "year": "2006",
                          "gdp": 2752131773355.16
                        },
                        {
                          "name": "China",
                          "year": "2007",
                          "gdp": 3550342425238.25
                        },
                        {
                          "name": "China",
                          "year": "2008",
                          "gdp": 4594306848763.08
                        },
                        {
                          "name": "China",
                          "year": "2009",
                          "gdp": 5101702432883.45
                        },
                        {
                          "name": "China",
                          "year": "2010",
                          "gdp": 6087164527421.24
                        },
                        {
                          "name": "China",
                          "year": "2011",
                          "gdp": 7551500425597.77
                        },
                        {
                          "name": "China",
                          "year": "2012",
                          "gdp": 8532230724141.76
                        },
                        {
                          "name": "China",
                          "year": "2013",
                          "gdp": 9570405758739.79
                        },
                        {
                          "name": "China",
                          "year": "2014",
                          "gdp": 10438529153237.6
                        },
                        {
                          "name": "China",
                          "year": "2015",
                          "gdp": 11015542352468.9
                        },
                        {
                          "name": "China",
                          "year": "2016",
                          "gdp": 11137945669350.6
                        },
                        {
                          "name": "China",
                          "year": "2017",
                          "gdp": 12143491448186.1
                        },
                        {
                          "name": "China",
                          "year": "2018",
                          "gdp": 13608151864637.9
                        },
                        {
                          "name": "United States",
                          "year": "2000",
                          "gdp": 10252345464000
                        },
                        {
                          "name": "United States",
                          "year": "2001",
                          "gdp": 10581821399000
                        },
                        {
                          "name": "United States",
                          "year": "2002",
                          "gdp": 10936419054000
                        },
                        {
                          "name": "United States",
                          "year": "2003",
                          "gdp": 11458243878000
                        },
                        {
                          "name": "United States",
                          "year": "2004",
                          "gdp": 12213729147000
                        },
                        {
                          "name": "United States",
                          "year": "2005",
                          "gdp": 13036640229000
                        },
                        {
                          "name": "United States",
                          "year": "2006",
                          "gdp": 13814611414000
                        },
                        {
                          "name": "United States",
                          "year": "2007",
                          "gdp": 14451858650000
                        },
                        {
                          "name": "United States",
                          "year": "2008",
                          "gdp": 14712844084000
                        },
                        {
                          "name": "United States",
                          "year": "2009",
                          "gdp": 14448933025000
                        },
                        {
                          "name": "United States",
                          "year": "2010",
                          "gdp": 14992052727000
                        },
                        {
                          "name": "United States",
                          "year": "2011",
                          "gdp": 15542581104000
                        },
                        {
                          "name": "United States",
                          "year": "2012",
                          "gdp": 16197007349000
                        },
                        {
                          "name": "United States",
                          "year": "2013",
                          "gdp": 16784849190000
                        },
                        {
                          "name": "United States",
                          "year": "2014",
                          "gdp": 17521746534000
                        },
                        {
                          "name": "United States",
                          "year": "2015",
                          "gdp": 18219297584000
                        },
                        {
                          "name": "United States",
                          "year": "2016",
                          "gdp": 18707188235000
                        },
                        {
                          "name": "United States",
                          "year": "2017",
                          "gdp": 19485393853000
                        },
                        {
                          "name": "United States",
                          "year": "2018",
                          "gdp": 20544343456936.5
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2000",
                          "gdp": 1657816613708.58
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2001",
                          "gdp": 1640246149417.01
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2002",
                          "gdp": 1784473920863.31
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2003",
                          "gdp": 2053018775510.2
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2004",
                          "gdp": 2416931526913.22
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2005",
                          "gdp": 2538680000000
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2006",
                          "gdp": 2713749770009.2
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2007",
                          "gdp": 3100882352941.18
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2008",
                          "gdp": 2922667279411.76
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2009",
                          "gdp": 2410909799034.12
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2010",
                          "gdp": 2475244321361.11
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2011",
                          "gdp": 2659310054646.23
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2012",
                          "gdp": 2704887678386.72
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2013",
                          "gdp": 2786022872706.81
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2014",
                          "gdp": 3063803240208.01
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2015",
                          "gdp": 2928591002002.51
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2016",
                          "gdp": 2694283209613.29
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2017",
                          "gdp": 2666229179958.01
                        },
                        {
                          "name": "United Kingdom",
                          "year": "2018",
                          "gdp": 2855296731521.96
                        },
                        {
                          "name": "Russian",
                          "year": "2000",
                          "gdp": 259710142196.94
                        },
                        {
                          "name": "Russian",
                          "year": "2001",
                          "gdp": 306602070620.5
                        },
                        {
                          "name": "Russian",
                          "year": "2002",
                          "gdp": 345470494417.86
                        },
                        {
                          "name": "Russian",
                          "year": "2003",
                          "gdp": 430347770731.79
                        },
                        {
                          "name": "Russian",
                          "year": "2004",
                          "gdp": 591016690742.8
                        },
                        {
                          "name": "Russian",
                          "year": "2005",
                          "gdp": 764017107992.39
                        },
                        {
                          "name": "Russian",
                          "year": "2006",
                          "gdp": 989930542278.7
                        },
                        {
                          "name": "Russian",
                          "year": "2007",
                          "gdp": 1299705764823.62
                        },
                        {
                          "name": "Russian",
                          "year": "2008",
                          "gdp": 1660846387624.78
                        },
                        {
                          "name": "Russian",
                          "year": "2009",
                          "gdp": 1222644282201.86
                        },
                        {
                          "name": "Russian",
                          "year": "2010",
                          "gdp": 1524917468442.01
                        },
                        {
                          "name": "Russian",
                          "year": "2011",
                          "gdp": 2051661732059.78
                        },
                        {
                          "name": "Russian",
                          "year": "2012",
                          "gdp": 2210256976945.38
                        },
                        {
                          "name": "Russian",
                          "year": "2013",
                          "gdp": 2297128039058.21
                        },
                        {
                          "name": "Russian",
                          "year": "2014",
                          "gdp": 2059984158438.46
                        },
                        {
                          "name": "Russian",
                          "year": "2015",
                          "gdp": 1363594369577.82
                        },
                        {
                          "name": "Russian",
                          "year": "2016",
                          "gdp": 1282723881134.01
                        },
                        {
                          "name": "Russian",
                          "year": "2017",
                          "gdp": 1578624060588.26
                        },
                        {
                          "name": "Russian",
                          "year": "2018",
                          "gdp": 1657554647149.87
                        },
                        {
                          "name": "Japan",
                          "year": "2000",
                          "gdp": 4887519660744.86
                        },
                        {
                          "name": "Japan",
                          "year": "2001",
                          "gdp": 4303544259842.72
                        },
                        {
                          "name": "Japan",
                          "year": "2002",
                          "gdp": 4115116279069.77
                        },
                        {
                          "name": "Japan",
                          "year": "2003",
                          "gdp": 4445658071221.86
                        },
                        {
                          "name": "Japan",
                          "year": "2004",
                          "gdp": 4815148854362.11
                        },
                        {
                          "name": "Japan",
                          "year": "2005",
                          "gdp": 4755410630912.14
                        },
                        {
                          "name": "Japan",
                          "year": "2006",
                          "gdp": 4530377224970.4
                        },
                        {
                          "name": "Japan",
                          "year": "2007",
                          "gdp": 4515264514430.57
                        },
                        {
                          "name": "Japan",
                          "year": "2008",
                          "gdp": 5037908465114.48
                        },
                        {
                          "name": "Japan",
                          "year": "2009",
                          "gdp": 5231382674593.7
                        },
                        {
                          "name": "Japan",
                          "year": "2010",
                          "gdp": 5700098114744.41
                        },
                        {
                          "name": "Japan",
                          "year": "2011",
                          "gdp": 6157459594823.72
                        },
                        {
                          "name": "Japan",
                          "year": "2012",
                          "gdp": 6203213121334.12
                        },
                        {
                          "name": "Japan",
                          "year": "2013",
                          "gdp": 5155717056270.83
                        },
                        {
                          "name": "Japan",
                          "year": "2014",
                          "gdp": 4850413536037.84
                        },
                        {
                          "name": "Japan",
                          "year": "2015",
                          "gdp": 4389475622588.97
                        },
                        {
                          "name": "Japan",
                          "year": "2016",
                          "gdp": 4926667087367.51
                        },
                        {
                          "name": "Japan",
                          "year": "2017",
                          "gdp": 4859950558538.97
                        },
                        {
                          "name": "Japan",
                          "year": "2018",
                          "gdp": 4971323079771.87
                        }
                      ],
                      xField: 'year',
                      yField: 'gdp',
                      seriesField: 'name',
                      xAxis: {
                        type: 'dateTime',
                        label: {
                          visible: true,
                          autoHide: true,
                        },
                      },
                      yAxis: {
                        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
                      },
                      legend: {
                        visible: false,
                      },
                      label: {
                        visible: true,
                        type: 'line',
                      },
                      animation: {
                        appear: {
                          animation: 'clipingWithData',
                        },
                      },
                      smooth: true,
                }
            },
            {
                type:'groupedcolumn',
                config:{
                    title: {
                        visible: true,
                        text: '分组柱状图',
                      },
                      forceFit: true,
                      data:[
                        {
                          name: 'London',
                          month: 'Jan.',
                          value: 18.9,
                        },
                        {
                          name: 'London',
                          month: 'Feb.',
                          value: 28.8,
                        },
                        {
                          name: 'London',
                          month: 'Mar.',
                          value: 39.3,
                        },
                        {
                          name: 'London',
                          month: 'Apr.',
                          value: 81.4,
                        },
                        {
                          name: 'London',
                          month: 'May',
                          value: 47,
                        },
                        {
                          name: 'London',
                          month: 'Jun.',
                          value: 20.3,
                        },
                        {
                          name: 'London',
                          month: 'Jul.',
                          value: 24,
                        },
                        {
                          name: 'London',
                          month: 'Aug.',
                          value: 35.6,
                        },
                        {
                          name: 'Berlin',
                          month: 'Jan.',
                          value: 12.4,
                        },
                        {
                          name: 'Berlin',
                          month: 'Feb.',
                          value: 23.2,
                        },
                        {
                          name: 'Berlin',
                          month: 'Mar.',
                          value: 34.5,
                        },
                        {
                          name: 'Berlin',
                          month: 'Apr.',
                          value: 99.7,
                        },
                        {
                          name: 'Berlin',
                          month: 'May',
                          value: 52.6,
                        },
                        {
                          name: 'Berlin',
                          month: 'Jun.',
                          value: 35.5,
                        },
                        {
                          name: 'Berlin',
                          month: 'Jul.',
                          value: 37.4,
                        },
                        {
                          name: 'Berlin',
                          month: 'Aug.',
                          value: 42.4,
                        },
                      ],
                      xField: 'month',
                      yField: 'value',
                      yAxis: {
                        min: 0,
                      },
                      label: {
                        visible: true,
                      },
                      groupField: 'name',
                      color: ['#1ca9e6', '#f88c24'],
                }
            },
            {
                type:'wordcloud',
                config:{
                    wordStyle: {
                        rotation: [-Math.PI / 2, Math.PI / 2],
                        rotateRatio: 0.5,
                        rotationSteps: 4,
                        fontSize: [10, 60],
                        color: (word, weight) => {
                            const arr = [
                                '#5B8FF9',
                                '#5AD8A6',
                                '#5D7092',
                                '#F6BD16',
                                '#E8684A',
                                '#6DC8EC',
                                '#9270CA',
                                '#FF9D4D',
                                '#269A99',
                                '#FF99C3',
                              ];
                              return arr[Math.floor(Math.random() * (arr.length - 1))];                        },
                        active: {
                          shadowColor: '#333333',
                          shadowBlur: 10,
                        },
                        gridSize: 8,
                      },
                    shape: 'cardioid',
                    shuffle: false,
                    backgroundColor: '#fff',
                    tooltip: {
                        visible: true,
                    },
                    selected: -1,                
                    data:[
                    {
                        "value": 12,
                        "name": "DRUGS4COVID"
                    },
                    {
                        "value": 9,
                        "name": "AntV"
                    },
                    {
                        "value": 8,
                        "name": "F2"
                    },
                    {
                        "value": 8,
                        "name": "G2"
                    },
                    {
                        "value": 8,
                        "name": "G6"
                    },
                    {
                        "value": 8,
                        "name": "DataSet"
                    },
                    {
                        "value": 8,
                        "name": "墨者学院"
                    },
                    {
                        "value": 6,
                        "name": "Analysis"
                    },
                    {
                        "value": 6,
                        "name": "Data Mining"
                    },
                    {
                        "value": 6,
                        "name": "Data Vis"
                    },
                    {
                        "value": 6,
                        "name": "Design"
                    },
                    {
                        "value": 6,
                        "name": "Grammar"
                    },
                    {
                        "value": 6,
                        "name": "Graphics"
                    },
                    {
                        "value": 6,
                        "name": "Graph"
                    },
                    {
                        "value": 6,
                        "name": "Hierarchy"
                    },
                    {
                        "value": 6,
                        "name": "Labeling"
                    },
                    {
                        "value": 6,
                        "name": "Layout"
                    },
                    {
                        "value": 6,
                        "name": "Quantitative"
                    },
                    {
                        "value": 6,
                        "name": "Relation"
                    },
                    {
                        "value": 6,
                        "name": "Statistics"
                    },
                    {
                        "value": 6,
                        "name": "可视化"
                    },
                    {
                        "value": 6,
                        "name": "数据"
                    },
                    {
                        "value": 6,
                        "name": "数据可视化"
                    },
                    {
                        "value": 4,
                        "name": "Arc Diagram"
                    },
                    {
                        "value": 4,
                        "name": "Bar Chart"
                    },
                    {
                        "value": 4,
                        "name": "Canvas"
                    },
                    {
                        "value": 4,
                        "name": "Chart"
                    },
                    {
                        "value": 4,
                        "name": "DAG"
                    },
                    {
                        "value": 4,
                        "name": "DG"
                    },
                    {
                        "value": 4,
                        "name": "Facet"
                    },
                    {
                        "value": 4,
                        "name": "Geo"
                    },
                    {
                        "value": 4,
                        "name": "Line"
                    },
                    {
                        "value": 4,
                        "name": "MindMap"
                    },
                    {
                        "value": 4,
                        "name": "Pie"
                    },
                    {
                        "value": 4,
                        "name": "Pizza Chart"
                    },
                    {
                        "value": 4,
                        "name": "Punch Card"
                    },
                    {
                        "value": 4,
                        "name": "SVG"
                    },
                    {
                        "value": 4,
                        "name": "Sunburst"
                    },
                    {
                        "value": 4,
                        "name": "Tree"
                    },
                    {
                        "value": 4,
                        "name": "UML"
                    },
                    {
                        "value": 3,
                        "name": "Chart"
                    },
                    {
                        "value": 3,
                        "name": "View"
                    },
                    {
                        "value": 3,
                        "name": "Geom"
                    },
                    {
                        "value": 3,
                        "name": "Shape"
                    },
                    {
                        "value": 3,
                        "name": "Scale"
                    },
                    {
                        "value": 3,
                        "name": "Animate"
                    },
                    {
                        "value": 3,
                        "name": "Global"
                    },
                    {
                        "value": 3,
                        "name": "Slider"
                    },
                    {
                        "value": 3,
                        "name": "Connector"
                    },
                    {
                        "value": 3,
                        "name": "Transform"
                    },
                    {
                        "value": 3,
                        "name": "Util"
                    },
                    {
                        "value": 3,
                        "name": "DomUtil"
                    },
                    {
                        "value": 3,
                        "name": "MatrixUtil"
                    },
                    {
                        "value": 3,
                        "name": "PathUtil"
                    },
                    {
                        "value": 3,
                        "name": "G"
                    },
                    {
                        "value": 3,
                        "name": "2D"
                    },
                    {
                        "value": 3,
                        "name": "3D"
                    },
                    {
                        "value": 3,
                        "name": "Line"
                    },
                    {
                        "value": 3,
                        "name": "Area"
                    },
                    {
                        "value": 3,
                        "name": "Interval"
                    },
                    {
                        "value": 3,
                        "name": "Schema"
                    },
                    {
                        "value": 3,
                        "name": "Edge"
                    },
                    {
                        "value": 3,
                        "name": "Polygon"
                    },
                    {
                        "value": 3,
                        "name": "Heatmap"
                    },
                    {
                        "value": 3,
                        "name": "Render"
                    },
                    {
                        "value": 3,
                        "name": "Tooltip"
                    },
                    {
                        "value": 3,
                        "name": "Axis"
                    },
                    {
                        "value": 3,
                        "name": "Guide"
                    },
                    {
                        "value": 3,
                        "name": "Coord"
                    },
                    {
                        "value": 3,
                        "name": "Legend"
                    },
                    {
                        "value": 3,
                        "name": "Path"
                    },
                    {
                        "value": 3,
                        "name": "Helix"
                    },
                    {
                        "value": 3,
                        "name": "Theta"
                    },
                    {
                        "value": 3,
                        "name": "Rect"
                    },
                    {
                        "value": 3,
                        "name": "Polar"
                    },
                    {
                        "value": 3,
                        "name": "Dsv"
                    },
                    {
                        "value": 3,
                        "name": "Csv"
                    },
                    {
                        "value": 3,
                        "name": "Tsv"
                    },
                    {
                        "value": 3,
                        "name": "GeoJSON"
                    },
                    {
                        "value": 3,
                        "name": "TopoJSON"
                    },
                    {
                        "value": 3,
                        "name": "Filter"
                    },
                    {
                        "value": 3,
                        "name": "Map"
                    },
                    {
                        "value": 3,
                        "name": "Pick"
                    },
                    {
                        "value": 3,
                        "name": "Rename"
                    },
                    {
                        "value": 3,
                        "name": "Filter"
                    },
                    {
                        "value": 3,
                        "name": "Map"
                    },
                    {
                        "value": 3,
                        "name": "Pick"
                    },
                    {
                        "value": 3,
                        "name": "Rename"
                    },
                    {
                        "value": 3,
                        "name": "Reverse"
                    },
                    {
                        "value": 3,
                        "name": "sort"
                    },
                    {
                        "value": 3,
                        "name": "Subset"
                    },
                    {
                        "value": 3,
                        "name": "Partition"
                    },
                    {
                        "value": 3,
                        "name": "Imputation"
                    },
                    {
                        "value": 3,
                        "name": "Fold"
                    },
                    {
                        "value": 3,
                        "name": "Aggregate"
                    },
                    {
                        "value": 3,
                        "name": "Proportion"
                    },
                    {
                        "value": 3,
                        "name": "Histogram"
                    },
                    {
                        "value": 3,
                        "name": "Quantile"
                    },
                    {
                        "value": 3,
                        "name": "Treemap"
                    },
                    {
                        "value": 3,
                        "name": "Hexagon"
                    },
                    {
                        "value": 3,
                        "name": "Binning"
                    },
                    {
                        "value": 3,
                        "name": "kernel"
                    },
                    {
                        "value": 3,
                        "name": "Regression"
                    },
                    {
                        "value": 3,
                        "name": "Density"
                    },
                    {
                        "value": 3,
                        "name": "Sankey"
                    },
                    {
                        "value": 3,
                        "name": "Voronoi"
                    },
                    {
                        "value": 3,
                        "name": "Projection"
                    },
                    {
                        "value": 3,
                        "name": "Centroid"
                    },
                    {
                        "value": 3,
                        "name": "H5"
                    },
                    {
                        "value": 3,
                        "name": "Mobile"
                    },
                    {
                        "value": 3,
                        "name": "K线图"
                    },
                    {
                        "value": 3,
                        "name": "关系图"
                    },
                    {
                        "value": 3,
                        "name": "烛形图"
                    },
                    {
                        "value": 3,
                        "name": "股票图"
                    },
                    {
                        "value": 3,
                        "name": "直方图"
                    },
                    {
                        "value": 3,
                        "name": "金字塔图"
                    },
                    {
                        "value": 3,
                        "name": "分面"
                    },
                    {
                        "value": 3,
                        "name": "南丁格尔玫瑰图"
                    },
                    {
                        "value": 3,
                        "name": "饼图"
                    },
                    {
                        "value": 3,
                        "name": "线图"
                    },
                    {
                        "value": 3,
                        "name": "点图"
                    },
                    {
                        "value": 3,
                        "name": "散点图"
                    },
                    {
                        "value": 3,
                        "name": "子弹图"
                    },
                    {
                        "value": 3,
                        "name": "柱状图"
                    },
                    {
                        "value": 3,
                        "name": "仪表盘"
                    },
                    {
                        "value": 3,
                        "name": "气泡图"
                    },
                    {
                        "value": 3,
                        "name": "漏斗图"
                    },
                    {
                        "value": 3,
                        "name": "热力图"
                    },
                    {
                        "value": 3,
                        "name": "玉玦图"
                    },
                    {
                        "value": 3,
                        "name": "直方图"
                    },
                    {
                        "value": 3,
                        "name": "矩形树图"
                    },
                    {
                        "value": 3,
                        "name": "箱形图"
                    },
                    {
                        "value": 3,
                        "name": "色块图"
                    },
                    {
                        "value": 3,
                        "name": "螺旋图"
                    },
                    {
                        "value": 3,
                        "name": "词云"
                    },
                    {
                        "value": 3,
                        "name": "词云图"
                    },
                    {
                        "value": 3,
                        "name": "雷达图"
                    },
                    {
                        "value": 3,
                        "name": "面积图"
                    },
                    {
                        "value": 3,
                        "name": "马赛克图"
                    },
                    {
                        "value": 3,
                        "name": "盒须图"
                    },
                    {
                        "value": 3,
                        "name": "坐标轴"
                    },
                    {
                        "value": 3,
                        "name": ""
                    },
                    {
                        "value": 3,
                        "name": "Jacques Bertin"
                    },
                    {
                        "value": 3,
                        "name": "Leland Wilkinson"
                    },
                    {
                        "value": 3,
                        "name": "William Playfair"
                    },
                    {
                        "value": 3,
                        "name": "关联"
                    },
                    {
                        "value": 3,
                        "name": "分布"
                    },
                    {
                        "value": 3,
                        "name": "区间"
                    },
                    {
                        "value": 3,
                        "name": "占比"
                    },
                    {
                        "value": 3,
                        "name": "地图"
                    },
                    {
                        "value": 3,
                        "name": "时间"
                    },
                    {
                        "value": 3,
                        "name": "比较"
                    },
                    {
                        "value": 3,
                        "name": "流程"
                    },
                    {
                        "value": 3,
                        "name": "趋势"
                    },
                    {
                        "value": 2,
                        "name": "亦叶"
                    },
                    {
                        "value": 2,
                        "name": "再飞"
                    },
                    {
                        "value": 2,
                        "name": "完白"
                    },
                    {
                        "value": 2,
                        "name": "巴思"
                    },
                    {
                        "value": 2,
                        "name": "张初尘"
                    },
                    {
                        "value": 2,
                        "name": "御术"
                    },
                    {
                        "value": 2,
                        "name": "有田"
                    },
                    {
                        "value": 2,
                        "name": "沉鱼"
                    },
                    {
                        "value": 2,
                        "name": "玉伯"
                    },
                    {
                        "value": 2,
                        "name": "画康"
                    },
                    {
                        "value": 2,
                        "name": "祯逸"
                    },
                    {
                        "value": 2,
                        "name": "绝云"
                    },
                    {
                        "value": 2,
                        "name": "罗宪"
                    },
                    {
                        "value": 2,
                        "name": "萧庆"
                    },
                    {
                        "value": 2,
                        "name": "哦豁"
                    },
                    {
                        "value": 2,
                        "name": "逍为"
                    },
                    {
                        "value": 2,
                        "name": "翎刀"
                    },
                    {
                        "value": 2,
                        "name": "陆沉"
                    },
                    {
                        "value": 2,
                        "name": "顾倾"
                    },
                    {
                        "value": 2,
                        "name": "Domo"
                    },
                    {
                        "value": 2,
                        "name": "GPL"
                    },
                    {
                        "value": 2,
                        "name": "PAI"
                    },
                    {
                        "value": 2,
                        "name": "SPSS"
                    },
                    {
                        "value": 2,
                        "name": "SYSTAT"
                    },
                    {
                        "value": 2,
                        "name": "Tableau"
                    },
                    {
                        "value": 2,
                        "name": "D3"
                    },
                    {
                        "value": 2,
                        "name": "Vega"
                    },
                    {
                        "value": 2,
                        "name": "统计图表"
                    }
                    ]
                }
            }
        ]
        resolve(charts)
    });
}

