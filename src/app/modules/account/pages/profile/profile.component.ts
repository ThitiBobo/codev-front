import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {MetropolisService} from "../../../../core/services/metropolis.service";
import {ProfileService} from "../../../../core/services/profile.service";
import {Metropolis} from "../../../../core/models/metropolis";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  @Input() userId!: number
  @Input() firstname!: string
  @Input() lastname!: string
  @Input() email!: string
  @Input() favouriteData: Metropolis[] = []
  @Input() otherData: Metropolis[] = []

  returnUrl: string;
  subscribe: any

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private metropolisService: MetropolisService,
              private profileService: ProfileService) {
    this.returnUrl = "/"
  }

  ngOnInit(): void {
    this.authService.user.subscribe(response => {
      if (response){
        this.firstname = response.firstname
        this.lastname = response.lastname
        this.email = response.email
        this.userId = Number(response.profileId)
      }
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
    this.updateFavorites()
  }

  updateFavorites() {
    this.metropolisService.list().subscribe(response1 => {
      this.profileService.list().subscribe(response2 => {
        this.favouriteData = response2
        let data: Metropolis[] = []
        this.otherData = response1
        console.log(response1)
        this.otherData.forEach(e => {
          let bool = true
          this.favouriteData.forEach(f => {
            if (f.id === e.id) {
              bool = false
            }
          })
          if (bool) {
            data.push(e)
          }
        })
        this.otherData = data
      })
    })
  }
}
