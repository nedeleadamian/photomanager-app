import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropFileUploadDirective } from './directives/drag-drop-file-upload.directive';

const MODULES = [CommonModule, ReactiveFormsModule, HttpClientModule];
const DIRECTIVES = [DragDropFileUploadDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES],
})
export class SharedModule {}
