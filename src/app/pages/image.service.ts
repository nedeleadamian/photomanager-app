import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { ImageModel } from '../../models/image/image.model';
import { ImageResultModel } from '../../models/image/image-result.model';

@Injectable()
export class ImageService {
  constructor(private readonly http: HttpClient) {}

  public getImages(page: number, limit: number): Observable<ImageResultModel> {
    return this.http.get<ImageResultModel>(`${API_URL}/image?page=${page}&limit=${limit}`);
  }

  public uploadImage(image: File): Observable<ImageModel> {
    console.log(image);
    const form = new FormData();
    form.set('image', image);
    return this.http.post<ImageModel>(`${API_URL}/image`, form);
  }

  public addTags(imageId: string, tagsIds: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_URL}/image/${imageId}/add-tags`, { tagsIds });
  }

  public removeTags(imageId: string, tagsIds: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_URL}/image/${imageId}/remove-tags`, { tagsIds });
  }

  public deleteImage(imageId: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${API_URL}/image/${imageId}`);
  }
}
