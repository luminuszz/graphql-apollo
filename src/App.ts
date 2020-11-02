import 'reflect-metadata';
import { Container } from 'typedi';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import UserResolver from './modules/users/UserResolver';
import { GraphQLSchema } from 'graphql';
import { container, DependencyContainer } from 'tsyringe';

class App {
  private server: ApolloServer;

  private async createSchema(): Promise<GraphQLSchema> {
    const schema = await buildSchema({
      resolvers: [UserResolver],
      container: Container,
    });

    return schema;
  }

  public async bootstrap() {
    const schema = await this.createSchema();

    this.server = new ApolloServer({ schema });

    const { port, url } = await this.server.listen();

    console.log(`Server running on port ${port}, in url: ${url}`);
  }
}

export default new App();
