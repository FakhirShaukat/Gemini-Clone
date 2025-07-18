import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'


const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context); 



    return (
        <div className='main'>
            <div className='nav'>
                <p id="gemini-logo">Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

        
            <div className='main-container'>

                {!showResult 
                ?<>
                 <div className='greet'>
                    <p><span>Hello! Fakhir.</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful cities to visit for an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className='card'>
                        <p>Breifly summarize the concepts of critical thinking</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='card'>
                        <p>Brainstorm new ideas for better project management and team work</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className='card'>
                        <p>Improve code readibilty with new concepts and frameworks</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                </>
                :<div className='result'>
                    <div className='result-title'>
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className='result-data'>
                        <img src={assets.gemini_icon} alt="" />
                        {loading 
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                        
                    </div>

                </div>
            }


                <div className='main-bottom'>
                    <div className='search-box'>
                        <input  onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img  onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main