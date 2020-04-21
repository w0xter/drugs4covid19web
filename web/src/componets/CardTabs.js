import React from 'react'
import {Tabs, Space, Row, Col, Typography, List, Statistic} from 'antd'

const {Text}= Typography
const {Title}= Typography
const {Paragraph}= Typography

const {Tabpane} = Tabs

const CustomList = ({data}) => {
return(
    <div>
    { data.lists.map((list, idx) => {
        const title = idx !== 0 ? list.title:''
        let dataList = idx !== 0 ? list.data:list
        return (
        <div className={idx !== 0? 'mt-3':''}>
        <List
        bordered
        header={title !== '' ? <Title type="secondary" level={4}>{title}</Title>:null}
        dataSource={dataList}
        renderItem={item =>{
                return( 
                    <List.Item>
                        {item.type === 'link' ?(
                            <a href={item.link} target="_blank">{item.text}</a>    
                        ):(
                        item.text
                        )}
                    </List.Item>
                )
        }}
    />
    </div>
    )})}
    </div>
)
}
export default class CardTabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            motivation:props.motivation,
            problems:props.problems,
            methodology:props.methodology,
            results:props.results,
            hypothesis:props.hypothesis,
            conclusions:props.conclusions

        }
    }
    render(){
        return(
            <>
            <Space direction="vertical" size="large">
                <div>
                <Title level={3}>
                    {this.state.motivation.title}
                </Title>
                <Paragraph>
                    {this.state.motivation.text}
                </Paragraph>
                </div>
                <div>
                <Title level={3}>
                    {this.state.problems.title}
                </Title>
                {Object.keys(this.state.problems).includes('lists') ? (
                    <CustomList data={this.state.problems}/>
                ):(
                    <Paragraph>
                        {this.state.problems.text}
                    </Paragraph>
                )}
                </div>
                <div>
                <Title level={3}>
                    {this.state.hypothesis.title}
                </Title>
                <Paragraph>
                    {this.state.hypothesis.text}
                </Paragraph>
                </div>
                <div>
                <Title level={3}>
                    {this.state.methodology.title}
                </Title>
                <CustomList data={this.state.methodology}></CustomList>
                </div>
                <div>
                <Title level={3}>
                    {this.state.results.title}
                </Title>
                <CustomList data={this.state.results}></CustomList>
                </div>
                {
                    Object.keys(this.state.conclusions).length !== 0 ? (
                        <div>
                        <Title level={3}>
                            {this.state.conclusions.title}
                        </Title>

                        {Object.keys(this.state.conclusions).includes('text') ?(
                            <Paragraph>
                                {this.state.conclusions.text}
                            </Paragraph>
                        ):(
                            <Row justify="center" align="middle" gutter={[16,16]}>
                                {Object.keys(this.state.conclusions.statistics).map((key) => (
                                    <Col className="text-center">
                                        <Statistic title={key} precision={2} value={this.state.conclusions.statistics[key]}/>
                                    </Col>
                                ))}
                            </Row>
                        )}
                        </div>
                    ):''
                }
            </Space>
            </>
        ) 
    }
   
}