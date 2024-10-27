import React from 'react'
import plus_image from '../../../images/FEATURES_Integration.webp'

export default function Story() {
  return (
    <>
        <section>
            <br />

            <h2 style={{fontWeight: '400'}}>Shopiva story</h2>

            <br />

            <div className='shopiva-story-cnt' style={{height: 'auto'}}>

                <div style={{width: '50%', padding: '10px 40px'}}>
                    <img src={plus_image.src}  style={{height: '100%', width: '80%', borderRadius: '10px'}} alt="" />
                </div>

                <div style={{width: '50%', padding: '10px 40px', textAlign: 'left', color: '#000', height: 'auto', justifyContent: 'flex-start'}}>
                    <div style={{width: '70%', height: 'auto', padding: '0'}}>
                        {/* <br /> */}
                        <h3 style={{marginBottom: '20px', fontWeight: '400'}}>Shopiva was created in SE Nigeria.</h3>
                        {/* <br /> */}
                        <p style={{color: '#42474c', fontSize: 'medium', margin: '0', height: 'fit-content', fontWeight: '400'}}>
                        Over a year ago, we embarked on a journey to create a platform specifically designed for campus residents in Nigeria to buy and sell online with ease. At that time, none of the existing e-commerce solutions offered the control and flexibility we needed to truly empower our community—so we decided to build our own. That&apos;s how Shopiva was born: a user-friendly, all-in-one solution that caters to sellers&apos; needs, from inventory management to secure transactions, giving them the freedom to focus on what they do best.

                        Today, Shopiva has grown beyond just serving campuses; it has become the go-to platform for businesses of all sizes. Whether you&apos;re an online seller, running a physical retail store, or making sales on-the-go, Shopiva equips you with powerful tools to manage, expand, and simplify your business. We&apos;re proud to support entrepreneurs across Nigeria as they build successful businesses on their own terms with Shopiva by their side.</p>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}
