export interface TypeResponse {
  id: string;
  title: string;
  describe: string;
  url: string;
  createdAt: string;
  comments: [
    {
      text: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
}
export interface TypeComments {
  text: string;
  createdAt: string;
  updatedAt: string;
}
