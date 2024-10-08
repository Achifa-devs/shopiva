"use client"
import './styles/global.css'
import './styles/small.css'
import './styles/medium.css'
import register_svg from '@/svgs/subscribe-svgrepo-com (1).svg'
import sub_svg from '@/svgs/subscribe-filled-svgrepo-com.svg'
import email_svg from '@/svgs/email-marketing-advertising-svgrepo-com.svg'
import launch_svg from '@/svgs/launch-svgrepo-com.svg'
import enjoy_svg from '@/svgs/savor-svgrepo-com.svg'

import customer_1_svg from '@/images/1bac0ae1195b0e81c1ba874b07ac04fe.webp'
import customer_2_svg from '@/images/90bf25f0d1242103901f9338fbe49ed0.webp'

import img_1_svg from '@/images/Rectangle_874.webp'
import img_2_svg from '@/images/glossier-impressions-launch-hp-module-desktop-03.avif'
import img_3_svg from '@/images/ce0048c94b712ae773a1f6371ced6303.webp'
import img_4_svg from '@/images/bbcn2_2405_1__2925-4290.webp'
import img_5_svg from '@/images/HM_5LB_540x.webp'


import pay_svg from '@/svgs/pay-in-cash-money-dollar-bill-svgrepo-com.svg'
import mkting_svg from '@/svgs/marketing-mobile-information-speaker-news-svgrepo-com.svg'
import growth_svg from '@/svgs/growth-report-graph-svgrepo-com.svg'
import ui_svg from '@/svgs/ui-checks-grid-svgrepo-com.svg'
import cheap_svg from '@/svgs/sale-svgrepo-com (1).svg'
import menu_svg from '@/svgs/menu-alt-2-svgrepo-com.svg'
import cancel_svg from '@/svgs/close-square-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFloater } from '@/reusables/anitmation'
import { set_floater_src } from '@/redux/entrepreneur/floater_src'
import SearchFloater from '@/components/floaters.js/Search'
import ProfileFloater from '@/components/floaters.js/Profile'
export default function Presale(){
    let dispatch = useDispatch()

    let [screenWidth, setScreenWidth] = useState(0)
    let [active_floater, set_active_floater] = useState(null)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [])


    let [close, set_close]  =useState(false)
   

    return(

        <>

            <div className="pre-sale-menu" onClick={e=>{
                if(e.currentTarget === e.target){
                    set_close(false)
                    document.querySelector('.pre-sale-menu').removeAttribute('id')
                }else{
                    set_close(true)
                    document.querySelector('.pre-sale-menu').setAttribute('id', 'pre-sale-menu')
                }
            }}>
                <ul>
                    <li onClick={e=> {
                        window.location.href='#intro'
                    }}>Intro</li>
                    <li onClick={e=> {
                        window.location.href='#why'
                    }}>Why Us</li>
                    <li onClick={e=> {
                        window.location.href='#who-we-are'
                    }}>Who We Are</li>
                    <li onClick={e=> {
                        window.location.href='#benefits'
                    }}>Your Benefits</li>
                    <li onClick={e=> {
                        window.location.href='#how-it-works'
                    }}>How It Works</li>

                    <li onClick={e=> {
                        window.open('/entrepreneur/signup')
                    }}>Get started</li>
                </ul>
            </div>

            <header>
                <section><b style={{color: '#00926e'}}>Shopiva</b></section>

                <section style={{alignItems: 'center'}}>

                    <button  style={{background: '#fff', display: screenWidth  <= 480 ? 'flex' :'none'}} onClick={e=>{
                        if(document.querySelector('.pre-sale-menu').hasAttribute('id')){
                            set_close(false)
                            document.querySelector('.pre-sale-menu').removeAttribute('id')
                        }else{
                            set_close(true)
                            document.querySelector('.pre-sale-menu').setAttribute('id', 'pre-sale-menu')
                        }
                    }}>

                        <img src={
                            !close
                            ?
                            menu_svg.src
                            :
                            cancel_svg.src
                            
                            } style={{height: '40px', width: '40px'}} alt="" />
                    </button>

                    <ul>
                        <li onClick={e=> {
                            window.location.href='#intro'
                        }}>Intro</li>
                        <li onClick={e=> {
                            window.location.href='#why'
                        }}>Why Us</li>
                        <li onClick={e=> {
                            window.location.href='#who-we-are'
                        }}>Who We Are</li>
                        <li onClick={e=> {
                            window.location.href='#benefits'
                        }}>Your Benefits</li>
                        <li onClick={e=> {
                            window.location.href='#how-it-works'
                        }}>How It Works</li>

                        <li onClick={e=> {
                            window.open('/entrepreneur/signup')
                        }}>Get started</li>
                    </ul>
                </section>
            </header>
            <div id='intro' className='header' style={{height: '100vh', width: '100vw'}}>
                
                <section>
                    <div style={{textAlign: 'center', background: '#00351ce8'}}>

                        <h4 style={{color: '#fff', width: '100%', transform: 'skew(-30deg)', padding: '50px'}}>Make Instant Sales Now Than Ever Before On <b><u>Shopiva</u></b>.</h4>

                        <div style={{width: '100%', transform: 'skew(0deg)', opacity: '1', textAlign: 'center', display: 'flex', justifyContent: 'center', height: 'auto', marginTop: '10px', flexDirection: 'column', alignItems: 'center', background: 'transparent'}}>

                            <h6 style={{color: '#fff', width: '100%', transform: 'skew(-30deg)', padding: '10px'}}>The Best Offer Ever</h6>
                            <button onClick={e=> {
                                window.open('/entrepreneur/signup')
                            }} style={{transform: 'skew(-30deg)', padding: '10px', background: '#00926e', borderRadius: '5px'}}>Subscribe Now</button>

                        </div>

                    </div>
                    <div style={{textAlign: 'center', padding: '10% 0px 0px 0px', transform: 'skew(-30deg)'}}>
                        <h5 style={{color: '#000', transform: 'skew(30deg)', fontSize: '6vh', padding: '50px', marginLeft: '5px', opacity: '1'}}>Don&apos;t miss out—join <b><u>Shopiva</u></b> today and watch your sales soar!</h5>

                        <div style={{width: '100%', transform: 'skew(30deg)', opacity: '1', textAlign: 'center', display: 'flex', justifyContent: 'center', height: 'auto', marginTop: '10px', flexDirection: 'column', alignItems: 'center', background: 'transparent'}}>

                            

                        </div>
                    </div>
                </section>
                
            </div>

            <main style={{overflow: 'auto'}}>

                <section id='why'>
                    <br />
                    <h4 style={{color: '#00926e'}}>Why Shopiva!</h4>
                    <br />
                    <ul style={{width: '100%'}}>
                        <li style={{height: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '10px 10px'}}>
                            <div>
                                <img src={growth_svg.src} style={{height: '40px', width: '40px', borderRadius: '0px'}} alt="" />

                            </div>
                            <div style={{color: '#00926e', fontWeight: 'bold'}}>Instant Sales Growth</div>
                        </li>

                        <li style={{height: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '10px 10px'}}>
                            <div>
                                <img src={ui_svg.src} style={{height: '40px', width: '40px', borderRadius: '0px'}} alt="" />

                            </div>
                            <div style={{color: '#00926e', fontWeight: 'bold'}}>User-Friendly Interface</div>
                        </li>
                        
                        <li style={{height: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '10px 10px'}}>
                            <div>
                                <img src={cheap_svg.src} style={{height: '40px', width: '40px', borderRadius: '0px'}} alt="" />

                            </div>
                            <div style={{color: '#00926e', fontWeight: 'bold'}}>Low Fees, Higher Profits</div>
                        </li>

                        <li style={{height: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '10px 10px'}}>
                            <div>
                                <img src={mkting_svg.src} style={{height: '40px', width: '40px', borderRadius: '0px'}} alt="" />

                            </div>
                            <div style={{color: '#00926e', fontWeight: 'bold'}}>Powerful Marketing Tools</div>
                        </li>

                        <li style={{height: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '10px 10px'}}>
                            <div>
                                <img src={pay_svg.src} style={{height: '40px', width: '40px', borderRadius: '0px'}} alt="" />

                            </div>
                            <div style={{color: '#00926e', fontWeight: 'bold'}}>Secure & Reliable Payments</div>
                        </li>
                    </ul>

                    <br />
                    <button onClick={e=> {
                        window.open('/entrepreneur/signup')
                    }}>Get Started</button>
                </section>


                <section id='who-we-are' style={{paddingBottom: '60px'}}>
                    <p style={{fontWeight: '400'}}>
                    The one commerce platform behind it all
                    </p>
                    <p style={{fontWeight: '100'}}>
                    Sell online and in person. Sell locally and globally. Sell direct and wholesale. Sell on desktop and mobile.
                    </p>


                    <div>
                        <ul>
                            <li style={{padding: '0'}}>
                                <img src={img_1_svg.src} style={{height: '100%', width: '100%', borderRadius: '10px'}} alt="" />

                            </li>
                            <li style={{padding: '0'}}>
                                <img src={img_2_svg.src} style={{height: '100%', width: '100%', borderRadius: '10px'}} alt="" />

                            </li>
                            <li style={{padding: '0'}}>
                                <img src={img_3_svg.src} style={{height: '100%', width: '100%', borderRadius: '10px'}} alt="" />
                                
                            </li>
                            <li style={{padding: '0'}}>
                                <img src={img_4_svg.src} style={{height: '100%', width: '100%', borderRadius: '10px'}} alt="" />

                            </li>
                            <li style={{padding: '0'}}>
                                <img src={img_5_svg.src} style={{height: '100%', width: '100%', borderRadius: '10px'}} alt="" />

                            </li>
                        </ul>
                    </div>
                </section>


                <section id='benefits'>
                    <h2>Find your forever customers</h2>
                    {/* <br /> */}

                    <div>
                        <ul>
                            <li>
                                <section style={{flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={customer_1_svg.src} style={{height: '100%', width: '100%'}} alt="" />
                                    </span>
                                    
                                    
                                    <span>
                                        <h5 style={{color: '#fff', padding: '10px', width: 'auto', textAlign: 'left', margin: '0'}}>Reach the right customers for less</h5>
                                        <p style={{padding: '10px', color: '#fff'}}>Acquire new customers and keep them coming back for more with integrated marketing tools and insightful analytics.</p>
                                    </span>
                                </section>
                            </li>
                            <li>
                                <section style={{flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={customer_2_svg.src} style={{height: '100%', width: '100%'}} alt="" />
                                    </span>
                                    
                                    
                                    <span>
                                        <h5 style={{color: '#fff', padding: '10px', width: 'auto', textAlign: 'left', margin: '0'}}>Unlock new growth with B2B</h5>
                                        <p style={{padding: '10px', color: '#fff'}}>Create custom experiences for wholesale buyers with flexible pricing, discounts, and payment terms.</p>
                                    </span>
                                </section>
                            </li>
                        </ul>

                    </div>
                    <br />

                </section>

                <section id='how-it-works'>
                    <h2 style={{fontSize: '7.5vh', fontWeight: '100', color: '#fff'}}>How it works</h2>
                    {/* <br /> */}

                    <div className='list-cnt'>
                        <div>
                            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                                <section style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={register_svg.src} style={{height: '40px', width: '40px'}} alt="" />
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span>
                                        <h4 className='how' style={{color: '#fff', width: 'auto', textAlign: 'left', margin: '0', padding: '0'}}>Register</h4>
                                    </span>
                                </section>
                                <h6 className='how-desc' style={{color: '#fff'}}>Register on our platform here to get started!</h6>
                            </div>

                            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                                <section style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={sub_svg.src} style={{height: '40px', width: '40px'}} alt="" />
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span>
                                        <h4 className='how' style={{color: '#fff', width: 'auto', textAlign: 'left', margin: '0', padding: '0'}}>Subscribe</h4>
                                    </span>
                                </section>
                                <h6 className='how-desc' style={{color: '#fff'}}>After registration, you will be redirected to the payment page where you will make payment.</h6>
                            </div>

                            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                                <section style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={email_svg.src} style={{height: '40px', width: '40px'}} alt="" />
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span>
                                        <h4 className='how' style={{color: '#fff', width: 'auto', textAlign: 'left', margin: '0', padding: '0'}}>Receive</h4>
                                    </span>
                                </section>
                                <h6 className='how-desc' style={{color: '#fff'}}>An email will be sent to you to confirmed your payment.</h6>
                            </div>
                       
                            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                                <section style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={launch_svg.src} style={{height: '40px', width: '40px'}} alt="" />
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span>
                                        <h4 className='how' style={{color: '#fff', width: 'auto', textAlign: 'left', margin: '0', padding: '0'}}>Wait for launch</h4>
                                    </span>
                                </section>
                                <h6 className='how-desc' style={{color: '#fff'}}>We will fully launch on August 20, 2025.</h6>
                            </div>

                            <div style={{width: '100%', height: 'auto', background: 'transparent'}}>
                                <section style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: '10px' , justifyContent: 'left', padding: '0', margin: '0'}}>
                                    <span>
                                        <img src={enjoy_svg.src} style={{height: '40px', width: '40px'}} alt="" />
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span>
                                        <h4 className='how' style={{color: '#fff', width: 'auto', textAlign: 'left', margin: '0', padding: '0'}}>Enjoy instant sales for 6 months</h4>
                                    </span>
                                </section>
                                <h6 className='how-desc' style={{color: '#fff'}}>You can now enjoy 6 months of instant sales</h6>
                            </div>
                        </div>
                    </div>
                    <br />

                </section>


            </main>

            <footer>
                <section>
                    <h5>© {new Date().getFullYear()} Shopiva Pre-sale</h5>
                </section>
                <section>
                    <ul style={{display: 'flex', margin: '0'}}>
                        <li>
                            <i class="fa-brands fa-tiktok fa-lg"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-facebook fa-lg"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter fa-lg"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-whatsapp fa-lg"></i>
                        </li>
                        
                    </ul>
                </section>
            </footer>
        </>
    )
}