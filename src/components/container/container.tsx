import React from 'react'
import './container.css'
interface ContainerProps {
    children: React.ReactNode
}
export const Container = ({ children}:ContainerProps) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
