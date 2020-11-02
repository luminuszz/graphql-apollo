import { uuid } from 'uuidv4';
import { createUserDTO } from '../dtos/createUserDTO';
import { UserMockUtils } from '../mocks/userMock';
import { UserType } from '../models/UserType';

export class UserRepository {
  private users: UserType[] = [];

  constructor() {
    this.users = UserMockUtils.ReturnUsers();
  }

  public async createUser({
    email,
    name,
    password,
    description,
  }: createUserDTO): Promise<UserType> {
    const newUser = Object.assign<{}, UserType>(
      {},
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        description,
        email,
        id: uuid(),
        name,
        password,
      }
    );

    this.users.push(newUser);

    return newUser;
  }

  public async getUsers(): Promise<UserType[]> {
    return this.users;
  }
}
