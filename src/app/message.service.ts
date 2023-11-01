import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  messages: Message[] = [];

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response: Observable<any> = this.http.post("http://127.0.0.1:5000/chat", {prompt: message.content}, {headers: headers})
    
    response.subscribe(resp => this.messages.push({author: "Krishna", content: resp.response}))    
    
  }
}
