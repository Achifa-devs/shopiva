"use client"
import React, { useEffect, useState } from 'react'
import Aside from '../components/entrepreneur/aside/Aside'
import Header from '@/components/entrepreneur/header/Header'
import { handleAside, handleFloater } from '@/reusables/anitmation'
import ProfileFloater from '@/components/floaters.js/Profile'
import NotificationFloater from '@/components/floaters.js/Notification'
import SearchFloater from '@/components/floaters.js/Search'
import { useDispatch, useSelector } from 'react-redux'
import { set_floater_src } from '@/redux/entrepreneur/floater_src'
import { set_entrepreneur_id_to, set_entrepreneur_to } from '@/redux/entrepreneur/entrepreneur_id'
import { usePathname } from 'next/navigation'

export default function EntrepreneurLayout({children,setCookie}) {
  let dispatch = useDispatch()

  let pathname = usePathname()

  let [screenWidth, setScreenWidth] = useState(0)
  let [active_floater, set_active_floater] = useState(null)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  let {
    floater_src
  }=useSelector(s=> s.floater_src)

  useEffect(() => {
    // alert(floater_src)
    if (floater_src === 'profile') {
      set_active_floater(<ProfileFloater />)
    }else if(floater_src === 'notification'){
      set_active_floater(<NotificationFloater />)
    }else{
      
    }
  }, [floater_src])

  let {
    entrepreneur_id
  } = useSelector(s => s.entrepreneur_id)

  useEffect(() => {
    let stored_entrepreneur  = window.localStorage.getItem('entrepreneur_data')
    if(stored_entrepreneur === '' && stored_entrepreneur === null && stored_entrepreneur === 'null' && stored_entrepreneur === 'undefined' && stored_entrepreneur === undefined) {
      fetch('https://shopiva-server.vercel.app/entrepreneur/authentication',
      {
        method: 'POST',
        // credentials: 'include',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': entrepreneur_id
        }
      
      })
      .then(async(result) => {

        let response = await result.json(); 
        if(response.bool){
          window.localStorage.setItem('entrepreneur_data', JSON.stringify(response.data))
        }else{
          window.location.href=('/entrepreneur/login')
        }
          
      })
      .catch((error) => {
        console.log(error)
        window.location.href=('/seller/login')

      })
    }
  }, [entrepreneur_id])

  // useEffect(() => {
  //   if(search_status){
  //     handleFloater(dispatch(set_floater_src('search')))
  //   }
  // }, [search_status])
  return (
    <>
      <div className="entrepreneur-layout">

        <div className='entrepreneur-header'>
          <section className="entrepreneur-floater-cnt-xtra"  onClick={e => {
              if(e.target === e.currentTarget){
                handleFloater(floater_src)
              }
            }}>
            <SearchFloater />
          </section>
          <Header />
        </div>

        <>
          <section className="entrepreneur-floater-cnt"  onClick={e => {
              if(e.target === e.currentTarget){
                handleFloater(floater_src)
              }
            }}>
            {
              active_floater
            }
            
          </section>
        </>
        
        <div className='entrepreneur-main'>
            {
              screenWidth > 760
              ?
              <div className='entrepreneur-aside'>
                <Aside />
              </div>
              :
              <div className="aside-overlay" onClick={e => {
                if(e.target === e.currentTarget){
                  handleAside()
                }
              }}>
                <div className='entrepreneur-aside'>
                  <Aside />
                </div>
              </div>
            }
            <div className='entrepreneur-content'>
              {
                children
              }
            </div>
        </div>

      </div>
    </>
  )
}
