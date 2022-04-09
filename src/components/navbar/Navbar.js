import React, {useState} from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, SvgIcon, MenuItem } from '@mui/material';
import cx from "classnames"
import avatarImg from "../../assets/edem3.png"
import { Avatar } from '@mui/material';
import { width } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

 const useStyles = makeStyles((Theme) => ({
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: "black",
        color:"white",
        border:"solid 1px #d7d7d7"
    }
    }
  }));

export default function Navbar({ getSelectedTab,intersection="home"}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles()

    const handleClick2 = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
       
    setTimeout(()=>{
              setAnchorEl(null);

    },700)
      getSelectedTab(e.target.innerText)
    };
    const handleChange = (e)=>{
    }
    const handleClick = (e)=>{
        getSelectedTab(e.target.id)
    }

    return (
        <div className='navbar'>
            <div className="menu-logo">
                <div className='hamburger' 
                    
                    style={{color:"white"}}>
                     <div >
                        <div className="logo1" onClick={handleClick2}>
                            <SvgIcon style={{fontSize:'2.5rem', margin:"auto"}}>
                                <MenuIcon />
                            </SvgIcon>
                        </div> 
                    </div> 
                    <Menu
                        id='mobile-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className={classes.menu}
                        onChange={(value)=>handleChange(value)}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {/* <MenuItem value = {7} onClick={(value)=>handleClose(value)}>Home</MenuItem> */}
                        <MenuItem style={{width:"20rem",fontSize:"1.5rem"}} onClick={handleClose}>home</MenuItem>
                        <MenuItem style={{width:"20rem",fontSize:"1.5rem"}} onClick={handleClose}>services</MenuItem>
                        <MenuItem style={{width:"20rem",fontSize:"1.5rem"}} onClick={handleClose}>portfolio</MenuItem>
                        <MenuItem style={{width:"20rem",fontSize:"1.5rem"}} onClick={handleClose}>contact</MenuItem>

                    </Menu>               
                </div>
                <div className="logo">
                    Edem
                </div>
                <div className='avatar'><Avatar src={avatarImg}/></div>
                <div className="menu">
                    <div id = "home" onClick={handleClick} className={cx("home",{'border-gradient':intersection==="home" })} >HOME</div>
                    <div id = "about" onClick={handleClick} className={cx("about",{'border-gradient':intersection==="about" })}>ABOUT</div>
                    <div id = "services" onClick={handleClick} className={cx("services",{'border-gradient':intersection==="services" })}>SERVICES</div>
                    <div id = "portfolio" onClick={handleClick} className={cx("portfolio",{'border-gradient':intersection==="portfolio" })}>PORTFOLIO</div>
                    <div id = "contact" onClick={handleClick} className={cx("contact",{'border-gradient':intersection==="contact" })}>CONTACT</div>
                </div>
            </div>
            
        </div>
    )
}
