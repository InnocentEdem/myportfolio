import React from 'react'
import "./home.css"
import edem from "../../../assets/edempotrait2.png"


export default function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="home-text">
                    <p className="header">
                        INTRODUCTION
                    </p>
                    <p className="content-header">
                        <div className="intro-text">I'm Edem, a </div> <span className="trade">Frontend Engineer</span> 
                    </p>
                    <p className="content">
                        I build modern web applications for clients using ReactJs, TypeScript, modern JavaScript,
                        and GraphQL. I have a passion for developing products that keep to standards and make clients happy.
                    </p>
                    <div className="numbers">
                        <div className="experience">
                            <div className="number">4+</div>
                            <p>YEARS OF EXPERIENCE</p>

                        </div>
                        <div className="projects">
                        <div className="number">30+</div>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                    </div>

                </div>
                <div className="home-image">
                    <div className="edem">
                    <img className='edempng' src={edem}alt="" srcset="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
