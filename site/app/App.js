"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
// import {NextUIProvider} from '@nextui-org/react'
import { SessionProvider } from "next-auth/react"
import store from '../redux/store'
import EntrepreneurRestrictedLayout from '../layouts/Entrepreneur/Restricted'
import AuthLayout from '../layouts//Entrepreneur/Auth'
import EntrepreneurFreeLayout from '../layouts//Entrepreneur/Free'

export default function App({session,children}) { 
  let pathname = usePathname();
  let [role, set_role] = useState(0);

  useEffect(() => {
    if(pathname.split('/')[1] === 'entrepreneur'){
      set_role(1)
    }else{
      set_role(0)
    }
  }, [pathname])
  

  return (
    <>
      {
        <SessionProvider session={session}>
          <Provider store={store}>
          
           {
            role === 0
            ? 
            <Customer children={children}/>
            :
            <Entrepreneur children={children}/>
           }
          
          </Provider>
        </SessionProvider>
      }
    </>
  )
}


function Entrepreneur({children}) {
  let pathname = usePathname();

  return(
    <>
      {  
        pathname.split('/').splice(1,2)[1] === 'signup' || pathname.split('/').splice(1,2)[1] === 'login'
        ?
          <AuthLayout>
            {
              children
            }
          </AuthLayout>
        :
          pathname.split('/').length > 2
          ?
            pathname.split('/').splice(0,3)[2].length === 2

            ?

            <EntrepreneurFreeLayout>
              {
                children
              }
            </EntrepreneurFreeLayout>
            :
            <EntrepreneurRestrictedLayout>
              {
                children
              } 
            </EntrepreneurRestrictedLayout>
          :
          <EntrepreneurRestrictedLayout>
            {
              children
            } 
          </EntrepreneurRestrictedLayout>
      }
    </>
  )
}


function Customer({setCookie, children}) {
  
}

