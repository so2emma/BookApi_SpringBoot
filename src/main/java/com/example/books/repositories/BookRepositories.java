package com.example.books.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.books.model.Book;

@Repository
public interface BookRepositories extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b WHERE b.title LIKE %?1% OR b.author LIKE %?1% OR b.publisher LIKE %?1% OR b.isbn LIKE %?1%")
    List<Book> searchBooksByProperties(String query);
}
