import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(
    private db: AngularFirestore,
  ) {
    db.collection('users').valueChanges()
    .subscribe(users => this.users = users);
  }

  ngOnInit() {
  }

}
