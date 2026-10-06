export class BorrowRecord {
    private title: string;
    private isbn: string;
    private borrowerName: string | null;

    constructor(title: string, isbn: string, borrowerName: string | null = null) {
        this.title = title;
        this.isbn = isbn;
        this.borrowerName = borrowerName;
    }

    public getTitle(): string {
        return this.title;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public getBorrowerName(): string | null {
        return this.borrowerName;
    }
   public getInfo(): string {
        return `Title: ${this.title}, ISBN: ${this.isbn}, Borrower: ${this.borrowerName}`;
    }
    setBorrowerName(borrowerName: string | null): void {
        this.borrowerName = borrowerName;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setIsbn(isbn: string): void {
        this.isbn = isbn;
    }
}