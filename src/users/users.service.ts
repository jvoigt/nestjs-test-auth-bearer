import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    findOneByToken(token: string): boolean {
        // DUMMY implementation
        if (token === "12324") {
            return true;
        }
        return false
    }
}
