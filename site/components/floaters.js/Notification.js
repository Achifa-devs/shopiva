import React from 'react'


import './style.css'
import filter_svg from '../../svgs/filter-svgrepo-com (1).svg'
import markasread_svg from '../../svgs/web-mark-as-favorite-star-svgrepo-com.svg'

export default function NotificationFloater() {
  return (
    <>
      <div className="notification-floater shadow-sm" >

        <div className='shadow-sm' style={{borderBottom: '1px solid #efefef', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}>
            <span><small><b>Alerts</b></small></span>
            <span>
                <span>
                    <img src={filter_svg.src} style={{height: '18px', width: '20px'}} alt="" />

                </span>
                &nbsp;
                &nbsp;
                &nbsp;
                <span>
                    <img src={markasread_svg.src} style={{height: '15px', width: '18px'}} alt="" />

                </span>

            </span>
        </div>
        {/* <hr /> */}

        <ul>

            <li>
                <div style={{justifyContent: 'flex-start', alignItems: 'center'}}> 
                    <span>
                        <input type="checkbox" name="" id="" />
                    </span> 
                    &nbsp;
                    &nbsp;
                    <span>
                        Billing
                    </span> 
                    &nbsp;
                    &#8226;
                    &nbsp;
                    <span>
                        2:20PM
                    </span>
                </div>
                <div style={{justifyContent: 'flex-start'}}>
                    <span style={{borderRadius: '50%', border: '1px solid red', height: '18px', width: '18px', display: 'flex', alignItems: 'center', color: 'red', justifyContent: 'center', padding: '4px'}}>!</span>
                    &nbsp;
                    &nbsp;
                    <span>Your bill payment failed</span>
                </div>
                <div>
                    <p style={{color: '#333333'}}>
                        Your $1.0 payment for your shopify bill could&apos;nt be processed because of a problem with your payment method.
                    </p>
                </div>
            </li>

            <li>
                <div style={{justifyContent: 'flex-start', alignItems: 'center'}}> 
                    <span>
                        <input type="checkbox" name="" id="" />
                    </span> 
                    &nbsp;
                    &nbsp;
                    <span>
                        Billing
                    </span> 
                    &nbsp;
                    &#8226;
                    &nbsp;
                    <span>
                        2:20PM
                    </span>
                </div>
                <div style={{justifyContent: 'flex-start'}}>
                    <span style={{borderRadius: '50%', border: '1px solid red', height: '18px', width: '18px', display: 'flex', alignItems: 'center', color: 'red', justifyContent: 'center', padding: '4px'}}>!</span>
                    &nbsp;
                    &nbsp;
                    <span>Your bill payment failed</span>
                </div>
                <div>
                    <p style={{color: '#333333'}}>
                        Your $1.0 payment for your shopify bill could&apos;nt be processed because of a problem with your payment method.
                    </p>
                </div>
            </li>

            <li>
                <div style={{justifyContent: 'flex-start', alignItems: 'center'}}> 
                    <span>
                        <input type="checkbox" name="" id="" />
                    </span> 
                    &nbsp;
                    &nbsp;
                    <span>
                        Billing
                    </span> 
                    &nbsp;
                    &#8226;
                    &nbsp;
                    <span>
                        2:20PM
                    </span>
                </div>
                <div style={{justifyContent: 'flex-start'}}>
                    <span style={{borderRadius: '50%', border: '1px solid red', height: '18px', width: '18px', display: 'flex', alignItems: 'center', color: 'red', justifyContent: 'center', padding: '4px'}}>!</span>
                    &nbsp;
                    &nbsp;
                    <span>Your bill payment failed</span>
                </div>
                <div>
                    <p style={{color: '#333333'}}>
                        Your $1.0 payment for your shopify bill could&apos;nt be processed because of a problem with your payment method.
                    </p>
                </div>
            </li>

            <li>
                <div style={{justifyContent: 'flex-start', alignItems: 'center'}}> 
                    <span>
                        <input type="checkbox" name="" id="" />
                    </span> 
                    &nbsp;
                    &nbsp;
                    <span>
                        Billing
                    </span> 
                    &nbsp;
                    &#8226;
                    &nbsp;
                    <span>
                        2:20PM
                    </span>
                </div>
                <div style={{justifyContent: 'flex-start'}}>
                    <span style={{borderRadius: '50%', border: '1px solid red', height: '18px', width: '18px', display: 'flex', alignItems: 'center', color: 'red', justifyContent: 'center', padding: '4px'}}>!</span>
                    &nbsp;
                    &nbsp;
                    <span>Your bill payment failed</span>
                </div>
                <div>
                    <p style={{color: '#333333'}}>
                        Your $1.0 payment for your shopify bill could&apos;nt be processed because of a problem with your payment method.
                    </p>
                </div>
            </li>
            

        </ul>

      </div>
    </>
  )
}
