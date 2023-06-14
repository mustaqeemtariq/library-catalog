import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}
export const Container = ({ children}:ContainerProps) => {
  return (
    <div className='flex justify-center p-8'>
        {children}
    </div>
  )
}
