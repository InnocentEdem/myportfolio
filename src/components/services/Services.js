import React,{useRef,useState, useEffect} from 'react'
import "./services.css"
import SvgIcon from '@mui/material/SvgIcon';
import WebIcon from '@mui/icons-material/Web';

export default function Services({show,options, getVisibleSection}) {

    const[isVisible,setIsVisible]=useState(false)
    const showRef = useRef(null)
    if(show==="services"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }
    
    if(isVisible===true){
        getVisibleSection("services")
    }

    const callBack = (entries)=>{

        const [entry] = entries;
        setIsVisible(entry.isIntersecting)
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(callBack,options)
        const thisRef=showRef.current
        if(showRef.current)observer.observe(showRef.current)
        return () => {
            if(thisRef) observer.unobserve(thisRef)
        }
    }, [showRef,options])


    return (
        <div ref= {showRef}>
            <div  className="services-container">
                <div className="services-header">
                    <div className="services-header-button">Services</div>
                    <h2 className="services-header-text">
                        Services provided for you
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Service
                            </h3>
                            <div className="service-texts-content-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
