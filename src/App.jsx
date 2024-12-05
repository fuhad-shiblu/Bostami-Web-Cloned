import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './assets/Layout/LayoutOne'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Resume from './assets/Pages/Resume'
import Works from './assets/Pages/Works'
import Blogs from './assets/Pages/Blogs'
import Contact from './assets/Pages/Contact'
function App() {
  return (
    <>
    <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )}/>
    </>
  )
}
export default App