import React from 'react';

export default function Card({ image , title , diets }){

    return (
        <div >
            <img  src={image} alt="Imagen no encontrada"/>
            <div >
                <h3>{title}</h3>
                <h5>{diets}</h5>
            </div>
        </div>
    )
}

