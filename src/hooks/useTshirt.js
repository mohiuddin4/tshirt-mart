import { useEffect, useState } from "react"

const useTshirts = () => {
    const [tshits, setTshits] = useState([]);
    useEffect(() => {
        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTshits(data))
    }, [])
    return [tshits, setTshits];
}
export default useTshirts;