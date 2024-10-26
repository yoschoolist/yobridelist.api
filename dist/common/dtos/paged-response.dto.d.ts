export declare class PagedResponseDto<T> {
    results: T[];
    total: number;
    skip: number;
    take: number;
    end: boolean;
    constructor(results: T[], skip: number, take: number, total: number);
}
