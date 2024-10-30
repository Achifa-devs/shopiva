import React from 'react'

export default function MenuComp({updateClickOpt,logged_in}) {
  return (
    <>
        <div className="menu-floater">
            <div className="menu-floater-cnt">
                <ul>
                    <li onClick={e=> {
                        updateClickOpt('resources')
                    }}>Resources</li>
                    <li onClick={e=> {
                        updateClickOpt('solutions')
                    }}>Solutions</li>
                    <li onClick={e => {
                      window.open('/entrepreneur/ng/pricing')
                    }}>Pricing</li>
                </ul>
                <div>
                    {
                        logged_in
                        &&
                        <button onClick={e => {
                            window.open('/entrepreneur/login')
                        }}>Log in</button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
