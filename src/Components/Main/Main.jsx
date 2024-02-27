import React,{useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

//Let me import the images so we don't have this error on the browser
import img from '../../Assets/operahouse.webp'
import img2 from '../../Assets/great wall.jpg'
import img3 from '../../Assets/taipei101.webp'
import img4 from '../../Assets/senso-ji.jpg'
import img5 from '../../Assets/namsantower.webp'
import img6 from '../../Assets/bigben.webp'
import img7 from '../../Assets/tanahlot.jpg'
import img8 from '../../Assets/merlion.jpg'
import img9 from '../../Assets/wat arun.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Let me paste the array named data
const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Opera House',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Great Wall',
        location: 'China',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Taipei 101',
        location: 'Taiwan',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Senso-ji Temple',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Namsan Tower',
        location: 'South Korea',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Big Ben',
        location: 'London',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Tanah Lot',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Merlion',
        location: 'Singapore',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Wat Arun',
        location: 'Thailand',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures activities.'
    },
]

const Main = () => {
    //Lets create a react hook to add a scroll animation.....
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])


    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" data-aos-duration="4000" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* So guys, here we are going to use high order array method (map). To do that we shall use a list of object in one array. I'm going to create an array named data and from that we shall .map() array to fetch each destination at once. I hope this will make sense to you! */}

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* Here it will return single id from the map array */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}></img>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        ) 
                    })
                }
            </div>
        </section>
    )
}

export default Main