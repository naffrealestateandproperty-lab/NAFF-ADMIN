
import './App.css'
import React from 'react'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/lib/queryClient.jsx"
import { Toaster } from "./component/toaster.jsx";
import { TooltipProvider } from "./component/tooltip.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import TenantDetails from "./component/TenantDetails"; 
import Footer from './component/footer'

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/properties/:id" element={<TenantDetails />} />
        <Route path="/footer" element={<Footer />} /> 
      </Routes>
    </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>


    
  )
}

export default App
