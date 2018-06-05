import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};
  loadingData : boolean =  true;

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

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
      this.loadingData = false;
    });
  }

  deleteBook(id) {
    this.http.delete('/book/'+id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
