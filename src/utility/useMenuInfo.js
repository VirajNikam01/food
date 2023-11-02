import {useState, useEffect} from 'react'
import { RESTRONENT_INFO_URL } from './constants'


const useMenuInfo = (resId)=>{
    const[menuInfo, setMenuInfo] = useState(null)

    useEffect(()=>{
        fetchMenuInfo()
    },[])

    const fetchMenuInfo = async ()=>{
        const request = await fetch(RESTRONENT_INFO_URL + resId)
        const json = await request.json()
        setMenuInfo(json?.data)

    }
    return menuInfo
}

export default useMenuInfo