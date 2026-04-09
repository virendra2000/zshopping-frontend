import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "../axiosConfig"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import shoppingimg from '../assets/shopping.png'
const ProductPage = () => {
    const { id } = useParams();
    const [loading,setLoading] = useState(false);
    const [product,setProduct] = useState([]);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const res = await axios.get(`/zshopping/api/products/${id}`);
                if(res.data) {
                    const data = res.data;
                    setProduct(data);
                    console.log(data);
                    setLoading(false);
                }
                else {
                    setLoading(true);
                }
            }
            catch(error) {
                console.log(error);
                setLoading(false);
            }
        }
        getProductById();
    },[id]);

if (!product || loading === true) {
    return (
      <h2 className="text-center" style={{ padding: "10rem" }}>
        Loading...
      </h2>
    );
  }
    return (
        <>
            <Navbar/>
            <section className="productpage p-5 flex flex-col md:flex-row gap-2">
                <div className="productimage">
                    <img src={shoppingimg} alt="productimage" className="w-96 h-auto" />
                </div>
                <div className="productdetails flex flex-col gap-2">
                    <h2 className="text-4xl font-bold">{product.name}</h2>
                    <p className="text-gray-400">{product.description}.</p>
                    <span className="text-2xl font-bold text-green-500">&#8377; {product.price}</span>

                    <table className="border border-gray-400 border-collapse w-full">
                        <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Brand</td>
                            <td className="border border-gray-400 px-4 py-2">{product.brand}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Category</td>
                            <td className="border border-gray-400 px-4 py-2">{product.category}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Manufacturing Date</td>
                            <td className="border border-gray-400 px-4 py-2">{product.releaseDate}</td>
                        </tr>
                        </tbody>
                    </table>

                    <button
                        className={`cart-btn py-2 cursor-pointer bg-green-500 text-slate-100 rounded-md ${!product.available ? "disabled-btn bg-red-500" : ""}`}
                        disabled={!product.available}
                    >
                        {product.available ? "Add to cart" : "Out of Stock"}
                    </button>

                    <h6>
                      Stock Available :{" "}
                        <i style={{ color: "green", fontWeight: "bold" }}>
                            {product.quantity}
                        </i>
                    </h6>
                </div>
            </section>

            <Footer/>
        </>
    )
}
export default ProductPage