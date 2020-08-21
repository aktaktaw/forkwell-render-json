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
                    </div>
                )       
               })
               }
            </div>
        )
    }
}

export default ParseJSON