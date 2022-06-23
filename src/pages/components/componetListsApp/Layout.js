// import React,{useState,useEffect} from 'react'


const Layout = ({ children }) => {
const storageIMG=JSON.parse(window.localStorage.getItem("userProfile"));
console.log("layout", storageIMG) ;
  const img=require(`../../../images/${storageIMG}`);;


  return (

    <div className='container p-3 p-sm-1'>
          <div className='imageBox' style={{width:"200px",height:"200px",background:"white"}}><img src={img} alt="profilImage"/></div>
      <div className='row justify-content-center'>
        <div className='col-xl-6 col-lg-7 col-md-10'>
          <div className='card'>
            <div className='card-body'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
