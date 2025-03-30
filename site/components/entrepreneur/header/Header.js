import React, { useEffect, useState } from 'react'
import './style.css'
import bell_svg from '../../../svgs/notification-svgrepo-com (3).svg'
import { handleAside, handleFloater } from '../../../reusables/anitmation'
import menu_svg from '../../../svgs/menu-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux'
import { set_floater_src } from '../../../redux/entrepreneur/floater_src'
export default function Header() {
  let [screenWidth, setScreenWidth] = useState(0)
  let dispatch = useDispatch()
  useEffect(() => {
    setScreenWidth(window.innerWidth)
    document.body.querySelector('header').style.height='100%'
  }, [])
   
  let {
    floater_src
  }=useSelector(s=> s.floater_src)

  return (
    <>
      <header style={{display: 'flex', alignItems: 'center', padding: '0px 10px'}}>
        {
          screenWidth > 760
          ?
          <section>
            <h4>Shopiva</h4>
          </section>
          :
          <button 
          onClick={e => {
            handleAside()
          }}>
            <img src={menu_svg.src} style={{height: '18px', width: '20px'}} alt="" />
          </button>
        }

        <section className='header-section'>
          <input type="search" name="" placeholder='search' onFocus={e=> {
            dispatch(set_floater_src('search'))
            let position = e.currentTarget.parentElement.getBoundingClientRect();
            let left = position.left;
            let top = position.top;
            handleFloater('search', {left,top})


          }}  id="" />
        </section>

        <section className='header-section'>
            <button onClick={e=>{
              dispatch(set_floater_src('notification'));
              handleFloater('notification')
            }}>
                <img src={bell_svg.src} style={{height: '20px', width: '20px'}} alt="" />
            </button>
            &nbsp;
            &nbsp;
            <button onClick={e=>{
              dispatch(set_floater_src('profile'));
              handleFloater('profile')
            }}>
                <div style={{background: '#07d300', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px', fontSize: 'x-small'}}>NM</div>
                &nbsp;
                <div style={{alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px'}}>Nova Mall</div>
            </button>

           
        </section>
      </header>
    </>
  )
}
