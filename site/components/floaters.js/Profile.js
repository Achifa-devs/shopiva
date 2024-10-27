import React from 'react'


import './style.css'
import shop_svg from '../../svgs/shop-svgrepo-com.svg'

export default function ProfileFloater() {
  return (
    <>
      <div className="profile-floater shadow-sm" >

        <ul>
            <li>
                <span style={{background: '#07d300', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px', fontSize: 'x-small'}}>
                    NM
                </span>
                {/* &nbsp; */}
                &nbsp;
                &nbsp;
                <span>Noval Mall</span>
            </li>
            <li>
                <span>
                    <img src={shop_svg.src} alt="" style={{height: '20px', width: '20px'}} />
                </span>
                &nbsp;
                &nbsp;
                <span>All Stores</span>
            </li>
            <hr />
            <li>
                <span></span>
                <span>Help center</span>
            </li>
            <li>
                <span></span>
                <span>Changelog</span>
            </li>
            <li>
                <span></span>
                <span>Community forums</span>
            </li>
            <li>
                <span></span>
                <span>Hire a Shopify Partner</span>
            </li>
            {/* <li>
                <span></span>
                <span>Keyboard shortcuts</span>
            </li> */}
            <hr />
            <li>
                {/* <span></span> */}
                <span>
                    <div style={{padding: '2px 5px'}}>
                        Akpulu Chinedu
                    </div>
                    <div style={{marginTop: '-12px', padding: '2px 5px', fontSize: 'x-small'}}>akpulufabian@gmai.com</div>
                </span>
            </li>
            <li onClick={e=> {
                window.open('/entrepreneur/user-profile')
            }}>
                <span></span>
                <span>Manage account</span>
            </li>
            <li>
                <span></span>
                <span>Log out</span>
            </li>

        </ul>

      </div>
    </>
  )
}
