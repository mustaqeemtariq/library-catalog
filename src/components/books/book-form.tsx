import { Input } from '../inputs/input'
import { useForm } from 'react-hook-form'
import './styles/form.css'

export const BookForm = () => {

    const {
        register, handleSubmit, formState: {errors} 
    } = useForm<Book>({
        mode: "all"
    })

    const existingBooks = localStorage.getItem('books');
    let booksArray = [] as Book[];
  
    if (existingBooks) {
      booksArray = JSON.parse(existingBooks);
    }

    const handleFormSubmit = (data: Book) => {
        booksArray.push(data)
        localStorage.setItem('books', JSON.stringify(booksArray))
        window.location.reload()
    }

  return (
    <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='book-form-main'>
            <Input placeholder='Title' required type='text' name='title' register={register} errors={errors} />
            <Input placeholder='Author' required type='text' name='author' register={register} errors={errors} />
            <Input placeholder='Price' required type='number' name='price' register={register} errors={errors} />
            <button>Add Book</button>
        </form>
    </div>
  )
}
