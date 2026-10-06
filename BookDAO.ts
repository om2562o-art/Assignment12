import {Book} from "./book";
import {BaseDAO} from "./BaseDAO";

export class BookDAO extends BaseDAO {
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id  INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                isbn TEXT NOT NULL,
                isAvailable INTEGER NOT NULL
            )
        `)
    }
    public addBook(book: Book): void {
        const stmt = this.db.prepare(`
            INSERT INTO books (title, isbn, isAvailable)
            VALUES (?, ?, ?)
        `);
        stmt.run(book.getTitle(), book.getIsbn(), book.getIsAvailable() ? 1 : 0);
    }
}