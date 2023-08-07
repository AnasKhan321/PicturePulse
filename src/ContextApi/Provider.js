import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) => {
    const[data,setData] = useState({})
    const [bg,setBg] = useState("")
    const fetchData = async(number,type)=>{
            const data2 = await fetch(`https://api.themoviedb.org/3/${type}?api_key=4a50d1a62e35c772727c2f3aca862b50&page=${number}`); 
            const data3 = await data2.json(); 
            return data3; 
    }




    const [user, setUser] = useState({
        'name': 'harry potter'
    });
    return (
        <PageContext.Provider value={{ 
            user: user,
            fetchData:fetchData,
            data:data,
            bg : bg,
            setBg : setBg 
        }}>
        	{props.children}
        </PageContext.Provider>
    );
}
export default PageContextProvider;