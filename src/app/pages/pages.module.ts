import { NgModule } from '@angular/core';
import { pagesComponents, PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ImageService } from './image.service';
import { TagService } from './tag.service';

@NgModule({
  declarations: [...pagesComponents],
  imports: [SharedModule, PagesRoutingModule],
  providers: [ImageService, TagService],
})
export class PagesModule {}
