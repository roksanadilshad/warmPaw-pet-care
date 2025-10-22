import { useEffect, useState } from "react"

const usePets = () =>{
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(()=>{
        fetch('./pets.json')
        .then(res => res.json())
        .then(data => setPets(data))
        .finally(() => setLoading(false))
    },[])

    return (pets, loading)
}
export default usePets