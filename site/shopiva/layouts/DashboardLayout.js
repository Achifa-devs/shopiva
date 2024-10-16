"use client"
import React, { useState } from 'react'
import '@/app/dashboard/global.css'

export default function DashboardLayout({children}) {

  let [count, set_count]  =useState(0)
    let [list, set_list]  =useState([
    'Get Your Store Global',
    'Get Your Brand Popular',
    'Get Your Business To The Next Level',
    'Get Your Your Permanent Customers',
  ])
  let [clause, set_clause]  =useState(list[0])


  function txt_changer(params) {
    setInterval(() => {

      if(count === 3){
        set_count(0)
        set_clause(list[count])
      }else{
        set_count(count+1)
        set_clause(list[count])
      }
      
    },5000);
  }

  txt_changer()

  return (
    <>

      

      <header>
        <div className='header'>
          <section>
              <h3 style={{color: '#00926e', paddingLeft: '20px'}}>Shopiva</h3>
          </section>
          
          <section>
              <ul>
                  <li>Solutions</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                  <li>What&apos;new</li>
                  <li>Enterprise</li>
                  <li>More</li>
              </ul>
          </section>
          <section>
              <ul>
                  <li>Log in</li>
                  <li>Start Free Trial</li>
              </ul>
          </section>
        </div>

        <div className="dashboard-head" style={{position: 'absolute', top: '0', left: '0'}}>

          <video style={{height: '100vh', width: '100%', objectFit: 'cover', zIndex: '1000'}} src={'/vids/VideoMerge_13-10-2024_224733.mp4'} 
          autoPlay
          loop
          muted
          playsInline >
              <source src={'/vids/VideoMerge_13-10-2024_224733.mp4'} autoPlay type="video/mp4" />
          </video>

          <div style={{zIndex: '500', position: 'absolute', top: '100px', left: '30px', color: '#fff', height: 'auto', maxWidth: '50%', padding: '10px', borderRadius: '10px'}}>

            <h2 style={{fontSize: '11vh', fontWeight: 'lighter', zIndex: '2000', opacity: '1'}}>{clause}</h2>

          </div>

          <div style={{zIndex: '500', position: 'absolute', bottom: '50px', left: '30px', color: '#fff', height: 'auto', width: 'auto', padding: '10px', borderRadius: '10px'}}>


            <h4 style={{fontSize: '4vh', fontWeight: '100'}}>
              Dream big, build fast, 
              <br />
              and grow far on Shopiva.
            </h4>

          </div>
        </div>
      </header>

      <main style={{overflow: 'auto', height: 'auto', position: 'relative'}}>
        {
          children
        }
      </main>

      <footer>

      </footer>

      
    </>
  )
}
