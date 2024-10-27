import React from 'react'
import start_svg from '../../svgs/security-protection-shield-start-svgrepo-com.svg'
import sell_svg from '../../svgs/coin-vector-svgrepo-com.svg'
import market_svg from '../../svgs/market-stand-svgrepo-com.svg'
import manage_svg from '../../svgs/package-alt-svgrepo-com.svg'

export default function Resources() {
  return (
    <>
      <div className='resources-floater-overlay'>
          <div className='resources-floater'>
          
            <section>
                <h5>
                    <span>
                        <img src={start_svg.src} style={{height: '30px', width: '30px'}} />
                    </span>
                    &nbsp;                    &nbsp;
                    <span>Help & Support</span>
                </h5>
                <hr />

                <ul>
                    <li>
                        <h6>Help and support.</h6>
                        <small>Get 24/7 support</small>
                    </li>
                    <li>
                        <h6>How-to guides.</h6>
                        <small>Read in-depth business guides</small>
                    </li>
                    <li>
                        <h6>Business courses.</h6>
                        <small>Learn from proven experts</small>
                    </li>
                    <li>
                        <h6>Shopiva blog.</h6>
                        <small>Business strategy tips</small>
                    </li>
                </ul>
            </section>

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

            <section>
                <h5>
                    <span>
                    <img src={sell_svg.src} style={{height: '30px', width: '30px'}} />

                    </span>
                    &nbsp;                    &nbsp;
                    <span>About Shopiva</span>
                </h5>

                <hr />
                 <ul>
                     <li>
                        <h6>What is Shopiva?</h6>
                        <small>How our commerce platform works</small>
                    </li>
                    <li>
                        <h6>Founder stories.</h6>
                        <small>Learn from successful merchants</small>
                    </li>
                    
                </ul>
            </section>

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

            <section>
                <h5>
                    <span>
                    <img src={sell_svg.src} style={{height: '30px', width: '30px'}} />

                    </span>
                    &nbsp;                    &nbsp;
                    <span>Popular Topics</span>
                </h5>

                <hr />
                 <ul>
                   
                    <li>
                        <h6>Branding.</h6>
                        <small>Build your brand from scratch</small>
                    </li>
                    <li>
                        <h6>Marketing.</h6>
                        <small>Build a marketing plan</small>
                    </li>
                    <li>
                        <h6>Ecommerce SEO.</h6>
                        <small>Improve your search ranking</small>
                    </li>
                    <li>
                        <h6>Social media strategy.</h6>
                        <small>Turn social into sales</small>
                    </li>
                    <li>
                        <h6>Business growth.</h6>
                        <small>Scale your business</small>
                    </li>
                </ul>
            </section>
          
          </div>
      </div>
    </>
  )
}
