import React, { useState } from 'react'
import { AppBarNavLink, AppBarNavMenuItem } from '../Atoms/app-bar'
import { appNavData } from '../../datas/appbar'
import { motion } from "framer-motion";

const menuVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: {opacity: 0, y: 35 }
}

export function AppBarNavLinkMenu({ items = [], show = false,  anchorid, }) {
   
    
         return (
             <motion.div
                 variants={menuVariants}
                 animate={show ? 'visible' : 'hidden'}
                 transition={{
                    ease: "linear",
                    duration: 0.3,
                    x: { duration: 1 }
                  }}
                 className={`nav-link-menu`}
                 id={anchorid}
                 aria-labelledby={anchorid} >
            {items.map((menuItem, index)=> (<AppBarNavMenuItem index={(index=== 0 && 'first' )||(index=== items.length-1 && 'last')  || 'none'} to={menuItem.to} text={menuItem.text}/>))}
  
        </motion.div>
    )
   
}

export function AppBarFullNavLink({ navLink = {}, id, menuItems = [] }) {
    const [showMenu, setShowMenu] = useState(false)
    //const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <div
         //   onMouseEnter={()=>setDisplayMenu(true)}
            onMouseOver={() => {
            
                setShowMenu(true)
            }}
            onMouseLeave={() => {
                setShowMenu(false)
              //  setTimeout(()=> setDisplayMenu(false), 1000)
            }}
            className='nav-link-btn'>
            <AppBarNavLink
                id={id} to={navLink.to.replace(' ', '')}>
                {navLink.text}
            </AppBarNavLink>
            {//displayMenu &&
                <AppBarNavLinkMenu
                show={showMenu}
                items={menuItems} anchorid={id} />}

        </div>
       
    )
}

export default function AppBarNav() {
    return (
        <nav className='app-bar-nav'>
            
                 {appNavData.map((navItem, index) => (<AppBarFullNavLink id={`navlink${index}`} navLink={navItem.navLink} menuItems={navItem.menuItems}/>))}
            
           
        </nav>
    )
    
}
  


