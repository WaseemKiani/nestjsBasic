import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService){}
  
  create(createUserDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data:createUserDto
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {email}
    })
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
