import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateCompanyDto } from '../company/dto/create-company.dto';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserRequest } from './models/UserRequest';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: UserRequest) {
    return this.authService.login(req.user);
  }

  @IsPublic()
  @Post('register')
  @HttpCode(HttpStatus.OK)
  register(@Body() createCompanyDto: CreateCompanyDto) {
    return this.authService.register(createCompanyDto);
  }
}