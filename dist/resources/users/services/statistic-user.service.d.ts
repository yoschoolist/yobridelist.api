import { StatisticUserService } from "../interfaces/statistic-user-service.interface";
import { PrismaService } from "src/database/prisma.service";
export declare class StatisticUserServiceImpl implements StatisticUserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    countNewUsersToday(): Promise<number>;
}
