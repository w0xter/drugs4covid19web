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
    return(
        <Layout>
            <div className="container-fluid" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <section id="info" className="p-lg-5">
                <div className="row mt-5">
                    <div className="col-xs-12 col-lg-6">
                        <h3 className="title text-left">DRUGS4COVID</h3>
                        <h5 className="text-justify montserrat">
                        Queremos crear un catálogo de medicamentos usados para combatir el COVID-19, según la literatura científica,
                        mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana
                        </h5>
                    </div>
                    <div className="col-xs-12 col-lg-6 float-right">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1FnGkJtQJDY" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                </section>
                <section id="problem" className="fullScreenSection p-5">
                    <div className="row mt-5">
                        <div className=" col-xs-12 col-lg-8">
                            <h3 className="title  text-left">Problemas</h3>
                        </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-xs-12 col-lg-6 ">
                            <h4 className="subtitle text-left">Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando</h4>
                            <p className="text-justify montserrat">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus libero turpis, ut hendrerit erat pulvinar a. Vivamus lobortis varius lectus dapibus sollicitudin. Nulla purus est, accumsan ac libero a, vulputate laoreet mi. Quisque malesuada hendrerit turpis ut ornare. Donec vel ligula et quam mollis aliquam. Mauris congue et lacus eget consequat. Morbi arcu magna, vulputate ut tellus in, fringilla gravida erat. Duis consectetur a urna sit amet accumsan. Nulla dignissim justo sed ultrices gravida. Proin porttitor, metus eu fermentum tempus, orci arcu porta lectus, vitae rhoncus leo lorem in nisl. 
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
                    </div>                    <div className="row mt-5">

                        <div className="col-lg-6  ">
                        <h4 className="subtitle text-left">
                                ¿Cómo interactúan dos medicamentos que se están utilizando con pacientes?
                            </h4>                           
                        <p className="text-justify montserrat ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus libero turpis, ut hendrerit erat pulvinar a. Vivamus lobortis varius lectus dapibus sollicitudin. Nulla purus est, accumsan ac libero a, vulputate laoreet mi. Quisque malesuada hendrerit turpis ut ornare. Donec vel ligula et quam mollis aliquam. Mauris congue et lacus eget consequat. Morbi arcu magna, vulputate ut tellus in, fringilla gravida erat. Duis consectetur a urna sit amet accumsan. Nulla dignissim justo sed ultrices gravida. Proin porttitor, metus eu fermentum tempus, orci arcu porta lectus, vitae rhoncus leo lorem in nisl. 
                            </p>
                        </div>
                        <div className="col-xs-12 col-lg-6">                          
                            <Radar data={data.radar}></Radar>                           
                        </div>                        
                    </div>
                </section>
                <section id="solution" className="fullScreenSection p-lg-5">
                <h3 className="title text-left">La solución se convierte en un nuevo problema</h3>

                    <div className="row mt-5 h-100">
                        <div className="col-xs-12 col-lg-6 align-self-center">
                            <h5 className="montserrat text-left"><b><u>CORD-19</u></b></h5>
                            <p className="montserrat text-justify my-auto">
                        La gran riqueza de documentación científica supone al mismo tiempo un gran problema para su exploración. Si una persona desea conocer la aplicación o uso de un medicamento en el tratamiento del COVID-19, o de predecesores similares, o identificar las relaciones entre medicamentos descritos en un protocolo de actuación, debe navegar por este gran corpus de documentación donde los medicamentos aparecen mencionados con distintos nombres (nombre comercial, principio activo, grupo terapeútico), y en ocasiones la mención de un medicamento informa de su posible utilización y en otros casos puede tratarse de una frase sin relevancia para este objetivo.                            
                        </p>  
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <Bubble data={data.bubble} options={{aspectRatio:1}}></Bubble>
                            <h5 className="montserrat">
                                La nomenclatura de los medicamentos varía según el contexto 
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
                          <h3 className="subtitle text-left">Algunos datos:</h3>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-6 col-lg-4">
                            <Pie data={data.pie}></Pie>
                            <h5 className="montserrat mt-2">
                                Diferentes Idiomas
                            </h5>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                        <Bar data={data.bar}></Bar>
                            <h5 className="montserrat mt-2">
                                Muchas Fuentes entre las que consultar
                            </h5>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                            <Doughnut data={data.donut}></Doughnut>
                            <h5 className="montserrat mt-2">
                                Distintos Formatos
                            </h5>
                        </div>                                                                      
                    </div>
                    <div className="row mt-5">

                    </div>
                </section>
                <section id="approach" className="fullScreenSection p-lg-5">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h3 className="text-left title">Nuestro Enfoque</h3>
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