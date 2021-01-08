import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // @ts-ignore
  book: IBook;
  // @ts-ignore
  id: number;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.id = param.get('id');
      this.detailsBook(this.id);
    });
  }
  // @ts-ignore
  detailsBook(id: number): IBook {
    this.bookService.getBook(id).subscribe( value => {
      this.book = value;
    });
  }

}
