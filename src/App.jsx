import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout/Layout'
import Home from './Pages/Home/Home'
import {HeroUIProvider} from '@heroui/react'
import NotFound from './Pages/NotFound/NotFound'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import { DarkModeProvider } from './Context/DarkModeContext'

function App() {

 const router = createBrowserRouter([
    {
      path : '', element : <Layout/>, children : [
        { index: true , element : <Home/> },
        {path: 'ProductDetails/:id', element: <ProductDetails/>},
        {path: "*", element:<NotFound/>}
      ]
    }
  ])

  return (
    <>
        <DarkModeProvider>
      <HeroUIProvider>
          <RouterProvider router={router} />
      </HeroUIProvider>  
    </DarkModeProvider>
    </>
  )
}

export default App
