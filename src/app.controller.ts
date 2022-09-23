import { Controller, Get, Post, Request, UseGuards, Res } from '@nestjs/common';
import { Response } from "express"
import { AppService } from './app.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  
  @Post('/login')
  @UseGuards(AuthGuard("local"))
  getHello(@Request() req, @Res({ passthrough: true }) response: Response): string {
    response.cookie('token', req.user.access_token);
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/userToken')
  verifyUserToken(@Request() req): string {
    return req.user;
  }


}
