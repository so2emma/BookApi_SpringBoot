package com.example.books.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.books.Service.BookService;
import com.example.books.model.Book;
import com.example.books.repositories.BookRepositories;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepositories bookRepositories;

    @Override
    public List<Book> getAllBooks() {
        return bookRepositories.findAll();
    }

    @Override
    public Book getBookById(Long id) {
        Optional<Book> optionalBook = bookRepositories.findById(id);
        return optionalBook.orElse(null);
    }

    @Override
    public Book addBook(Book book) {
       Book newBook =  bookRepositories.save(book);
       return newBook;

    }

@Override
public Book updateBook(Long id, Book book) {
   if (!bookRepositories.existsById(id)) {
       throw new IllegalArgumentException("Book with id " + id + " does not exist");
   }
   book.setId(id);
   return bookRepositories.save(book);
}

    @Override
    public void deleteBook(Long id) {
        bookRepositories.deleteById(id);
    }
}
