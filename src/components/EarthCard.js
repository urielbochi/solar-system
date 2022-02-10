import React, { useContext } from 'react';


function EarthCard(props) {
    const { planet } = props
    return(
            <div class={planet.classOne}>
            <h1 class={planet.classTwo}>{planet.planet}</h1>
            <h2 class={planet.classThree}>{planet.description}</h2>
            <h2 class={planet.classFour}>{planet.text} </h2>     
        </div>
    )
}

export default EarthCard;