import React from "react";
import "./Pokecard.css";

const Pokecard = ({name, type, base_experience, img}) => {

    return (
        <div className="Pokecard">
            <h4 className="Pokecard-name">{name}</h4>
            <img className="Pokecard-image" src={img} />
            <div className="Pokecard-text">
                <p className="Pokecard-type">Type: {type}</p>
                <p className="Pokecard-exp">EXP: {base_experience}</p>
            </div>
        </div>
    );
}

export default Pokecard;