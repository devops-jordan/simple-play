import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[#282c34] h-screen text-white justify-center items-center'>
      {children}
    </div>
  )
}

export default Container