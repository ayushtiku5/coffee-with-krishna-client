import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  message: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage(message: string) {
    this.messageService.addMessage({author: "You", content: message})
    this.message = '';
  }

}
