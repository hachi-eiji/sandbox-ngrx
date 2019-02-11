import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../shared/users.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.usersFacade.users$;
  loading$ = this.usersFacade.loading$;

  constructor(private usersFacade: UsersFacade) {
  }

  ngOnInit() {
  }

  fetchUser() {
    this.usersFacade.fetchUser();
  }
}
