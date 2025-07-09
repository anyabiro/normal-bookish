import { Router, Request, Response } from 'express';
import {
    listBooks,
    listBookById,
    addBook,
    removeBookById,
} from '../services/booksService';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();

        this.router.get('/', this.getBooks.bind(this));

        this.router.get('/:id', this.getBookById.bind(this));

        this.router.post('/', this.createBook.bind(this));

        this.router.delete('/:id', this.deleteBookById.bind(this));
    }

    async getBooks(req: Request, res: Response) {
        const title = req.query.title;
        const author = req.query.author;
        const ISBN = req.query.ISBN;

        if (typeof title !== 'string') {
            return res.status(400).json({ error: 'Not a valid title.' });
        }

        if (typeof author !== 'string') {
            return res.status(400).json({ error: 'Not a valid author.' });
        }

        if (typeof ISBN !== 'string') {
            return res.status(400).json({ error: 'Not a valid ISBN.' });
        }

        const books = await listBooks(title, author, ISBN);
        return res.status(200).json(books);
    }

    async getBookById(req: Request, res: Response) {
        const id = req.params.id;
        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Not a book id' });
        }
        const numberId = Number(id);
        const book = await listBookById(numberId);
        return res.status(200).json(book);
    }

    async createBook(req: Request, res: Response) {
        const id = req.params.id;
        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Not a book id' });
        }
        const book = await addBook(req.body);
        return res.status(200).json(book);
    }

    async deleteBookById(req: Request, res: Response) {
        const id = req.params.id;
        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Not a book id' });
        }
        const numberId = Number(id);
        const book = await removeBookById(numberId);
        return res.status(200).json(book);
    }
}

export default new BookController().router;
