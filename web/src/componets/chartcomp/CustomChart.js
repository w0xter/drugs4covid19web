import React from 'react'
import {GroupedColumnChart,BarChart, ColumnChart,LineChart, AreaChart, WordCloudChart} from '@opd/g2plot-react'

export default function CustomChart(props){
    const chooseChart = () => {
        switch (props.data.type){
            case 'bar':
                return <BarChart {... props.data.config}/>
            case 'line':
                return <LineChart {... props.data.config}/>
            case 'area':
                return <AreaChart {... props.data.config}/>
            case 'wordcloud':
                return <WordCloudChart {... props.data.config}/>
            case 'column':
                return <ColumnChart {... props.data.config}/>
            case 'groupedcolumn':
                return <GroupedColumnChart {... props.data.config}/>
            default:
                return <h1>ALGO VA MAL</h1>

        }
    }
    return (
        <>
        {chooseChart()}
        </>
        )
}