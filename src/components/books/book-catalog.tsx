import { BookForm } from './book-form'
import { BookList } from './book-list'
import './styles/catalog.css'

export const BookCatalog = () => {
  return (
    <div className='book-catalog-main'>
        <h1>Library Catalog</h1>
        <BookForm />
        <BookList />
    </div>
  )
}
