import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const images = require.context('../assets/', true);

export default function Member({data, gId}){ 
    return(
        <div>
            <div className="row col-8 mx-auto tex-center">
                <img src={images('./' + data.source)} alt="" className="memberImg img-fluid mx-auto rounded-circle"/>
            </div>
            <h5 className="text-center oswald">
                {data.name}
                <span> </span>
                {data.institution.length !== 0 ? (<small><span className="badge badge-info">{data.institution}</span> </small>):''}
            </h5>
            <h6 className="text-center greyText montserrat">
                {data.role} <span> </span>
                {data.group.length !== 0 ? ( <small><span className="badge badge-primary">{data.group}</span></small>):''}
            </h6>
            <div className="row justify-content-center memberLink">
                {data.twitter.length !== 0 ? (
                <div className="col-1">
                    <a target="_blank" href={"https://twitter.com/" + data.twitter}>
                        <FaTwitter/>
                    </a>
                </div>
                ):''}
                {data.linkedin.length !== 0 ? (
                <div className="col-1">
                    <a target="_blank" href={data.linkedin}>
                        <FaLinkedin/>
                    </a>
                </div>
                ):''}
                {data.github.length !== 0 ? (
                <div className="col-1">
                    <a target="_blank" href={"https://github.com/" + data.github}>
                        <FaGithub/>
                    </a>
                </div>
                ):''}
                {data.email.length !== 0 ? (
                <div className="col-1">
                    <a target="_blank" href={"mailto:" + data.email}>
                        <MdEmail/>
                    </a>
                </div>                 
                ):''}                               
            </div>
        </div>
    )
}
