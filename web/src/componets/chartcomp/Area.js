import React from 'react'
import { AreaChart } from '@opd/g2plot-react'

export default function Bar(props){ 
    const config = {
        height: 400,
        title: {
          visible: true,
          text: props.text.title,
        },
        description: {
          visible: true,
          text: props.text.subtitle,
        },
        padding: 'auto',
        forceFit: true,
        xField:props.data.xField,
        yField: props.data.yField,
        xAxis:props.data.xAxis,
        data:props.data.values,
      }
    return <AreaChart {...config}/>
}