import './Order.css'
import { useContext } from "react";
import { cartContext } from "./App";

function Order() {

    const { order } = useContext(cartContext);

    return (

        <>

            <h1>Orders</h1>
            <div className="orderedProducts">

            {

                order.length === 0 ?

                    <h2>No Orders Yet</h2>

                    :
                 
                    order.map((item, index) => (

                        <div key={index} className="orderedProduct">
                          <div className="img">
                            <img
                                src={item.productImage}
                                width="100"
                                alt=""
                            />
                            </div>
                            <div className="productName">
                            <h3>{item.productName}</h3>
                            </div>
                            <div className="productDescription">
                            <p>{item.productDescription}</p>
                            </div>
                            <div className="productPrice">
                            <h3>${item.productPrice}</h3>
                            </div>

                        </div>

                    ))

            }
            </div>

        </>

    )

}

export default Order;