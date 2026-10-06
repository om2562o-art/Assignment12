import {BaseDAO} from "./BaseDAO";  
import {BorrowRecord} from "./BorrowRecord";
import Database from "better-sqlite3";
import {BookDAO} from "./BookDAO";

export class BorrowRecordDAO extends BaseDAO {
    constructor(dbPath: string = 'app.db') {
        super(dbPath);
    }

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS borrow_records (
                id  INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                isbn TEXT NOT NULL,
                borrowerName TEXT,
                isAvailable BOOLEAN NOT NULL
            )
        `)
    }
    public addBorrowRecord(record: BorrowRecord): void {
        const stmt = this.db.prepare(`
            INSERT INTO borrow_records (title, isbn, borrowerName, isAvailable)
            VALUES (?, ?, ?, ?)
        `);
        stmt.run(record.getTitle(), record.getIsbn(), record.getBorrowerName(), true);
    }
    public borrowBook(isbn: string, borrowerName: string): boolean {
        const bookDAO = new BookDAO();
        const stmt = this.db.prepare('SELECT * FROM books WHERE isbn = ?');
        const book = stmt.get(isbn) as any;
    if (!book) {
        return false;
    }
    if (!book.isAvailable) {
        return false;
    }
    const insertStmt = this.db.prepare(`
        INSERT INTO borrow_records (title, isbn, borrowerName, isAvailable)
        VALUES (?, ?, ?, ?)
    `);
    insertStmt.run(book.title, book.isbn, borrowerName, true ? 1 : 0);

    const updateStmt = this.db.prepare(`
        UPDATE books SET isAvailable = ? WHERE isbn = ?
    `);
    updateStmt.run(0, isbn);

    return true;
}
}