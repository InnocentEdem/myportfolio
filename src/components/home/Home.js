import React,{useRef,useState,useEffect} from 'react'
import "./home.css"
import edem from "../../assets/edempotrait2.png"
import isInViewport from '../utilities/utilities'



export default function Home({show,options, getVisibleSection}) {
    const showRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    if(show==="home"){
        console.log("showing");
        showRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }
    if(isVisible===true){
        getVisibleSection("home")
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
                <div className="home-image">
                    <div className="edem">
                    <img className='edempng' src={edem}alt="" srcset="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
