import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {JwtModule} from "@nestjs/jwt";
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, UserModule, JwtModule.register({
    secret:"SECRET",
    signOptions: {expiresIn: '120s'}
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
