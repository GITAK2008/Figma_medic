import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Page_1 from '../src/Page/Page_1/Page1'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Page_1/>}/>
          <Route path='/Page_1' index element={<Page_1/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
