import { Module } from '@nestjs/common';
import { KnightsModule } from './knights/knights.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [KnightsModule , MongooseModule.forRoot('mongodb://localhost/knights')],
  controllers: [],
  providers: [],
})
export class AppModule { }
