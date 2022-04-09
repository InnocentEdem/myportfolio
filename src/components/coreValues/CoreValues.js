import React from 'react'
import './coreValues.css'
import SvgIcon from '@mui/material/SvgIcon';
import WebIcon from '@mui/icons-material/Web';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function CoreValues() {
    return (
        <div>
            <div className="core-values-container">
                <div className="services-header">
                    <div className="services-header-button">Values</div>
                    <h2 className="services-header-text">
                        My Core Values
                    </h2>
                    {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                </div>
                <div className="values-grid">
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><MilitaryTechIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                           
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Excellence
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><TipsAndUpdatesIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                           
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Creativity
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><LocalFireDepartmentIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                           
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Passion
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><DeveloperBoardIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                           
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Personal Development
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><PeopleAltOutlinedIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                           
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Teamwork 
                                </h3>
                                <div className="service-texts-content-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="core-value-icon">
                            <div className="icon-circle">
                            <SvgIcon style={{fontSize:"3rem",margin:"auto"}} ><VolunteerActivismIcon/></SvgIcon>

                            </div>
                        </div>
                        <div className="core-value-text">
                        <div id='core-value' className="project">
                            <div className="project-text">
                                <h3 className="service-text-content-header">
                                    Respect
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
            </div>
            
        </div>
    )
}
