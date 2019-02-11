import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/users.reducer';
import { UserListComponent } from './user-list/user-list.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducer)
  ]
})
export class UsersModule { }
