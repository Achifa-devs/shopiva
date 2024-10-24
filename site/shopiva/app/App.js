"use client"
import store from '@/redux/store'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
// import {NextUIProvider} from '@nextui-org/react'
import { setNewCookie } from './layout'
import EntrepreneurLayout from '@/layouts/Entrepreneur'
import AuthLayout from '@/layouts/Auth'
import DashboardLayout from '@/layouts/DashboardLayout'
import { SessionProvider } from "next-auth/react"

export default function App({session,children}) {
  let pathname = usePathname();
  

  async function setCookie(data,role) {
    if(data !== null && data !== 'null' && data !== ''){
      // let response = await setNewCookie(data, role)
      // let result = JSON.parse(response);
      if(role === 1 ){
        window.localStorage.setItem('entrepreneur_jwt', data)

        window.location.href=('/entrepreneur/pre-sale')
      }else if(role === 0 && result){
        window.localStorage.setItem('customer_jwt', data)

        window.location.href=('/')

      }
    }
  }

  return (
    <>
      {
        <SessionProvider session={session}>
          <Provider store={store}>
          
            {
              pathname.split('/').splice(1,2)[0] === 'entrepreneur'
              ?
                pathname.split('/').splice(1,2)[1] === 'user-profile' || pathname.split('/').splice(1,2)[1] === 'signup' || pathname.split('/').splice(1,2)[1] === 'login'
                ?
                  <>
                    <AuthLayout setCookie={setCookie}>
                      {
                        children
                      }
                    </AuthLayout>
                  </>
                :
                pathname.split('/').splice(1,2)[1] === 'pre-sale'
                ?
                <>
                  <AuthLayout setCookie={setCookie}>
                    <div style={{height: '100vh', width: '100vw', overflow: 'auto', background: '#fff'}}>
                      {
                        children
                      }
                    </div>
                  </AuthLayout>
                </>
                :
                <EntrepreneurLayout setCookie={setCookie}>
                  {
                    children
                  }
                </EntrepreneurLayout>
              :
              pathname.split('/').splice(1,2)[0] === 'dashboard'
              ?
              <DashboardLayout>
                <div className='dashboard-cnt'>
                  {
                    children
                  }
                </div>
              </DashboardLayout>
              :
              ''
            }
          
          </Provider>
        </SessionProvider>
      }
    </>
  )
}

