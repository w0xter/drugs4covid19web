import React from 'react'
import LuisPozo from '../assets/teamImages/yoHead.png'
export default function Member({data, gId}){
    return(
        <div className={gId,"member"}>
            <div className="row">
                <div className="col-5 mx-auto">
                    <img src={data.source} alt="" className="img-fluid rounded-circle"/>
                </div>
            </div>
            <div className="row">
                <div className="col-5 mx-auto title">
                    {data.name}
                </div>
            </div>
            <div className="row">
                <div className="col-5 mx-auto title">
                    {data.role}
                </div>
            </div>
        </div>
    )
}