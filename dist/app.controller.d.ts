import { AppService } from "./app.service";
import { SearchResponseDto } from "./common/dtos/search-response.dto";
import { Section } from "./section/section.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getSections(): Promise<Section<any>[]>;
    search(keyword: string, take: number, allowCount: boolean): Promise<SearchResponseDto>;
}
