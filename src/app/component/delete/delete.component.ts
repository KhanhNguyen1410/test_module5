import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {IBook} from '../../model/ibook';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  book: IBook;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.bookService.getBook(this.id).subscribe((result) => {
        this.book = result;
      });
    });
  }
  // tslint:disable-next-line:typedef
  deleteBook() {
    this.bookService.deleteBook(this.id).subscribe(value => {
      this.router.navigate(['/']);
    });
  }
}
