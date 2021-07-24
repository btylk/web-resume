import React from 'react'
import "./Banner.css"
import ReactTypingEffect from 'react-typing-effect';

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>I am + " "</h1>
                    </div>
                </div>
                <div className="banner-con2">
                    <ReactTypingEffect text={['console.log("Software Engineer")']} speed={120} eraseDelay={15} className="typingeffect"/>
                </div>
            </div>
        </div>
    )
}
export default Banner