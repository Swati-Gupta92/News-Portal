import React from 'react'
import Navbar from './Navbar'
const TopNews = () => {
    return (
        <>
        <Navbar/>
            <div className="row py-2">
                <p className='fs-3 text-center'>Top<b className='text-mycolor'>News</b></p>
                <div className="col-sm-10 mx-auto">
                    <div className="row py-3">
                        {/* /Top News Card Start */}
                        <div className="col-sm-4 topnewscard">
                            <a href='#'>
                            <div className="card mx-auto shadow-lg border border-0" >
                                <img src="public\LandingPage\modi.jpeg" className="card-img-top img-fluid topnewsimg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-mycolor">India on way to 3rd biggest economy</h5>
                                    <p className="card-text">
                                       ime Minister Narendra Modi on Friday made a strong pitch for 'swadeshi' products and reaffirmed the resilience of the Indian economy amid global economic turbulence.
                                    </p>
                            
                                    <span className='topnewstext'>
                                        Posted By : <b>NBC ADMIN</b>
                                    </span><br />
                                    <span className='topnewstext'>
                                        Posted On : <b>01-2-2025</b>
                                    </span>
                                </div>
                            </div>
                            </a>
                        </div>
                        {/* /Top News Card End */}
                        {/* /Top News Card Start */}
                        <div className="col-sm-4 topnewscard">
                            <a href='#'>
                            <div className="card mx-auto shadow-lg border border-0" >
                                <img src="public\LandingPage\donaland.jpeg" className="card-img-top img-fluid topnewsimg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-mycolor">U.S. deploying nuclear</h5>
                                    <p className="card-text">
                                        U.S. President Donald Trump on Friday (August 1, 2025) said he had ordered two nuclear submarines to be positioned in “the appropriate regions” in response to statements from former Russian President Dmitry Medvedev.
                                    </p>
                                    
                                    <span className='topnewstext'>
                                        Posted By : <b>NBC ADMIN</b>
                                    </span><br />
                                    <span className='topnewstext'>
                                        Posted On : <b>01-2-2025</b>
                                    </span>
                                </div>
                            </div>
        p                    </a>
                        </div>
                        {/* /Top News Card End */}
                        {/* /Top News Card Start */}
                        <div className="col-sm-4 topnewscard">
                            <a href='#'>
                            <div className="card mx-auto shadow-lg border border-0" >
                                <img src="public\LandingPage\capgemini.jpeg" className="card-img-top img-fluid topnewsimg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-mycolor">Capgemini</h5>
                                    <p className="card-text">
                                        The company has decided to hire 40 to 45,000 people that will include 35-40% lateral entrants. The company’s India CEO said 
                                    </p>
                                    <span className='topnewstext'>
                                        Posted By : <b>NBC ADMIN</b>
                                    </span><br />
                                    <span className='topnewstext'>
                                        Posted On : <b>01-2-2025</b>
                                    </span>
                                </div>
                            </div>
                            </a>
                        </div>
                        {/* /Top News Card End */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNews
