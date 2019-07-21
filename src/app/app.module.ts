import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from '../user/user.module'
import { AppController } from './app.controller'
import { ConfigModule } from '../config/config.module'

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
