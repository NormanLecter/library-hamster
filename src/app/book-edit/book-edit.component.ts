import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book: any = {};
  loadingData : boolean =  true;

  types = [
    {label: 'Książka', value: 'Książka'},
    {label: 'Artykuł', value: 'Artykuł'},
    {label: 'Inne', value: 'Inne'}
  ];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
      this.loadingData = false;
    });
  }

  updateBook(id) {
    this.book.updated_date = Date.now();
    this.http.put('/book/'+id, this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
