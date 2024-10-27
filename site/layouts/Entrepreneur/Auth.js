import { set_entrepreneur_data_to } from '../../redux/entrepreneur/entrepreneur_data';
import { set_entrepreneur_id_to } from '../../redux/entrepreneur/entrepreneur_id'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function AuthLayout({children}) {
    let pathname = usePathname();
    let dispatch = useDispatch();

    return (
        <>
            {
                children
            }
        </>
    )
}
