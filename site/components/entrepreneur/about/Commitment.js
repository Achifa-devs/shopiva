import React from 'react'
import plus_image from '../../../images/FEATURES_Integration.webp'

export default function Commitment() {
  return (
    <>
        <section style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', padding: '60px 10px', background: '#fff', height: 'fit-content'}}>

            <div style={{width: '50%', padding: '10px 40px'}}>
                <img src={plus_image.src}  style={{height: '400px', width: '80%', borderRadius: '10px'}} alt="" />
            </div>
            <div style={{width: '50%', padding: '10px 40px', textAlign: 'left', color: '#000', height: 'auto'}}>
                <div style={{width: '70%', height: 'auto'}}>
                    <h5 style={{fontWeight: '400'}}>Our commitment to sustainability</h5>
                    <br />
                    <h3 style={{fontWeight: '400'}}>We&apos;re building a 100-year company</h3>
                    <br />
                    <h5 style={{color: '#42474c', fontWeight: '100'}}>Shopify builds for the long term, and that means investing in our planet so that we can future proof Shopify and help our merchants future proof their businesses, too. Our Sustainability Fund includes kickstarting the carbon removal market and choosing renewable energy, reducing and removing our carbon emissions, and creating solutions for our merchants to do the same.</h5>
                </div>

            </div>

        </section>
    </>
  )
}
