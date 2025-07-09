import db from '../database/database';
import Book from '../models/Book';

export const listBooks = async () => {
    return db<Book>('Book').select('*');
};

// TODO: Add more functions related to books
