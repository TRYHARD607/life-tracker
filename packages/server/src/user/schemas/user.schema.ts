import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  secondName: string;

  @Prop()
  email: string;

  // @Prop()
  // photo: string;

  // @Prop()
  // params: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
