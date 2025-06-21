import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(createUserDto: CreateUserDto): CreateUserDto {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }
}
