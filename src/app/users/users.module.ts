import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersFacade } from './shared/users.facade';
import { UsersService } from './shared/users.service';
import { UserListComponent } from './user-list/user-list.component';
import { UsersEffectsModule } from './users-effects.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersStoreModule } from './users-store.module';

@NgModule({
  providers: [UsersService, UsersFacade],
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersStoreModule,
    UsersEffectsModule
  ]
})
export class UsersModule { }
