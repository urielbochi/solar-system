import earthImage from '../images/Terra.png'
import mercuryImage from '../images/Mercurio.png'
import VenusImage from '../images/Venus.png';
import marsImage from '../images/Marte.png';
import jupiterImage from '../images/Jupiter.png'
import saturnImage from '../images/Saturno.png'
import uranusImage from '../images/Urano.png'
import neptuneImage from '../images/Netuno.png'

export const mock = [{
    planet:'Mercury',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: mercuryImage,
    background: 'mercury',
    description:'Mercury is the smallest planet in the Solar System and the closest to the Sun',
    text:'Distance from Sun: 58 million kilometers',
},
{
    planet:'Venus',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: VenusImage,
    background: 'venus',
    description:'The second closest planet to the sun',
    text:'Distance from Sun: 67 million miles',
}
,
{
    planet:'Earth',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: earthImage,
    background: 'earth',
    description:'The third closest planet to the sun',
    text:'Distance from Sun: 93 million miles',
},
{
    planet:'Mars',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: marsImage,
    background: 'mars',
    description:'The fourth closest planet to the sun',
    text:'Distance from Sun: 142 million miles',
},
{
    planet:'Jupiter',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: jupiterImage,
    background: 'jupiter',
    description:'The fifty closest planet to the sun',
    text:'Distance from Sun: 484 million miles',
},
{
    planet:'Saturn',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: saturnImage,
    background: 'saturn',
    description:'The sixth closest planet to the sun',
    text:'Distance from Sun: 142 million miles',
},
{
    planet:'Uranus',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: uranusImage,
    background: 'uranus',
    description:'The seventh closest planet to the sun',
    text:'Distance from Sun: 886 million miles',
},
{
    planet:'Neptune',
    classOne: 'earthCard',
    classTwo: 'planetNameCard',
    classThree: 'curiousFact',
    classFour: 'description',
    image: neptuneImage,
    background: 'neptune',
    description:'The eighth closest planet to the sun',
    text:'Distance from Sun: 2.8 billion miles',
},
]