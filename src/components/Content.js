import React from 'react'
import "./Content.css"
import Widecard from './Widecard'
import Profilepic from '../img/profile3.jpg'
import { FiMail, FiGithub, FiPhoneCall } from "react-icons/fi";

function Content() {
    const my_skills = ['Python', 'Java', 'JavaScript', 'C++', 'HTML', 'CSS']
    const tools = ['React', 'React Native', 'Flask', 'Heroku']
    const tools2 = ['Cypress', 'Firebase', 'MongoDB', 'Git']
    const interest = ['Machine learning', 'Software testing', 'Swimming', 'Reading']

    return (
        <div className="content-bg">
            <div className="container">
                <section className="content-con">
                    <div className="content-l">
                        <img src={Profilepic} alt="profile2.jpg" className="Profilepic" />
                    </div>
                    <div className="content-r">
                        <h4>Hi, my name is</h4>
                        <p>Kalunyou Tanbin</p>
                        <p-2>I'm a software engineer graduate from prince of songkla university, Bachelor of Computer engineering</p-2>
                        <div className="skills">
                            <a>Basic Skills</a>
                            <ul skills>
                                {my_skills.map((value) => {
                                    return <li>{value}</li>
                                })}
                            </ul>
                        </div>
                        <div className="tools">
                            <a>Framework/Tools</a>
                            <div className="grid">
                                <ul skills>
                                    {tools.map((value) => {
                                        return <li>{value}</li>
                                    })}
                                </ul>
                                <ul skills>
                                    {tools2.map((value) => {
                                        return <li>{value}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="field">
                            <a>Interest & Hobbies</a>
                            <ul>
                                {interest.map((value) => {
                                    return <li>{value}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="about">
                    <div className="about-con">
                        <div className="text">
                            <h3>REWARD & HORNOR</h3>
                        </div>
                    </div>
                    <div className="about-con2">
                        <p>I've experience in software competition and academic work, the details shown below</p>
                    </div> 
                </div>
                <section className="content-con2">
                    <div className="content-l2">
                        <Widecard title="National Software Contest" detail="Succeeded in the first-round contest and have the right to compete in the next round (South region)" where="NSC" year="2021" />
                    </div>
                    <div className="content-c2">
                    <Widecard title="National Software Contest" detail="Received funding for project development without competing in the next round" where="NSC" year="2021" />
                    </div>
                    <div className="content-r2">
                    <Widecard title="National Conference ECTI-CARD" detail="The article was published in the academic journal ecti-card 2021 from pages 187-190" where="NSC" year="2021" />
                    </div>
                </section>
                <section className="content-con3">
                    <div className="content-l3">
                        <img src="https://images.unsplash.com/photo-1563430363828-8368ec782d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80" alt="" />
                    </div>
                    <div className="content-r3">
                        <div className="details">
                            <p>Contact</p>
                            <p><FiMail />  Email: kalunyoutanbin7@gmail.com</p>
                            <p><FiPhoneCall />  Tel: 092-7394647</p>
                            <p><FiGithub />  Github: github.com/btylk</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Content