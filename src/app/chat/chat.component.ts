import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {
  constructor(public messageService: MessageService) {}

  @ViewChild('chats') private chats?: ElementRef;

  ngAfterViewChecked(): void {
      this.scrollToBottom();
  }

  ngAfterViewInit(): void {
      this.scrollToBottom();
  }


  scrollToBottom() {
    this.chats!.nativeElement.scrollTop = this.chats!.nativeElement.scrollHeight;
  }
}
