import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/users.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('users', reducer)
  ]
})
export class UsersStoreModule {
}
