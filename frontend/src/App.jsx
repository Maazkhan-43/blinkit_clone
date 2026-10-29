import './App.css'
import CategoryList from './components/category/CategoryList.jsx' 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/error.jsx'
function App() {
  return (
    <>
      <div className="App">
        welcome to Blinkit_clone
        {console.log('hello')}
        <CategoryList/>

        <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
