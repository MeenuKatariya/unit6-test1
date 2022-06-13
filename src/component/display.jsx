import React from "react";
export default function DisplayData({allCustomerData,handlePage , page, lastPage,handleDelete,sortData}){
    // console.log(allCustomerData)
    return(
        <>
        <h3>Customer Details</h3>
        <button onClick={sortData}>SORT</button>
          <div id="data">

            {
               allCustomerData.map(item =>{
                return(
                    <>
                    <div class="allData">
                    <img src={item.image} alt="" />
                    <p>Title={item.title}</p>
                    <p>Gender={item.gender}</p>
                    <p>Price={item.price}</p>
                    <p>Category={item.category}</p>
                    <button onClick={() => {handleDelete(item.id)}}>DELETE</button>
                    </div>
                   
                    </>

                )
               }) 
            }
              
          </div>
         

        </>
    
    )
   
}
