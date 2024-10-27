"use client"
import React, { useEffect } from 'react'
import './styles/xxl.css'
import './global.css'


import Head from '../../../../components/entrepreneur/about/Head'
import Story from '../../../../components/entrepreneur/about/Story'
import Mission from '../../../../components/entrepreneur/about/Mission'
import Commitment from '../../../../components/entrepreneur/about/Commitment'
export default function About() { 

    useEffect(() => {
        document.body.style.background='#fff'
        document.querySelector('header').style.height='70px'
    }, [])
  return (
    <>
      <div className="pricing-cnt">

        <Head />

        <Story />
       
        <Mission />

        <Commitment />

      </div>
    </>
  )
}
