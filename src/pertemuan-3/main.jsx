import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css' // Ambil CSS utama
import PendaftaranForm from '../tugas/PendaftaranForm' // Jalur ke form

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PendaftaranForm />
  </StrictMode>,
)