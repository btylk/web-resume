import React from 'react'
import { FiTerminal } from "react-icons/fi";
import './Header.css'
import resume from './resume.pdf'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                    Dev <FiTerminal/> 
                    </div>
                    <div className="resume">
                        {/* <p>D:\web-resume{'>'} pip install</p> */}
                        <a class="resume-btn" href= {resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;