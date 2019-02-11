import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../shared/users.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  state$ = this.usersFacade.state$;

  updateId: number;
  updateName: string;

  constructor(private usersFacade: UsersFacade) {
  }

  ngOnInit() {
  }

  fetchUser() {
    this.usersFacade.fetchUser();
  }

  updateUserName() {
    this.usersFacade.updateUserName(+this.updateId, this.updateName);
  }
}
