import Card from './components/Card'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState()
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

  useEffect(() => {
    axios(url).then((res) => setData(res.data.results))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/shop" element={<Shop data={data} />}>
              <Route path="/shop/:id" element={<Card data={data}/>} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route
            path="*"
            element={<h1>Error 404 - Pagina no encontrada 😢</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
