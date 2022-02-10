import React, { useState, useContext } from 'react';
import { mock } from '../utils/mockapi';
import EarthCard from './EarthCard';
import MyContext from '../providers/mycontext';

function EarthButton() {
    const [planet, setPlanet] = useState({})
    const [clicked, setClicked] = useState(false)
    const handleClick = (item) => {
        setPlanet(item)
        setClicked(true)
        console.log(item.background)
        document.getElementById("mainapp").className = item.background;
    }

    return (
        <div class="planetLine">
            {mock.map((item, key) => (
                <div onClick={() => handleClick(item)} key={key}>
                    <h3 class="planetName">{item.planet}</h3>
                    <img class="planetWidth" src={item.image} alt={item.planet} />
                </div>
            ))}
            {clicked ? <EarthCard planet={planet} /> : console.log('Not working')}
        </div>
    )
}

export default EarthButton;