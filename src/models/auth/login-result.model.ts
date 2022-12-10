export interface LoginResultModel {
  _id: string;
  tokens: {
    accessToken: string
  }
  email: string;
}
