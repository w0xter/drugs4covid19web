import React from 'react'
import {Row, Col, Avatar,Typography} from 'antd'
import {TwitterOutlined} from '@ant-design/icons'
import logo from '../assets/logo.white.svg'
export default function Footer(){
    return(
        <div className="mt-xs-3 mt-md-5" style={{background:'#0b81aa'}}>
            <Row justify="space-between" align="middle">
                <Col xs={0} md={12}>
                    <div className="m-2">
                        <img src={logo} alt="DRUGS4COVID"   style={{ height: 50 }} className="img-fluid"/>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <Avatar color="blue" icon={<TwitterOutlined/>}/>
                </Col>
            </Row>
        </div>
    )
}