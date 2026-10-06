export class Book {
   private title: string;
    private isbn: string;
    private isAvailable: boolean;

    constructor(title: string, isbn: string , isAvailable: boolean = true) {
        this.title = title;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }

    public getTitle(): string {
        return this.title;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public getIsAvailable(): boolean {
        return this.isAvailable;
    }

    public setIsAvailable(isAvailable: boolean): void {
        this.isAvailable = isAvailable;
    }

    public getInfo(): string {
        return `Title: ${this.title}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
    }
}