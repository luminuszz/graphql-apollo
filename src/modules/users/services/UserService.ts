import { inject, injectable } from 'tsyringe';
import { Service } from 'typedi';
import { createUserDTO } from './dtos/createUserDTO';
import { UserRepository } from './UserRepository';

@Service()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async createUsers(data: createUserDTO) {
    const createdUser = await this.userRepository.createUser(data);

    return createdUser;
  }

  public async getUsers() {
    const users = await this.userRepository.getUsers();

    return users;
  }
}
