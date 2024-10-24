import { Injectable } from '@nestjs/common';
import { AbilityBuilder, createMongoAbility, ExtractSubjectType, InferSubjects, MongoAbility, SubjectRawRule } from '@casl/ability';
import { User, UserRole, Vendor, Booking, Review, BlogPost, ForumTopic, ForumPost, Service } from '@prisma/client';
import { PrismaQuery, Subjects } from '@casl/prisma';

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Entities = User | Vendor | Booking | Review | BlogPost | ForumTopic | ForumPost | Service;
type AppAbility = MongoAbility<[Actions, Subjects<Entities>]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    if (user.role === UserRole.superadmin) {
      can('manage', 'all');
    } else if (user.role === UserRole.admin) {
      can('manage', 'all');
      cannot('delete', User, { role: UserRole.superadmin });
      cannot('update', User, { role: UserRole.superadmin });
    } else if (user.role === UserRole.manager) {
      can('read', 'all');
      can('create', [Vendor, Service, BlogPost]);
      can('update', [Vendor, Service], { 'vendor.userId': user.id });
      can('update', BlogPost, { authorId: user.id });
      can('delete', BlogPost, { authorId: user.id });
      can('manage', [Booking, Review]);
    } else {
      // Member role
      can('read', [Vendor, Service, BlogPost, ForumTopic]);
      can('create', [Booking, Review, ForumTopic, ForumPost]);
      can('update', Booking, { userId: user.id });
      can('update', Review, { userId: user.id });
      can('update', ForumPost, { userId: user.id });
      can('delete', ForumPost, { userId: user.id });
      can('read', User, { id: user.id });
      can('update', User, { id: user.id });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Entities>,
    });
  }
}