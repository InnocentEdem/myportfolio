import React,{useRef,useState,useEffect, useCallback} from 'react'
import "./home.css"
import edem from "../../assets/edempotrait.png"



export default function Home({show,options, getSelectedTab, getVisibleSection}) {
    const showRef = useRef(null)
    if(show==="home"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
		getSelectedTab()
    }

	const updateGetVisible = useCallback((state) =>{
		state === true && getVisibleSection('home')
	},[getVisibleSection])

    const callBack = useCallback((entries)=>{

        const [entry] = entries;
        updateGetVisible(entry.isIntersecting)
    },[updateGetVisible])
    
    useEffect(() => {
        const observer = new IntersectionObserver(callBack,options)
        const thisRef=showRef.current
        if(showRef.current)observer.observe(showRef.current)
        return () => {
            if(thisRef) observer.unobserve(thisRef)
        }
    }, [showRef,options, callBack])

    return (
        <div>
            <div ref = {showRef} className="home-container">
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
                    <div className = "center-numbers">
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
