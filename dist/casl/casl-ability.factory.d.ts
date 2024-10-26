import { MongoAbility } from '@casl/ability';
import { User, Vendor, Booking, Review, BlogPost, ForumTopic, ForumPost, Service } from '@prisma/client';
import { Subjects } from '@casl/prisma';
type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Entities = User | Vendor | Booking | Review | BlogPost | ForumTopic | ForumPost | Service;
type AppAbility = MongoAbility<[Actions, Subjects<Entities>]>;
export declare class CaslAbilityFactory {
    createForUser(user: User): AppAbility;
}
export {};
