import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;
  items = [
    {label: 'Plik BIBTEX', icon: 'fa-link', command: () => {
        // TODO: pobranie pliku BIBTEX
    }},
    {label: 'Plik PDF', icon: 'fa-link', command: () => {
        // TODO: pobranie pliku PDF
    }},
    {label: 'Plik TXT', icon: 'fa-link', command: () => {
      // TODO: pobranie pliku TXT
    }},
    {label: 'Plik DOC', icon: 'fa-link', command: () => {
    // TODO: pobranie pliku DOC
    }},
    // {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
    // {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }

}
