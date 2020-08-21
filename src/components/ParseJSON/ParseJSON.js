import React, { Component } from 'react'
import data from '../data/example.json'
import './index.css'


class ParseJSON extends Component{
    render(){
        return(
            <div>
                {data.map((payload, key)=>{
                return(
                    <div className="list">
                        <tr>
                            <td></td>
                            <td>
                                <img src={payload.img} alt={payload.name}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <h1>{payload.name}</h1>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <h3>Nickname: {payload.nickname}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold">Birthday</td>
                            <td>{payload.birthday}</td>
                        </tr>
                        <tr>
                            <td className="bold">Occupation</td>
                            <td>{payload.occupation}</td>
                        </tr>
                        <tr>
                            <td className="bold">Appearance</td>
                            <td>{payload.appearance}</td>
                        </tr>
                        <tr>
                            <td className="bold">Status</td>
                            <td className="status">{payload.status}</td>
                        </tr>
                        <tr>
                            <td className="bold">Portrayed</td>
                            <td>{payload.portrayed}</td>
                        </tr>                
                    </div>
                )       
               })
               }
            </div>
        )
    }
}

export default ParseJSON