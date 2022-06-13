import React from "react";
import displayData from "./display";
export default function FormData({postData})
{
    const [customerData, setCustomerData] = React.useState({
        title : "",
        gender : "",
        price : "",
        category : "",
        image: ""
        
   })


   const handleChange =(event) => {
    var {name,value} = event.target;
    
    setCustomerData({...customerData, [name]:value})
}

const handleSubmit = (event,formData) => {
    event.preventDefault();
    // console.log(formData);
    postData(formData);
    setCustomerData({
        title : "",
        gender : "",
        price : "",
        category : "",
        image: ""
    })

}


    const {title,gender,price,category,image} = customerData
    return (
       
     <div id="datas">
         <h4>Customer Data</h4>

        <form onSubmit={(event)=>handleSubmit(event,customerData)} id="customerForm">
        <label>Title <input value={title} onChange={handleChange} name="title" placeholder="Enter Title"  ></input></label>
       <label >Gender <select value={gender} onChange={handleChange} name="gender">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                
            </select></label>
        <label>Price <input value={price} onChange={handleChange} name="price" placeholder="Enter Price"  ></input></label>
        <label>Category <input value={category} onChange={handleChange} name="category" placeholder="Enter category"  ></input></label>
        
        <label>Image<input value={image} onChange={handleChange} name="image" placeholder="Enter url"  ></input></label>
        <input id="submitBtn" type="submit" />
        
        
        </form>
        
     </div>
        
    )
}