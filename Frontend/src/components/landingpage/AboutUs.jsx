import Navbar from "./Navbar";
import { FaInfoCircle } from "react-icons/fa";
import {useLocation} from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation();
    // const style = {
    //     outer:{
    //         backgroundColor: "#f8f9fa",
    //         width:"100%",
    //         height:"50vh"
    //     },
    //     AboutHead: {
    //         width: "100%", height: "120px",
            
    //         textAlign: "center",

    //     },
    //     h1: {
    //         fontSize: "34px"
    //     },
    //     us: {
    //         color: "brown",
    //     },
    //     lowerdiv: {
    //         display: "flex",
    //         marginLeft: "40px"
    //     },
    //     upperText: {
    //         marginTop: "10px",
    //         marginLeft: "15px",
    //         marginRight: "35px"
    //     },
    //     lowerText: {
    //         padding: "0 20px",
    //         marginLeft: "40px",
    //         marginRight: "20px"
    //     }
    // }
    return (
        <>
        {location?.pathname!=='/' && <Navbar/>}
            {/* <div style={style.outer}>
                <div style={style.AboutHead}>
                    <h3 style={style.h1}>About <span style={style.us}>Us <FaInfoCircle /></span></h3>
                    <p>There are multiple reasons to choose us for multiple purpose related to news. Believe me <br />
                        you will find us best suitable.
                    </p>
                </div>
                <div style={style.lowerdiv}>
                    <img  src="public/LandingPage/logo.jpg" alt="logo" />
                    <p style={style.upperText}>Bhaskar Times is the digital wing of Bhaskar Prakashan Umited PLL, which is India's leading media and communications group with its interests spanning across Print, OOH, Actations, Radio and Digital IPL is a listed firm and publishes worlds largest read daily, Dainik Jagran along with india's Largest Radio Network - Radio City</p>
                </div>
                <p style={style.lowerText}>
                    Bhaskar Temes creates and publishes online news and informalion content which informs, intucates and help the usert to take better life decisions The company Portfolio indudes 9 digital platforms which provide content across geves like news, education, lifestyle, entertainment, health and youth. Currently, Bhaskar Times Rat a reach of over 45 million users comdcore MMX Muit Plurform March 2011 and 30 My Video Vines Poutube and is leading in the domain of Hindi News, Education Health & Women's segment
                </p>
            </div> */}

            <div className="row py-2">
                <p className="fs-3 text-center">About Us</p>
                <div className="col-sm-10 mx-auto">
                    <div className="row py-3">
                          <div className="col-sm-6 pt-3">
                            <p>At NBC News, we are committed to delivering trusted, fact-based journalism that empowers, informs, and engages our audiences. For decades, our dedicated team of journalists, producers, and editors has brought viewers and readers breaking news, in-depth investigations, and compelling stories from across the globe. From local communities to international affairs, we strive to cover the stories that matter most, holding power to account and amplifying voices that deserve to be heard.</p>
                           </div>
                        <div className="col-sm-6 ">
                            <img src="public/LandingPage/logo.jpg" className="aboutimg" />
                        </div>
                      </div>
                    <div className="row">
                        <div className="col-sm-4 ">
                            <img src="public/LandingPage/logo.jpg" className="img-thumbnail w-100 aboutimg" />
                        </div>
                        <div className="col-sm-8 pt-2">
                           <p>s a pioneer in broadcast journalism, NBC News has consistently evolved to meet the changing needs of our audience. Through award-winning reporting, digital innovation, and a relentless commitment to accuracy, we have earned the trust of millions who rely on us every day. Whether you tune in on television, browse our website, or follow us on social media, our mission is to provide timely and transparent reporting that cuts through the noise.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                          <p>Looking forward, NBC News remains dedicated to upholding the highest journalistic standards in an ever-changing media landscape. We embrace new technologies and storytelling methods to connect with audiences wherever they are, while honoring our legacy of credibility and public service. Together with our viewers and readers, we will continue to shine a light on truth, foster meaningful dialogue, and shape a more informed society.</p> 
                        </div>
                    </div>
                    <hr />
                    <div className="row py-3" >
                        <p className="fs-3 text-center">Our Vision <span className="text-mycolor"><b>& mission</b></span></p>
                        <div className="col-sm-12">
                            <p className="text-center">Looking forward, NBC News remains dedicated to upholding the highest journalistic standards in an ever-changing media landscape. We embrace new technologies and storytelling methods to connect with audiences wherever they are, while honoring our legacy of credibility and public service. Together with our viewers and readers, we will continue to shine a light on truth, foster meaningful dialogue, and shape a more informed society.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
