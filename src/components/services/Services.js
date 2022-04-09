import React,{useRef,useState, useEffect,useCallback} from 'react'
import "./services.css"
import SvgIcon from '@mui/material/SvgIcon';
import WebIcon from '@mui/icons-material/Web';

export default function Services({show,options, getSelectedTab, getVisibleSection}) {

    const showRef = useRef(null)
    if(show==="services"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
		getSelectedTab()
    }
    
	const updateGetVisible = useCallback((state) =>{
		state === true && getVisibleSection('services')
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
            <div  ref= {showRef}  className="services-container">
                <div className="services-header">
                    <div className="services-header-button">Services</div>
                    <h2 className="services-header-text">
                    </h2>
                    {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                </div>
                <div className="services-body">
                    <div className="service">
                        <div className="service-logo">
                            <div className="service-logo-container">
                            <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 
                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                Frontend
                            </h3>
                            <div className="service-texts-content-text">
                             Pixel Perfect, Responsive Website Development using advanced Javascript Frameworks.
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-logo">
                            <div className="service-logo-container">
                             <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 
                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                Backend
                            </h3>
                            <div className="service-texts-content-text">
                             Node and Express, Django, Django Rest Framework, PostgreSQL.
                            </div>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-logo">
                            <div className="service-logo-container">
                                <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 

                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                Api Integration
                            </h3>
                            <div className="service-texts-content-text">
                             	GraphQL and Rest Api Integration services for your Microservice Applications
                            </div>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-logo">
                            <div className="service-logo-container">
                                <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 
                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                WordPress
                            </h3>
                            <div className="service-texts-content-text">
								Manage your websites with the Largest Content Management System.
                            </div>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-logo">
                            <div className="service-logo-container">
                                <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 
                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                Mobile
                            </h3>
                            <div className="service-texts-content-text">
                             Fast iOS and Android Mobile application development using ReactNative. 
                            </div>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-logo">
                            <div className="service-logo-container">
                                <div className="logo1"><SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}><WebIcon /></SvgIcon></div> 
                            </div>
                        </div>
                        <div className="service-text-content">
                            <h3 className="service-text-content-header">
                                Tutorials
                            </h3>
                            <div className="service-texts-content-text">
                             Web Design and Development Tutorial Services, in-person or remote.
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}
