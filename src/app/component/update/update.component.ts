import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  book: IBook;
  // @ts-ignore
  bookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group(
      {
        title: [''],
        author: [''],
        description: ['']
      }
    );
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.id = param.get('id');
      this.bookService.getBook(this.id).subscribe(result => {
        this.book = result;
        this.bookForm.patchValue(this.book);
      });
    });
  }
  // tslint:disable-next-line:typedef
  updateBook() {
    if (!this.bookForm.invalid) {
      const  {value} = this.bookForm;
      const  data = {
        ...this.book,
        ...value
      };
      this.bookService.update(data).subscribe(result => {
        alert('Update successfully!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      });
    }
  }

}
