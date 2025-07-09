import { Router, Request, Response } from 'express';
import { listBooks } from '../services/booksService';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();

        this.router.get('/', this.getBooks.bind(this));

        this.router.get('/:id', this.getBook.bind(this));

        this.router.post('/', this.createBook.bind(this));
    }

    async getBooks(_req: Request, res: Response) {
        const books = await listBooks();
        return res.status(200).json(books);
    }

    async getBook(req: Request, res: Response) {
        return res.status(500).json({
            error: 'server_error',
            error_description: 'Endpoint not implemented yet.',
        });
    }

    createBook(req: Request, res: Response) {
        // TODO: implement functionality
        return res.status(500).json({
            error: 'server_error',
            error_description: 'Endpoint not implemented yet.',
        });
    }
}

export default new BookController().router;
