import React from 'react'
import as from "./Footer.module.css"

import { SiCoinmarketcap } from "react-icons/si";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa'; // Import home icon


const Footer = () => {
    const navigate = useNavigate();



    return (
        <div className={`${as.Footer}   d-flex`}  >

            {/* footer divided into two section   */}

            {/* 1st one   */}
            <div className={`${as.Footersub1}    d-flex justify-content-end  align-items-center`}  >

                {/* coin details box  */}
                <div className={`${as.CoinDetailsBox}  `}   >

                    {/* conin details head  */}
                    <div className={`${as.CoinDetailshead}  d-flex `}   >
                        {/* divides into 2, 1st one shows coin and 2nd one shows buy coin button  */}


                        <div className={`${as.CoinDetailshead_1} d-flex `}   >
                            {/* icon  */}
                            <div className={`${as.img_cont}  d-flex justify-content-center align-items-center`}  >
                                {/* logo   */}
                                <img alt='coin_icon' loading='lazy' src={require("../../assets/coin1.png")}    ></img>
                            </div>

                            {/* 2nf  / */}

                            <div className={`${as.img_cont}  d-flex flex-column   justify-content-center align-items-start`}  >
                                <h6 className='mb-0 mt-1 pb-0 letter-spacing-1'>Sikka coin</h6>
                            </div>
                        </div>



                        <div className={`${as.CoinDetailshead_2} d-flex justify-content-center align-items-center `}   >

                            <button onClick={() => navigate("/Exchange/BuyCrypto")}>Buy Now</button>

                        </div>



                        <div>

                        </div>
                    </div>


                    <hr className='pt-1 mt-2 mt-0 pb-0 mb-0 text-secondary '  ></hr>



                    {/* coin details content via table  */}
                    <table className={`${as.CoinDetailsContent} `}   >
                        <tbody>
                            {/* 1 */}
                            <tr>
                                <td>Max Supply</td>
                                <td>500 CR</td>
                            </tr>

                            {/* 2// */}
                            {/* 1 */}
                            <tr>
                                <td>Total supply</td>
                                <td>500 CR</td>
                            </tr>


                            {/* 3 */}
                            {/* 1 */}
                            <tr>
                                <td>Circulating supply</td>
                                <td>45424400</td>
                            </tr>

                            {/* 4 */}

                            {/* 1 */}
                            <tr>
                                <td>Total Burned</td>
                                <td>44500.26</td>
                            </tr>

                            {/* 5 */}

                            {/* 1 */}
                            <tr>
                                <td>Market Cap</td>
                                <td>758800.23</td>
                            </tr>
                        </tbody>


                    </table>


                </div>


            </div>




            {/* 2nd one  */}
            <div className={`${as.Footersub2}  d-flex justify-content-start  align-items-top`}  >

                {/* 3 /  */}

                {/* 3*3  */}

                {/* 1 */}

             <div className={`${as.column_container}`}>
            <button
                className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
                onClick={() => navigate("/")}
            >
                <FaHome className="me-2" /> Home
            </button>

         <ul>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/")}
        >
            Home
        </button>
    </li>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/")}
        >
            Live price
        </button>
    </li>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/Exchange/BuyCrypto")}
        >
            Buy & Sell
        </button>
    </li>
</ul>

        </div>

                {/* 2 */}

                <div className={`${as.column_container}`}  >
                    <button
                        className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
                        onClick={() => navigate("/login")}
                    >
                        <FaHome className="me-2" /> Login
                    </button>                 

                        <ul>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/Register")}
        >
            Join Now
        </button>
    </li>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/login")}
        >
          Login
        </button>
    </li>
   
</ul>

                </div>

                {/* 3 */}
                <div className={`${as.column_container}`}  >
 <button
        className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
        onClick={() => navigate("/AboutUs")}
      >
        <FaHome className="me-2" /> About us 
      </button>                   
      

                       <ul>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            onClick={() => navigate("/AboutUs")}
        >
            About
        </button>
    </li>
    <li>
        <button
            className="bg-transparent border-0 text-white"
            style={{ textDecoration: "none" }}
            href="https://t.me/SikkaWorld"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("https://t.me/SikkaWorld", "_blank")}

           
        >
          Support For Telegram
        </button>
    </li>
   
</ul>

                </div>

                {/* 4 */}
                <div className={`${as.column_container_community} d-flex flex-column `}  >
                    <span className='text-center d-flex fw-bold justify-content-center text-white'  >Community</span>

                    {/* community icons / */}
                    <div className={`${as._community_icons}`}  >

                        {/* <Link className='text-white' to={""} target='_blank'    > <SiCoinmarketcap className={`${as._community_icons_icon}`} /> </Link> */}
                        <Link className='text-white' to={"https://t.me/SikkaWorld"} target='_blank'    ><FaTelegramPlane className={`${as._community_icons_icon}`} /></Link>
                        <Link className='text-white' to={"https://www.instagram.com/sikka.coin?igsh=MW9lOTI5ajRmZXdjdw=="} target='_blank'    > <RiInstagramFill className={`${as._community_icons_icon}`} /> </Link>
                        <Link className='text-white' to={"https://www.facebook.com/profile.php?id=61563270071051&rdid=EFyOFvzPtcW4dqie&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C4pvBqKBs%2F#"} target='_blank'    >  <FaFacebook className={`${as._community_icons_icon}`} /> </Link>
                        <Link className='text-white' to={"https://x.com/sikkaworld?t=IIM6GJ8mCXtMPE2tX1T0vw&s=09"} target='_blank'    > <FaTwitter className={`${as._community_icons_icon}`} /> </Link>
                        <Link className='text-white' to={"Follow me on LinkedIn: https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=sikka-coin-466037322"} target='_blank'    >  <FaLinkedin className={`${as._community_icons_icon}`} /> </Link>
                        <Link className='text-white' to={"https://www.youtube.com/watch?v=8qljY7S1iDo"} target='_blank'    >  <FaYoutube className={`${as._community_icons_icon}`} /> </Link>
                        <Link className='text-white' to={""} target='_blank'    > <FaSquareGithub className={`${as._community_icons_icon}`} /> </Link>
                    </div>

                    <div className={`${as.morebtns}  d-flex flex-column`}  >

                        <a className={`${as.morebtns_a}  `}    >
                            <FcShop className={`${as._community_marketplace_icon}`} />
                            <span className={`${as.morebtns_marketplacecaption}  `}   >Marketplace</span>
                        </a>


                        <a className={`${as.morebtns_b} bg-light `}    >
                            {/* <FcShop  className={`${as._community_marketplace_icon}`} /> */}
                            {/* <img alt='audit' loading='lazy' src={require("../../assets/audit.png")}  ></img> */}
                        </a>

                    </div>


                </div>



            </div>





        </div>
    )
}

export default Footer