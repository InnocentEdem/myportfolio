import React,{useRef, useState,useEffect,useCallback} from 'react'
import './biography.css'
import edem from "../assets/edem3.png"
import { BsLinkedin,BsGithub,BsFacebook } from "react-icons/bs";


export default function Biography({show, options, getSelectedTab, getVisibleSection}) {
    const showRef = useRef(null)
    if(show==="about"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "start"})
		getSelectedTab()
    }
	const updateGetVisible = useCallback((state) =>{
		state === true && getVisibleSection('about')
	},[getVisibleSection])

    const callBack = useCallback((entries)=>{

        const [entry] = entries;
        updateGetVisible(entry.isIntersecting)
    },[updateGetVisible])

    useEffect(() => {
        const observer = new IntersectionObserver(callBack,options)
        const thisRef = showRef.current
        if(showRef.current)observer.observe(showRef.current)
        return () => {
            if(thisRef) observer.unobserve(thisRef)
        }
    }, [showRef,options, callBack])


    return (
            <div ref={showRef} className='bio'>
                <div className="biography-image">
                    <div className="bio-img">
                        <img className='edem-bio' src={edem} alt="" />
                        <div className="social">
                            <div className="icon1"><BsLinkedin style={{fontSize:"300%",borderRadius:"50%",color:"#ED5573",border:"solid 1px white"}}/></div> 
                            <div id="icon2"><BsGithub style={{fontSize:"2rem",borderRadius:"50%",color:"#ED5573",border:"solid 1px white"}}/></div>
                            <div className="icon3"><BsFacebook style={{fontSize:"2rem",borderRadius:"50%",color:"#ED5573",border:"solid 1px white"}}/></div>
                        </div>
                    </div>

                </div>
                <div className="biography-text-container">
                    <div className="bio-intro">
                        <h2 className="bio-title">About Me <p className="underline"></p></h2>
                       <p className="bio-text">
					   I love to develop robust, interactive, user-friendly, and feature-rich
						websites. I leverage analytical skills and strong attention to detail in order to deliver original and efficient solutions,
						and build new websites. 

                       </p>
                    </div>
                    <div className="bio-education">
                    <h2 className="bio-title">Education<p className="underline"></p></h2>
                        <div className="education">
                            <div className="ed1">
                                <h3>Regional Maritime University </h3>
                                <p className="edcontent">BSc Electrical / Electronic Engineering </p>
                            </div>
                            <div className="ed2">
                                <h3>APCS Automation Training </h3>
                                <p className="edcontent">Industrial Automation Engineering </p>
                            </div>
                            <div className="ed3">
                                <h3>AmaliTech Training Center </h3>
                                <p className="edcontent">Full Stack Web Development </p>
                            </div>
                        </div>
                    </div>
                    <div className="bio-education">
                    <h2 className="bio-title">Experience<p className="underline"></p></h2>
                        <div className="education">
                            <div className="ed1">
                                <h3>Lorem ipsum dolor </h3>
                                <p className="edcontent">Maecenas aliquam amet </p>
                            </div>
                            <div className="ed2">
                                <h3>Lorem ipsum dolor </h3>
                                <p className="edcontent">Maecenas aliquam amet </p>
                            </div>
                            <div className="ed3">
                                <h3>Lorem ipsum dolor </h3>
                                <p className="edcontent">Maecenas aliquam amet </p>
                            </div>
                        </div>
                            
                    </div>
                    <div className="bio-education">
                        <div className="education ">
                            
                                <div className="bio-competencies">
                                    <div className="biocompetency-items">
                                    <h2 className="bio-title">Competencies<p className="underline1"></p></h2>

                                    <div className="bio-competencyp">
										<p>JavaScript</p>
										<p>TypeScript</p>
                                        <p>ReactJs</p>
                                        <p>NextJs</p>
										<p>Redux</p>
										<p>Relay</p>
										<p>GraphQL</p>
										<p>Node</p>
										<p>Express</p>
										<p>Django Rest</p>
										<p>PostgreSQL</p>


                                    </div>

                                    </div>
                                </div>
                         
                        
                            <div className="bio-tools">
                                <div className="biocompetency-items">
                                <h2 className="bio-title">Tools<p className="underline1"></p></h2>

                                    <div className="bio-competencyp">
                                        <p>Git</p>
                                        <p>GitHub</p>
                                        <p>Jira</p>
                                        <p>Trello</p>
                                        <p>Postman</p>
                                        <p>VsCode</p>
                                        <p>IntelliJ</p>
                                        <p>Slack</p>
                                    </div>

                                </div>
    
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
    )
}
