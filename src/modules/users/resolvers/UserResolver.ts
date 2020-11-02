import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CrateUserSchema } from '../dtos/CrateUserSchema';
import { UserService } from '../services/UserService';
import { UserType } from '../models/UserType';

@Service()
@Resolver(UserType)
export default class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => [UserType])
  public async getUsers(): Promise<UserType[]> {
    const users = await this.userService.getUsers();

    return users;
  }

  @Mutation(returns => UserType)
  public async createUser(
    @Arg('newRecipeData') data: CrateUserSchema,
    @Ctx('user') user: UserType
  ): Promise<UserType> {
    const createdUser = await this.userService.createUsers(data);

    return createdUser;
  }
}
