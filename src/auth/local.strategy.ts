
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService, private jwtService: JwtService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
console.log("first")
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException();
    }
     const access_token= this.jwtService.sign(user);
     return {
        access_token,
        user
     }
  }
}