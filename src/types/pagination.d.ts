export interface PaginationResDto<TData> {
    total: number;

    limit: number;

    pages: number;

    page: number;

    results: TData[];
}
