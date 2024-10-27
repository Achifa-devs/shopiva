import React, { useEffect, useState } from 'react'
import './style.css'
import items  from '../../reusables/items.json'
import bk from "../../svgs/backward-arrow-svgrepo-com.svg";

export default function CategoryFloater({close_floater}) {
    let [category, set_category] = useState('')
    let [categories, set_categories] = useState([])
    let [sub_categories, set_sub_categories] = useState([])

    useEffect(() => {
        items.items.category.map(item => {
            set_categories(value => [...value, Object.keys(item)[0]])
        })
    }, [])

    useEffect(() => {
       let result = items.items.category.filter(item => Object.keys(item)[0] === category)
       category !== '' ? set_sub_categories(result[0][category]) : ''
    }, [category])
    

    
  return (
    <>
      <div className="category-floater shadow-sm" >

        <div className='category-floater-cnt'>
            <div className="category-head">
                <p> Category <small>: {category}</small></p> 
                <hr />
                <div className="input-cnt"style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                  <label htmlFor="" style={{color: '#727272'}}>
                    {/* <small>Vendor</small> */}
                  </label>
                  <input  style={{width: '100%', border: '1px solid #727272'}} type="search" name="" id="" />
                </div>
            </div>

            

            <div className="category-body">
                {
                    category === ''
                    ?
                    <ul style={{padding: '0', height: '100%', margin: '0', overflow: 'auto'}}>
                        {
                            categories.map((item, index) =>
                                <>
                                    <li onClick={e=>set_category(item)} style={{padding: '10px', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-start', textAlign: 'left', color: '#000', fontWeight: '400'}} key={index}>
                                        <span><>{item}</></span>
                                        <span>
                                            <img src={bk.src} style={{height: "15px", width: "15px", rotate: '180deg'}} alt="italic" />
                                        </span>
                                    </li>
                                </>
                            )
                        }
                    </ul>

                    :

                    <ul style={{padding: '0', height: '100%', margin: '0', overflow: 'auto'}}>
                        {
                            sub_categories.map((item, index) =>
                                <>
                                    <li onClick={e=>close_floater()} style={{padding: '10px', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-start', textAlign: 'left', color: '#000', fontWeight: '400'}} key={index}>
                                        <span><>{item}</></span>
                                        <span>
                                            {/* <img src={bk.src} style={{height: "15px", width: "15px", rotate: '0deg'}} alt="italic" /> */}
                                        </span>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                }
            </div>
        </div>

      </div>
    </>
  )
}
