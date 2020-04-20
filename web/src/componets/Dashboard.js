import React from 'react'
import {Row, Col, Radio} from 'antd'
import CustomChart from './chartcomp/CustomChart'
import {getCharts} from '../api/requests'
export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            size:12
        }
        this.changeSize = this.changeSize.bind(this)

    }
    changeSize(e){
        this.setState({size:e.target.value})
    }
    render(){
        return(
            <>
                <Radio.Group onChange={this.changeSize} defaultValue={this.state.size}>
                    <Radio.Button value={12}>2 Charts</Radio.Button>
                    <Radio.Button value={24}>1 Chart</Radio.Button>
                </Radio.Group>
                <Row justify="center" align="middle" gutter={[16,16]}>
                    {this.state.data.map((chart) => (
                        <Col xs={24} md={this.state.size}>
                            <CustomChart data={chart}/>
                        </Col>
                    ))}
                </Row>
            </>
        )

    }
    componentDidMount(){
        getCharts().then((data) => {
            this.setState({data:data})
        })
    }
} 