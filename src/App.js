
import './App.css'
import { Header } from './Sections/index'
import {  Route , Routes } from "react-router-dom"
import { Container } from './Components/Index';
import {Welcom , Signup,Login,PasswordReset,ForgetPassword,Fournisseur, Partenaire , Home} from './Pages/Index'


function App ()  {
  return (
    <>
        <Header />
       
        <Container>
        <Routes>

          <Route path='/home' element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Welcom' element={<Welcom />} />
       
       
          <Route path='/upload' element={<Fournisseur/>} />
          
          <Route path="/forgetpassword/:id/:token" element={<ForgetPassword />} />
          <Route path='/passwordreset' element={<PasswordReset/>} />


          <Route path='/fournisseur' element ={<Fournisseur />} />
          <Route path='/partenaire' element ={<Partenaire />} />

          
        
           


          
        </Routes>
        
        </Container>
       
        {/* <Footer />*/}
    </>

  )
}

export default App