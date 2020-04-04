import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd'
import G6 from '@antv/g6';
import { fetchDemo, getDbpedia } from '../api/requests';
//https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+*+where+%7B%3Fs+%3Fp+%3Fo%7D+LIMIT+100&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+
  const Graph = () => {
    const ref = React.useRef(null)
    let graph = null
  
    useEffect(() => {
      if(!graph) {
        getDbpedia().then((data) => {
            console.log(data)
            const nodes = data.nodes
            nodes.forEach(node => {
                if (!node.style) {
                  node.style = {};
                }
                switch (
                  node.class // Configure the graphics type of nodes according to their class
                ) {
                  case 'uri': {
                    node.type = 'circle';
                    node.fill = "steelblue"
                    node.size = 50// The graphics type is circle when class = 'c0'
                    break;
                  }
                  case 'literal' || 'typed-literal': {
                    node.type = 'rect'; // The graphics type is rect when class = 'c1'
                    node.size = [35, 20]; // The node size when class = 'c1'
                    node.fill="#FF4D00"
                    break;
                  }
                  case 'c2': {
                    node.type = 'ellipse'; // The graphics type is ellipse when class = 'c2'
                    node.size = [35, 20]; // The node size when class = 'c2'
                    break;
                  }
                }
              });
              const minimap = new G6.Minimap({
                size: [100, 100],
                className: 'minimap',
                type: 'delegate',
              });                      
            graph = new G6.Graph({
                container: ref.current,
                width: 1000,
                height: 600,
                groupByTypes: false,
                fitViewPadding: [20, 40, 50, 20],
                animate:true,
                plugins:[minimap],
                nodeStateStyles: {
                    // The node style when the state 'hover' is true
                    hover: {
                      fill: 'lightsteelblue',
                    },
                    // The node style when the state 'click' is true
                    click: {
                      stroke: '#000',
                      lineWidth: 3,
                    },
                  },
                  // The edge styles in different states
                  edgeStateStyles: {
                    // The edge style when the state 'click' is true
                    click: {
                      stroke: 'steelblue',
                    },
                  },                
                modes: {
                    default: ['drag-canvas',
                    'zoom-canvas', 
                    'drag-node', 
                // {
                //     type: 'tooltip', // Tooltip
                //     formatText(model) {
                //     // The content of tooltip
                //     const text = 'label: ' + model.label + '<br/> class: ' + model.class;
                //     return text;
                //     },
                // },      
                // {
                //     type: 'edge-tooltip', // Edge tooltip
                //     formatText(model) {
                //       // The content of the edge tooltip
                //       const text =
                //         'source: ' +
                //         model.source +
                //         '<br/> target: ' +
                //         model.target +
                //         '<br/> weight: ' +
                //         model.weight;
                //       return text;
                //     },
                //   },
                ], // Allow users to drag canvas, zoom canvas, and drag nodes
                  },          
                layout:{
                    type:'force', 
                    preventOverlap:true,
                    linkDistance:300
                },
                defaultEdge: {
                    labelCfg: {
                        autoRotate: false,
                      },                },
                labelCfg: {
                    // The style properties for the label
                    style: {
                      fill: '#fff', // The color of the text
                    }
                },
                defaultNode: {
                    size: 30, // The size of nodes
                    // ...                 // The other properties
                    // The style properties of nodes
                    style: {
                      fill: 'steelblue', // The filling color of nodes
                      stroke: '#666', // The stroke color of nodes
                      lineWidth: 1, // The line width of the stroke of nodes
                    },
                    
                },
                
              });
               
        const edges = data.edges;
        edges.forEach(edge => {
            if (!edge.style) {
                edge.style = {};
            }
            edge.style.lineWidth = 1; // Mapping the weight in data to lineWidth
            edge.style.opacity = 0.6;
            edge.style.stroke = 'grey';
        })   
        graph.data(data)
        return graph.render()           
        })

      }

    }, [])
  
    const handleChangeData = () => {
      const node = graph.findById('SubTreeNode1')
      graph.updateItem(node, {
        label: 'xxx',
        style: {
          fill: 'red'
        }
      })
    }
  
    return (
      <div ref={ref}>
        <Button onClick={handleChangeData} type='primary'>Update</Button>
      </div>
    );
  }
  export default Graph