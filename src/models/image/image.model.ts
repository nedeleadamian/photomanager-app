import { UserModel } from '../user/user.model';
import { TagModel } from '../tag/tag.model';

export interface ImageModel {
  _id: string;
  fileName: string;
  path: string;
  mimeType: string;
  user: UserModel;
  tags: TagModel[];
}
