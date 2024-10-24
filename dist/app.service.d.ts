import { SupabaseService } from './supabase/supabase.service';
export declare class AppService {
    private supabaseService;
    constructor(supabaseService: SupabaseService);
    getHello(): string;
}
