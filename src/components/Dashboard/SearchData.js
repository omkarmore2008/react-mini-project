import { Fragment, useState } from "react";

const SearchData = (props) => {
    const [searchData, setSearchData] = useState("")
    const [foundData, setFoundData] = useState([])
    const searchHandler = (event)=>{
        setSearchData(event.target.value)

        props.carData.filter((item=>{
            setFoundData(item.company.includes(searchData))
        }))
        props.onSearch(foundData)
        // fetch(`http://localhost:8000/carData`)
        // .then((response)=>{
        //     response.json()
        //     .then((data)=>{
        //         const carData = data.filter((item)=>{
        //             item.company.includes(event.target.value)
        //         })
        //         setFoundData(carData)
        //         props.onSearch(foundData)
        //     })
            
        // })
        
    }
    
    

    return (
        <Fragment>
            
            
           
        </Fragment>
  );
};

export default SearchData;
