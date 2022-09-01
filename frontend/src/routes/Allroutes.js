import React from 'react'
import Signin from '../pages/SignIn'
import Signup from '../pages/Signup'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/signup" element={<Signin />} />
    </Routes>
  )
}

export default Allroutes