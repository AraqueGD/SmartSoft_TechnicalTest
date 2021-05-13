import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/models/profile.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private api: ApiService, private toast: AlertsService, private router: Router) { }

  editProfile = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl(""),
    birthday: new FormControl(""),
    photo: new FormControl(""),
    description: new FormControl(""),
  })

  profileData:IProfile;

  ngOnInit(): void {
    let id = localStorage.getItem("id");
    this.api.getProfile(id).subscribe(data => {
      this.profileData = data;
      this.editProfile.setValue({
        "firstName": this.profileData.firstName,
        "lastName": this.profileData.lastName,
        "email": this.profileData.email,
        "gender": this.profileData.profile.gender,
        "birthday": this.profileData.profile.birthday,
        "photo": this.profileData.profile.photo,
        "description": this.profileData.profile.description
      })
    },
    err => console.log(err)
    )
  }

  editFormUser(form:IProfile) {
    this.api.putProfile(form).subscribe(data => {
      this.toast.showSuccess("Profile Update!", "Succes!")
    },
    err => console.log(err)
    )
  }

  onDeleteUser() {
    this.api.deleteUser(this.profileData.profile.id).subscribe(data => {
      this.toast.showSuccess("User Deleted", "Success");
      localStorage.removeItem("auth-token");
      localStorage.removeItem("id");
      this.router.navigate(["login"]);
    })
  }

}
