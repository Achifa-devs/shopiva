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
import { set_entrepreneur_cookie } from '@/redux/entrepreneur/entrepreneur_cookie';
import { useDispatch } from 'react-redux';
export default function Signup() {

    const [countries, setcountries] = useState([])
    let dispatch = useDispatch()

    let [email, setEmail] = useState('')
    let [pwd, setPwd] = useState('')
    const validation = useRef(false);


    
    
    let book = useRef({
        email: false,
        pwd: false 
    })

    function addErrMssg(err,pElem) {
            
        let check = pElem.querySelector('.err-mssg');
        if(check){
            pElem.querySelector('.err-mssg').remove()
            let div = document.createElement('div');
            div.className = 'err-mssg';
            // console.log(err)
            if(err.length > 0 ){
                div.innerHTML = err[0].mssg;
                pElem.append(div)
                

            }else{
                
                let check = pElem.querySelector('.err-mssg');

                if(check){
                    pElem.querySelector('.err-mssg').remove()
                }
            }
            
            
        }else{

            let div = document.createElement('div');
            div.className = 'err-mssg';
            // console.log(err)

            if(err.length !== 0 ){
                div.innerHTML = err[0].mssg;
                pElem.append(div)
                

            }else{
                
                let check = pElem.querySelector('.err-mssg');

                if(check){
                    pElem.querySelector('.err-mssg').remove()
                }
            }
        }
     
    }

    let Login = (e) => {
        try {
            e.target.disabled = true;
    
            Validation();

            console.log(book.current)
            Object.values(book.current).filter(item => item !== true).length > 0 ? validation.current = false : validation.current = true;
    
            if(validation.current){
               
                e.target.disabled = true;
                fetch('https://shopiva-server.vercel.app/entrepreneur/login', {
                    method: 'post',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({email,pwd})
                })
                .then(async(result) => {
                    let response = await result.json();
                    if(response.bool){
                        dispatch(set_entrepreneur_cookie(response.cookie))
                        window.location.href="/entrepreneur/pre-sale"
                    }else{
                        
                        // overlay.removeAttribute('id');
                        if(response.data === 'duplicate email'){
                            addErrMssg([{mssg:'Email already exist, please try something else'}], document.querySelector('.email').parentElement)
                        }else if(response.data === 'duplicate phone'){
                            addErrMssg([{mssg:'Phone Number already exist, please try something else'}], document.querySelector('.phone').parentElement)
                        }
                        // setBtn("Signup")
                        e.target.disabled = false;
                    }
                })
                .catch((err) => {
                    // setBtn("Signup")
                    e.target.disabled = false;
                })
                
            }else{
                // alert()
            }
        } catch (error) {
            console.log(error)
        }
    }

    function Validation() {
        let inputs = [...document.querySelectorAll('input')]
        // let select = [...document.querySelectorAll('select')]
        

        inputs.map(async(item) => {
            if(item.type === 'text'){

                if(item.name === 'fname'){

                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty'}
                    let length = item.value.length > 3 ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please name must be at least 3 letters.'}
                    let specialCharFree = /^[a-zA-Z]+$/.test(item.value.trim()) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter only alphabets.'}
                    let errs = [empty,length,specialCharFree];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement);
                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.fname = false : book.current.fname = true
                    
                }else if(item.name === 'lname'){

                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty'}
                    let length = item.value.length > 3 ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please name must be at least 3 letters.'}
                    let specialCharFree = /^[a-zA-Z]+$/.test(item.value.trim()) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter only alphabets.'}

                    let errs = [empty,length,specialCharFree];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.lname = false : book.current.lname = true

                }else if(item.name === 'email'){

                    // let emailvailidity = await checkEmailDuplicate();
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let validEmail = emailRegex.test(item.value) ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please enter a valid email address.'}
                    // let emailDuplicate =  emailvailidity ? {bool: true, mssg: ''} : {bool: false, mssg: 'Email already exist, please try something else'} 
                    let errs = [empty,validEmail];
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
                    let list = errs.filter(item => item.mssg !== '')
                    list.length > 0 ? book.current.email = false : book.current.email = true

                }
                
            }else if(item.type === 'password'){
                if(item.name === 'password'){
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let length = item.value.length >= 8 ? {bool: true, mssg: ''} :  {bool: false, mssg: 'Password must contain at least 8 characters.'}
                    let errs = [empty,length];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)

                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.pwd = false : book.current.pwd = true
                }
            }else if(item.type === 'tel'){
                if(item.name === 'phone'){
                    let empty = item.value !== '' ? {bool: true, mssg: ''} : {bool: false, mssg: 'Please field cannot be empty.'}
                    let length = item.value.length >= 10 ? {bool: true, mssg: ''} :  {bool: false, mssg: 'Invalid Phone Number'}
                    let errs = [empty,length];
                    
                    addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)

                    let list =errs.filter(item => item.mssg !== '')

                    list.length > 0 ? book.current.phn = false : book.current.phn = true
                }
            }
        })

        // select.map(item => {
        //     if(item.name === 'state'){
        //         let empty = state !== '' ?  {bool: true, mssg: ''} :  {bool: false, mssg: 'Please select a state'}
        //         let errs = [empty];
                    
        //         addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
        //         let list =errs.filter(item => item.mssg !== '')

        //         list.length > 0 ? book.current.state = false : book.current.state = true
        //     }else if(item.name === 'campus'){
        //         let empty = campus !== '' ?  {bool: true, mssg: ''} :  {bool: false, mssg: 'Please select a campus'}
        //         let errs = [empty];
                    
        //         addErrMssg(errs.filter(item => item.mssg !== ''),item.parentElement)
        //         let list =errs.filter(item => item.mssg !== '')

        //         list.length > 0 ? book.current.campus = false : book.current.campus = true
        //     }
        // })
    }
    

  return (
    <>
        <div className="enetrepreneur-signup-form">
            <div className='form-cnt'>
                <h5 style={{background: '#000', marginBottom: '10px', color: '#fff', width: 'fit-content', padding: '5px 8px', borderRadius: '5px'}}>Shopiva</h5>
                <section style={{height: 'auto'}}>
                    <div style={{width: '100%'}}>
                        <div className="input-cnt">
                            <label htmlFor="">Email</label>
                            <input onInput={e=> setEmail(e.target.value)} type="text" placeholder='Email' name="email" id="" />
                        </div>
                        <div className="input-cnt">
                            <label htmlFor="">Password</label>
                            <input onInput={e=> setPwd(e.target.value)} type="password" placeholder='Password' name="password" id="" />
                        </div>

                        <div className="input-cnt">
                            <button style={{borderRadius: '8px'}} onClick={e => {
                                Login(e)
                            }}>Login</button>
                        </div>
                    </div>
                </section>

                <section className="other-reg-forms">
                    <button style={{marginLeft: '0'}} onClick={e=> {
                        window.open('/entrepreneur/signup')
                    }} >
                        <small>Not registered? Signup.</small>
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
