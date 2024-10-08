"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react';
import fb_svg from '@/svgs/facebook-svgrepo-com (1).svg'
import gg_svg from '@/svgs/google-color-svgrepo-com (1).svg'
import tt_svg from '@/svgs/twitter-svgrepo-com (3).svg'
import './styles/xxl.css'
import 'react-phone-number-input/style.css'
import country from '@/reusables/country.json'
import axios from 'axios';
export default function Signup() {

    const [countries, setcountries] = useState([])

    let [fname, setFname] = useState('')
    let [lname, setLname] = useState('')
    let [email, setEmail] = useState('')
    let [search_char, set_search_char] = useState('')
    let [country_code, set_country_code] = useState('')
    let [phone_number, setPhone_number] = useState('')
    let [pwd, setPwd] = useState('')

    useEffect(() => {
        let list = countries.filter(item => item.name.toLowerCase().indexOf(search_char.toLowerCase()) > -1)
        setcountries(list)
        // console.log(search_char, list)
    }, [search_char])

    useEffect(() => {
        setcountries(country)
    }, [])
    
    function handle_registration() {
        
    }

    

  return (
    <>
        <div className="enetrepreneur-signup-form">
            <div className='form-cnt'>
                <h5 style={{background: '#000', marginBottom: '10px', color: '#fff', width: 'fit-content', padding: '5px 8px', borderRadius: '5px'}}>Shopiva</h5>
                <section style={{height: 'auto'}}>
                    <div style={{width: '100%'}}>
                        <section style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{width: '48%'}} className="input-cnt">
                                <label htmlFor="">First name</label>
                                <input type="text" placeholder='First name' name="" id="" />
                            </div>
                            <div style={{width: '48%'}} className="input-cnt">
                                <label htmlFor="">Last name</label>
                                <input type="text" placeholder='Last name' name="" id="" />
                            </div>
                        </section>
                        <div className="input-cnt">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email' name="" id="" />
                        </div>
                        <div className="input-cnt">
                            <label htmlFor="">Phone</label>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    <div style={{padding: '5px', background: '#fff', border: 'none', height: '40px', width: '100px'}} name="" id="">
                                        <div className="dropdown">
                                            <button style={{height: '40px', width: '90px', margin: '-5px 0px 0px 0px', background: '#f9f9f9', padding: '5px 0px 5px 5px', display:'flex', justifyContent: 'center', alignItems: 'center', color: '#000'}} className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                           {
                                            country_code === ''
                                            ?
                                            <small><b>+ country</b></small>
                                            :
                                            <>
                                                <span>
                                                    <img src={country_code.flag_icon} style={{height: '20px', width: '20px'}} alt="" />
                                                </span>
                                                
                                                <span style={{color: '#000', padding: '5px', display:'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 0px -5px 0px', fontWeight: '500', fontSize: 'small'}}>{country_code.phone_code}</span>
                                            </>
                                           }
                                            </button>

                                            <ul className="dropdown-menu" style={{width: '300px', overflow: 'auto', height: '200px'}}>

                                                <li>
                                                    <input style={{height: '30px', width: '100%'}} placeholder='Search country here...' onInput={e=> set_search_char(e.target.value)} type="search" name="" id="" />
                                                </li>
                                               
                                                {
                                                    countries.map((item) => 
                                                        <li onClick={e=>set_country_code(item)} className='dropdown-item'>
                                                            <span>
                                                                <img src={item.flag_icon} style={{height: '20px', width: '20px'}} alt="" />
                                                            </span>
                                                            &nbsp;
                                                            &nbsp;
                                                            <span>{item.phone_code}</span>
                                                            &nbsp;
                                                            &nbsp;
                                                            <span>{item.name}</span>
                                                            

                                                            
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </span>
                                <span style={{width: 'calc(100% - 100px)'}}>
                                    <input type="tel" maxLength={10} name="" id="" />
                                </span>
                            </div>
                        </div> 

                        <div className="input-">
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Password' name="" id="" />
                        </div>

                        <div className="input-">
                            <label htmlFor=""> Confirm Password</label>
                            <input type="password" placeholder='Confirm Password' name="" id="" />
                        </div>

                        <div className="input-cnt">
                            <button style={{borderRadius: '8px'}} onClick={e => {
                                axios.post('http://localhost:3456/entrepreneur/registration', {
                                    fname,lname,email,pwd,phone_number
                                })
                                .then((result) => {
                                    if(result.data){

                                    }
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                            }}>Register</button>
                        </div>
                    </div>
                </section>

                <section className="other-reg-forms">
                    <button style={{marginLeft: '0'}}>
                        <small>Already registered? Login.</small>
                    </button>
                    {/* <button style={{padding: '5px', background: '#fff', border: 'none'}}>
                        <img src={fb_svg.src} style={{height: '100%', width: '100%'}} alt="" />
                    </button>
                    <button style={{padding: '7px', background: '#fff', border: 'none'}}>
                        <img src={tt_svg.src} style={{height: '100%', width: '100%'}} alt="" />
                    </button>
                    
                    <button style={{padding: '8px', background: '#fff', border: 'none'}}>
                        <img src={gg_svg.src} style={{height: '100%', width: '100%'}} alt="" />
                    </button> */}
                </section>
            </div>
        </div>
    </>
  )
}
