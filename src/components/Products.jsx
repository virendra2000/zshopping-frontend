import Footer from "./Footer"
import Navbar from "./Navbar"
import { useCallback, useEffect, useState } from "react";
import shoppingimg from '../assets/shopping.png'
import {Link} from "react-router-dom";
import axios from "../axiosConfig";
const Products = () => {
    const [products,setProducts] = useState([]);
    const [errormsg,setErrorMsg] = useState(false);
    const getProducts = useCallback(async () => {
     try {
          const res = await axios.get("/zshopping/api/products");
          const data = res.data;
          setProducts(data);
          setErrorMsg(false);
          if (res.status !== 200) {
            setErrorMsg(true);
          }
        }
        catch(error) {
          console.log(error)
          setErrorMsg(true)
        }
  },[])

  useEffect(() => {
    getProducts();
  },[getProducts]);

  if(errormsg === true) {
    return "Network Error or Server Level Error";
  }
    return (
        <>
            <Navbar />
            <section className="products flex flex-col gap-2">
                    <span className="px-10 py-5 text-2xl font-bold">All Products</span>
            
                    <div className="px-10 py-5 flex flex-row gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                        <div className="p-5 flex flex-col bg-slate-100 shadow-xl shadow-slate-600 rounded-md gap-2">
                          <img src={shoppingimg} className="w-52 h-auto"></img>
                          <span className="text-xl font-bold">
                            {product.name}
                          </span>
                          <p className="text-gray-500">{product.description}</p>
                          <span className="text-lg font-bold text-green-500">&#8377; {product.price}</span>

                          <button
                            className={`cart-btn py-2 cursor-pointer bg-green-500 text-slate-100 rounded-md ${!product.available ? "disabled-btn bg-red-500" : ""}`}
                            disabled={!product.available}
                            >
                            {product.available ? "Add to cart" : "Out of Stock"}
                        </button>
                        </div>
                        </Link>
                        ))}
                    </div>
                </section>
            <Footer />
        </>
    )
}
export default Products