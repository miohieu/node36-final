import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        try {
            const newData = await this.prisma.user.create({
                data,
            });
            return newData

        } catch (error) {
            console.log(error);
        }
    }
    async users () {
        return await this.prisma.user.findMany()
    }
}
