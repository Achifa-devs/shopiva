import { set_entrepreneur_id_to } from '@/redux/entrepreneur/entrepreneur_id'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AuthLayout({children,setCookie}) {
    let pathname = usePathname()
    
    let {
        entrepreneur_cookie
    }=useSelector(s=> s.entrepreneur_cookie)
        
    useEffect(() => {
    setCookie(entrepreneur_cookie, 1) 
    }, [entrepreneur_cookie])   
    
    useEffect(() => {
        if(pathname.split('/').splice(-1)[0] !== 'login' && pathname.split('/').splice(-1)[0] !== 'signup' && pathname.split('/').splice(-1)[0] !== 'password-recovery'){
        function getCookie(name) {
            const cookieName = `${name}=`;
            const cookies = document.cookie.split(';');
        
            for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
            }
            }
            return null; // Cookie not found
        }
            
        // Example usage:
        const myCookie = getCookie('entrepreneur_secret');
        fetch('https://shopiva-server.vercel.app/entrepreneur/authentication',
        {
            method: 'GET',
            // credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': myCookie
            }
        
        })
        .then(async(result) => {

            let response = await result.json(); 
            if(response.bool){
            dispatch(set_entrepreneur_id_to(response.id))
            }else{
            window.location.href=('/entrepreneur/login')
            }
            
        })
        .catch((error) => {
            console.log(error)
            // window.location.href=('/seller/login')

        })
        } 
        
    }, [entrepreneur_cookie])
        

    return (
        <>
            {
                children
            }
        </>
    )
}
