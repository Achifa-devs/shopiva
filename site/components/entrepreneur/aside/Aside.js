"use client"
import React, { useState } from 'react'
import './assets/xxl.css'
import './assets/xl.css'
import './assets/l.css'
import './assets/s.css'
import './assets/m.css'

import home_svg from '../../../svgs/home-1-svgrepo-com (2).svg'
import product_svg from '../../../svgs/product-service-campaign-svgrepo-com.svg'
import discount_svg from '../../../svgs/discount-svgrepo-com.svg'
import order_svg from '../../../svgs/order-completed-svgrepo-com (1).svg'
import pos_svg from '../../../svgs/pos-svgrepo-com.svg'
import customer_svg from '../../../svgs/customer-qudaoliebiao-line-svgrepo-com.svg'
import report_svg from '../../../svgs/report-flag-1420-svgrepo-com.svg'
import inventory_svg from '../../../svgs/store-inventory-inventory-stock-supply-svgrepo-com (1).svg'
import settings_svg from '../../../svgs/settings-svgrepo-com (7).svg'
import profile_svg from '../../../svgs/profile-circle-svgrepo-com (5).svg'
import transaction_svg from '../../../svgs/transaction-minus-svgrepo-com.svg'
import referral_svg from '../../../svgs/transaction-minus-svgrepo-com.svg'
import arrow_svg from '../../../svgs/back-svgrepo-com (3).svg'
import shop_svg from '../../../svgs/shop-svgrepo-com.svg'
import marketing_svg from '../../../svgs/marketing-svgrepo-com.svg'
import team_svg from '../../../svgs/team-svgrepo-com.svg'
import add_on_svg from '../../../svgs/application-x-addon-svgrepo-com.svg'
import integration_svg from '../../../svgs/data-mapping-svgrepo-com.svg'
import support_svg from '../../../svgs/support-help-headset-svgrepo-com.svg'
import tutorials_svg from '../../../svgs/transaction-minus-svgrepo-com.svg'
export default function Aside() {

    let [order_accordion, set_order_accordion] = useState(false)
    let [report_accordion, set_report_accordion] = useState(false)
    let [customer_accordion, set_customer_accordion] = useState(false)
    let [transaction_accordion, set_transaction_accordion] = useState(false)
    let [setting_accordion, set_setting_accordion] = useState(false)
    let [marketing_accordion, set_marketing_accordion] = useState(false)
    let [product_accordion, set_product_accordion] = useState(false)
    let [discount_accordion, set_discount_accordion] = useState(false)

    function handleLinks(link) {
        window.location.href = `/entrepreneur/${link}`
        let topLink = [...document.querySelector('.top-links').children];
        let btmLink = [...document.querySelector('.btm-links').children];

        let linkList = [...topLink, ...btmLink]
        linkList.map(item => {
            let data = (item.children[0].dataset.link)

            if(item.children[0].hasAttribute('id')){
                item.children[0].removeAttribute('id')
            }

            if(data === link){
                item.children[0].setAttribute('id', 'link')
            }
        })
    }

    function handleSubLinks(e,link) {
        window.location.href = `/entrepreneur/${link}`

        let pElem = e.currentTarget.parentElement;
        console.log(pElem.children)

        let linkList = [...pElem.children];


        linkList.map((item,index) => {
            if (index !== 0) {
                let data = (item.dataset.link)
    
                if(item.hasAttribute('id')){
                    item.removeAttribute('id')
                }
    
                if(data === link){
                    item.setAttribute('id', 'link')
                }
            }
        })
    }

    function handle(params) {
        
    }
  return (
    <>
      <div className='aside-cnt'>
            <section className='links'>
                <ul className='top-links'>
                    <li >
                        <div onClick={e => handleLinks('overview')} data-link='overview' id='link'>
                            <span>
                                <img src={home_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Overview</span>
                        </div>
                    </li>
                    <li >
                        <div  onClick={e => {
                                set_order_accordion(!order_accordion)
                            }} data-link='order' style={{position: 'relative'}}>
                            <span>
                                <img src={order_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Orders</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            order_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'orders/manage-orders')} data-link='manage-orders' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Manage Orders
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'orders/create-order')} data-link='create-order' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Create Order
                                    </span>
                                </div>

                                
                            </section>
                            :
                            ''
                        }
                    </li>
                    <li >
                        <div onClick={e => {
                                set_product_accordion(!product_accordion)
                            }} data-link='product' style={{position: 'relative'}}>
                            <span>
                                <img src={product_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Products</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            product_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'product/manage-product')} data-link='manage-product' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Manage Products
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'product/create-product')} data-link='create-product' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Create Products
                                    </span>
                                </div>

                                <div onClick={e => handleSubLinks(e,'product/product-reviews')} data-link='product-reviews' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Products Reviews
                                    </span>
                                </div>

                                
                            </section>
                            :
                            ''
                        }
                    </li>
                    <li >
                        <div onClick={e => handleLinks('customer')} data-link='customer' style={{position: 'relative'}}>
                            <span>
                                <img src={customer_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Customers</span>

                            {/* <span onClick={e => {
                                set_customer_accordion(!customer_accordion)
                            }} style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span> */}
                        </div> 
                       
                    </li>
                    
                    <li >
                        <div onClick={e => handleLinks('inventory')} data-link='inventory'>
                            <span>
                                <img src={inventory_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Inventory</span>
                        </div>
                    </li>

                    <li >
                        <div onClick={e => handleLinks('team')} data-link='team'>
                            <span>
                                <img src={team_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Team</span>
                        </div>
                    </li>

                    <li >
                        <div onClick={e => handleLinks('integration')} data-link='integration'>
                            <span>
                                <img src={integration_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Integration</span>
                        </div>
                    </li>

                    <li >
                        <div onClick={e => handleLinks('add_on')} data-link='add_on'>
                            <span>
                                <img src={add_on_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Add On Store</span>
                        </div>
                    </li>

                    <li >
                        <div onClick={e => {
                                set_discount_accordion(!discount_accordion)
                            }}  data-link='discount' style={{position: 'relative'}}>
                            <span>
                                <img src={discount_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Discount</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            discount_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'discount/manage-discount')} data-link='manage-discount' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Manage Discount
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'discount/create-discount')} data-link='create-discount' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Bump & Drop
                                    </span>
                                </div>

                            </section>
                            :
                            ''
                        }
                    </li>
                    
                    <li >
                        <div onClick={e => {
                                set_transaction_accordion(!transaction_accordion)
                            }}  data-link='transaction' style={{position: 'relative'}}>
                            <span>
                                <img src={transaction_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Transaction</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            transaction_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'transaction/balance')} data-link='transaction' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Balance
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'transaction/wallet')} data-link='transaction' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Wallet
                                    </span>
                                </div>

                            </section>
                            :
                            ''
                        }
                    </li>

                    <li >
                        <div  onClick={e => {
                                set_report_accordion(!report_accordion)
                            }}  data-link='report' style={{position: 'relative'}}>
                            <span>
                                <img src={report_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Reports</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            report_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'report/analytics')} data-link='analytics' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Analytics
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'report/sales')} data-link='sales' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Sales
                                    </span>
                                </div>

                            </section>
                            :
                            ''
                        }
                    </li>

                    <li >
                        <div onClick={e => {
                                set_setting_accordion(!setting_accordion)
                            }}  data-link='setting' style={{position: 'relative'}}>
                            <span>
                                <img src={settings_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Settings</span>

                            <span style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            setting_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '98%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                
                                <div onClick={e => handleSubLinks(e,'settings/shop-details')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Shop Details
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/locations')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Locations
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/inventory')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Inventory
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/orders')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Orders
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/social-accounts')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Social Accounts
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/currencies')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Currencies
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/bank-account')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Bank Account
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/policies')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Policies
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/shipping-rates')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Shipping Rates
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/pickup-points')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Pickup Points
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/subscription-billing')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Subscription/Billing
                                    </span>
                                </div>
                               
                                <div onClick={e => handleSubLinks(e,'settings/my-domain')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        My Domain
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'settings/API-keys')} data-link='settings' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        API Keys
                                    </span>
                                </div>

                            </section>
                            :
                            ''
                        }
                    </li>

                    <li >
                        <div onClick={e => {
                                set_marketing_accordion(!marketing_accordion)
                            }} data-link='marketing' style={{position: 'relative'}}>
                            <span>
                                <img src={marketing_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Marketing</span>

                            <span  style={{position: 'absolute', right: '5px', top: '5px'}}>
                                <img src={arrow_svg.src} style={{height: '20px', width: '20px', rotate: '-90deg'}} alt="" />
                            </span>
                        </div> 
                        {
                            marketing_accordion
                            ? 
                            <section style={{position: 'relative', display: 'block', background: 'rgb(219, 219, 219)', width: '100%', padding: '0px 0px 0px 20px', marginLeft: '10px'}}>
                                <div style={{height: '90%', width: 'auto', borderRight: '2px solid #000', background: 'rgb(219, 219, 219)', position: 'absolute', left: '0', top: '0'}}>

                                </div>
                                <div onClick={e => handleSubLinks(e,'marketing/manage-campaign')} data-link='manage-campaign' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Manage Campaigns
                                    </span>
                                </div>
                                <div onClick={e => handleSubLinks(e,'marketing/create-campaign')} data-link='create-campaign' style={{padding: '8px', width: 'auto'}}>
                                    <span></span>
                                    <span>
                                        Create Campaigns
                                    </span>
                                </div>

                            </section>
                            :
                            ''
                        }
                    </li>

                    <li >
                        <div onClick={e => handleLinks('referral')} data-link='referral'>
                            <span>
                                <img src={referral_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>Referral & Earn</span>
                        </div>
                    </li>
                    
                </ul>

                <div className='btm-links'>
                <br />
                    <h6>Resources</h6>
                    <ul style={{overflow: 'auto', padding: '0'}}>
                    
                        <li >
                            <div onClick={e => handleLinks('referral')} data-link='referral'>
                                <span>
                                    <img src={tutorials_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                                </span>
                                &nbsp;
                                &nbsp;
                                <span>Tutorials</span>
                            </div>
                        </li>
                    
                        <li >
                            <div onClick={e => handleLinks('profile')} data-link='profile'>
                                <span>
                                    <img src={support_svg.src} style={{height: '20px', width: '20px'}} alt="" />
                                </span>
                                &nbsp;
                                &nbsp;
                                <span>Contact Support</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
      </div>
    </>
  )
}
