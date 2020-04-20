import React from 'react'
import {TwitterOutlined, LinkedinFilled, GithubOutlined, MailOutlined} from '@ant-design/icons'
import {Row, Col, Avatar,Tooltip, Typography, Tag} from 'antd'
const images = require.context('../assets/', true);

const {Text} = Typography
export default function Member({data, gId}){
    const groups = {
        DEV:{tooltip:'Developers Group', color:'magenta'},
        NLP:{tooltip:'Natural Language Processing Group', color:'purple'},
        KG:{tooltip:'Knowledge Graph Creation Group', color:'volcano'},
        Support:{tooltip:'Support Group', color:'green'},
        CS:{tooltip:'Citizen Science Group', color:'cyan'}
    }
    const intstituions = {
        UPM:'#1f82c0',
        SERMAS:'#d10002'

    }
    return(
        <>
        <Row justify="center">
            <Col>
                <Avatar size={150} src={images('./' + data.source)}></Avatar>
            </Col>
        </Row>
        <Row justify="center">
            <Col className="text-center">
                <Text strong>{data.name}</Text>
            </Col>
        </Row>        
        <Row justify="center" className="mt-1">
                <Col className="">
                    <Tooltip title={groups[data.group].tooltip}>
                        <Tag color={groups[data.group].color}>{data.group}</Tag>
                    </Tooltip>
                </Col>
                { data.institution.length !== 0 ?(
                <Col className="">
                    <Tag color={intstituions[data.institution]}>{data.institution}</Tag>
                </Col>
                ):''
                }
        </Row>        
        <Row justify="center" gutter={[8,8]}>
            {data.twitter.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"https://twitter.com/" + data.twitter}>
                    <TwitterOutlined />
                    </a>
                </Col>
                ):''}
                {data.linkedin.length !== 0 ? (
                <Col >
                    <a target="_blank" href={data.linkedin}>
                    <LinkedinFilled />
                    </a>
                </Col>
                ):''}
                {data.github.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"https://github.com/" + data.github}>
                    <GithubOutlined />
                    </a>
                </Col>
                ):''}
                {data.email.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"mailto:" + data.email}>
                    <MailOutlined />
                    </a>
                </Col>                 
                ):''} 
        </Row>        
        </>
        // <div>
        //     <div className="row col-8 mx-auto tex-center">
        //         <img src={images('./' + data.source)} alt="" className="memberImg img-fluid mx-auto rounded-circle"/>
        //     </div>
        //     <h5 className="text-center oswald">
        //         {data.name}
        //         <span> </span>
        //         {data.institution.length !== 0 ? (<small><span className="badge badge-info">{data.institution}</span> </small>):''}
        //     </h5>
        //     <h6 className="text-center greyText montserrat">
        //         {data.role} <span> </span>
        //         {data.group.length !== 0 ? ( <small><span className="badge badge-primary">{data.group}</span></small>):''}
        //     </h6>
        //     <div className="row justify-content-center memberLink">
        //         {data.twitter.length !== 0 ? (
        //         <div >
        //             <a target="_blank" href={"https://twitter.com/" + data.twitter}>
        //                 <FaTwitter/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.linkedin.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={data.linkedin}>
        //                 <FaLinkedin/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.github.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={"https://github.com/" + data.github}>
        //                 <FaGithub/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.email.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={"mailto:" + data.email}>
        //                 <MdEmail/>
        //             </a>
        //         </div>                 
        //         ):''}                               
        //     </div>
        // </div>
    )
}
