import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { UsersModule } from './resources/users/users.module';
import { BlogsModule } from './resources/blogs/blogs.module';
/*import { VendorsModule } from './resources/vendors/vendors.module';
import { BookingsModule } from './resources/bookings/bookings.module';
import { ForumModule } from './resources/forum/forum.module';
import { MessagesModule } from './resources/messages/messages.module';
import { ReviewsModule } from './resources/reviews/reviews.module';
import { LocationsModule } from './resources/locations/locations.module';
import { ServicesModule } from './resources/services/services.module';*/
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CaslModule,
    UsersModule,
    BlogsModule,
    /*VendorsModule,
    BookingsModule,
    ForumModule,
    MessagesModule,
    ReviewsModule,
    LocationsModule,
    ServicesModule,*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}