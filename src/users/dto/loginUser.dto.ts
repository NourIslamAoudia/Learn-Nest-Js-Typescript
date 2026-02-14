import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  username: string; // type of typescript

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
