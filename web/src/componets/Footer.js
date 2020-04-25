import React from 'react'
import {Row, Col, Avatar,Typography, Tooltip} from 'antd'
import {TwitterOutlined} from '@ant-design/icons'
import logo from '../assets/logo.svg'
export default function Footer(){
    return(
        <div className="mt-xs-3 mt-md-5">
            <Row justify="" align="middle">
                <Col xs={12}>
                    <div className="m-2">
                        <img src={logo} alt="DRUGS4COVID"   style={{ height: 50 }} className="img-fluid"/>
                    </div>
                </Col>
                <Col xs={12}>
                    <Row style={{float:'right'}}>
                        <Col>
                        <Tooltip title="@oeg_upm">
                        <a href="https://twitter.com/oeg_upm?s=20"><h3 className="blue"><TwitterOutlined/></h3></a>
                        </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}