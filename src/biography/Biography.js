import React,{useRef, useState,useEffect} from 'react'
import './biography.css'
import edem from "../assets/edem3.png"
import { BsLinkedin,BsGithub,BsFacebook } from "react-icons/bs";


export default function Biography({show, options, getVisibleSection}) {
    const showRef = useRef(null)
    const[isVisible,setIsVisible]=useState(false)
    if(show==="about"){
        console.log("showing bio");
        showRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "start"})
    }
    if(isVisible===true){
        getVisibleSection("about")
    }

    const callBack = (entries)=>{

        const [entry] = entries;
        setIsVisible(entry.isIntersecting)
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(callBack,options)
        const thisRef = showRef.current
        if(showRef.current)observer.observe(showRef.current)
        return () => {
            if(thisRef) observer.unobserve(thisRef)
        }
    }, [showRef,options])


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
                        <h2 className="bio-title">Biography <p className="underline"></p></h2>
                       <p className="bio-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas aliquam amet quam quis et. Non amet vitae arcu fames posuere.
                       </p>
                    </div>
                    <div className="bio-education">
                    <h2 className="bio-title">Education<p className="underline"></p></h2>
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
                                        <p>JavaScript</p>
                                        <p>JavaScript</p>
                                        <p>JavaScript</p>

                                    </div>

                                    </div>
                                </div>
                         
                        
                            <div className="bio-tools">
                                <div className="biocompetency-items">
                                <h2 className="bio-title">Tools<p className="underline1"></p></h2>

                                    <div className="bio-competencyp">
                                        <p>Jira</p>
                                        <p>Jira</p>
                                        <p>Jira</p>
                                        <p>Jira</p>
                                    </div>

                                </div>
    
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
    )
}
