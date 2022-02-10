import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {Data} from "../../../../core/models/data";
import {DataService} from "../../../../core/services/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  @Input() firstname!: string
  @Input() lastname!: string
  @Input() email!: string
  @Input() recentData: Data[] = []
  @Input() favouriteData: Data[] = []
  @Input() oldData: Data[] = []

  returnUrl: string;
  subscribe: any

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private dataService: DataService) {
    this.returnUrl = "/"
  }

  ngOnInit(): void {
    this.authService.user.subscribe(response => {
      if (response){
        this.firstname = response.firstname
        this.lastname = response.lastname
        this.email = response.email
        console.log(this.authService.userValue)
        console.log(response.lastname)
        console.log(response.email)
      }
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
    this.subscribe = this.dataService.list().subscribe(response => {
      this.recentData = response.recentData.map(item => new Data(item.code, item.metropolis, item.dateHour, item.consumption))
      this.favouriteData = response.preferences.map(item => new Data(item.code, item.metropolis, item.dateHour, item.consumption))
      this.oldData = response.otherData.map(item => new Data(item.code, item.metropolis, item.dateHour, item.consumption))
    })
  }
}
