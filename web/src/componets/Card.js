import React from 'react'
import ReactMarkdown from 'react-markdown'

const images = require.context('../assets/', true);

export default function Card({data}){
    return(
        <div class="card fullCard">
            <img src={images('./'+data.source)} class="card-img-top img-fluid p-2"/>
            <div class="card-body text-left d-flex flex-column">
                <div className="mt-auto">
                <h5 class="card-title title pt-2 ">{data.step}) {data.title}</h5>
                <p class="card-text text-justify montserrat ">{data.content}</p>
                </div>
            </div>
            <div className="card-footer whiteBg">
                <button className="btn btn1 float-right" data-toggle="modal" data-target={"#modal-" + data.step}>¿Cómo funciona?</button>
            </div>
            <div class="modal fade" id={"modal-" + data.step} tabindex="-1" role="dialog" aria-labelledby={"modal-label-" + data.step} aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id={"modal-label-" + data.step}>{data.title}</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body  text-left">
                <ReactMarkdown   escapeHtml={false} source={data.md}/>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}