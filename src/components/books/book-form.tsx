import { Input } from '../inputs/input'
import './styles/form.css'
import { FormEventHandler } from 'react';

export const BookForm = () => {

    const existingBooks = localStorage.getItem('books');
    let booksArray = [] as Book[];
  
    if (existingBooks) {
      booksArray = JSON.parse(existingBooks);
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const elements = form.elements as HTMLFormControlsCollection

        const titleInput = elements.namedItem('title') as HTMLInputElement
        const authorInput = elements.namedItem('author') as HTMLInputElement
        const priceInput = elements.namedItem('price') as HTMLInputElement
      
        const data: Book = {
          title: titleInput.value,
          author: authorInput.value,
          price: priceInput.value,
        }
      
        booksArray.push(data)
        localStorage.setItem('books', JSON.stringify(booksArray))
        window.location.reload()
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit} className='book-form-main'>
            <Input placeholder='Title' required type='text' name='title' />
            <Input placeholder='Author' required type='text' name='author' />
            <Input placeholder='Price' required type='number' name='price' />
            <button>Add Book</button>
        </form>
    </div>
  )
}
