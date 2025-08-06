import TopNavbar from './TopNavbar';
import { Link, useNavigate } from 'react-router-dom';
import {
    Navbar as BSNavbar, Nav, Container,
} from 'react-bootstrap';
import {
  FaHome, FaInfoCircle, FaNewspaper,
  FaAddressBook, FaSignInAlt, FaUserCircle,
  FaFileImage, FaPhotoVideo
} from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const nav=useNavigate()
    const style = {

        navBar: {
            backgroundColor: "#f8f9fa",
            marginBottom:"-15px",
            borderTop: "1px solid #ccc",
        },
    
    };
  
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        setUserInfo(userData)

    }, [])

    const logOut = () => {
        alert("23456789")
        // ;
        console.log('====================================');
        console.log(nav);
        console.log('====================================');
        // navigate('/login');
    }
    if (userInfo?.userType == "user") {

        return (
            <>
               <TopNavbar/>

                {/* Navbar */}
                <BSNavbar expand="lg" style={style.navBar}>
                    <Container>
                        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <BSNavbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto gap-4">
                                <Link className='bottomele' to="/"><FaHome /> Home</Link>
                                <Link className='bottomele' to="/user-alllist"><FaAddressBook />All News</Link>
                                <Link className='bottomele' to="/user-profile"><FaInfoCircle /> Profile</Link>
                                <Link className='bottomele' to="/user-addNews"><FaNewspaper /> Post</Link>
                                <Link className='bottomele' to="/user-list"><FaNewspaper /> Your News</Link>
                                <Link to='/login' className='bottomele' onClick={()=>localStorage.removeItem('userInfo')} ><FaSignInAlt /> Logout</Link>
                            </Nav>
                        </BSNavbar.Collapse>
                    </Container>
                </BSNavbar>
                <hr />

            </>
        )
    } else if (userInfo?.userType == 'admin') {

        return (

            <>
                <TopNavbar/>
                {/* Navbar */}
                <BSNavbar expand="lg" style={style.navBar}>
                    <Container>
                        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <BSNavbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto gap-4">
                                <Link className='bottomele' to="/"><FaHome /> Home</Link>
                                <Link className='bottomele' to="/admin-newsList"><FaNewspaper /> News</Link>
                                <Link className='bottomele' to="/admin-profile"><FaInfoCircle /> Profile</Link>
                                <Link className='bottomele' to="/admin-contactUs"><FaAddressBook /> Contact Us</Link>
                                <Link to='/login' className='bottomele' onClick={()=>localStorage.removeItem('userInfo')} ><FaSignInAlt /> LogOut</Link>
                            </Nav>
                        </BSNavbar.Collapse>
                    </Container>
                </BSNavbar>
                <hr />

            </>
        )
    } else {

        return (

            <>
            <TopNavbar/>

                {/* Navbar */}
                <BSNavbar expand="lg" style={style.navBar}>
                    <Container>
                        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <BSNavbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto gap-4">
                                <Link className='bottomele' to="/"><FaHome /> Home</Link>
                                <Link className='bottomele' to="/about"><FaInfoCircle /> About Us</Link>
                                <Link className='bottomele' to="/gallery"><FaFileImage /> Image Category</Link>
                                <Link className='bottomele' to="/videos"><FaPhotoVideo /> Video Category</Link>
                                <Link className='bottomele' to="/topNews"><GiNewspaper /> Top News</Link>
                                <Link className='bottomele' to="/contact"><FaAddressBook /> Contact Us</Link>
                                <Link className='bottomele' to="/registration"><FaUserCircle />Registration</Link>
                                <Link className='bottomele' to="/login"><FaSignInAlt /> Login</Link>
                            </Nav>
                        </BSNavbar.Collapse>
                    </Container>
                </BSNavbar>
                <hr />

            </>
        )
    }

}

export default Navbar
