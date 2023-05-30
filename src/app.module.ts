import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsController } from './cats/cats.controller'
import { CatsModule } from './cats/cats.module'
import { CatsService } from './cats/cats.service'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   debug: false,
    //   playground: false,
    // }),
    // ,
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
