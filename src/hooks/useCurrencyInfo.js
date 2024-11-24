import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            setData(res[currency])
        })
        // console.log(res);

        // const fetchData = async () => {
        //     const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //     const responseData = await response.json()
        //     setData(responseData[currency])

        //     console.log(responseData);
        // }
        // fetchData();

    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;