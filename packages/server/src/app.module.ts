import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.hgo2j.mongodb.net/fitness-tracker?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
