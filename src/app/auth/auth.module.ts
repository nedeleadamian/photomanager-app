import { NgModule } from '@angular/core';
import { authComponents, AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [...authComponents],
  imports: [SharedModule, AuthRoutingModule],
  providers: [AuthService]
})
export class AuthModule {}
