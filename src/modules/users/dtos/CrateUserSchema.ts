import { Field, InputType } from 'type-graphql';
import { UserType } from '../UserType';

@InputType({ description: 'new user data' })
export class CrateUserSchema implements Partial<UserType> {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  description?: string;
}
