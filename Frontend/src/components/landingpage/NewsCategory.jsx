import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LatestNews() {
  const [categoryList, setCatrgoryList] = useState([])
  const [newsList, setNewsList] = useState([])
  const [cityList, setCityList] = useState([])

  useEffect(() => {
    fetchCategory()
    fetchTopNews()
    fetchCity()
  }, [])
  const navigate=useNavigate()
  const fetchCategory = async () => {
    const response = await axios.get('http://localhost:9000/api/top-category');
    if (response?.data?.code == 200) {
      setCatrgoryList(response?.data?.data?.slice(0, 5));
    }
  }
  const fetchTopNews = async () => {
    const response = await axios.get('http://localhost:9000/api/top-ten-news');
    if (response?.data?.code == 200) {
      setNewsList(response?.data?.data?.slice(0, 3));
    }
  }
  const fetchCity = async () => {
    const response = await axios.get('http://localhost:9000/api/top-city');
    if (response?.data?.code == 200) {
      setCityList(response?.data?.data?.slice(0, 5));
    }
  }
  return (
    <>
      <div className='row py-2'>
        <p className='fs-3 text-center'>Latest <b className='text-mycolor'>News</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row'>

          </div>
          <div className='row py-3'>
            {/* catoery */}
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg category_latest_news" >
                <div className="card-header text-center text-mycolor text-light"><h5 className='text-mycolor'>News Category</h5></div>
                <ul className="list-group list-group-flush">

                  {categoryList?.map((item) => {
                    return (<>
                      <li onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}}  className="list-group-item">
                        <div className='card m-1'>
                          <div className='row g-0'>
                            <div className='col-4'>
                              <img width={100} src={item?.url} className='img-fluid rounded-start categoryimg' />
                            </div>
                            <div className='col-8'>
                              <p className='text-center pt-1'><b>{item?.category}</b></p>
                            </div>
                          </div>
                        </div>
                      </li>

                    </>)
                  })}
                  {categoryList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
                </ul>
              </div>

            </div>
            {/* latest news */}
            <div className='col-sm-6'>

              {
                newsList?.map((item) => {
                  return (<>
                    <div onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}} className="card mb-3 mx-auto shadow-lg border border-0">
                      <div height={100} className="row g-0">
                        <div className="col-md-4 ">
                          <img width={180} height={50} src={item?.url} className="img-thumbnail rounded-start " alt="..." />
                        </div>
                        <div className="col-md-8 ">
                          <div className="card-body p-1">
                            <h6 className="card-title m-0 fw-bold">{item?.title}</h6>
                            <p className="card-text m-0">
                              {item?.desc?.slice(0, 130)}...
                            </p>
                            <p className='m-0'>
                              <a className='btn btn-danger  text-light'>View More</a>
                              <span> {item?.category} </span>
                              <span> {item?.city}</span>
                            </p>
                            <p className="card-text m-0">
                              {/* <small className="text-body-secondary">Last updated {new Date(item?.createAt).toDateString()}</small> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>)
                })
              }
              {newsList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
            </div>
            {/* cities */}
            <div className='col-sm-3 '>
              <div className="card mx-auto shadow-lg category_latest_news" >
                <div className="card-header text-center bg-mycolor text-light"><h5 className='text-mycolor'>City</h5></div>
                <ul className="list-group list-group-flush">
                  {
                    cityList?.map((item) => {
                      return (<>
                        <li  onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}} className="list-group-item">
                          <div className='card m-1'>
                            <div className='row g-0'>
                              <div className='col-4'>
                                <img width={100} src={item?.url} className='img-fluid rounded-start categoryimg' />
                              </div>
                              <div className='col-8'>
                                <p className='text-center pt-1'><b>{item?.city}</b></p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>)
                    })
                  }
                  {cityList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LatestNews