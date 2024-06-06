import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccountPage from "./pages/CreateAccountPage.jsx"
import ListsPage from "./pages/ListsPage"
import ListPage from "./pages/ListPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import NavBar from './NavBar.js'
import { IoReloadCircle } from "react-icons/io5";


// temp
let l1 = [{name: "cookies", checked: false}, {name: "banana", checked: false}, {name: "ice cream", checked: false}];
let l2 = [{name: "books", checked: false}, {name: "paper", checked: false}, {name: "stapler", checked: false}];
let l3 = [{name: "clean up bedroom", checked: false}, {name: "do dishes", checked: false}];


let lists
 = [
  {name: "list1", items: l1, active: true},
  {name: "list2", items: l2, active: true},
  {name: "list3", items: l3, active: true}
];

function App() {

  const reloadPage = () => {
    window.location.reload();

  }

  return (
    <>
      <BrowserRouter>
      <div className='main-container'>
        <NavBar></NavBar>
      
        
        <Routes>

          <Route  path='/' element={<HomePage></HomePage>} />
          <Route path='/lists' element={<ListsPage></ListsPage>} />
          <Route path='/lists/:listID' element={<ListPage></ListPage>} />
          <Route path='/login' element={<LoginPage></LoginPage>} />
          <Route path='/create-account' element={<CreateAccountPage></CreateAccountPage>} />

        </Routes>
        <IoReloadCircle className='reload-button' onClick={reloadPage}/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
