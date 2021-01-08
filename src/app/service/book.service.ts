import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../model/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL_API = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.URL_API);
  }
  getBook(id: number): Observable<any> {
    return  this.httpClient.get(`${this.URL_API}/${id}`);
  }
  save(book: IBook): Observable<any> {
    return this.httpClient.post<IBook>(this.URL_API, book);
  }
  update(book: IBook): Observable<any> {
    return this.httpClient.put<IBook>(`${this.URL_API}/${book.id}`, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL_API}/${id}`);
  }
}
