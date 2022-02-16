import React,{useRef,useState,useEffect,useMemo, useCallback} from 'react'
import "./contactMe.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { SvgIcon } from '@mui/material';

export default function ContactMe({show, getSelectedTab, getVisibleSection}) {

    const showRef = useRef(null)
	const root = null;
	const rootMargin = "0px";
	const threshold = 0.3;
    if(show==="contact"){
        showRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
		getSelectedTab()
    }

	const updateGetVisible = useCallback((state) =>{
		state === true && getVisibleSection('contact')
	},[getVisibleSection])
	const returnOptions = () =>{
		return {root, rootMargin, threshold}
	}
    const options = useMemo( returnOptions,[returnOptions])

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
    }, [showRef,options,callBack])

    return (
        <div ref={showRef}>
            <div  className="contact-me-container">
                <div className="services-header" id='projects-header'>
                    <div className="services-header-button">Contact</div>
                        <h2 className="services-header-text">
                            Get in touch
                        </h2>
                        {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> */}
                </div>
                <div className="contact-form-container">
                        <form id = "contact-form"action="" method="post">
                        <div className="name-email">
                            <input type="text" id="contact-name" placeholder='Name *' />
                            <input type="text" id="contact-email" placeholder='Email *' />
                        </div>
                        <div className="subject">
                            <input type="text" id="subject" placeholder='Subject *' />
                        </div>
                        <div className="your-message">
                            <textarea name="" id="contact-text" cols="30" rows="10" placeholder='Your message *'></textarea>
                        </div>
                        <div className="send-button">
                            <button className="submit">Send Message <span className="icon"></span></button>
                        </div>
                        </form>
                </div>
                <div className="location">
                    <div className="map">
                        <div className="location-icon"><SvgIcon style={{fontSize:"2rem"}} ><LocationOnIcon/></SvgIcon></div>
                        <div className="location-text">
                            <div className="location-header">Location</div>
                            <div className="location-main-text">Accra, Ghana</div>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="location-icon"><SvgIcon style={{fontSize:"2rem"}} ><LocalPhoneIcon/></SvgIcon></div>
                        <div className="location-text">
                            <div className="location-header">Phone</div>
                            <div className="location-main-text"> +233242271553</div>
                        </div>
                    </div>

                    <div className="mail">
                    <div className="location-icon"><SvgIcon style={{fontSize:"2rem"}}>< MailIcon/></SvgIcon></div>
                        <div className="location-text">
                            <div className="location-header">Email</div>
                            <div className="location-main-text">edem.kuwornu@protonmail.com </div>
                        </div>
                    </div>
                </div>      
            </div>
            <footer>
                <div className="footer-container">
                    <div className="footer-social">
                        <span><SvgIcon ><LinkedInIcon/></SvgIcon></span>
                        <span><SvgIcon><GitHubIcon/></SvgIcon></span>
                        <span><SvgIcon><FacebookOutlinedIcon/></SvgIcon></span>
                    </div>
					<div>Created with ReactJs</div>
                    <div className="copyright">
                    <span><SvgIcon><CopyrightOutlinedIcon/></SvgIcon> </span>  2022 copyright all right reserved
                    </div>                
                </div>
            </footer>
            
        </div>
    )
}
