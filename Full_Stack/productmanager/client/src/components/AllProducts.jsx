import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            // console.log("response: ", res);
            setAllProducts(res.data.results);
        })
        .catch(err=>{
            console.log("errrrrr", err)
        })
    },[])

    return (
        <div>
            <h2>All Products</h2>
            <div className="cards">
            {
                allProducts.map((productObj, idx)=>{
                    return (
                        <div key= {productObj._id} className="card mx-auto mb-2" style={{width: '18rem'}}>
                            <div className="card-body">
                            <h5 className="card-title">{productObj.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Price: ${productObj.price}</h6>
                            <p className="card-text">Description: {productObj.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};



export default AllProducts;