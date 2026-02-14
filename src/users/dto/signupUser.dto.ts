import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class SignupUserDto {
  @IsNotEmpty()
  @IsString()
  username: string; // type of typescript

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEnum(['user', 'admin'], {
    message: 'role must be one of the following values: user, admin',
  })
  role: string;
}
