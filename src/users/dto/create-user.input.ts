import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Field(() => String, { description: 'country code of the user' })
  countryCode: string;
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'identity number of the user' })
  identityNumber: string;
  @Field(() => String, { description: 'address number of the user' })
  address: string;
  @Field(() => String, { description: 'country of the user' })
  country: string;
  @Field(() => String, { description: 'line 2 of the user' })
  line2: string;
  @Field(() => String, { description: 'city of the user' })
  city: string;
  @Field(() => String, { description: 'province of the user' })
  province: string;
  @Field(() => String, { description: 'postal code of the user' })
  postalCode: string;
  @Field(() => String, { description: 'linkedin of the user' })
  linkedin: string;
  @Field(() => String, { description: 'facebook of the user' })
  facebook: string;
  @Field(() => String, { description: 'twitter of the user' })
  twitter: string;
}
