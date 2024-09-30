"use client"
import React, { useState } from 'react'
import './styles/s.css'
import './styles/xxl.css'
import Link from 'next/link'
export default function UserProfile() {

    let [active_panel, set_active_panel] = useState(1)
  return (
    <>
        <header className='shadow-sm'>
            <section>
                <b>Shopiva</b>
            </section>
            <section>
                <span style={{background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px', fontSize: 'x-small'}}>A.F</span>
                &nbsp;
                {/* &nbsp; */}
                <span><small>Akpulu Fabian</small></span>
            </section>
        </header>

        <main>

            <nav>
                <button onClick={e => set_active_panel(1)}>
                    <span></span>
                    <span>General</span>
                </button>
                <button onClick={e => set_active_panel(0)}>
                    <span></span>
                    <span>Security</span>
                </button>
            </nav>

            <hr />

            

            {/* <hr /> */}

            <div className='content'>
                <h3 style={{padding: '10px 10px ', minHeight: '50px', borderBottom: '1px solid #000'}}>
                    {
                        active_panel
                        ? 
                        'Genenral'
                        :
                        'Security'
                    }
                </h3>
                {
                    active_panel
                    ? 
                    <Genenral />
                    :
                    <Security />
                }
            </div>

        </main>
      
    </>
  )
}



function Genenral() {


    return(
        <>
            <div classN className='description'ame='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Details</b></p>
                    <small>View and updateyour personal details</small>
                </section>
                <div className="content-cnt">
                
                    <section>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flext-start', borderBottom: '1px solid #000', height: 'auto', padding: '10px 0px', marginBottom: '10px'}}>
                            <span style={{background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '10px', borderRadius: '5px', fontSize: 'x-small'}}>A.F</span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <button style={{background: '#fff', border: '1px solid #000', color: '#000', borderRadius: '5px'}}>
                                Upload photo
                            </button>
                        </div>

                        {/* <hr /> */}
                        <br />
                        <div className='names-cnt'>
                            <div className="input-cnt">
                                <label htmlFor="">First name</label>
                                <input type="text" name="" id="" placeholder='FirstName' />
                            </div>
                            <br />
                            <div className="input-cnt">
                                <label htmlFor="">Last name</label>
                                <input type="text" name="" id="" placeholder='LastName' />
                            </div>
                        </div>

                        <br />
                        
                        <br />

                        <div className='email-section'>
                            <div className="input-cnt">
                                <label htmlFor="">Email</label>
                                <input style={{border: 'none', outline: 'none', paddingLeft: '.5px'}} value={'akpulufabian@gmail.com'} type="email" name="" id="" placeholder='Email' />
                            </div>
                            <div className="input-cnt" style={{justifyContent: 'space-between', display: 'flex', padding: '20px 5px', marginTop: '10px'}}>
                                <span style={{color: 'green', height: '25px', display: 'flex', alignItems: 'flex-end', fontSize: 'small'}}>
                                    Verified
                                </span>
                                <span>
                                    <button className='update-btn'>
                                        <small>Update</small>
                                    </button>
                                </span>
                            </div>
                        </div>


                        <br />
                        
                        <br />

                        <div className='phone-section'>
                            <div className="input-cnt">
                                <label htmlFor="">Phone Number</label>
                                <input style={{border: 'none', outline: 'none', paddingLeft: '.5px'}} value={'08032639894'} type="tel" name="" id="" placeholder='Phone Number' />
                            </div>
                            <div className="input-cnt" style={{justifyContent: 'space-between', display: 'flex', padding: '20px 5px', marginTop: '10px'}}>
                                <span style={{color: 'green', height: '25px', display: 'flex', alignItems: 'flex-end', fontSize: 'small'}}>
                                    Verified
                                </span>
                                <span>
                                    <button className='update-btn'>
                                        <small>Update</small>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </section>
                
                </div>
            </div>

            <hr />

            <div classN className='description'ame='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Stores</b></p>
                    <small>
                        View and access stores connected to your Shopify account.
                    </small>
                </section>
                <div className="content-cnt">
                    <section style={{padding: '10px', textAlign: 'left', justifyContent: 'flex-start'}}>
                        <Link href={''}><small><b>View all stores</b></small></Link>
                    </section>
                </div>
            </div>

            <hr />

 
            <div classN className='description'ame='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Preferred language</b></p>
                    <small>
                        When you're logged in to Shopify, this is the language you will see. It doesn't affect the language your customers see on your online store.
                    </small>
                </section>
                <div className="content-cnt">
                    <section>
                        <div className="input-cnt cnt-input">
                            <label htmlFor=""><b>Language</b></label>
                            <select name="" id=""></select>
                        </div>
                        <br />
                        <hr />
                        <div>
                            <h6>Regional Format</h6>
                            <p><small>Your number, time, date, and currency formats are set for <b>English (Nigeria)</b>. Change regional format</small></p>
                        </div>
                    </section>
                </div>
            </div>

            <hr />


            <div classN className='description'ame='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Timezone</b></p>
                </section>
                <div className="content-cnt">
                    <section>
                        <div className="input-cnt cnt-input">
                            <label htmlFor=""><b>Timezone</b></label>
                            <select name="" id=""></select>
                        </div>
                         <br />
                        <div>
                            <p><small>This is the timezone for your account. To set the timezone for your Shopify admin, go to the General section in Settings.</small></p>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

function Security() {
    
    return(
        <>
            <div className='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Passkeys</b></p>
                    <p>
                        <small>
                        Log in with your fingerprint, face recognition or a PIN instead of a password. Passkeys can be synced across devices logged into the same platform (like Apple ID or a Google account).
                        </small>
                    </p>
                    <p><small>Learn More About Passkeys</small></p>
                </section>
                <div className="content-cnt" style={{height: '100px', padding: '10px'}}>
                
                    <section style={{height: 'auto', width: '100%', justifyContent: 'flex-start'}}>
                        <div htmlFor="">Creating a passkey takes under a minute.</div>
                        {/* <br /> */}
                        <button style={{width: 'auto', borderRadius: '2.5px', marginTop: '10px'}}>Create A Passkey</button>
                    </section>
                
                </div>
            </div>

            <hr />

            <div className='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Password</b></p>
                    <small>
                        {/* View and access stores connected to your Shopify account. */}
                    </small>
                </section>
                <div className='content-cnt'>
                    <section style={{height: 'fit-content', width: '100%', justifyContent: 'flex-start'}}>
                        <div>You have not set a password on your account.</div>
                            {/* <br /> */}
                        <button style={{width: 'auto', borderRadius: '2.5px', marginTop: '10px'}}>Create Password</button>
                    </section>
                </div>
            </div>

            <hr />
 
            <div className='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Secondary email</b></p>
                    <small>
                    A secondary email can be used to restore access to your account. Security notifications are also sent to this email.
                    </small>
                </section>
                <div className="content-cnt" style={{height: '50px'}}>
                    <section style={{height: '20px', justifyContent: 'flex-start', width: '100%'}}>
                        <div htmlFor="">You do not have a secondary email.</div>

                    </section>
                </div>
            </div>

            <hr />

            <div className='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Two-step authentication</b></p>
                    <p><small>Learn more about two-step authentication</small></p>
                </section>
                <div className="content-cnt">
                    <section >
                        <div className="input-cnt" style={{width: '100%', marginBottom: '50px'}}>
                            <label htmlFor=""><h6>
                            Authentication methods
                            </h6></label>
                            <p><small>After entering your password, verify your identity with an authentication method.</small></p>
                        </div>
                       
                       
                        <div>
                            <h6>How it works</h6>
                            <p>When you log in to Shopify, you’ll need to:</p>
                            <ol>
                                <li><small>Enter your email and password</small></li>
                                <li><small>Complete a second step to prove that it"s you logging in. You can enter a verification code, use a security key, or confirm your login on a trusted device.</small></li>
                            </ol>
                            <button>
                                Turn on two-step
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            <hr />

            <div className='description'>
                <section style={{padding: '10px 10px ', minHeight: '50px', display: 'flex', alignItem: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <p><b>Devices</b></p>
                    <p><small>You're currently logged in to Shopify on these devices. If you don't recognize a device, log out to keep your account secure.</small></p>
                </section>
                <div className="content-cnt" >
                    <section>
                        <h6 style={{width: '100%'}}>Logged In</h6>
                        <hr />
                        <div style={{width: '100%', background: '#fff', height: '60px', borderBottom: '1px solid #000'}} className='input-cnt'>
                            <div className="left" style={{width: 'auto',float: 'left'}}>
                                <div style={{height: 'auto'}}>
                                    <span></span>
                                    <span><small>Chrome On Windows</small></span>
                                    &nbsp;
                                    &nbsp;
                                    <span><small>This Device</small></span>
                                </div>
                                <div style={{height: 'auto'}}></div>
                                <div style={{height: 'auto'}}><small>Abuja(FCT), Nigeria</small></div>
                            </div>
                            <div className="right" style={{width: 'auto',float: 'right'}}>
                                <button style={{height: '30px', borderRadius: '5px'}}>Log out</button>
                            </div>
                        </div>
                        <div style={{width: '100%', background: '#fff', height: '60px', borderBottom: '1px solid #000'}} className='input-cnt'>
                            <div className="left" style={{width: 'auto',float: 'left'}}>
                                <div style={{height: 'auto'}}>
                                    <span></span>
                                    <span><small>Chrome On Windows</small></span>
                                    &nbsp;
                                    &nbsp;
                                    <span><small>This Device</small></span>
                                </div>
                                <div style={{height: 'auto'}}></div>
                                <div style={{height: 'auto'}}><small>Abuja(FCT), Nigeria</small></div>
                            </div>
                            <div className="right" style={{width: 'auto',float: 'right'}}>
                                <button style={{height: '30px', borderRadius: '5px'}}>Log out</button>
                            </div>
                        </div>
                
                        <br />
                
                    </section>
                </div>
            </div>

        </>
    )
}
