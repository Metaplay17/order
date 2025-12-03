import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Home from './pages/Home.tsx'
import MetalStructures from './pages/MetalStructures.tsx'
import './pages/css/index.css';
import Repair from './pages/Repair.tsx'
import HouseBuilding from './pages/HouseBuilding.tsx'
import Design from './pages/Design.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/metal-structures" element={<Layout children={<MetalStructures />} />} />
          <Route path="/decoration-works" element={<Layout children={<Repair />} />} />
          <Route path="/house-building" element={<Layout children={<HouseBuilding />} />} />
          <Route path="/design" element={<Layout children={<Design />} />} />
            {/* <Route path="home" element={<HomePage />} />
            <Route path="metal-structures" element={<LoginPage />} />
            <Route path="house-building" element={<MainPage children={<QuotesBlock />} />} />
            <Route path="design" element={<MainPage children={<SavedQuotesBlock />} />} />
            <Route path="work-examples" element={<MainPage children={<SavedQuotesBlock />} />} />
            <Route path="contacts" element={<MainPage children={<SavedQuotesBlock />} />} /> */}
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
