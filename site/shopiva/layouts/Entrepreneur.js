import React from 'react'
import Aside from '../components/entrepreneur/aside/Aside'
import Header from '@/components/entrepreneur/header/Header'

export default function EntrepreneurLayout({children}) {
  return (
    <>
      <div className="entrepreneur-layout">

        <div className='entrepreneur-header'>
            <Header />
        </div>
        
        <div className='entrepreneur-main'>
            <div className='entrepreneur-aside'>
                <Aside />
            </div>
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
