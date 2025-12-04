import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.tsx'
import Home from './pages/Home.tsx'
import MetalStructures from './pages/MetalStructures.tsx'
import './pages/css/index.css';
import Repair from './pages/Repair.tsx'
import HouseBuilding from './pages/HouseBuilding.tsx'
import Design from './pages/Design.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Contacts from './pages/Contacts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/metal-structures" element={<Layout children={<MetalStructures />} />} />
          <Route path="/decoration-works" element={<Layout children={<Repair />} />} />
          <Route path="/house-building" element={<Layout children={<HouseBuilding />} />} />
          <Route path="/design" element={<Layout children={<Design />} />} />
          <Route path="/portfolio" element={<Layout children={<Portfolio />} />} />
          <Route path="/contacts" element={<Layout children={<Contacts />} />} />
        </Routes>
      </Router>
  </StrictMode>,
)
