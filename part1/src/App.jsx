import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a + b)
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// const Hello = ({ name, age }) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// const Display = (props) => {
//   return <div>{props.counter}</div>
// }
// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>
// }
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)

//     setCounter(counter + 1)
//   }
//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// }
// function App() {
//   const [items, setItems] = useState([
//     { text: 'Learn JavaScript', done: false },
//     { text: 'Learn React', done: false },
//     { text: 'Play around in JSFiddle', done: true },
//     { text: 'Build something awesome', done: true },
//   ])

//   const handleChange = (index) => {
//     const updatedItems = [...items]
//     updatedItems[index].done = !updatedItems[index].done
//     setItems(updatedItems)
//   }

//   return (
//     <div>
//       <h2>Todos:</h2>
//       <ol>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={item.done}
//                 onChange={() => handleChange(index)}
//               />
//               <span className={item.done ? 'done' : ''}>{item.text}</span>
//             </label>
//           </li>
//         ))}
//       </ol>
//     </div>
//   )
// }

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App
