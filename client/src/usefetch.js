import { useState, useEffect } from 'react';


const useFetch = (url) => {



    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const abortCont = new AbortController();
            setIsLoading(true)

        try {
            const response = await fetch(url)
        
            if (!response.ok) {
                throw Error('could not fetch the data for that resource')
            }
            const data = await response.json();
                if (data.length === 0) {
                    setData(null)
                    throw Error('no anime available');
                    
                }
                setData(data)
                setTotal(data.length)
                setIsLoading(false)
                setError(null)
        }
        catch(err){
            if (err.name === 'AbortError') {
                console.log('Fetch Aborted')
            }
            setIsLoading(false)
            setError(err.message)
            setData(null)
            
        }
        return () => abortCont.abort()
        }
        fetchData()
            
    },[url])
    return {data,isLoading,error,total}
}
 
export default useFetch;