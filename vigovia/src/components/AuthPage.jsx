// import React, { useState } from 'react';

// export default function AuthPage({ onLoginSuccess }) {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isLogin ? '/api/login' : '/api/register';
    
//     try {
//       const res = await fetch(`http://localhost:5000${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
      
//       if (res.ok) {
//         if (isLogin) {
//           alert('Login Successful!');
//           onLoginSuccess();
//         } else {
//           alert('Registration Successful! Please Login.');
//           setIsLogin(true);
//         }
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error("Auth Error:", err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>{isLogin ? 'Register / Login' : 'Create Account'}</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password*"
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>
//             {isLogin ? 'Login' : 'Register'}
//           </button>
//         </form>
//         <p onClick={() => setIsLogin(!isLogin)} style={styles.toggleText}>
//           {isLogin ? "ALREADY HAVE AN ACCOUNT? LOGIN" : 'DONT HAVE AN ACCOUNT? REGISTER'}
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e5e7eb' },
//   card: { padding: '40px', borderRadius: '4px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '360px', textAlign: 'center' },
//   title: { marginBottom: '25px', color: '#111827', fontSize: '22px', fontWeight: 'bold' },
//   form: { display: 'flex', flexDirection: 'column', gap: '15px' },
//   input: { padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '15px', outline: 'none' },
//   button: { padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#0047ab', color: '#fff', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
//   toggleText: { marginTop: '20px', color: '#6b7280', cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }
// };
import React, { useState } from 'react';

export default function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/login' : '/api/register';
    
    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (res.ok) {
        if (isLogin) {
          alert('Login Successful!');
          onLoginSuccess();
        } else {
          alert('Registration Successful! Please Login.');
          setIsLogin(true);
        }
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Auth Error:", err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name *"
              onChange={handleChange}
              required
              style={styles.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email *"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password *"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} style={styles.toggleText}>
          {isLogin ? "DON'T HAVE AN ACCOUNT? REGISTER" : 'ALREADY HAVE AN ACCOUNT? LOGIN'}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e2e8f0' },
  card: { padding: '50px 40px', borderRadius: '4px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', width: '420px', textAlign: 'center' },
  title: { marginBottom: '30px', color: '#000', fontSize: '32px', fontWeight: '400' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  input: { padding: '15px', borderRadius: '4px', border: '1px solid #cccccc', fontSize: '16px', outline: 'none', backgroundColor: 'transparent' },
  button: { padding: '14px', borderRadius: '4px', border: 'none', backgroundColor: '#0056b3', color: '#fff', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '0.5px' },
  toggleText: { marginTop: '25px', color: '#0056b3', cursor: 'pointer', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }
};