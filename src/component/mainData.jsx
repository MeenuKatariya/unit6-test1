import React from "react";
import FormData from "./form";
import DisplayData from "./display";

export default function MainData()
{

   const[allCustomerData, setAllCustomerData]=React.useState([]);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(false);
   const [page, setPage] = React.useState(1);

   const [lastPage, setLastPage] = React.useState()

   const postData =async(customerData) => {
    try {
        await fetch(`http://localhost:3000/customerData`,{
            method : "POST",
            body : JSON.stringify(customerData),
            headers : {"Content-Type" : "application/json"}
        });
        getData();
    } catch (error) {
        console.log(error);
        setError(true);
        
    }
}


const getData =async () => {
    try {
        setLoading(true)
    
        let response =await fetch(`http://localhost:3000/customerData?_page=${page}&_limit=10`);
        let result = await response.json();
        setAllCustomerData(result);
        for(var pair of response.headers.entries()){
            if(pair[0] === 'x-total-count'){
                setLastPage(Math.ceil(pair[1]/5));
            }
        }

    } catch (error) {
        console.log(error)
        setError(true);

    }
    setLoading(false)
}

const sortData =async () => {
    try {
        setLoading(true)
    
        let response =await fetch(`http://localhost:3000/customerData?_sort=price`);
        let result = await response.json();
        setAllCustomerData(result);
       
    } catch (error) {
        console.log(error)
        setError(true);

    }
    setLoading(false)
}


const handleDelete = async (itemId) => {
    try {
        setLoading(true);
        await fetch (`http://localhost:3000/customerData/${itemId}`,{
            method :"DELETE"
        });
        getData();
    } catch (error) {
        // console.log(error)
        setError(true);
    }
    setLoading(false);
}

  
const handlePage = (value) => {
    setPage(page+value);
    console.log(page);
}

React.useEffect(()=>{
    getData();
},[page]);


    return(
        <>
        
        <FormData postData={postData} />
        {
            loading ?
            <h1>Loading</h1>
            :error ?
            (
            <h1>
             wrong
            </h1>
            )
            :
            <DisplayData  allCustomerData={allCustomerData} handleDelete={handleDelete} sortData={sortData}/>
            
            
           
        
            
            
           }
            <button onClick={()=>{setPage((page-1))}} disabled={page === 1}>PREV</button>
            <button onClick={()=>{setPage((page+1))}} disabled={page === lastPage}>NEXT</button>

        </>

    )
}  