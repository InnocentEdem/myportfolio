import React ,{useRef,useCallback}from 'react'
import { useState, useEffect } from 'react'
import "./projects.css"
import projectsImg1 from "./assets/projects1.png"
import projectsImg2 from "./assets/projects2.png"
import projectsImg3 from "./assets/projects3.png"
import { SvgIcon } from '@mui/material'
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import cx from "classnames"





export default function Projects({show,options, getSelectedTab, getVisibleSection}) {
    const showRef = useRef(null)
    const [modal1Off, setModal1Off] = useState(true)
    const [modal2Off, setModal2Off] = useState(true)
    const [modal3Off, setModal3Off] = useState(true)

    if(show==="portfolio"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
		getSelectedTab();
    }
	const updateGetVisible = useCallback((state) =>{
		state === true && getVisibleSection('portfolio')
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
    }, [showRef, options, callBack])


    
    const handleMouseEnter=(id)=>{
        id=="1" ? setModal1Off(false):id=="2"?setModal2Off(false):setModal3Off(false)
    }
    const handleMouseLeave=(id)=>{

        id=="1" ? setModal1Off(true):id=="2"?setModal2Off(true):setModal3Off(true)
    }

    return (
        <div ref={showRef}>
            <div className="projects-container">
                <div className="services-header" id='projects-header'>
                    <div className="services-header-button">Projects</div>
                        <h2 className="services-header-text">
                            My latest projects
                        </h2>
                        {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> */}
                </div>
                <div className="projects-grid">
                        <div className="project">
                            <div id='1' className="project-image " onMouseLeave={(e)=>handleMouseLeave("1")} onMouseEnter={(e)=>handleMouseEnter("1")}>
                                <div className = {cx([{"enter-project":true},{"modal":true},{"noDisplay":modal1Off}])}  >
                                        <div className="view-project-on-image">
                                            <p>VIEW </p>
                                        </div>
                                </div>                                  
                                <img src={projectsImg2} alt="" />
                            </div>
                            <div className="project-text">
                                <div className="project-color-header">
                                    Service Type
                                </div>
                                <h3 className="service-text-content-header">
                                    Freelance Work App
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="view-project">VIEW <span> <SvgIcon><ExitToAppIcon style={{fontSize:"1rem"}}/></SvgIcon> </span></div>

                            </div>
                        </div>
                        <div className="project">
                        <div className="project-image "  onMouseLeave={(e)=>handleMouseLeave("2")} onMouseEnter={(e)=>handleMouseEnter("2")}>
                                <img src={projectsImg1} alt="" />
                                <div className = {cx([{"enter-project":true},{"modal":true},{"noDisplay":modal2Off}])}  >
                                        <div className="view-project-on-image">
                                            <p>VIEW</p>
                                        </div>
                                </div>                            
                            </div>
                            <div className="project-text">
                                <div className="project-color-header">
                                    Service Type
                                </div>
                                <h3 className="service-text-content-header">
                                    Company Website
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="view-project">VIEW PROJECT <span> <SvgIcon><ExitToAppIcon style={{fontSize:"1rem"}}/></SvgIcon> </span></div>

                            </div>
                        </div>
                        <div className="project">
                            <div className="project-image "  onMouseLeave={(e)=>handleMouseLeave("3")} onMouseEnter={(e)=>handleMouseEnter("3")}>
                                <img src={projectsImg2} alt="" />
                                <div className = {cx([{"enter-project":true},{"modal":true},{"noDisplay":modal3Off}])}  >
                                    <div className="view-project-on-image">
                                        <p>VIEW </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-text">
                                <div className="project-color-header">
                                    Service Type
                                </div>
                                <h3 className="service-text-content-header">
                                    Quiz Management App
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="view-project">VIEW PROJECT <span> <SvgIcon><ExitToAppIcon style={{fontSize:"1rem"}}/></SvgIcon> </span></div>

                            </div>
                        </div>
                        
                </div>
            </div>
            
        </div>
    )
}
