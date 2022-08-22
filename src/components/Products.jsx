import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import Product from "./Product";

const Container = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const res = await axios.get(cat  ? `https://fakestoreapi.com/products/category/${cat}` 
                                         : 'https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        
      }
    }
    getProducts();
  },[cat]);

  useEffect(()=>{
   if (sort === "asc"){
    setSortProducts(
      products.sort((a, b)=> a.price - b.price)
    )
   }else {
    setSortProducts(
      products.sort((a, b)=> b.price - a.price)
    )
   }
  },[sort, products]);

  console.log(sortProducts);

  return (
    <Container>
        { cat ?
        sortProducts.map((item)=>(
            <Product item={item} key={item.id} />
        ))
        : products.slice(0, 8).map((item)=>(
          <Product item={item} key={item.id} />
      ))
        }
    </Container>
  )
}

export default Products