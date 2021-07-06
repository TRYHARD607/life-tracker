import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt-nodejs';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  private passwordMatches(password: string, userPass: string) {
    return bcrypt.compareSync(password, userPass);
  }

  async validateUser(email: string, password: string): Promise<any> {
    if (!email) {
      throw new Error('No Email');
    }
    if (!password) {
      throw new Error('No Password');
    }
    const user = await this.usersService.getOneByEmail(email);
    if (!user) {
      throw new Error('No User');
    }
    const isPasswordOk = await this.passwordMatches(password, user.password);

    if (!isPasswordOk) {
      throw new Error('Password Incorrect');
    }

    return user;
  }
}
