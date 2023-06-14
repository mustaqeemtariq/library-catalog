import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../inputs/input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppDispatch } from '../../hooks/rtk'
import { addBook } from '../../slices/books'
import toast from 'react-hot-toast'

export const BookForm = () => {
    const schema = yup.object<Book>().shape({
        title: yup.string().required('Title is required'),
        author: yup.string().required('Author is required'),
        price: yup.string().required('Price is required'),
    })

    const {
        register, handleSubmit, reset, formState: {errors} 
    } = useForm<Book>({
        resolver: yupResolver(schema),
        mode: "all"
    })

    const dispatch = useAppDispatch()

    const handleFormSubmit = (data: Book) => {
        dispatch(addBook(data))
        toast.success("Book added successfully")
        reset()
    }

  return (
    <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-3'>
            <Input placeholder='Title' type='text' name='title' register={register} errors={errors} />
            <Input placeholder='Author' type='text' name='author' register={register} errors={errors} />
            <Input placeholder='Price' type='number' name='price' register={register} errors={errors} />
            <button className='w-full px-4 py-2 text-white rounded-md bg-indigo-500 hover:bg-indigo-600'>Add Book</button>
        </form>
    </div>
  )
}
