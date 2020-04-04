import React from 'react'
import Layout from '../componets/Layout'
import Graph from '../componets/Graph'
import Team from '../componets/Team'
import { Bar,Bubble,Radar, Line} from 'react-chartjs-2';

export default function Home(){
    let data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Suministros de Medicamentos',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
    let data2 = {
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
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };
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
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-xs-12 col-lg-4 offset-lg-1">
                        <h3 className="title text-left">DRUGS4COVID</h3>
                        <h5 className="text-justify montserrat">
                        Creando un catálogo de medicamentos usados para combatir el COVID-19, según la literatura científica, mediante el uso de técnicas de Inteligencia Artificial y Ciencia Ciudadana.                        </h5>
                    </div>
                    <div className="col-xs-12 offset-lg-1 col-lg-4 float-right">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                <section id="problem" className="fullScreenSection">
                    <div className="row mt-5">
                        <div className=" col-xs-12 offset-lg-1 col-lg-8">
                            <h3 className="title text-left">Problemas</h3>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-12 offset-lg-1 col-lg-4">
                        <h5 class="montserrat">
                            <b>Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando</b>
                        </h5>                            
                        <Line data={data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-4 offset-lg-6">
                            <h5 className="montserrat">
                                <b>¿Cómo interactúan dos medicamentos que se están utilizando con pacientes?</b>
                            </h5>
                            <Radar data={data2}></Radar>
                        </div>
                    </div>
                </section>
                <section id="solution" className="fullScreenSection">
                    <div className="row">
                        <div className="col-xs-12 offset-lg-1 col-lg-8">
                            <h3 className="title text-left">La solución se convierte en un problema</h3>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}