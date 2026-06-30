import './Cart.css'
import { useContext } from "react";
import { cartContext } from "./App";

function Cart() {

    const { cart, order, setOrder } = useContext(cartContext);

    console.log(cart);
    console.log(order);

    const buyNow = (item) => {

        const cartObject = {

            productName: item.productName,
            productPrice: item.productPrice,
            productDescription: item.productDescription,
            productImage: item.productImage

        }

        setOrder(prev => [...prev, cartObject]);

    }

    return (

        <>

            <div className="allCartProducts">

                {

                    cart.length === 0 ?

                        <h2>Your Cart is Empty</h2>

                        :

                        cart.map((item, index) => (

                            <div key={index} className="cartProduct">

                                <div className="img">
                                    <img
                                        src={item.productImage}
                                        alt={item.productName}
                                        width="100"
                                    />
                                </div>

                                <div className="cartName">
                                    <h3>{item.productName}</h3>
                                </div>

                                <div className="description">
                                    <p>{item.productDescription}</p>
                                </div>

                                <div className="price">
                                    <p>${item.productPrice}</p>
                                </div>

                                <div className="button">
                                    <button onClick={() => buyNow(item)}>
                                        Buy Now
                                    </button>
                                </div>

                            </div>

                        ))

                }

            </div>

        </>

    )

}

export default Cart;
// import './Cart.css'
// import { useContext } from "react";
// import { cartContext } from "./App";
// import {useState,useEffect} from 'react'

// function Cart() {

//     // const { cart ,order,setOrder} = useContext(cartContext);
//     // const message=''
//     // console.log(order)
//     const context = useContext(cartContext);

// console.log(context);
//     // const[order,setOrder]= useState([])

//     const buyNow = (item)=>{
//         //  alert('succusfully buyed');

//          const cartObject = {
//             productName:item.productName,
//             productPrice:item.productPrice,
//             productDescription :item.productDescription,
//             productImage : item.productImage
//          }

//          setOrder(prev=>[...prev,cartObject])
//          console.log(order)
//     }

//     return (

//         <>

            
//          <div className="allCartProducts">
//             {

//                 cart.length === 0 ?

//                     <h2>Your Cart is Empty</h2>

//                     :

//                     cart.map((item, index) => (

//                         <div key={index} className='cartProduct'>
//                           <div className="img">
//                             <img
//                                 src={item.productImage}
//                                 alt={item.productName}
//                                 width="100"
//                             />
//                             </div>
//                             <div className="cartName">
//                             <h3>{item.productName}</h3>
//                             </div>
//                              <div className="description">
//                             <p>{item.productDescription}</p>
//                             </div>
//                              <div className="price">
//                             <p>${item.productPrice}</p>
//                             </div>
//                             <div className="button">
//                                 <button onClick={()=>buyNow(item)}>Buy Now</button>
//                             </div>
//                             <div className="msg">
//                                 {message}

//                             </div>

//                         </div>

//                     ))

//             }
//             </div>

//         </>

//     )

// }

// export default Cart;

// // import { useContext } from "react";
// // import { cartContext } from "./App";

// // function Cart() {
// //     const { cart } = useContext(cartContext);

// //     return (
// //         <>
// //             <h1>Cart</h1>

// //             {cart.map((item, index) => (
// //                 <div key={index}>
// //                     <img src={item.productImage} alt={item.productName} width="100" />
// //                     <h3>{item.productName}</h3>
// //                     <p>{item.productDescription}</p>
// //                     <p>${item.productPrice}</p>
// //                 </div>
// //             ))}
// //         </>
// //     );
// // }

// // export default Cart;