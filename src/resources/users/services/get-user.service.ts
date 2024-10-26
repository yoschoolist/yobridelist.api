import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from "@nestjs/common";
import { GetUserService } from "../interfaces/get-user-service.interface";
import { PrismaService } from "src/database/prisma.service";
import { UserNotFoundException } from "../exceptions/user-not-found.exception";
import { UserDetailParamDto } from "../dtos/query-params/user-detail-param.dto";
import { UserDetailResponseDto } from "../dtos/get/user-detail-response.dto";
import { Prisma, User } from "@prisma/client";
import { PrismaError } from "src/database/enums/prisma-error.enum";
import { PagedResponseDto } from "src/common/dtos/paged-response.dto";
import { AccountParamDto } from "../dtos/query-params/account-param.dto";

@Injectable()
export class GetUserServiceImpl implements GetUserService {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id: parseInt(id) },
        });

        if (!user) throw new UserNotFoundException();

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) throw new UserNotFoundException();

        return user;
    }

    
    /*async findByIdWithDetails(
        id: string,
        detailParams: UserDetailParamDto,
    ): Promise<UserDetailResponseDto> {
        let includeQuery: Prisma.UserInclude = undefined;

        if (detailParams) {
            const {
                followerLimit,
                followingUserLimit,
                followingArtistLimit,
                playlistLimit,
            } = detailParams;

            if (followerLimit) {
                includeQuery = {
                    followers: {
                        take: followerLimit,
                    },
                };
            }
}

            if (followingArtistLimit) {
                includeQuery = {
                    ...includeQuery,
                    followingArtists: {
                        include: { artist: true },
                        orderBy: { followAt: "desc" },
                        take: followingArtistLimit,
                    },
                };
            }


            includeQuery = {
                ...includeQuery,
                _count: {
                    select: {
                        followingArtists: true,
                    },
                },
            };
        }

        try {
            const artist = await this.prisma.user.findUniqueOrThrow({
                where: { id },
                include: includeQuery,
            });

            return {
                ...artist,
                followingUserCount: artist._count.followings,
                followingArtistCount: artist._count.followingArtists,
                playlistCount: artist._count.playlists,
            };
        } catch (error) {
            if (error?.code === PrismaError.ENTITY_NOT_FOUND) {
                throw new UserNotFoundException();
            }
        }
    }*/

    async get(userParams: AccountParamDto): Promise<PagedResponseDto<User>> {
        const {
            skip,
            take,
            allowCount,
            sort: order,
            keyword: oldKeyword,
            ...rest
        } = userParams;
        let keyword = oldKeyword?.trim();
        if (keyword) keyword = keyword + '*';

        const filter: Prisma.UserWhereInput = {
            AND: {
                ...rest,
                name: keyword ? { contains: keyword } : undefined,
            },
        };


        const userFindInputs: Prisma.UserFindManyArgs = {
            where: {
                ...filter,
                ...(keyword && {
                    OR: [
                        { name: { contains: keyword, mode: 'insensitive' } }
                    ]
                })
            },
            orderBy: order ? [
                this.prisma.toPrismaOrderByObject(order),
                { name: 'asc' }
            ] : [
                { title: 'desc' },
                { name: 'asc' }
            ],
            skip,
            take,
        };

        try {
            if (allowCount) {
                const [users, count] = await this.prisma.$transaction([
                    this.prisma.user.findMany(userFindInputs),
                    this.prisma.user.count({ where: filter }),
                ]);

                return new PagedResponseDto<User>(users, skip, take, count);
            } else {
                const users = await this.prisma.user.findMany(userFindInputs);

                return new PagedResponseDto<User>(users, skip, take, 0);
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequestException("Invalid query params.");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
