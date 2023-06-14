import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../inputs/input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './styles/form.css'

export const BookForm = () => {
    const schema = yup.object<Book>().shape({
        title: yup.string().required('Title is required'),
        author: yup.string().required('Author is required'),
        price: yup.string().required('Price is required'),
    })

    const {
        register, handleSubmit, formState: {errors} 
    } = useForm<Book>({
        resolver: yupResolver(schema),
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
            <Input placeholder='Title' type='text' name='title' register={register} errors={errors} />
            <Input placeholder='Author' type='text' name='author' register={register} errors={errors} />
            <Input placeholder='Price' type='number' name='price' register={register} errors={errors} />
            <button>Add Book</button>
        </form>
    </div>
  )
}
