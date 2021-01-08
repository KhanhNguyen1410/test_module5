import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @ts-ignore
  books: IBook[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook(): IBook[] {
    this.bookService.getAll().subscribe((data: any)  => {
      this.books = data;
    });
    console.log(this.books);
    return this.books;
  }
}
