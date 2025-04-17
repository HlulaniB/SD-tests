import React,{useState} from 'react'




function Addproducts(){
        const[itemName,setitemname]=useState("");
        const[price,setprice]=useState("");
        const[quantity,setquantity]=useState("");
        
        const handleSubmit = (e) => {
            e.preventDefault(); 
            console.log('Submitted:', { itemName, price, quantity });
            // You can add Firebase logic here later
          };
        
   
 
    return (
        <section className="Box">
            <h1>My Products</h1>
            <form onSubmit={handleSubmit}>
                <section className="inputs">
                    <label>Item:</label>
                    <input type="text"  required value={itemName} onChange={e=>setitemname(e.target.value)}/><br/>
                    <label>Price:</label>
                    <input type="number"  required value={price} onChange={e=>setprice(e.target.value)}/><br/>
                    <label>Quantity</label>
                    <input type="number" required value={quantity} onChange={e=>setquantity(e.target.value)}/><br/>
                    

                </section>
                <button>Add Product</button>
            </form>
        </section>
    );


}


export default Addproducts;

