"use client"
import React, { useState } from 'react'

import '@/app/dashboard/global.css'
import '@/app/dashboard/styles/xxl.css'

import logo_img from '@/images/462832894_122104672550563288_120709183929923776_n.jpg'
import Solution from '@/components/floaters.js/Solution'
import Resources from '@/components/floaters.js/Resources'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({children}) {

  let [count, set_count]  =useState(0)

  let [solution_menu, set_solution_menu] = useState(false)
  let [resources_menu, set_resources_menu] = useState(false)
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

  let pathname = usePathname();

  return (
    <>

      

      <header >
        <div className='header' style={{position: 'sticky', top: '0', left: '0', zIndex: '10000'}}>
          <section style={{marginLeft: '20px', flexDirection: 'row', display: 'flex', alignItems: 'flex-end'}}>
            <img src={logo_img.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            <h3 style={{color: '#00926e', paddingLeft: '20px'}}>Shopiva</h3>
          </section>
          {/* <div style={{flexDirection: 'row', display: 'flex', alignItems: 'flex-end'}}>
            <img src={logo_img.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            <h2>Shopiva</h2>
          </div>
           */}
          <section>
              <ul>
                  <li onClick={e => {
                    set_resources_menu(false)
                    set_solution_menu(!solution_menu)
                  }}>Solutions</li>
                  
                  <li onClick={e => {
                    set_solution_menu(false)
                    set_resources_menu(!resources_menu)
                  }}>Resources</li>

                  <li onClick={e => {
                    window.open('/dashboard/pricing')
                  }}>Pricing</li>
                  {/* <li onClick={e => {
                    window.open('/entrepreneur/whats-new')
                  }}>What&apos;new</li> */}
                  
              </ul>
          </section>
          <section>
              <ul>
                  <li onClick={e => {
                    window.open('/entrepreneur/login')
                  }}>Log in</li>
                  <li onClick={e => {
                    window.open('')
                  }}>Start Free Trial</li>
              </ul>
          </section>
        </div>

        {
          pathname.split('/').splice(-1)[0] === 'dashboard'
          ?
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
          :
          ''
        }
      </header>

      {
        solution_menu
        &&
        <Solution />
      }

      {
        resources_menu
        &&
        <Resources />
      }

      <main style={{overflow: 'auto', height: 'auto', position: 'relative'}}>
        {
          children
        }
      </main>

      <footer>
        <section style={{}}>

         
        
        </section>



        <section>
          <div style={{flexDirection: 'row', display: 'flex', alignItems: 'flex-end', height: '100%'}}>
            <img src={logo_img.src} style={{height: '50px', width: '50px', borderRadius: '10px'}} alt="" />
            &nbsp;
            &nbsp;
            <h5>Shopiva</h5>
          </div>

         
          <div>
            <h6>Shopiva</h6>
            <ul>
              <li style={{fontSize: 'small'}}>About</li>
              <li style={{fontSize: 'small'}}>Careers</li>
              <li style={{fontSize: 'small'}}>Investors</li>
              <li style={{fontSize: 'small'}}>Press And Media</li>
              <li style={{fontSize: 'small'}}>Partners</li>
              <li style={{fontSize: 'small'}}>Affiliates</li>
              <li style={{fontSize: 'small'}}>Legal</li>
              <li style={{fontSize: 'small'}}>Service Status</li>
            </ul>
          </div>

          
          <div>
            <h6>Support</h6>
            <ul>
              <li style={{fontSize: 'small'}}>Merchant Support</li>
              <li style={{fontSize: 'small'}}>Help Center</li>
              <li style={{fontSize: 'small'}}>Hire a Partner</li>
              <li style={{fontSize: 'small'}}>Shopiva Academy</li>
              <li style={{fontSize: 'small'}}>Shopiva Community</li>
            </ul>
          </div>


          <div>
            <h6>Developers</h6>
            <ul>
              <li style={{fontSize: 'small'}}>Shopiva.dev</li>
              <li style={{fontSize: 'small'}}>API Documentation</li>
              <li style={{fontSize: 'small'}}>Dev Degree</li>
            </ul>
          </div>


          <div>
            <h6>Products</h6>
            <ul>
              <li style={{fontSize: 'small'}}>Shop</li>
              <li style={{fontSize: 'small'}}>Shopiva Plus</li>
              <li style={{fontSize: 'small'}}>Linkpop</li>
              <li style={{fontSize: 'small'}}>Shopiva for Enterprise</li>
            </ul>
          </div>

        </section>

        <hr />

        <section className='copywright'>
          <div style={{height: '100%'}}>
            <ul>
             
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
              <li>Privacy Choices</li>
            </ul>
          </div>


          <div style={{height: '50px'}}>
            <ul style={{height: '100%', margin: '0', padding: '0'}}>
             <li>
                <i style={{display: 'flex', height: '100%', position: 'relative', alignItems: 'center'}} class="fa-brands fa-facebook fa-lg"></i>
              </li>
              <li>
                <i style={{display: 'flex', height: '100%', position: 'relative', alignItems: 'center'}} class="fa-brands fa-twitter fa-lg"></i>
              </li>
              <li>
                <i style={{display: 'flex', height: '100%', position: 'relative', alignItems: 'center'}} class="fa-brands fa-whatsapp fa-lg"></i>
              </li>
              <li>
                <i style={{display: 'flex', height: '100%', position: 'relative', alignItems: 'center'}} class="fa-brands fa-youtube fa-lg"></i>
              </li>
            </ul>
          </div>
        </section>

      </footer>

      
    </>
  )
}
