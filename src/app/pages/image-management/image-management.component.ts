import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ImageModel } from '../../../models/image/image.model';
import { take } from 'rxjs';
import { API_URL } from '../../constants';
import { TagModel } from '../../../models/tag/tag.model';
import { TagService } from '../tag.service';

@UntilDestroy()
@Component({
  selector: 'app-image-management',
  templateUrl: './image-management.component.html',
  styleUrls: ['./image-management.component.scss'],
})
export class ImageManagementComponent implements OnInit {
  public images: ImageModel[];
  public tags: TagModel[];

  constructor(private readonly imageService: ImageService, private readonly tagService: TagService) {}

  ngOnInit() {
    this.getImages();
    this.getTags();
  }

  public addTag(imageId: string, tagId: string) {
    this.imageService
      .addTags(imageId, [tagId])
      .pipe(take(1))
      .subscribe((res) => {
        this.getImages();
      });
  }

  public removeTag(imageId: string, tagId: string) {
    this.imageService
      .removeTags(imageId, [tagId])
      .pipe(take(1))
      .subscribe((res) => {
        this.getImages();
      });
  }

  public deleteImage(imageId: string) {
    this.imageService
      .deleteImage(imageId)
      .pipe(take(1))
      .subscribe((res) => {
        this.getImages();
      });
  }

  public imagePath(path: string) {
    return `${API_URL}/storage/${path}`;
  }

  public getImages() {
    this.imageService
      .getImages(1, 50)
      .pipe(take(1))
      .subscribe((res) => {
        this.images = res.data;
      });
  }

  public getTags() {
    this.tagService
      .getTags(1, 50)
      .pipe(take(1))
      .subscribe((res) => {
        this.tags = res.data;
      });
  }
  public upload(files: FileList) {
    this.imageService
      .uploadImage(files[0])
      .pipe(take(1))
      .subscribe((res) => {
        this.getImages();
      });
  }
}
