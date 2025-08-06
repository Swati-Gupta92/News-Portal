import React from 'react'
import { IoIosMail } from "react-icons/io";
import {
    FaFacebook, FaYoutube, FaTwitter, FaInstagram
} from "react-icons/fa";
const TopNavbar = () => {
    const style = {
         topBar: {
            backgroundColor: "#8B0000",
            height: "40px",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0 20px",
            fontSize: "16px",
        },
        emailIcon: { marginRight: "5px" },
        iconGroup: { display: "flex", gap: "10px" },
        logoSection: {
            backgroundColor: "white",
            textAlign: "center",
            height: "100px",
            padding: "15px 0",
            borderBottom: "1px solid #ccc",
        },
    }
  return (
   <>
    {/* Top Bar */}
                <div style={style.topBar}>
                    <div>
                        <IoIosMail style={style.emailIcon} />
                        swatigupta884069@gmail.com
                    </div>
                    <div style={style.iconGroup}>
                        <FaFacebook />
                        <FaYoutube />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>

                {/* Logo Section */}
                <div style={style.logoSection}>
                    <img src="public/LandingPage/logo.jpg" alt="Logo" style={style.imgLogo} />
                </div>
   </>
  )
}

export default TopNavbar
