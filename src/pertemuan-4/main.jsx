import React from 'react'
import ReactDOM from 'react-dom/client'
import FoodCatalog from './FoodCatalog' // Import komponen yang baru dibuat
import '../index.css' // Pastikan ini path file tailwind kamu berada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodCatalog />
  </React.StrictMode>,
)