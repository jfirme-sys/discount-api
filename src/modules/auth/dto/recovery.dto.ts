import { IsEmail } from 'class-validator';

export class RecoveryDto {
  @IsEmail()
  email: string;
}
