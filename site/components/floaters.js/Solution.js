import React from 'react'
import start_svg from '../../svgs/security-protection-shield-start-svgrepo-com.svg'
import sell_svg from '../../svgs/coin-vector-svgrepo-com.svg'
import market_svg from '../../svgs/market-stand-svgrepo-com.svg'
import manage_svg from '../../svgs/package-alt-svgrepo-com.svg'

export default function Solution() {
  return (
    <>
      <div className='solution-floater-overlay'>
          <div className='solution-floater'>
          
            <section>
                <h5>
                    <span>
                        <img src={start_svg.src} style={{height: '30px', width: '30px'}} />
                    </span>
                    &nbsp;                    &nbsp;
                    <span>Start</span>
                </h5>
                <hr />
                <ul>
                    <li>
                        <h6>Start your business.</h6>
                        <small>Build your brand</small>
                    </li>
                    <li>
                        <h6>Create your website.</h6>
                        <small>Online store editor</small>
                    </li>
                    <li>
                        <h6>Customize your store.</h6>
                        <small>Store themes</small>
                    </li>
                    <li>
                        <h6>Explore free business tools.</h6>
                        <small>Tools to run your business</small>
                    </li>
                </ul>
            </section>

            <section>
                <h5>
                    <span>
                    <img src={sell_svg.src} style={{height: '30px', width: '30px'}} />

                    </span>
                    &nbsp;                    &nbsp;
                    <span>Sell</span>
                </h5>
                <hr />
                 <ul>
                     <li>
                        <h6>Sell your products.</h6>
                        <small>Sell online or in person</small>
                    </li>
                    <li>
                        <h6>Sell online.</h6>
                        <small>Grow your business online</small>
                    </li>
                    <li>
                        <h6>Sell across channels.</h6>
                        <small>Reach millions of shoppers and boost sales</small>
                    </li>
                    <li>
                        <h6>Sell in person.</h6>
                        <small>Point of Sale (POS)</small>
                    </li>
                    <li>
                        <h6>Sell globally.</h6>
                        <small>International sales</small>
                    </li>
                    <li>
                        <h6>Sell wholesale & direct.</h6>
                        <small>Business-to-business (B2B)</small>
                    </li>
                </ul>
            </section>
            <section>
                <h5>
                    <span>
                        <img src={market_svg.src} style={{height: '30px', width: '30px'}} />
                    </span>
                    &nbsp;                    &nbsp;
                    <span>Market</span>
                </h5>
                <hr />
                 <ul>
                     <li>
                        <h6>Market your business.</h6>
                        <small>Reach & retain customers</small>
                    </li>
                    <li>
                        <h6>Market across social.</h6>
                        <small>Social media integrations</small>
                    </li>
                    <li>
                        <h6>Chat with customers.</h6>
                        <small>Shopiva Inbox</small>
                    </li>
                    <li>
                        <h6>Nurture customers.</h6>
                        <small>Shopiva Email</small>
                    </li>
                    <li>
                        <h6>Know your audience.</h6>
                        <small>Gain customer insights</small>
                    </li>
                </ul>
            </section>
            <section>
                <h5>
                    <span>
                        <img src={manage_svg.src} style={{height: '30px', width: '30px'}} />
                    </span>
                    &nbsp;                    &nbsp;
                    <span>Manage</span>
                </h5>
                <hr />
                 <ul>
                     <li>
                        <h6>Manage your business.</h6>
                        <small>Track sales, orders & analytics</small>
                    </li>
                    <li>
                        <h6>Measure your performance.</h6>
                        <small>Analytics and Reporting</small>
                    </li>
                    <li>
                        <h6>Manage your stock & orders.</h6>
                        <small>Inventory & order management</small>
                    </li>
                    <li>
                        <h6>Automate your business.</h6>
                        <small>Shopiva Flow</small>
                    </li>
                </ul>
            </section>
            
          </div>
      </div>
    </>
  )
}
