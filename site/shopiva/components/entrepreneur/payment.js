import {usePaystackPayment} from 'react-paystack';
import React from 'react'



export default function Paystack({entrepreneur_data,content,style}) {
    
    

    function handle_subscribe_btn() {
        !is_authorized
        ?
        window.open('/entrepreneur/signup')
        :
        initializePayment(onSuccess, onClose)
    }

    return (
        <>
            <button style={style === null ? '' : style} onClick={e=>handle_subscribe_btn}>
                {
                    <span>{content}</span>
                }
            </button>
        </>
    )
}
