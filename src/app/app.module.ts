import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { LoggerMiddleware } from '../../logger.middleware'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
  }
}
