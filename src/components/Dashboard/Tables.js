import { Fragment, useEffect, useState } from "react";

import Delete from "./Delete";
import Update from "./Update";
import Pagination from "./Pagination";
let foundData = []
const Tables = () => {
  const [search, setSearch] = useState("")
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(5)
  const searchHandler=(event)=>{
     

      
        
        foundData = carData.filter((item)=>{
          return item["company"].includes(event.target.value)
        })
        console.log(foundData)
        setCarData(foundData)
        
            
      
    }
   
  
  useEffect(() => {
    fetch("http://localhost:8000/carData").then((response) => {
      response.json().then((data) => {
        
        setCarData(data);
        
         
      });
    });

    
  },[]);

  const sortByAverage = ()=>{
    fetch("http://localhost:8000/carData?_sort=average&_order=desc").then((response) => {
      response.json().then((data) => {
        setCarData(data);
      });
    });
  }

  const sortByCompany = ()=>{
    fetch("http://localhost:8000/carData?_sort=company&_order=desc").then((response) => {
      response.json().then((data) => {
        setCarData(data);
      });
    });
  }

  const sortByModel = ()=>{
    fetch("http://localhost:8000/carData?_sort=model&_order=desc").then((response) => {
      response.json().then((data) => {
        setCarData(data);
      });
    });
  }

  const sortById = ()=>{
    fetch("http://localhost:8000/carData?_sort=id&_order=asc").then((response) => {
      response.json().then((data) => {
        setCarData(data);
      });
    });
  }

  const indexOfLastData = currentPage*dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = carData.slice(indexOfFirstData,indexOfLastData)

  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  return (
    <Fragment>
      <div className="container bg-light p-5">
        
      <div className="d-flex">
            <input
                type="text"
                className={"form-control w-50 "}
                id="floatingInput"
                placeholder="Search"
                
                onChange={searchHandler}
                required
            />
           
           
            </div>
        <table className="table m-3 table-striped" border={2}>
          <thead>
            <tr >
              <th scope="col" onClick={sortById}>ID</th>
              <th scope="col" onClick={sortByCompany}>Company</th>
              <th scope="col" onClick={sortByModel}>Model</th>
              <th scope="col" onClick={sortByAverage}>Average</th>
              <th scope="col"  colSpan={2} style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {carData &&
              currentData.map((item) => (
                    
                        
                  <tr key={item.id}>
                    
                    <th scope="row">{item.id}</th>
                    <td >{item.company}</td>
                    <td >{item.model}</td>
                    <td >{item.average}</td>
                    <td style={{ textAlign: "center" }}>
                        <Update id={item.id}
                                company = {item.company}
                                model = {item.model}
                                average = {item.average}/>                      
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <Delete id={item.id}/>                      
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
      <div className="w-25 m-auto">
          <Pagination dataPerpage={dataPerPage} totalData={carData.length} paginate={paginate}/>
      </div>
      </div>
    </Fragment>
  );
};

export default Tables;
