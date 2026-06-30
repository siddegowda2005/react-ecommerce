
import './Home.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { cartContext } from "./App";

function Home() {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);

    const { cart, setCart } = useContext(cartContext);

    useEffect(() => {

        const handleClick = async () => {

            const response = await axios.get("https://dummyjson.com/products");

            setData(response.data.products);

        }

        handleClick();

    }, [status]);

    const addToCart = (product) => {

        const obj = {

            productName: product.title,
            productDescription: product.description,
            productPrice: product.price,
            productImage: product.thumbnail

        }

        setCart(prev => [...prev, obj]);

        console.log(cart);

    }

    return (

        <>

            <div className="allProducts">

                {

                    data.map((product, index) => (

                        <div className="product" key={index}>

                            <div className="img">
                                <img src={product.thumbnail} alt="" />
                            </div>

                            <div className="title">
                                <p>{product.title}</p>
                            </div>

                            <div className="description">
                                {product.description}
                            </div>

                            <div className="price">
                                ${product.price}
                            </div>

                            <button onClick={() => addToCart(product)}>
                                Add To Cart
                            </button>

                        </div>

                    ))

                }

            </div>

        </>

    )

}

export default Home;// import './Home.css'
// import { useState, useEffect, useContext } from 'react'
// import axios from 'axios'

// import { cartContext } from "./App";

// function Home() {

//     const [data, setData] = useState([])
//     const [status, setStatus] = useState(false)

    
//     const { cart, setCart } = useContext(cartContext)

//     useEffect(() => {

//         const handleClick = async () => {

//             const response = await axios.get("https://dummyjson.com/products")

//             // console.log(response.data.products)

//             setData([...response.data.products])

//         }

//         handleClick()

//     }, [status])

//     const addToCart = (product) => {

//         // console.log(product.title)

//         const obj = {

//             productName: product.title,
//             productDescription: product.description,
//             productPrice: product.price,
//             productImage: product.thumbnail

//         }

//         setCart(prev => [...prev, obj])

//         // console.log(cart)

//     }

//     return (

//         <>

//             <div className="allProducts">

//                 {

//                     data.map((product, index) => (

//                         <div className="product" key={index}>

//                             <div className="img">

//                                 <img src={product.thumbnail} alt="not found" />

//                             </div>

//                             <div className="title">

//                                 <p>{product.title}</p>

//                             </div>

//                             <div className="description">

//                                 {product.description}

//                             </div>

//                             <div className="price">

//                                 ${product.price}

//                             </div>

//                             <button onClick={() => addToCart(product)}>

//                                 Add To Cart

//                             </button>

//                         </div>

//                     ))

//                 }

//             </div>

//         </>

//     )

// }

// export default Home

// // import './Home.css'
// // import { useState,useEffect } from 'react'
// // import axios from 'axios'
// // import { createContext } from 'react'
// // export const cartContext = createContext(null)

// // function Home(){
// //      const [data, setData] = useState([])
// //      const [status, setStatus] = useState(false)
// //      const [cart , setCart] = useState([])

// //     //  const handleClick = async()=>{

// //     //     const response = await axios.get("https://dummyjson.com/products")
        
// //     //     // setData([...response.data.products])
// //     //     console.log(response.data.products)
// //     //     setData([...response.data.products])

// //     //  }

// //      useEffect(()=>{
// //         const handleClick =async()=>{
// //             const response = await axios.get("https://dummyjson.com/products")
// //             console.log(response.data.products)
// //             setData([...response.data.products])
// //         }
// //         handleClick();

// //      },[status])

// //      const addToCart =(product)=>{

// //         console.log(product.title)
// //         const obj = {
// //             productName : product.title,
// //             productDescription : product.description,
// //             productPrice : product.price,
// //             productImage : product.thumbnail
// //         }
// //         setCart(prev =>[...prev,obj])
// //         console.log(cart)
// //      }
     

     
    


// //     return(
// //         <>
// //         {/* <button onClick={()=>setStatus(status?false:true)}>Load</button>
// //         <p>Number of products: {data.length}</p> */}
// //     <cartContext.Provider  value={{cart,setCart}}>
// //         <div className="allProducts">
// //             {data.map((product,index)=>(
// //                 <div className="product">
// //                 <div className="img">
// //                     <img src={product.thumbnail} alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>{product.title}</p>
// //                 </div>
// //                 <div className="description">
// //                      {product.description}
// //                 </div>
// //                 <div className="price">
// //                     ${product.price}
// //                 </div>
// //                 <button onClick={()=>addToCart(product)}>Add To Cart</button>
// //             </div>

// //             ))}
            
// //             {/* <div className="product">
// //                 <div className="img">
// //                     <img src="" alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>title</p>
// //                 </div>
// //                 <div className="description">
// //                     description
// //                 </div>
// //                 <div className="price">
// //                     $456
// //                 </div>
// //                 <button>Add To Cart</button>
// //             </div>
// //             <div className="product">
// //                 <div className="img">
// //                     <img src="" alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>title</p>
// //                 </div>
// //                 <div className="description">
// //                     description
// //                 </div>
// //                 <div className="price">
// //                     $456
// //                 </div>
// //                 <button>Add To Cart</button>
// //             </div>
// //             <div className="product">
// //                 <div className="img">
// //                     <img src="" alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>title</p>
// //                 </div>
// //                 <div className="description">
// //                     description
// //                 </div>
// //                 <div className="price">
// //                     $456
// //                 </div>
// //                 <button>Add To Cart</button>
// //             </div>
// //             <div className="product">
// //                 <div className="img">
// //                     <img src="" alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>title</p>
// //                 </div>
// //                 <div className="description">
// //                     description
// //                 </div>
// //                 <div className="price">
// //                     $456
// //                 </div>
// //                 <button>Add To Cart</button>
// //             </div>
// //             <div className="product">
// //                 <div className="img">
// //                     <img src="" alt="not found" />
// //                 </div>
// //                 <div className="title">
// //                     <p>title</p>
// //                 </div>
// //                 <div className="description">
// //                     description
// //                 </div>
// //                 <div className="price">
// //                     $456
// //                 </div>
// //                 <button>Add To Cart</button>
// //                 <div className="msg">Succusfull</div>
// //             </div> */}
// //         </div>
        

// //     </cartContext.Provider>
// //         </>
// //     )
// // }
// // export default Home