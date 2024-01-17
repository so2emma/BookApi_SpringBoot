package com.example.books.Service;

import java.util.List;

import com.example.books.model.Book;

public interface BookService {
    List<Book> getAllBooks();

    Book getBookById(Long id);

    Book addBook(Book book);

    Book updateBook(Long id, Book book);

    void deleteBook(Long id);

}
