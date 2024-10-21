export type TypesOfFilter = "article" | "region" | "version" | "legal_entity" | "currency";

export type FilterType = {
    key: string;
    type: TypesOfFilter;
}