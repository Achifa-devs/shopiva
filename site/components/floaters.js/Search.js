import React from 'react'
import filter_svg from '../../svgs/filter-svgrepo-com (1).svg'
import search_svg from '../../svgs/search-alt-svgrepo-com (1).svg'
import './style.css'
export default function SearchFloater() {
  return (
    <>
      <div className="search-floater" style={{zIndex: '100000'}}>
        <section style={{zIndex: '100000'}}>
            <span>
                <img src={search_svg.src} style={{height: '18px', width: '20px'}} alt="" />
            </span>
            <span>
                <input autoFocus type="search" name="" id="" />
            </span>
            <span>
                <img src={filter_svg.src} style={{height: '18px', width: '20px'}} alt="" />
            </span>
        </section>


        <section style={{zIndex: '100000'}}>
            <span>Customers</span>
            <span>Orders</span>
            <span>Products</span>
            <span>Sales channels</span>
            <span>Apps</span>
        </section>


        <section style={{zIndex: '100000'}}>
            <div style={{width: 'auto'}}>
                <img src={search_svg.src} style={{height: '40px', width: '40px'}} alt="" />

            </div>
            <p>Find Anything In  Nova Shop</p>
        </section>
      </div>
    </>
  )
}
