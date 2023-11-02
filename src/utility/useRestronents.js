import { useState, useEffect } from "react"
import { RESTRONENT_URL } from "./constants"


const useRestronents = ()=>{
    const[restronent, setRestronent] = useState(null)

    useEffect(()=>{
        fetchRestronents()
    }, [])

    const fetchRestronents = async ()=>{
        const request = await fetch(RESTRONENT_URL)
        const json = await request.json()
        setRestronent(json?.data)
    }

    return restronent;
}

export default useRestronents;