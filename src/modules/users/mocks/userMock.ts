import { uuid } from 'uuidv4';
import { UserType } from '../UserType';

export class UserMockUtils {
  public static ReturnUsers() {
    const users: UserType[] = [
      {
        email: 'teste23',
        description: 'sad',
        id: uuid(),
        name: 'davi teste',
        password: String(Math.random()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'teste24',
        description: 'sad',
        id: uuid(),
        name: 'davi teste',
        password: String(Math.random()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'teste27',
        description: 'sad',
        id: uuid(),
        name: 'davi teste',
        password: String(Math.random()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'teste28',
        description: 'sad',
        id: uuid(),
        name: 'davi teste',
        password: String(Math.random()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return users;
  }
}
