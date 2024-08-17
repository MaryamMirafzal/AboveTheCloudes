import { useEffect, useState } from "react";
import api from "../services/config";

function CategoriesPage() {

    const [ products , setProducts ] = useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
          try {
            setProducts(await api.get("/products"))
              console.log(products);
          } catch (error) {
              console.log(error.message);
          }
        }
        fetchProducts()
      },[])
  return (
    <div>
        {products.map(p=> <p key={p.id}>{p.title}</p>)}
    </div>
  )
}

export default CategoriesPage