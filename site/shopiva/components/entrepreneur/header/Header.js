import React from 'react'
import './style.css'
import bell_svg from '../../../svgs/notification-svgrepo-com (3).svg'

export default function Header() {
  return (
    <>
      <header>
        <section>
            <h4>Shopiva</h4>
        </section>

        <section>
            <input type="search" name="" placeholder='Search' id="" />
        </section>

        <section>
            <button>
                <img src={bell_svg.src} style={{height: '20px', width: '20px'}} alt="" />
            </button>
                &nbsp;
            &nbsp;
            &nbsp;
            <button>
                <div style={{background: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px'}}>NM</div>
                &nbsp;
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', width: 'auto', padding: '5px', borderRadius: '5px'}}>Nova Mall</div>
            </button>

           
        </section>
      </header>
    </>
  )
}
