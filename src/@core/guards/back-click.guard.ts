import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class BackClickGuard implements CanDeactivate<CanComponentDeactivate> {
  public canDeactivate(component: CanComponentDeactivate): boolean | Promise<boolean> | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
