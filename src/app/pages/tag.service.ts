import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { TagResultModel } from '../../models/tag/tag-result.model';

@Injectable()
export class TagService {
  constructor(private readonly http: HttpClient) {}

  public getTags(page: number, limit: number): Observable<TagResultModel> {
    return this.http.get<TagResultModel>(`${API_URL}/tag?page=${page}&limit=${limit}`);
  }
}
