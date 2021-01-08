import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // @ts-ignore
  newBook: FormGroup;
  constructor(
    private bookService: BookService,
    private  bookForm: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBook = this.bookForm.group(
      {
        title: [null],
        author: [null],
        description: [null]
      }
    );
  }
  // tslint:disable-next-line:typedef
  createNewBook() {
    const  newB: IBook = this.newBook.value;
    this.bookService.save(newB).subscribe(() => {
      alert('new book save successfully');
      this.router.navigate(['']);
    });
  }
}
