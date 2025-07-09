import db from '../database/database';
import Book from '../models/Book';

export const listBooks = async (
    title: string | undefined,
    author: string | undefined,
    ISBN: string | undefined,
) => {
    if (title) {
        return db<Book>('books').select('*').where('title', title);
    }
    if (author) {
        return db<Book>('books').select('*').where('authors', author);
    }
    if (ISBN) {
        return db<Book>('books').select('*').where('ISBN', ISBN);
    }
    return db<Book>('books').select('*');
};

export const listBookById = async (id: number) => {
    return db<Book>('books').select('*').where('book_id', id);
};

export const addBook = async (book: Book) => {
    return db<Book>('books').insert(book).returning('*');
};

export const removeBookById = async (id: number) => {
    return db<Book>('books').where('book_id', id).del().returning('*');
};

// TODO: Add more functions related to books
