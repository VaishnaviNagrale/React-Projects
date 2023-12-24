import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/Signup/Signup.jsx'
import UserContextProvider from '../../mini-context/src/context/UserContextProvider.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/user/:userid' element={<User/>}/>
        <Route loader={githubInfoLoader} path='/github' element={<Github/>}/>
      </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>
)
