import React from 'react'
import Member from './Member'
function getMember(member){
    return(
    <h1>{member.name}</h1>
    )
}
export default function Team({team}){
    console.log("ESTE EL TEAM")
    console.log(team)
    return(
        <div className="teamSection row">
            {team.map((member) => {
                return(
                    <div className="col-xs-6 col-md-4 col-lg-2 py-2 align-self-center">
                        <Member data={member}></Member>
                    </div>
                )
            })}
        </div>

    )
}

