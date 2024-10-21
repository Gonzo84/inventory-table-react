export type TypesOfFilter = "article" | "region" | "version" | "legal_entity";

export type FilterType = {
    key: string;
    value?: string;
    type: TypesOfFilter;
}