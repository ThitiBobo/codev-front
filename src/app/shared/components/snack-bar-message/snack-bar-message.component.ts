import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snack-bar-message',
  templateUrl: './snack-bar-message.component.html',
  styleUrls: ['./snack-bar-message.component.css']
})
export class SnackBarMessageComponent implements OnInit {

  @Input() message!: string
  @Input() type?: 'error' | 'success'

  ngOnInit(): void {
  }

}
