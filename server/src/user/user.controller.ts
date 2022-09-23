import { Controller, Get, Param, UseGuards, Patch, Body } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UserDetails } from './interface/user-details.interface';
import { UserService } from './user.service';
import { UserDocument } from './schema/user.schema';

// Om Jag vill, utveckla denna så att en admin kan hantera användare

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get()
  getHello(): string {
    return 'Hello';
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateUsername(
    @Param('id') id: string,
    @Body('username') newUsername: string,
  ): Promise<UserDocument> {
    return this.userService.updateUsername(id, newUsername);
  }

  @UseGuards(JwtGuard)
  @Patch('/password/:id')
  updatePassword(
    @Param('id') id: string,
    @Body('password') password: string,
  ): Promise<UserDetails | null> {
    return this.userService.updatePassword(id, password);
  }
}
