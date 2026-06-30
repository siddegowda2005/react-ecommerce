import { useState, createContext } from 'react';
import Nav from './Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import Order from './Order.jsx';

// Create Context
export const cartContext = createContext(null);

function App() {

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  return (

    <cartContext.Provider
      value={{
        cart,
        setCart,
        order,
        setOrder
      }}
    >

      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />

        </Routes>

      </BrowserRouter>

    </cartContext.Provider>

  );
}

export default App;
// import { useState, createContext } from 'react';
// import Nav from './Nav.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home.jsx';
// import About from './About.jsx';
// import Order from './Order.jsx';
// import Cart from './Cart.jsx';
// import Order from './Order.jsx'

// // Create Context
// export const cartContext = createContext(null);

// function App() {

//   const [cart, setCart] = useState([]);
//   const [order , setOrder] = useState([])
  

//   return (
//     <>

//       <cartContext.Provider value={{ cart, setCart ,order,setOrder}}>

//         <BrowserRouter>

//           <Nav />

//           <Routes>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/order" element={<Order />} />
//           </Routes>

//         </BrowserRouter>

//       </cartContext.Provider>

//     </>
//   );
// }

// export default App;
// // import { useState, createContext } from 'react';
// // import Nav from './Nav.jsx';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Home from './Home.jsx';
// // import About from './About.jsx';
// // import Order from './Order.jsx';
// // import Cart from './Cart.jsx';



// // function App() {

// //   const [cart, setCart] = useState([]);

// //   return (
// //     <>
      

// //         <BrowserRouter>
// //           <Nav />

// //           <Routes>
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/cart" element={<Cart />} />
// //             <Route path="/order" element={<Order />} />
// //           </Routes>

// //         </BrowserRouter>

      
// //     </>
// //   );
// // }

// // export default App;





























// // // import { useState } from 'react'
// // // import Nav from './Nav.jsx'
// // // import { BrowserRouter,Routes,Route } from 'react-router-dom'
// // // import Home from './Home.jsx'
// // // import About from './About.jsx'
// // // import Order from './Order.jsx'
// // // import Cart from './Cart.jsx'


// // // function App() {
  


// // //   return (
// // //     <>
// // //     <BrowserRouter>
// // //     <Nav/>
// // //     <Routes>
// // //       <Route path='/home' element={<Home/>}/>
// // //        <Route path='/about' element={<About/>}/>
// // //         <Route path='/cart' element={<Cart/>}/>
// // //          <Route path='/order' element={<Order/>}/>
// // //     </Routes>
// // //     </BrowserRouter>
    
    
// // //     </>
// // //   )
// // // }

// // // export default App
