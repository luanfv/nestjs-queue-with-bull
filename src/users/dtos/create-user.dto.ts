export type CreateUserInputDto = {
  email: string;
  name: string;
  password: string;
};

export type CreateUserOutputDto = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
