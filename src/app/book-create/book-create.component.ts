import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

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

  msgs: Message[];
  uploadedFiles: any[] = [];
  selectedType;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  // public BibtexScanUploaded(event) {
  //   console.log('PLIK WYSŁANY!');
  //   // this.showMessage('success', 'Przesyłanie skanu umowy', 'Przesyłanie skanu umowy zostało zakończone poprawnie.');
  // } 

  // public onBeforeSendBibtex(placeholder) {
  //   placeholder.e.xhr.open('POST', 'http://LOCALHOST:3000/book-load', true);
  //       //placeholder.e.xhr.open('POST', 'http://LOCALHOST:3000/contract_api/contract_scans', true);
  // }


  onUpload(event) { 
    console.log('Test!');
    console.log(event.files[0]);

    this.http.post('http://localhost:3000/book-load', event.files[0]).subscribe(res => {
      console.log('ELO');
      console.log(res);
    })
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
    // this.msgs = [];
    // this.msgs.push({severity: 'info', summary: 'Pliki wysłane', detail: ''});
    // this.loadBook(this.uploadedFiles[0]);
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

  loadBook(book) {
    this.http.post('/book-load', book)
      .subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
