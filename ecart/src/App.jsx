import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Components/Footer'
import AddProduct from './Pages/AddProduct'
import ProductDetails from './Pages/ProductDetails'
import Preloader from './Components/Preloader'
function App() {
  const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(true)
  },1000)
},[isLoading])

  const[Products,setProducts] = useState([])
    const baseUrl ='https://fakestoreapi.com/products'
    const fetchapi=async()=>{
        try{
            const response= await fetch(baseUrl)
            console.log(response);
            const data=await response.json()
            console.log(data);
            setProducts(data)
            
            
        }
        catch(err){
            console.log("error",err);
            
        }
    }
    useEffect(()=>{
        fetchapi()
    },[])

  return (
    <>
    <Header/>
      <Routes>
      <Route path='/' element={isLoading?<LandingPage Products={Products}/>:<Preloader/>}/>
      <Route path='/Addproduct' element={<AddProduct Products={Products} setProducts={setProducts}/>}/>
      <Route path='/productdetails/:id' element={<ProductDetails Products={Products} setProducts={setProducts}/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
