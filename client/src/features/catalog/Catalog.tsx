import ProductList from "./ProductList";
import {useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";


export default function Catalog(){
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(()=>{
      if(!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])
  
   if(status.includes('pending')) return <LoadingComponent message="Loading products..."/>


    return (
       <>
    {/* <Typography variant="h3">Catalog</Typography> */}
        <ProductList products={products}/>
       </>
    )
}
