import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { appNavData } from '../../datas/appbar'
// import { useState } from 'react';

function AppBarReactBootstrap() {

//   const [show, setShow] = useState({ });
// const showDropdown = (e)=>{
//   setShow({ ...show, e: !show[e]});
// }
// const hideDropdown = e => {
//   setShow({ ...show, e: false});
// }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {appNavData.map(
              (navItem, i) => {
                return (
                  <Nav.Link href={navItem.navLink.to}>
                    <NavDropdown
                      // show={show[i + 1]}
                      // onMouseEnter={()=>showDropdown(String(i+1))} 
                      // onMouseLeave={()=>hideDropdown(String(i+1))} 
                      title={navItem.navLink.text} id={`navlink-${i}`}
                    >
                      {
                        navItem.menuItems.map((menuITem) => {
                          return (
                            <NavDropdown.Item href={menuITem.to}>
                              {menuITem.text}
                            </NavDropdown.Item>
                          )
                        })
                      }
                      
                      </NavDropdown>
                  </Nav.Link>

                )
              }
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBarReactBootstrap;