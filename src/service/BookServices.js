import http from '../http-common';

const fetchBooks = () => http.get();
const submitBook = (data) => http.post('', data);
const deleteBook = (id) => http.delete(`/${id}`);

const BookServices = {
  fetchBooks,
  submitBook,
  deleteBook,
};

export default BookServices;
