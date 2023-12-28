import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://nest:nest@localhost:27017/'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: MONGODB_URI,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
