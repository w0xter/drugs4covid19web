import React from 'react'
import {Row, Col, Typography} from 'antd'
import logo from '../assets/logo.svg'
export default function Footer(){
    return(
        <div className="mt-xs-3 mt-md-5" style={{background:'#0b81aa'}}>
            <Row>
                <Col>
                    <img src={logo} alt="DRUGS4COVID" style={{ height: 50 }} className="img-fluid"/>
                </Col>
            </Row>
        </div>
    )
}