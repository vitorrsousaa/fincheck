import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { SignUpDTO } from './dto/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @IsPublic()
  signin(@Body() authenticateDto: AuthenticateDto) {
    return this.authService.authenticate(authenticateDto);
  }

  @Post('signup')
  @IsPublic()
  signup(@Body() signUpDTO: SignUpDTO) {
    return this.authService.signup(signUpDTO);
  }
}
