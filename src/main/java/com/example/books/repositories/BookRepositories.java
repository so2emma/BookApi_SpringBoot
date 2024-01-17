package com.example.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.books.model.Book;

@Repository
public interface BookRepositories extends JpaRepository<Book, Long> {
    
    Book getBookByTitle(String title);
}
