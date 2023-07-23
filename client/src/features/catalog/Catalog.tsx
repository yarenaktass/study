import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

interface Props {
    products:Product[];
    addProduct:()=> void;
}


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
      // fetch('http://localhost:5000/api/Products')
      // .then(Response => Response.json())
      // .then(data => setProducts(data))

      agent.Catalog.list().then(products => setProducts(products))
      .catch(error=>console.log(error))
      .finally(()=> setLoading(false))
    }, [])
  
   if(loading) return <LoadingComponent message="Loading products..."/>

    function addProduct(){
      setProducts(prevState=>[...prevState, 
  
        {id:prevState.length+101,
        name:'product'+ (prevState.length +1),
        price:(prevState.length * 100) + 100, 
        brand:'some brand', 
        description:'some description',
        pictureUrl:'http://picsum.photos/200'}])
    }
    return (
       <>
    {/* <Typography variant="h3">Catalog</Typography> */}
        <ProductList products={products}/>
          <Button variant="contained" onClick={addProduct}>Add Product</Button>
       </>
    )
}
