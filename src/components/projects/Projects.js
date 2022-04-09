import React, { useRef, useCallback } from 'react'
import { useState, useEffect } from 'react'
import "./projects.css"
import { SvgIcon } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import cx from "classnames";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import projectsImg1 from "./assets/projects11.png"
import projectsImg2 from "./assets/projects22.png"
import projectsImg3 from "./assets/projects33.png"
import fairwork from "../../assets/fairwork.png"
import amalifair from "../../assets/amalifair.png"
import amalitechdotcom from "../../assets/amalitechdotcom.png"





export default function Projects({ show, options, getSelectedTab, getVisibleSection }) {
	const showRef = useRef(null)
	const [modal1Off, setModal1Off] = useState(true)
	const [modal2Off, setModal2Off] = useState(true)
	const [modal3Off, setModal3Off] = useState(true)
	const [showImage1, setShowImage1] = useState(true)
	const [showImage2, setShowImage2] = useState(true)
	const [showImage3, setShowImage3] = useState(true)

	if (show === "portfolio") {
		showRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
		getSelectedTab();
	}
	const handleAppearance = (key) => {

		if (key === 1) {
			setShowImage1(false)
		}
		else if (key === 2) {
			setShowImage2(false)
		}
		if (key === 3) {
			setShowImage3(false)
		}
		showRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" })
	}
	const handleDisappearance = () => {
		setShowImage1(true)
		setShowImage2(true)
		setShowImage3(true)

	}
	const updateGetVisible = useCallback((state) => {
		state === true && getVisibleSection('portfolio')
	}, [getVisibleSection])

	const callBack = useCallback((entries) => {

		const [entry] = entries;
		updateGetVisible(entry.isIntersecting)
	}, [updateGetVisible])

	useEffect(() => {
		const observer = new IntersectionObserver(callBack, options)
		const thisRef = showRef.current
		if (showRef.current) observer.observe(showRef.current)
		return () => {
			if (thisRef) observer.unobserve(thisRef)
		}
	}, [showRef, options, callBack])



	const handleMouseEnter = (id) => {
		id == "1" ? setModal1Off(false) : id == "2" ? setModal2Off(false) : setModal3Off(false)
	}
	const handleMouseLeave = (id) => {

		id == "1" ? setModal1Off(true) : id == "2" ? setModal2Off(true) : setModal3Off(true)
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
					<div className={cx([{ "psample-image p-image1": true }, { "noDisplay": showImage1 }])} onClick={handleDisappearance} >
						<div className="close-icon"><SvgIcon><CancelPresentationIcon style={{ fontSize: "2rem" }} /></SvgIcon></div>
						<img src={amalifair} alt="" />
					</div>
					<div className={cx([{ "psample-image p-image2": true }, { "noDisplay": showImage2 }])} onClick={handleDisappearance}>
						<div className="close-icon"><SvgIcon><CancelPresentationIcon style={{ fontSize: "2rem" }} /></SvgIcon></div>
						<img src={fairwork} alt="" />
					</div>
					<div className={cx([{ "psample-image p-image3": true }, { "noDisplay": showImage3 }])} onClick={handleDisappearance}>
						<div className="close-icon"><SvgIcon><CancelPresentationIcon style={{ fontSize: "2rem" }} /></SvgIcon></div>
						<img src={amalitechdotcom} alt="" />
					</div>
					<div className="project">
						<div id='1' className="project-image " onMouseLeave={(e) => handleMouseLeave("1")} onMouseEnter={(e) => handleMouseEnter("1")} onClick={() => { handleAppearance(1) }}>
							<div className={cx([{ "enter-project": true }, { "modal": true }, { "noDisplay": modal1Off }])}  >
								<div className="view-project-on-image">
									<p>VIEW </p>
								</div>
							</div>
							<img src={projectsImg1} alt="" />
						</div>
						<div className="project-text">
							{/* <div className="project-color-header">
								Service Type
							</div> */}
							<h3 className=" project-color-header service-text-content-header ">
								Vitual Event Mgt
							</h3>
							<div className="service-texts-content-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className="view-project" onClick={() => { handleAppearance(1); }}>VIEW PROJECT<span> <SvgIcon><ExitToAppIcon style={{ fontSize: "1rem" }} /></SvgIcon> </span></div>

						</div>
					</div>
					<div className="project">
						<div className="project-image " onMouseLeave={(e) => handleMouseLeave("2")} onMouseEnter={(e) => handleMouseEnter("2")} onClick={() => { handleAppearance(2); }}>
							<img src={projectsImg2} alt="" />
							<div className={cx([{ "enter-project": true }, { "modal": true }, { "noDisplay": modal2Off }])}  >
								<div className="view-project-on-image">
									<p>VIEW</p>
								</div>
							</div>
						</div>
						<div className="project-text">
							{/* <div className="project-color-header">
								Service Type
							</div> */}
							<h3 className="project-color-header service-text-content-header">
								Freelance Work
							</h3>
							<div className="service-texts-content-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className="view-project" onClick={() => { handleAppearance(2); }}>VIEW PROJECT <span> <SvgIcon><ExitToAppIcon style={{ fontSize: "1rem" }} /></SvgIcon> </span></div>

						</div>
					</div>
					<div className="project">
						<div className="project-image " onMouseLeave={(e) => handleMouseLeave("3")} onMouseEnter={(e) => handleMouseEnter("3")} onClick={() => { handleAppearance(3); }}>
							<img src={projectsImg3} alt="" />
							<div className={cx([{ "enter-project": true }, { "modal": true }, { "noDisplay": modal3Off }])}  >
								<div className="view-project-on-image">
									<p>VIEW </p>
								</div>
							</div>
						</div>
						<div className="project-text">
							{/* <div className="project-color-header">
								Service Type
							</div> */}
							<h3 className="project-color-header service-text-content-header">
								Company Website
							</h3>
							<div className="service-texts-content-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
							<div className="view-project" onClick={() => { handleAppearance(3)}}>VIEW PROJECT <span> <SvgIcon><ExitToAppIcon style={{ fontSize: "1rem" }} /></SvgIcon> </span></div>

						</div>
					</div>

				</div>
			</div>

		</div>
	)
}
