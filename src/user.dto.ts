import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  @IsNotEmpty()
  screenName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  bio?: string;
  @IsPhoneNumber()
  phoneNo?: string;
  avatarUrl?: string;
}
export class UpdateUserDto {
  @IsUUID()
  id;
  @IsString()
  name: string;
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  bio?: string;
  @IsPhoneNumber()
  phoneNo?: string;
  avatarUrl?: string;
}
