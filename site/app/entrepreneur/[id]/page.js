"use client"
import React, { useEffect, useState } from 'react'
import './global.css'

import './styles/s.css'
import './styles/m.css'
import './styles/l.css'
import './styles/xl.css'
import './styles/xxl.css'

import shop_img3 from '../../../images/Online-Shop_12.webp'
import shop_img2 from '../../../images/Online-Shop_e8.webp' 
import shop_img1 from '../../../images/Online-Shop_n7.webp'

import bitcoin_svg from '../../../svgs/bitcoin-btc-crypto-svgrepo-com.svg'
import ui_svg from '../../../svgs/interface-ui-check-box-checkbox-todo-list-svgrepo-com.svg'
import globe_svg from '../../../svgs/global-svgrepo-com.svg'
import connect_svg from '../../../svgs/target-audience-svgrepo-com.svg'  

export default function Dashboard() {
 

  return (
    <>

      <div className="dashboard-summary" style={{position: 'relative', zIndex: '1000', height: 'auto', background: '#000'}}>

        <ul>
          <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', aligItems: 'flex-start', paddingTop: '10px'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.1)', marginLeft: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: 'auto', borderRadius: '8px'}}>
              <img src={connect_svg.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            </div>
            <div>
              <h4 style={{color: '#fff', textAlign: 'left'}}>Get Connected With Buyers Instantly</h4>
            </div>
            <div>
              <p style={{color: '#fff', textAlign: 'left', fontSize: 'medium'}}>Explore and take advantage of availbale customers using Shopiva worlwide, Don&apos;t miss this opportunity</p>
            </div>
          </li>

          <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', aligItems: 'flex-start', paddingTop: '10px'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.1)', marginLeft: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: 'auto', borderRadius: '8px'}}>
              <img src={bitcoin_svg.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            </div>
            <div>
              <h4 style={{color: '#fff', textAlign: 'left'}}>Payments In All Crypto Currencies</h4>
            </div>
            <div>
              <p style={{color: '#fff', textAlign: 'left', fontSize: 'medium'}}>Web3 technology is not a thing to Shopiva, Join Us now to receive payment both in any crypto currencies </p>
            </div>
          </li>

          <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', aligItems: 'flex-start', paddingTop: '10px'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.1)', marginLeft: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: 'auto', borderRadius: '8px'}}>
              <img src={globe_svg.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            </div>
            <div>
              <h4 style={{color: '#fff', textAlign: 'left'}}>Sell To Buyers From Anywhere</h4>
            </div>
            <div>
              <p style={{color: '#fff', textAlign: 'left', fontSize: 'medium'}}>With Shopiva you can offer products or services without geographical limitations. </p>
            </div>  
          </li>

          <li style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', aligItems: 'flex-start', paddingTop: '10px'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.1)', marginLeft: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: 'auto', borderRadius: '8px'}}>
              <img src={ui_svg.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            </div>
            <div>
              <h4 style={{color: '#fff', textAlign: 'left'}}>User Friendly Interface Tailored For Simplicity</h4>
            </div>
            <div>
              <p style={{color: '#fff', textAlign: 'left', fontSize: 'medium'}}>Shopiva focuses on providing an easy-to-navigate experience which prioritizes claritynand accessibility.</p>
            </div>
          </li>
        </ul>

      </div>

      <div className="dashboard-body">
        <div>
          <section style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'flex-end', fontWeight: '100'}}>
            <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff'}}>
            For everyone from
            <br />
            entrepreneurs to enterprise
            </h2>
           
          </section>
          <section>
            <ul>
              <li style={{padding: '10px'}}>
                <div>
                  <img src={shop_img1.src} style={{height: '160px', width: '100%', borderRadius: '10px'}} alt="" />

                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: '350px'}}>
                  <div style={{height: 'auto'}}>
                    <h5 style={{width: '100%', color: '#fff', textAlign: 'left'}}>Seamless Product Listing Management</h5>
                  </div>
                  <div style={{height: 'auto'}}>
                    <p style={{color: '#fff', textAlign: 'left'}}>Simplified product management tools allow sellers to easily add, edit, and manage their inventory without technical expertise. </p>
                  </div>
                </div>
              </li>
              <li style={{padding: '10px'}}>
                <div>
                  <img src={shop_img2.src} style={{height: '160px', width: '100%', borderRadius: '10px'}} alt="" />

                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: '350px'}}>
                  <div style={{height: 'auto'}}>
                    <h5 style={{width: '100%', color: '#fff', textAlign: 'left'}}>Effortless Order and Payment Tracking</h5>
                  </div>
                  <div style={{height: 'auto'}}>
                    <p style={{color: '#fff', textAlign: 'left'}}> A streamlined dashboard which provides an intuitive overview of order status, shipping progress, and payment transactions. </p>
                  </div>
                </div>
              </li>
              <li style={{padding: '10px'}}>
                <div>
                  <img src={shop_img3.src} style={{height: '160px', width: '100%', borderRadius: '10px'}} alt="" />

                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: '350px'}}>
                  <div style={{height: 'auto'}}>
                    <h5 style={{width: '100%', color: '#fff', textAlign: 'left'}}>Quick Access to Support and Resources</h5>
                  </div>
                  <div style={{height: 'auto'}}>
                    <p style={{color: '#fff', textAlign: 'left'}}>Entrepreneurs have instant access to customer support and business resources via an easy-to-navigate help center. </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section style={{background: '#000'}}>
            <button style={{border: '1px solid #fff', color: '#fff', padding: '5px 20px', background: '#000', borderRadius: '20px', fontSize: 'medium'}}>
              Pick a plan that fits
            </button>
          </section>
        </div>
        
        <br />
        <br />

        <div>
          <section style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'flex-end', padding: '20px 55px', fontWeight: '100'}}>
            <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff'}}>
            Sell here, there, 
            <br />
            and everywhere
            </h2>
            {/* <small style={{color: '#fff'}}>
            
            Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.
            </small> */}
          </section>


          <section style={{background: '#000'}}>
            <ul>
              <div className='globe-sale-cnt' style={{height: '80vh', width: '100%', borderRadius: '10px'}}>
                <div style={{height: 'auto', fontSize: 'unset', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <h2 style={{color: '#fff'}}>
                  Expand your business potential by connecting with millions of merchants worldwide through Shopiva. 
                  </h2>
                  <small style={{color: '#fff', fontSize: 'small'}}>Shopiva enables sellers of all sizes to reach a global audience of millions of merchants. The platform offers user-friendly tools that allow entrepreneurs to easily manage their stores and connect with buyers worldwide. By using Shopiva, sellers can expand their business horizons, gain international exposure, and scale up effectively in the competitive e-commerce space.</small>
                </div>
              
              </div>
            </ul>
            <ul className='globe-list-cnt'>
              
              <li className='globe-list' style={{padding: '5px'}}>
                
                <div style={{height: 'auto', fontSize: 'unset', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <h4 style={{color: '#fff', textAlign: 'left'}}>
                  Unveil Your Products to a Global Audience with Shopiva
                  </h4>
                  <small style={{color: '#fff', fontSize: 'small', textAlign: 'left'}}>Whether you’re launching the latest model or showcasing your luxury products, Shopiva helps your product unveiling company connect with millions of merchants globally. Reach potential partners and buyers in the automotive industry, and grow your brand with ease through a powerful, user-friendly platform.</small>
                </div>  
              </li>

              <li className='globe-list' style={{padding: '5px'}}>
                <div style={{height: 'auto', fontSize: 'unset', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <h4 style={{color: '#fff', textAlign: 'left'}}>
                  Scale Your Factory’s Production Worldwide via Shopiva
                  </h4>
                  <small style={{color: '#fff', fontSize: 'small', textAlign: 'left'}}>For factories looking to expand their reach, Shopiva offers a streamlined platform to connect with global distributors, retailers, and partners. With Shopiva, your factory can showcase its products to a diverse audience, unlocking new growth opportunities and scaling production to meet international demand.</small>
                </div>  
              </li>

              <li className='globe-list' style={{padding: '5px'}}>
                <div style={{height: 'auto', fontSize: 'unset', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <h4 style={{color: '#fff', textAlign: 'left'}}>
                  Transform Your Brand’s Reach with Shopiva
                  </h4>
                  <small style={{color: '#fff', fontSize: 'small', textAlign: 'left'}}>Elevate your Brand by connecting with millions of sellers and retailers across the world. Whether you specialize in boutique fashion or mass-produced apparel, Shopiva’s global marketplace allows your brand to stand out and attract customers, wholesalers, and merchants from all corners of the world.</small>
                </div>  
              </li>
            </ul>
          </section>

          
        </div>


        <div className='crypto-bg' style={{
         
          height: 'auto',
          width: '100%'
        }}>

          <section className='crypto-cnt'>
            <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff', }}>
            Get Payments In
            <br />
            Any Crypto Currency
            </h2>

            <br />
            <br />
            <br />

            <ul className='crypto-list-cnt' style={{background: 'transparent', padding: '0'}}>
              <li id='crypto-list' style={{  alignItems: 'flex-start', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff'}}>
                <div style={{pointerEvents: 'none'}}>
                  <h2 style={{color: '#fff'}}>Ensure Global Accessibility</h2>
                </div>
                <div style={{pointerEvents: 'none'}}>
                  <p style={{color: '#fff'}}>Accepting payments in cryptocurrency allows businesses to reach a broader, global audience. Since cryptocurrencies operate without the need for traditional banking systems, customers from regions with limited banking access can easily participate in transactions, increasing market reach.</p>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>
                    <button>Watch now</button>
                  </span>
                  <span><u style={{color: '#00926e'}}>Learn More</u></span>
                </div>
              </li>

              <li id='crypto-list' style={{  alignItems: 'flex-start', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff'}}>
                <div style={{pointerEvents: 'none'}}>
                  <h2 style={{color: '#fff'}}>Reduced Transaction Fees</h2>
                </div>
                <div style={{pointerEvents: 'none'}}>
                  <p style={{color: '#fff'}}>Cryptocurrencies often offer lower transaction fees compared to traditional payment methods, especially for cross-border transactions. This makes them a cost-effective option for businesses dealing with international customers or handling high-volume transactions.</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>
                    <button>Watch now</button>
                  </span>
                  <span><u style={{color: '#00926e'}}>Learn More</u></span>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </div>

      <div className="dashboard-conclusion" style={{overflow: 'hidden'}}>

        <div>
          <section style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'flex-end', padding: '20px 55px', fontWeight: '100'}}>
              <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff'}}>
              There Is No Better
              <br />
              Place To 
              <br />
              Build Your Store Online
              </h2>
             
          </section>

          <div style={{padding: '50px', display: 'flex', justifyContent: 'space-between',}}>
            <div className='conclude-lg-img' style={{height: '500px', width: '100%'}}>

              <div>
                <h2 style={{color: '#fff'}}>Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.</h2>

                <br />

                <small style={{color: '#fff'}}>
                Create a visually captivating and professional online store that’s optimized for sales, whether you’re building from scratch or using pre-built themes for a quick start. Our platform offers customizable templates that suit your brand’s unique style, ensuring your store not only looks great but is also designed to convert visitors into customers. With flexible options and seamless functionality, you can launch your store quickly while maintaining full control over its appearance and performance.
                </small>
              </div>

            </div>
          </div>
        </div>

        <div>
          <section style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'flex-end', padding: '20px 55px', fontWeight: '100'}}>
            <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff'}}>
              It&apos;s easy to start selling
            </h2>
          </section>

          <div className='tutorial-cnt' style={{padding: '0', display: 'flex', justifyContent: 'space-between'}}>
          
            <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}>

              <ol>
                <li onMouseOver={e=>handle_set_up('first')} style={{fontSize: '8vh', cursor: 'pointer', marginBottom: '20px', color: '#fff', fontWeight: '100', borderBottom: '1px solid #fff', padding: '5px 0px'}}>Add your first product</li>
                <li onMouseOver={e=>handle_set_up('second')} style={{fontSize: '8vh', cursor: 'pointer', marginBottom: '20px', color: '#fff', fontWeight: '100', borderBottom: '1px solid #fff', padding: '5px 0px'}}>Customize your store</li>
                <li onMouseOver={e=>handle_set_up('third')} style={{fontSize: '8vh', cursor: 'pointer', marginBottom: '20px', color: '#fff', fontWeight: '100', borderBottom: '1px solid #fff', padding: '5px 0px'}}>Set up payments</li>

                <br />
                <br />
                <br />

                <button style={{background: '#fff', color: '#000', padding: '20px', borderRadius: '15px'}}><b>Take Your Shot</b></button>

              </ol>
            </div>
          </div>
        </div>

      </div>

    </>
  )

  
}
