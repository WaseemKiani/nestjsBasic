
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
      console.log("first");
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}