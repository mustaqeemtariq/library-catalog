import React from 'react'
import { BookForm } from './book-form'
import { BookList } from './book-list'

export const BookCatalog = () => {
  return (
    <div className='space-y-5'>
        <h1 className='text-2xl text-center font-bold'>Library Catalog</h1>
        <BookForm />
        <BookList />
    </div>
  )
}
