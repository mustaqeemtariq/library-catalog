import { useState, useMemo } from "react";
import { Input } from "../inputs/input";
import { useAppSelector } from "../../hooks/rtk";

export const BookList = () => {
  const [searchText, setSearchText] = useState('')
  const { books } = useAppSelector((state) => state.books)

  const { filteredBooks } = useMemo(() => {		
		const { filteredBooks } = books.reduce(
			(prev, curr) => {
				if (searchText) {
					if (
						curr.title?.toLowerCase().includes(searchText.toLowerCase()) ||
						curr.author?.toLowerCase().includes(searchText.toLowerCase()) ||
						curr.price?.includes(searchText)
					) {
						
						return { filteredBooks: [...prev.filteredBooks, curr] }
					}
				} else {
					return { filteredBooks: [...prev.filteredBooks, curr] }
				}

				return prev
			},
			{
				filteredBooks: [] as Book[]
			}
		)
		return { filteredBooks }
	}, [books, searchText])

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-center">Book Catalog</h1>
      <div className="flex space-x-2 items-center">
        <label htmlFor="filter">Filter</label>
        <Input name="filter" placeholder="filter books by title" onChange={(event) => setSearchText(event.target.value)} />
      </div>
      <div className="text-center space-y-1">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.title}>
            <p>
              {book.title} by {book.author}. ${book.price}
            </p>
          </div>
        ))
      ) : (
        <p>No books found</p>
      )}
      </div>
    </div>
  );
};
