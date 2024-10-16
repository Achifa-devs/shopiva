"use client"
import React, { useEffect, useState } from 'react'

import './global.css'
// import video from '@/vids/VideoMerge_13-10-2024_224733.mp4'

export default function Dashboard() {

    
  
  return (
    <>

      

      <div className="dashboard-summary" style={{position: 'relative', zIndex: '1000', background: '#fff', height: 'auto', padding: '40px'}}>

        <ul>
          <li>
            <div></div>
            <div></div>
            <div></div>
          </li>

          <li>
            <div></div>
            <div></div>
            <div></div>
          </li>

          <li>
            <div></div>
            <div></div>
            <div></div>
          </li>

          <li>
            <div></div>
            <div></div>
            <div></div>
          </li>
        </ul>

      </div>

      <div className="dashboard-body">
        <div>
          <section style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'flex-end', padding: '20px 55px', fontWeight: '100'}}>
            <h2 style={{fontSize: '9vh', fontWeight: 'lighter', zIndex: '2000', color: '#fff'}}>
            For everyone from
            <br />
            entrepreneurs to enterprise
            </h2>
            <small style={{color: '#fff'}}>
            Millions of merchants of every size have collectively made over $1,000,000,000,000 in sales on Shopify.
            </small>
          </section>
          <section>
            <ul>
              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>
              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>
              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>
            </ul>
          </section>
          <section style={{background: '#000'}}>
            <button style={{border: '1px solid #fff', color: '#fff', padding: '5px 10px', background: '#000', borderRadius: '20px', fontSize: 'medium'}}>
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
            <small style={{color: '#fff'}}>
            
            Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.
            </small>
          </section>


          <section style={{background: '#000'}}>
            <ul>
              <div style={{height: '80vh', width: '100%', background: '#00926e', borderRadius: '10px'}}>
              </div>
            </ul>
            <ul>
              
              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>

              <li>
                <div></div>
                <div></div>
                <div></div>
              </li>

              <li>
                <div></div>
                <div></div>
                <div></div>
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

            <ul style={{background: 'transparent', padding: '0'}}>
              <li style={{width: '46%'}}>
                <div></div>
                <div></div>
                <div></div>
              </li>

              <li style={{width: '46%'}}>
                <div></div>
                <div></div>
                <div></div>
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
              Other Place To 
              <br />
              Build Your Store Online
              </h2>
              <small style={{color: '#fff'}}>
              
              Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.
              </small>
          </section>

          <div style={{padding: '50px'}}>
              <div className='conclude-lg-img' style={{height: '500px', width: '46%'}}>

              </div>

              <div>

              </div>
            </div>
        </div>
      </div>


      <div className="dashboard-footer">

      </div>
      
    </>
  )
}
