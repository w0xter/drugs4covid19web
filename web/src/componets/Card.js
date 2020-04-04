import React from 'react'
const images = require.context('../assets/', true);
export default function Card({data}){
    return(
        <div class="card fullCard">
            <h5 class="card-title title pt-2">{data.step}) {data.title}</h5>
            <img src={images('./'+data.source)} class="card-img-top img-fluid p-2"/>
            <div class="card-body text-left">
            <p class="card-text text-justify montserrat">{data.content}</p>
            </div>
      </div>
    )
}