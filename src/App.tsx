import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  SignUp  from './pages/Signup'
import  Signin  from './pages/Signin'
import  Blog  from './pages/Blog'
import  {Blogs}  from './pages/Blogs'
import { Publish}  from './pages/Publish'

function App() {

  return (
    <div className='ml-20 mr-10'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
       <Route path="/blog/:id" element={<Blog />} />
       <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App