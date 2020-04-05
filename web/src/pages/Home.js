import React from 'react'
import Layout from '../componets/Layout'
import Graph from '../componets/Graph'
import Team from '../componets/Team'
import { Bar,Bubble,Radar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Card from '../componets/Card'
import data from '../assets/data/chartdata'
export default function Home(){

    let team = [
                {
                    name:'Luis Pozo',
                    group:'0',
                    role:'Web Developer', 
                    source:'https://www.luispozo.es/image/yoHead.png'
                },
                {
                    name:'Luis Pozo',
                    group:'0',
                    role:'Web Developer', 
                    source:'https://www.luispozo.es/image/yoHead.png'
                },
                {
                    name:'Luis Pozo',
                    group:'0',
                    role:'Web Developer', 
                    source:'https://www.luispozo.es/image/yoHead.png'
                },
                {
                    name:'Luis Pozo',
                    group:'0',
                    role:'Web Developer', 
                    source:'https://www.luispozo.es/image/yoHead.png'
                }
            ]
    let text = data.spanish
    return(
        <Layout>
            <div className="container-fluid" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <section id="info" className="p-lg-5">
                <div className="row mt-5">
                    <div className="col-xs-12 col-lg-6">
                        <h3 className="title text-left">{text.info.title1}</h3>
                        <h5 className="text-justify montserrat">
                            { text.info.text1}
                        </h5>
                    </div>
                    <div className="col-xs-12 col-lg-6 float-right">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={text.info.videoLink} allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                </section>
                <section id="problem" className="fullScreenSection p-5">
                    <div className="row mt-5">
                        <div className=" col-xs-12 col-lg-8">
                            <h3 className="title  text-left">{text.problems.title0}</h3>
                        </div>
                    </div>
                    <div className="row mt-5 h-100">
                    <div className="col-xs-12 col-lg-6 align-self-center">
                            <h4 className="subtitle text-left">
                                {text.problems.title1}
                            </h4>
                            <p className="text-justify montserrat">
                                {text.problems.text1}
                            </p>
                        </div>                        
                        <div className="col-xs-12 col-lg-6">                            
                        <Line data={data.line}/>                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-lg-9 py-3 mx-auto">
                        <hr className="blue"/>
                        </div>
                    </div>                
                    <div className="row mt-5 h-100">
                        <div className="col-lg-6  align-self-center">
                        <h4 className="subtitle text-left">
                            {text.problems.title2}
                        </h4>                           
                        <p className="text-justify montserrat ">
                            {text.problems.text2}
                        </p>
                        </div>
                        <div className="col-xs-12 col-lg-6">                          
                            <Radar data={data.radar}></Radar>                           
                        </div>                        
                    </div>
                </section>
                <section id="solution" className="fullScreenSection p-lg-5">
                <h3 className="title text-left">
                    {text.resources.title0}
                </h3>

                    <div className="row mt-5 h-100">
                        <div className="col-xs-12 col-lg-6 align-self-center">
                            <h5 className="subtitle text-left">
                                {text.resources.title1}
                            </h5>
                            <p className="montserrat text-justify my-auto">
                                {text.resources.text1}
                        </p>  
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <Bubble data={data.bubble} options={{aspectRatio:1}}></Bubble>
                            <h5 className="montserrat">
                                {text.resources.graphtitle1}
                            </h5>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-lg-9 py-3 mx-auto">
                        <hr className="blue"/>
                        </div>
                    </div>
                    <div className="row-mt-5">
                        <div className="col-xs-12 col-lg-6 ">
                          <h3 className="subtitle text-left">
                              {text.resources.title2}
                          </h3>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-6 col-lg-4">
                            <Pie data={data.pie}></Pie>
                            <h5 className="montserrat mt-2">
                                {text.resources.graphtitle2}
                            </h5>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                        <Bar data={data.bar}></Bar>
                            <h5 className="montserrat mt-2">
                            {text.resources.graphtitle3}
                            </h5>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                            <Doughnut data={data.donut}></Doughnut>
                            <h5 className="montserrat mt-2">
                            {text.resources.graphtitle4}
                            </h5>
                        </div>                                                                      
                    </div>
                </section>
                <section id="approach" className="fullScreenSection p-lg-5">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h3 className="text-left title">
                                {text.approach.title0}
                            </h3>
                        </div>
                    </div>
                    <div className="card-deck mt-5">
                    {data.approach.map((card) => {
                        return(
                                <Card data={card}></Card>
                        )
                    })}
                    </div>
                </section>
            </div>
        </Layout>
    )
}