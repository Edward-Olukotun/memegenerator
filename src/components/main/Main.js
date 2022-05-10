import React, { useState } from 'react'
import './Main.css'
import MemesData from './../../utils/constants/Memesdata'
function Main() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })
    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })

    }
    return (
        <>
            <div className='main' >
                <div className='input-text'>
                    <input
                        type='text'
                        placeholder='Top text'
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Bottom text'
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className='btn'>
                    <button onClick={getMemeImage}><img src='../icons/btn.svg' alt='' /></button>
                </div>
                <div className='main-image'>
                    <img src={meme.randomImage} alt='' />
                    <h2 className="meme--text--top">{meme.topText}</h2>
                    <h2 className="meme--text--bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </>
    )
}

export default Main


// import Memesdata from './../../utils/constants/Memesdata'
// function Main({ props }) {
//     return (
//         <>
//             {Memesdata?.map((props) =>
//             (<div className='main' key={props.id}>
//                 <div className='input-text'>
//                     <input type='text' placeholder='Top text'></input>
//                     <input type='text' placeholder='Bottom text'></input>
//                 </div>
//                 <div className='btn'>
//                     <button><img src='../icons/btn.svg' alt='' /></button>
//                 </div>
//                 <div className='main-image'>
//                     <img src={props.url} alt='' />
//                 </div>
//             </div>))}
//         </>
//     )
// }
