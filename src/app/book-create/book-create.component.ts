import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};  
  types = [
    {label: 'Książka', value: 'Książka'},
    {label: 'Artykuł', value: 'Artykuł'},
    {label: 'Inne', value: 'Inne'}
  ];

  selectedType;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(this.selectedType)
  }

  saveBook() {
    this.http.post('/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
