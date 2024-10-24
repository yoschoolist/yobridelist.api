import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Injectable()
export class AppService {
  constructor(private supabaseService: SupabaseService) {}

  getHello(): string {
    return 'Hello NestJS with Supabase!';
  }
}