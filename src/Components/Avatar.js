import React from 'react';

function Avatar (props) {
    return (

        <div className="avatarstyle ma4 bg-light-blue dib pd3 grow shadow-4 tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
            <h1>{props.name} </h1>
            <p1> {props.work}</p1>
        </div>
    )
}

export default Avatar;