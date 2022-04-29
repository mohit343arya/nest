import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: 'User firstName ' })
  firstName: string;
  @Prop()
  @Field(() => String, { description: 'User lastName ' })
  lastName: string;
  @Prop()
  @Field(() => String, { description: 'User email ' })
  email: string;
  @Prop()
  @Field(() => String, { description: 'country code of the user' })
  countryCode: string;
  @Prop()
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Prop()
  @Field(() => String, { description: 'identity number of the user' })
  identityNumber: string;
  @Prop()
  @Field(() => String, { description: 'address number of the user' })
  address: string;
  @Prop()
  @Field(() => String, { description: 'country of the user' })
  country: string;
  @Prop()
  @Field(() => String, { description: 'line 2 of the user' })
  line2: string;
  @Prop()
  @Field(() => String, { description: 'city of the user' })
  city: string;
  @Prop()
  @Field(() => String, { description: 'province of the user' })
  province: string;
  @Prop()
  @Field(() => String, { description: 'postal code of the user' })
  postalCode: string;
  @Prop()
  @Field(() => String, { description: 'linkedin of the user' })
  linkedin: string;
  @Prop()
  @Field(() => String, { description: 'facebook of the user' })
  facebook: string;
  @Prop()
  @Field(() => String, { description: 'twitter of the user' })
  twitter: string;
  @Prop()
  @Field()
  createdAt: Date;
  @Prop()
  @Field()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
