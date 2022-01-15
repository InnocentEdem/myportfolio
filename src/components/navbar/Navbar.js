import React from 'react'
import "./navbar.css"
import cx from "classnames"
export default function Navbar({intersection="home"}) {
    return (
        <div className='navbar'>
            <div className="menu-logo">
                <div className="logo">Edem</div>
                <div className="menu">
                    <div className={cx("home",{'border-gradient':intersection==="home"})} >HOME</div>
                    <div className={cx("about",{'border-gradient':intersection==="about"})}>ABOUT</div>
                    <div className={cx("services",{'border-gradient':intersection==="services"})}>SERVICES</div>
                    <div className={cx("portfolio",{'border-gradient':intersection==="portfolio"})}>PORTFOLIO</div>
                    <div className={cx("contact",{'border-gradient':intersection==="contact"})}>CONTACT</div>
                </div>
            </div>
            
        </div>
    )
}
