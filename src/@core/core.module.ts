import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const MODULES: never[] = [];
const SERVICES: never[] = [];
const GUARDS = [AuthGuard];

@NgModule({
  imports: [...MODULES],
  providers: [...SERVICES, ...GUARDS, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  exports: [...MODULES],
})
export class CoreModule {}
