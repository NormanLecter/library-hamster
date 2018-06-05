import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { saveAs } from 'file-saver/FileSaver';

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
  addingObjects : boolean = false;
  loadingData : boolean =  true;
  cols = [];
  positionsToDownload : any = [];
  passwordValidate = false;
  password : string = '';
  checkedAll = false;
  statusForId =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cols = [
      { field: 'publication_type', header: 'Typ publikacji' },
      { field: 'author', header: 'Autor' },
      { field: 'title', header: 'Tytuł' },
      { field: 'link', header: 'Link' },
      { field: 'actions', header: 'Akcje' }
  ];
    this.http.get('/book').subscribe(data => {
      this.books = data;
      for(let book of this.books){
        this.statusForId.push({'id' : book._id,  'status' : false});
      }
      this.loadingData = false;
    });
  }

  checkPasswordButton(){
    if(this.password == 'adammalysz'){
      this.passwordValidate = true;
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: 'Hasło poprawne - uzyskałeś dostęp do Bibliograficznego Chomika.', detail: ''});
    }
    else{
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Błędne hasło, spróbuj ponownie.', detail: ''});
    }
  }

  checkPassword(event){
    if(event.keyCode == 13){
      if(this.password == 'adammalysz'){
        this.passwordValidate = true;
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Hasło poprawne - uzyskałeś dostęp do Bibliograficznego Chomika.', detail: ''});
      }
      else{
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Błędne hasło, spróbuj ponownie.', detail: ''});
      }
    }
  }

  onUpload(event) { 
    // TODO: Wiele plików !
    this.http.post('http://localhost:3000/book-load', event.files[0]).subscribe(res => {
      for(let file of event.files) {
        this.uploadedFiles.push(file);
      }
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Plik BIBTEX przesłany', detail: ''});
      let positions = JSON.stringify(res);
      let positionsJson = JSON.parse(positions);
      let length = positionsJson.length;
      let it = 0;
      for(let pj of positionsJson){
        it++;
        
        let book = {publication_type : pj.entryType, title : pj.entryTags.title, author : pj.entryTags.author,
          short_desc : pj.entryTags.note, published_year : pj.entryTags.year, publisher : pj.entryTags.journal}
        
        this.http.post('/book', book).subscribe(res => {
          this.addingObjects = true;
          this.loadingData =  true;
        });

        if(it == positionsJson.length){
          this.books = [];
          this.http.get('/book').subscribe(data => {
            this.books = data;
            this.msgs.push({severity: 'info', summary: 'Pozycje dodane do listy', detail: ''});
            this.addingObjects = false;
            this.loadingData = false;
          });
        }
      }
    })
  }

  downloadBibtexFile(){
    let listToBlob = [];
    let index = 1;
    for(let position of this.positionsToDownload){
      listToBlob.push('@' + position.publication_type + '{\nauthor={' + position.author + 
      '},\n'  + 'title={' + position.title + '},\n}\n\n');
      index++;
    }

    const blob = new Blob(listToBlob, { type: 'application/bib' });
    saveAs(blob, "bibliography_hamster_file.bib");
  }

  getStatus(id){
    for(let book of this.statusForId){
      if(book.id = id) return book.status;
    }
  }

  updateTableWithIds(book, id, event){
    this.checkedAll = false;

    for(let b of this.statusForId){
       if(b.id == id) b.status = event.checked;
    }

    let status = false;

    for(let position of this.positionsToDownload){

      if((position.id == id) && !event.checked){
        let index = this.positionsToDownload.indexOf(position);
        this.positionsToDownload.splice(index,1);
      }
    }

    if(!status && event.checked){
      this.positionsToDownload.push({id : book._id, publication_type : book.publication_type, 
        title : book.title, author : book.author})
    }
  }

  selectAll(){
    this.positionsToDownload = [];
    for(let book of this.books){
      this.positionsToDownload.push({id : book._id, publication_type : book.publication_type, 
        title : book.title, author : book.author})
    }
    for(let book of this.statusForId){
      book.status = true;
    }
    this.checkedAll = true;
    console.log(this.statusForId);
  }

  unselectAll(){
    this.positionsToDownload = [];
    for(let book of this.statusForId){
      book.status = false;
    }
    this.checkedAll = false;
  }


}
