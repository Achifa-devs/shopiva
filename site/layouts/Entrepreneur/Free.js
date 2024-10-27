"use client"
import React, { useEffect, useState } from 'react'

import '../../app/entrepreneur/[id]/global.css'
import '../../app/entrepreneur/[id]/styles/xxl.css'

import logo_img from '../../images/462832894_122104672550563288_120709183929923776_n.jpg'
import Solution from '../../components/floaters.js/Solution'
import Resources from '../../components/floaters.js/Resources'
import { 
  usePathname 
} from 'next/navigation'
import { useSelector } from 'react-redux'
 
export default function EntrepreneurFreeLayout({children}) {

  let [count, set_count]  =useState(0);
  let [logged_in, set_logged_in] = useState(false)

  let {
    entrepreneur_id
  }=useSelector(s=>s.entrepreneur_id)

  useEffect(() => {
    if(entrepreneur_id !== null){
      set_logged_in(true)
    }else{
      set_logged_in(false)
    }
  }, [entrepreneur_id])
  

  let [solution_menu, set_solution_menu] = useState(false)
  let [resources_menu, set_resources_menu] = useState(false)  
  let [list, set_list]  =useState([
    'Get Your Store Global',
    'Get Your Brand Popular',
    'Get Your Business To The Next Level',
    'Get Your Your Permanent Customers',
  ])
  const [index, setIndex] = useState(0);

  // let [clause, set_clause]  =useState(list[index])
  

  let pathname = usePathname();



  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [list.length]);


  useEffect(() => {
    document.body.style.background='#000'
    document.body.querySelector('main').style.background='#000'
    // document.querySelector('header').style.height='70px'
  }, [])
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
                    window.open('/entrepreneur/ng/pricing')
                  }}>Pricing</li>
                 
              </ul>
          </section>
          <section>
              <ul>
                 {
                  logged_in
                  &&
                  <li onClick={e => {
                    window.open('/entrepreneur/login')
                  }}>Log in</li>
                 }
                  <li onClick={e => {
                    window.open('')
                  }}>Start Free Trial</li>
              </ul>
          </section>
        </div>

        {
          pathname.split('/').splice(0,3)[2].length === 2 && pathname.split('/').splice(-1)[0].length == 2
          ?
          <div className="dashboard-head" style={{position: 'absolute', top: '0', left: '0'}}>

          <video style={{height: '100vh', width: '100%', objectFit: 'cover', zIndex: '1000'}} src={'/VideoMerge_13-10-2024_224733.mp4'} 
          autoPlay
          loop
          muted
          playsInline >
              <source src={'/VideoMerge_13-10-2024_224733.mp4'} autoPlay type="video/mp4" />
          </video>

          <div style={{zIndex: '500', position: 'absolute', top: '100px', left: '30px', color: '#fff', height: 'auto', maxWidth: '50%', padding: '10px', borderRadius: '10px'}}>

            <h2 style={{fontSize: '11vh', fontWeight: 'lighter', zIndex: '2000', opacity: '1'}}>{list[index]}</h2>

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
            <h6 style={{margin: '0'}}>Shopiva</h6>
          </div>

         
          <div>
            <h6>Shopiva</h6>
            <ul>
              <li onClick={e=> window.location.href='/entrepreneur/ng/about'} style={{fontSize: 'small'}}>About</li>
              {/* <li onClick={e=> window.location.href='/entrepreneur/ng/careers'} style={{fontSize: 'small'}}>Careers</li> */}
              {/* <li onClick={e=> window.location.href='/entrepreneur/ng/investors'} style={{fontSize: 'small'}}>Investors</li> */}
              
              {/* <li onClick={e=> window.location.href='/entrepreneur/ng/partners'} style={{fontSize: 'small'}}>Partners</li> */}
              <li onClick={e=> window.location.href='/entrepreneur/ng/affiliates'} style={{fontSize: 'small'}}>Affiliates</li>
              <li onClick={e=> window.location.href='/entrepreneur/ng/legal'} style={{fontSize: 'small'}}>Legal</li>
              {/* <li onClick={e=> window.location.href='/entrepreneur/ng/service-status'} style={{fontSize: 'small'}}>Service Status</li> */}
            </ul>
          </div>

          
          <div>
            <h6>Support</h6>
            <ul>
              {/* <li onClick={e=> window.location.href='/entrepreneur/ng/merchant-support'} style={{fontSize: 'small'}}>Merchant Support</li> */}
              <li onClick={e=> window.location.href='/entrepreneur/ng/'} style={{fontSize: 'small'}}>Help Center</li>
              <li onClick={e=> window.location.href='/entrepreneur/ng/help-center'} style={{fontSize: 'small'}}>Hire a Partner</li>
              <li onClick={e=> window.location.href='/entrepreneur/ng/shopiva-academy'} style={{fontSize: 'small'}}>Shopiva Academy</li>
              <li onClick={e=> window.location.href='/entrepreneur/ng/shopiva-community'} style={{fontSize: 'small'}}>Shopiva Community</li>
            </ul>
          </div>


          <div>
            <h6>Developers</h6>
            <ul>
              <li  onClick={e=> window.location.href='/entrepreneur/ng/shopiva.dev'} style={{fontSize: 'small'}}>Shopiva.dev</li>
              <li  onClick={e=> window.location.href='/entrepreneur/ng/api-doc'} style={{fontSize: 'small'}}>API Documentation</li>
            </ul>
          </div>


          <div>
            <h6>Products</h6>
            <ul>
              <li onClick={e=> window.location.href='/entrepreneur/ng/shop'} style={{fontSize: 'small'}}>Shop</li>
              <li onClick={e=> window.location.href='/entrepreneur/ng/shopiva-plus'} style={{fontSize: 'small'}}>Shopiva Plus</li>
              
              <li onClick={e=> window.location.href='/entrepreneur/ng/shopiva-for-enterprise'} style={{fontSize: 'small'}}>Shopiva for Enterprise</li>
            </ul>
          </div>

        </section>

        <hr />

        <section className='copywright'>
          <div style={{height: '100%'}}>
            <ul>
             
              <li  onClick={e=> window.location.href='/entrepreneur/ng/terms-of-use'}>Terms Of Service</li>
              <li  onClick={e=> window.location.href='/entrepreneur/ng/privacy-policy'}>Privacy Policy</li>
              <li  onClick={e=> window.location.href='/entrepreneur/ng/sitemap'}>Sitemap</li>
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