import { Book } from "./book";
import {BookDAO} from "./BookDAO";
import {BorrowRecordDAO} from "./BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();

bookDAO.addBook(new Book("SSS", "987654123", true));
const isBorrowed = borrowRecordDAO.borrowBook("987654123", "สมชาย");


console.log(`Book borrowed: ${isBorrowed}`);