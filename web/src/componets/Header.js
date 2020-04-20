import React from 'react'
import Scrollspy from 'react-scrollspy'
import {Link} from 'react-router-dom'
import data from '../assets/data/chartdata'
import logo from '../assets/logo.svg'
import logoMin from '../assets/logo.min.svg'
import {MdMenu} from 'react-icons/md'
import {Menu, Button, Tooltip, Affix, Anchor, Row, Col} from 'antd'
import {GlobalOutlined, SearchOutlined, MenuOutlined} from '@ant-design/icons'

const text = document.location.href.toString().slice(-2) !== 'EN' ? data.navText[1]:data.navText[0]
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:document.location.href.toString().slice(-2) !== 'EN' ? data.navText[1]:data.navText[0],
            collapsed:true
        }
    }
    changeLang(){
        //let newText = this.state.text.lang !== 'EN' ? data.navText[1]:data.navText[0]
        //this.setState(newText)
        document.location.href=`/lang/${this.state.text.lang}`

    }
    render(){
        let menuLinks = Object.keys(this.state.text)
        const index = menuLinks.indexOf('lang');
        if (index > -1) {
            menuLinks.splice(index, 1);
        }
    return(
        <Affix>
        <Row gutter={[16,16]} style={{background:'#fff'}}>
            <Col md={10}>
            <img src={logo} className="img-fluid d-inline-block align-top" alt="" style={{ height: 50 }}/>
            </Col>
            <Col xs={2} md={14}>
            <Menu mode="horizontal" style={{ borderBottom: 'none'}} overflowedIndicator={<MenuOutlined />}>  
            {
                menuLinks.map((key) => (
                    <Menu.Item key={key}>
                    <a href={"#" + key}>{this.state.text[key]}</a>
                    </Menu.Item>  
                ))
            }        
            <Menu.Item className="Item" key="lang">
                <Tooltip title={"Translate to " + this.state.text.lang}>
                <Button type="secondary" onClick={() => this.changeLang()}>
                    {this.state.text.lang}
                </Button>
                </Tooltip>
            </Menu.Item>              
            </Menu>

            </Col>
        </Row>                 
        </Affix>
    )
}

}