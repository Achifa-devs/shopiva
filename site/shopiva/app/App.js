"use client"
import store from '@/redux/store'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
// import {NextUIProvider} from '@nextui-org/react'
import { setNewCookie } from './layout'
import EntrepreneurLayout from '@/layouts/Entrepreneur'

export default function App({children}) {
  let pathname = usePathname();
  

  // async function setCookie(data,role) {
  //   if(data !== null && data !== 'null' && data !== ''){
  //     let response = await setNewCookie(data, role)
  //     let result = JSON.parse(response);
  //     if(role === 1 && result){
  //       window.location.href=('/entrepreneur/shop')
  //     }else if(role === 0 && result){
  //       window.location.href=('/')

  //     }
  //   }
  // }

  


  
  return (
    <>
      {
        <Provider store={store}>
          
          {
            pathname.split('/').splice(-1)[0] === 'entrepreneur'
            ?
            <EntrepreneurLayout setCookie={''}>
              {
                children
              }
            </EntrepreneurLayout>
            :
            ''
          }
          
        </Provider>
      }
    </>
  )
}
