import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccountPage from "./pages/CreateAccountPage.jsx"
import ListsPage from "./pages/ListsPage"
import ListPage from "./pages/ListPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import NavBar from './NavBar.js'


function App() {

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
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
