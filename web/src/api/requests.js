import axios from 'axios'
const demo = 'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json'
const dbPedia = 'https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+*+where+%7B%3Fs+%3Fp+%3Fo%7D+LIMIT+10&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+'

export function fetchDemo(){
    return new Promise((resolve, reject) => {
        axios.get(demo).then((data) => resolve(data)).catch(e => reject(e))
    });
}
function getDataDbpedia(){
    return new Promise((resolve, reject) => {
        axios.get(dbPedia).then((data) => {
            resolve(data.data)
        }).catch((err) => reject(err))
    });
}
export async function getDbpedia(){
    return new Promise((resolve, reject) => {
        getDataDbpedia().then((data) => {
        console.log("RAW DATA")
        console.log(data)
        let result = {nodes:[], edges:[]}
        let uris = []
        Promise.resolve(
        data.results.bindings.forEach((tpo) => {
            data.head.vars.forEach((key, i, arr) => {
                let el = tpo[key]
                el.value = el.value.replace("http://dbpedia.org/", "dbpedia:")
                if(i === 0 && !uris.includes(el.value)){
                    uris.push(el.value)
                    result.nodes.push(
                        {
                            "id":el.value,
                            "label":el.value,
                            "class": el.type
                        }
                    )
                }
                else if( i === 2){
                    if(el.type === 'uri' && !uris.includes(el.value)){
                        uris.push(el.value)

                        result.nodes.push(
                            {
                                "id":el.value,
                                "label":el.value,
                                "class": el.type
                            }
                        )                        
                    }else if(el.type !== 'uri'){
                        result.nodes.push(
                            {
                                "id":tpo[arr[0]].value + '#' + el.type + '#' + el.value,
                                "label":el.value,
                                "class": el.type
                            }
                        )                         
                    }
                }else{
                    el.value = el.value.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "rdf:type")
                    result.edges.push(
                        {
                            "source": tpo[arr[0]].value,
                            "target":tpo[arr[2]].type === 'uri' ? tpo[arr[2]].value: `${tpo[arr[0]].value}#${tpo[arr[2]].type}#${tpo[arr[2]].value}`,
                            "label": el.value,
                            "weight":1.0
                        }
                    )
                }
            });
        })).then(() => resolve(result))
        console.log(result)
    }).catch((err) => reject(err))
    })
}