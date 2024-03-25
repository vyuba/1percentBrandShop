// import React from 'react'
import Navbar from "../components/Navbar"
// import heroImage1 from "/public/about_blank _ core lookbook (1).jpeg"
// import heroImage2 from "/public/about_blank _ core lookbook.jpeg"
import Card from "../components/Card"
import FooterCard from "./Footer"
function Home() {
  return (
    <div>
        <Navbar/>
        <div className="heroImage p-5 pt-[100px] w-[338px] h-[222px] grid gap-[8px]">
            {/* <div className="grid1"><img src={heroImage1} alt="" /></div>
            <div className="grid2"><img src={heroImage2} alt="" /></div>
            <div className="grid3"><img src={heroImage1} alt="" /></div> */}
        </div>
        <div>
            <Card/>
        </div>
        <div className="w-full grid place-items-center mb-[95px]">
            <p className="text-2xl font-Truculenta font-semibold pb-4">Newsletter</p>
            <div className=" bg-red-600 w-full py-[44px] grid place-items-center">
                <input className="w-9/12 outline-none placeholder:text-black placeholder:font-medium py-3 px-1" type="text" placeholder="Email:" />
            </div>
        </div>
        <div
        id="footer"
        className="px-10 py-8 lg:px-20 w-full bg-red-600 h-fit grid gap-5"
      >

        <FooterCard
           Header="Explore"
           row1="About us"
           row2="Shop"
           row3="Collections"
           row4="comunity"
        />
        <FooterCard
           Header="contact us"
           row1="Email: info@example.com"
           row2="Phone: +1-123-456-7890"
           row3="Address: 123 Fashion Ave, City, Country"
           row4="donate"
        />
        <FooterCard
           Header="follow us"
           row1="instagram"
           row2="twitter"
           row3="pinterest"
        />
            <p className="text-center text-lg font-Truculenta font-medium text-white">© 2024 Fashion Brand. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home