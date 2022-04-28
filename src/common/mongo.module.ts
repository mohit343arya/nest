import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb+srv://mohit:mohit123@cluster0.x8bui.mongodb.net/database1',
      }),
    }),
  ],
})
export class MongoModule {}
