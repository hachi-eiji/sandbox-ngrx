import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './shared/users.effects';

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersEffectsModule {
}
