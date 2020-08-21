import React, { Component } from 'react'
import data from '../data/example.json'


class ParseJSON extends Component{
    render(){
        return(
            <div>
                {data.map((payload, key)=>{
                return(
                    <div>
                        <img src={payload.img} alt={payload.name}/>
                        <h1>{payload.name} a.k.a "{payload.nickname}"</h1>
                        <tr>
                            <td>Birthday</td>
                            <td>{payload.birthday}</td>
                        </tr>
                        <tr>
                            <td>Occupation</td>
                            <td>{payload.occupation}</td>
                        </tr>
                        <tr>
                            <td>Appearance</td>
                            <td>{payload.appearance}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{payload.status}</td>
                        </tr>
                        <tr>
                            <td>Portrayed</td>
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