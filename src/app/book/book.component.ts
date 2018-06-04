import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;
  uploadedFiles: any[] = [];
  msgs: Message[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }

  onUpload(event) { 
    console.log('Test!');
    console.log(event.files[0]);
    // TODO: Multiple files
    this.http.post('http://localhost:3000/book-load', event.files[0]).subscribe(res => {
      for(let file of event.files) {
        this.uploadedFiles.push(file);
      }
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Plik BIBTEX przesłany', detail: ''});
      console.log(res);

      //TODO: pozycje do obiektow o polach jak dodawanie i w petli postowanie this.http.post('/book', this.book)
      //TODO: odswiezenie tabeli
      this.msgs.push({severity: 'info', summary: 'Pozycje dodane do  listy', detail: ''});
    })
  }

  downloadBibtexFile(){

  }


}
