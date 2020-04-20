import React from 'react'
import Layout from '../componets/Layout'
import Graph from '../componets/Graph'
import { Bar,Bubble,Radar, Line, Pie, Doughnut} from 'react-chartjs-2';
import {Row, Col} from 'antd'
import Card from '../componets/Card'
import data from '../assets/data/chartdata'
import Description from '../componets/homecomp/Description'
import Problem from '../componets/homecomp/Problem'
import Resources from '../componets/homecomp/Resources'
import Approach from '../componets/homecomp/Approach'
import Team from '../componets/homecomp/Team'

const images = require.context('../assets/', true);
export default function Home(props){
    let lang = null
    try{
         lang = props.match.params.lang

    }catch(err){
        console.log(err)
    }
    let text = lang === 'EN'? data.languages[1]:data.languages[0]
    return(
        <Layout>
            <span className="my-5" id="introduction"> </span>
            <Description text={text.info}></Description>
            <span className="my-5" id="problem"> </span>
            <Problem text={text.problems} data={data.MedicineStock}></Problem>
            <span className="my-5" id="resources"> </span>
            <Resources text={text.resources} data={{Line:data.ArticlesPerYear, List:data.List}}></Resources>
            <span className="my-5" id="approach"> </span>
            <Approach text={text.approach} data={text.approach.data}></Approach>
            <span id="team" className="my-5"></span>
            <Team text={text.team} data={data.teamData}></Team>
        </Layout>
        )
}