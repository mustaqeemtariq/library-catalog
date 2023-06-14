import { useState, useMemo } from "react";
import { Input } from "../inputs/input";
import "./styles/list.css"

export const BookList = () => {
  const [searchText, setSearchText] = useState('')
  const storedBooks = localStorage.getItem('books');
  const books: Book[] = useMemo(() =>storedBooks ? JSON.parse(storedBooks) : [], [storedBooks])
  
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
    <div className="book-list-main">
      <h1>Book Catalog</h1>
      <div className="book-list-sub">
        <label htmlFor="filter">Filter</label>
        <Input name="filter" placeholder="filter books by title" onChange={(event) => setSearchText(event.target.value)} />
      </div>
      <div className="book-list-map">
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
  )
}
