import React from 'react'
import "./navbar.css"
import cx from "classnames"
export default function Navbar({ getSelectedTab,intersection="home"}) {

    const handleClick = (e)=>{
        getSelectedTab(e)
    }

    return (
        <div className='navbar'>
            <div className="menu-logo">
                <div className="logo">Edem</div>
                <div className="menu">
                    <div id = "home" onClick={handleClick} className={cx("home",{'border-gradient':intersection==="home"})} >HOME</div>
                    <div id = "about" onClick={handleClick} className={cx("about",{'border-gradient':intersection==="about"})}>ABOUT</div>
                    <div id = "services" onClick={handleClick} className={cx("services",{'border-gradient':intersection==="services"})}>SERVICES</div>
                    <div id = "portfolio" onClick={handleClick} className={cx("portfolio",{'border-gradient':intersection==="portfolio"})}>PORTFOLIO</div>
                    <div id = "contact" onClick={handleClick} className={cx("contact",{'border-gradient':intersection==="contact"})}>CONTACT</div>
                </div>
            </div>
            
        </div>
    )
}
