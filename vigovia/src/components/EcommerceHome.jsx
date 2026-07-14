// import React, { useState, useEffect } from 'react';

// export default function EcommerceHome({ onLogout }) {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCartPage, setShowCartPage] = useState(false);

//   // 1. लाइव DummyJSON API से असली इमेजेस और प्रोडक्ट्स लाना
//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.error("Error fetching live data:", err));
//   }, []);

//   // 2. Add to Cart (Local Express Backend को अपडेट करने के लिए)
//   const addToCart = async (product) => {
//     try {
//       const res = await fetch('http://localhost:5000/api/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           productId: product.id, 
//           name: product.title, 
//           price: product.price,
//           image: product.thumbnail 
//         }),
//       });
//       const data = await res.json();
//       setCart(data.cart);
//       alert(`${product.title} added to your cart!`);
//     } catch (err) {
//       console.error("Cart Error:", err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Figma Navbar Header */}
//       <nav style={styles.navbar}>
//         <h1 style={styles.logo} onClick={() => setShowCartPage(false)}>WELCOME TO OUR STORE</h1>
//         <div style={styles.navLinks}>
//           <button onClick={() => setShowCartPage(false)} style={styles.navBtn}>Home</button>
//           <button onClick={() => setShowCartPage(true)} style={styles.cartBtn}>
//             Cart ({cart.length})
//           </button>
//           <button onClick={onLogout} style={styles.logoutBtn}>Logout</button>
//         </div>
//       </nav>

//       <div style={styles.mainContent}>
//         {!showCartPage ? (
//           // HOME PAGE GRID WITH FIGMA CARD STRUCTURE
//           <div>
//             <div style={styles.productGrid}>
//               {products.map((product) => (
//                 <div key={product.id} style={styles.productCard}>
//                   <div style={styles.imageContainer}>
//                     <img src={product.thumbnail} alt={product.title} style={styles.productImage} />
//                   </div>
//                   <h3 style={styles.prodName}>{product.title}</h3>
//                   <p style={styles.prodPrice}>Price: Rs. {product.price}</p>
//                   <button onClick={() => addToCart(product)} style={styles.addToCartBtn}>
//                     ADD TO CART
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           // CART PAGE
//           <div style={styles.cartPageContainer}>
//             <h2 style={styles.sectionTitle}>Shopping Cart Items</h2>
//             {cart.length === 0 ? (
//               <p style={styles.emptyText}>Your cart is empty.</p>
//             ) : (
//               <div style={styles.cartWrapper}>
//                 <div style={styles.cartList}>
//                   {cart.map((item, index) => (
//                     <div key={index} style={styles.cartItem}>
//                       <img src={item.image} alt={item.name} style={styles.cartThumb} />
//                       <span style={styles.itemName}>{item.name}</span>
//                       <span style={styles.itemPrice}>Rs. {item.price}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={styles.summaryCard}>
//                   <h3>Order Details</h3>
//                   <hr />
//                   <div style={styles.summaryRow}>
//                     <span>Total Items:</span>
//                     <span>{cart.length}</span>
//                   </div>
//                   <div style={styles.summaryRow}>
//                     <strong>Total Price:</strong>
//                     <strong>Rs. {cart.reduce((total, item) => total + item.price, 0)}</strong>
//                   </div>
//                   <button onClick={() => alert('Order Placed Successfully!')} style={styles.checkoutBtn}>
//                     Checkout Now
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' },
//   navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' },
//   logo: { fontSize: '20px', fontWeight: 'bold', color: '#0047ab', cursor: 'pointer', letterSpacing: '1px' },
//   navLinks: { display: 'flex', gap: '20px', alignItems: 'center' },
//   navBtn: { background: 'none', border: 'none', color: '#333', fontSize: '16px', cursor: 'pointer', fontWeight: '600' },
//   cartBtn: { padding: '8px 16px', backgroundColor: '#0047ab', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
//   logoutBtn: { padding: '6px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
//   mainContent: { padding: '30px 40px' },
//   productGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px' },
//   productCard: { border: '1px solid #e5e7eb', padding: '15px', borderRadius: '4px', textAlign: 'left', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
//   imageContainer: { width: '100%', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#f9f9f9', marginBottom: '10px' },
//   productImage: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
//   prodName: { fontSize: '15px', color: '#374151', fontWeight: '600', margin: '5px 0' },
//   prodPrice: { fontSize: '14px', color: '#6b7280', marginBottom: '12px' },
//   addToCartBtn: { width: '100%', padding: '10px', backgroundColor: '#0047ab', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' },
//   cartPageContainer: { maxWidth: '900px', margin: '0 auto' },
//   sectionTitle: { fontSize: '24px', marginBottom: '20px' },
//   cartWrapper: { display: 'flex', gap: '30px' },
//   cartList: { flex: 2, backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '15px', borderRadius: '4px' },
//   cartItem: { display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 0', borderBottom: '1px solid #eee' },
//   cartThumb: { width: '50px', height: '50px', objectFit: 'contain', backgroundColor: '#f9f9f9' },
//   itemName: { flex: 1, fontSize: '15px' },
//   itemPrice: { fontWeight: 'bold' },
//   summaryCard: { flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '4px', height: 'fit-content', border: '1px solid #e5e7eb' },
//   summaryRow: { display: 'flex', justifyContent: 'space-between', margin: '15px 0' },
//   checkoutBtn: { width: '100%', padding: '12px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
//   emptyText: { textAlign: 'center', color: '#6b7280', fontSize: '16px', marginTop: '30px' }
// };



import React, { useState } from 'react';

export default function EcommerceHome({ onLogout }) {
  // आपके इमेज डिज़ाइन के अनुसार डमी प्रोडक्ट्स लिस्ट
  const [products] = useState([
    { id: 1, title: 'Product 1', price: 100, thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
    { id: 2, title: 'Product 2', price: 200, thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 3, title: 'Product 3', price: 300, thumbnail: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300' },
    { id: 4, title: 'Product 4', price: 1050, thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300' },
    { id: 5, title: 'Product 5', price: 500, thumbnail: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=300' },
    { id: 6, title: 'Product 6', price: 800, thumbnail: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300' },
    { id: 7, title: 'Product 7', price: 3008, thumbnail: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300' },
    { id: 8, title: 'Product 8', price: 1200, thumbnail: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300' },
  ]);

  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  const addToCart = async (product) => {
    try {
      const res = await fetch('https://companyproject1-eoqn.onrender.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productId: product.id, 
          name: product.title, 
          price: product.price,
          image: product.thumbnail 
        }),
      });
      const data = await res.json();
      setCart(data.cart || [...cart, product]);
      alert(`${product.title} added to your cart!`);
    } catch (err) {
      console.error("Cart Error:", err);
      // Fallback in case backend is down
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={styles.container}>
      {/* Top Logout Header for convenience */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 40px', backgroundColor: '#f1f5f9' }}>
        <button onClick={() => setShowCartPage(!showCartPage)} style={{ marginRight: '15px', padding: '5px 10px', cursor: 'pointer' }}>
          {showCartPage ? 'Go to Home' : `Cart (${cart.length})`}
        </button>
        <button onClick={onLogout} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}>Logout</button>
      </div>

      {!showCartPage ? (
        // --- HOME PAGE ---
        <div>
          <div style={styles.homeHeader}>
            <h1 style={styles.homeTitle}>WELCOME TO OUR STORE</h1>
          </div>

          <div style={styles.mainContent}>
            <div style={styles.productGrid}>
              {products.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <div style={styles.imageContainer}>
                    <img src={product.thumbnail} alt={product.title} style={styles.productImage} />
                  </div>
                  <h3 style={styles.prodName}>{product.title}</h3>
                  <p style={styles.prodPrice}>Price: Rs.{product.price}</p>
                  <button onClick={() => addToCart(product)} style={styles.addToCartBtn}>
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // --- CART PAGE ---
        <div>
          <div style={styles.cartHeader}>
            <h1 style={styles.cartTitle}>YOUR SHOPPING CART</h1>
          </div>

          <div style={styles.mainContent}>
            <div style={styles.cartContainer}>
              {cart.length === 0 ? (
                <p style={{ textAlign: 'center', fontSize: '18px', margin: '40px 0' }}>Your cart is empty.</p>
              ) : (
                <div style={styles.cartList}>
                  {cart.map((item, index) => (
                    <div key={index} style={styles.cartItem}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={item.image || item.thumbnail} alt={item.name} style={styles.cartThumb} />
                        <div>
                          <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.name || item.title}</h4>
                          <p style={{ margin: 0, color: '#333' }}>Price: Rs.{item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(index)} style={styles.deleteBtn}>🗑️</button>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button onClick={() => setShowCartPage(false)} style={styles.backHomeBtn}>
                  BACK TO HOME
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '50px' },
  
  // Home Design Styles
  homeHeader: { backgroundColor: '#dce7f3', padding: '40px 20px', textAlign: 'center', borderBottom: '1px solid #cbd5e1' },
  homeTitle: { margin: 0, color: '#1e3a8a', fontSize: '46px', fontWeight: 'bold', letterSpacing: '2px' },
  mainContent: { padding: '40px' },
  productGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' },
  productCard: { backgroundColor: '#eef2f7', border: '1px solid #cbd5e1', padding: '20px', borderRadius: '4px', textAlign: 'left' },
  imageContainer: { width: '100%', height: '180px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '15px' },
  productImage: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
  prodName: { fontSize: '18px', color: '#333', margin: '10px 0 5px 0', fontWeight: '500' },
  prodPrice: { fontSize: '16px', color: '#333', margin: '0 0 15px 0' },
  addToCartBtn: { padding: '10px 15px', backgroundColor: '#87aca3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '14px' },

  // Cart Design Styles
  cartHeader: { backgroundColor: '#f5e1e1', padding: '30px 20px', textAlign: 'center', border: '1px solid #e2b7b7', margin: '0 40px', marginTop: '20px' },
  cartTitle: { margin: 0, color: '#b91c1c', fontSize: '36px', fontWeight: 'bold', letterSpacing: '1px' },
  cartContainer: { maxWidth: '1000px', margin: '0 auto', marginTop: '20px' },
  cartList: { border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', padding: '10px' },
  cartItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #cbd5e1', backgroundColor: '#fff', marginBottom: '10px' },
  cartThumb: { width: '60px', height: '60px', objectFit: 'contain', border: '1px solid #eee' },
  deleteBtn: { background: 'none', border: 'none', color: '#ef4444', fontSize: '20px', cursor: 'pointer' },
  backHomeBtn: { padding: '12px 30px', backgroundColor: '#cc0000', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }
};
