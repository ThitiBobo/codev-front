import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfileService} from "../../../core/services/profile.service";
import {Metropolis} from "../../../core/models/metropolis";

@Component({
  selector: 'app-metropolis-favourite-card',
  templateUrl: './metropolis-favourite-card.component.html',
  styleUrls: ['./metropolis-favourite-card.component.css']
})
export class MetropolisFavouriteCardComponent implements OnInit {
  @Input() data!: Metropolis
  @Input() userId!: number
  @Input() favorite!: boolean


  @Output() event = new EventEmitter<any>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.favorite) {
      this.profileService.delete(this.data.id)
      this.event.emit()
    } else {
      this.profileService.add(this.userId, this.data.id)
      this.event.emit()
    }
  }
}
