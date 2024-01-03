// import { useState, useEffect } from 'react';

// import logo from './logo.svg';
// import './App.css';

// import Users from './users/Users';

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 1000)
//   }, [])


//   return (
//     <div className="App">
//       {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{color: 'red'}}>data</div>}
//       <h1>Hello world</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value...'/>
//       <h2 data-testid='value-elem'>{value}</h2>
//       <Users/>
//     </div>
//   );
// }

// export default App;
