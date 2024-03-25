import React from 'react'
import { AppBarNavLink, AppBarNavMenuItem } from '../Atoms/app-bar'
import { appNavData } from '../../datas/appbar'



export function AppBarNavLinkMenu({ items = [], show = false,  anchorid, otherClass=''}) {
    return (
        <div  className={`nav-link-menu ${otherClass}`} id={anchorid} aria-labelledby={anchorid} >
            {items.map((menuItem)=> (<AppBarNavMenuItem to={menuItem.to} text={menuItem.text}/>))}
  
        </div>
    )
}

//const delay =(time)=> setTimeout(()=>Promise.resolve(),time)

export function AppBarFullNavLink({ navLink = {}, id, menuItems = [] }) {
//     const [leaving, setLeave] = useState(false)
//     const [hover, sethover] = useState(false)
//     const [notouch, setnotouch] = useState(true)
//   //  const [MouseOn, setMouseOn] = useState(false)

//     const onMouseLeave = async () => {
//       //  alert('mouse leave')
//         setLeave(true)
//         delay(400)
//         setLeave(false)
//         setnotouch(true)

//     }

//     const onMouseHover = async () => {
//       //  alert('mouseOn')
//         setLeave(false)
//         sethover(true)
//         setnotouch(false)
       

//     }
//     const menuClass = () => {
//         if (leaving) {
//             return 'disappaer'
//         }
//         if (hover) {
//             return 'mouseOn'
//         }
//         if (notouch) {
//             return 'notouch'
//         }
    //     }
    
    function myLeave() {
        let IntervalId = null;
        const elem = document.getElementById(`${id}`);   
        let pos = 0;
        clearInterval(IntervalId);
        IntervalId = setTimeout(frame, 10);
        function frame() {
          if (pos === 100) {
              clearInterval(IntervalId);
              elem.style.display = 'none';
          } else {
            pos++; 
            elem.style.marginTop = `${pos}px`; 
          }
        }
      }
   
    return (
        <div className='nav-link-btn'>
            <AppBarNavLink
                //</div>onMouseHover={onMouseHover}
                onMouseLeave={myLeave}
                id={id} to={navLink.to.replace(' ', '')}>
                {navLink.text}
            </AppBarNavLink>
            <AppBarNavLinkMenu
               // otherClass={menuClass()}
                items={menuItems} anchorid={id} />

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
  


