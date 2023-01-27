import { Injectable } from '@angular/core';
import * as booksOffline from "./books.json";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  constructor(private http: HttpClient) { }

  getAuthors() {
    return fetch(`${this.urlServer}authors`).then(
      response => response.json()
    );
  } 

  getBooksOffline() {
    return booksOffline;
  }

  getBooksAuthor(author_id: any) {
    return fetch(`${this.urlServer}books_authors?author_id=${author_id}`).then(
        books => books.json()
    )
  }

  getBooks(){
    return fetch(`${this.urlServer}/books`).then(
      allBooks => allBooks.json()
    );
  }

  getMyFavoriteBooks(user_id: any){
    return this.http.get(`${this.urlServer}my_favorite_books?user_id=${user_id}`)
  }
}
