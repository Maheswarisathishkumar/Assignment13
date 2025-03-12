
import React,{useEffect, useState} from "react";

const products = () => {
 const[products, setProducts]=useState(null);
 useEffect(()=>{
    const fetchProduct=async()=>{
        try {
              const response=await fetch("https://dummyjson.com/docs/products");
              const data=await response.json();
              console.log(data);
              console.log(data.product[30]);
              console.log(data.product[30].title);
              console.log(data.product[30].description);
              console.log(data.product[30].price);
              console.log(data.product[30].category);
              console.log(data.product[30].stock);

              if (data.product && data.product.length>30) {

                setProducts(data.product[30]);
        }
              
} catch (error) {
         console.log(error);
            
        }
    };
    fetchProduct();
 },[])

  return (
  <p>Running.....</p>
  );
};

export default products;