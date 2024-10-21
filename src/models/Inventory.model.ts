export type RegionDataType = RegionType & {
    units: number;
    price: number | string;
    gross_revenue: number;
}
export type RegionType ={
    key: string;
    label: string;
}

export type InventoryType = {
    label: string;
    id: string;
    version: string;
    regions: RegionDataType[];
    inventory?: InventoryType[];
}

export type MetadataType = {
    currency: string;
    date: string;
    versions: { key: string; label: string }[];
    regions: { key: string; label: string }[];
    currencies: { key: string; label: string }[];
}

export type InventoryDataType = {
    metadata: MetadataType;
    inventory: InventoryType[];
}

export const UNITS_MAP = {
    units: "Units",
    price: "Price",
    gross_revenue: "Gross Revenue"
}
export type UnitsMapKey = keyof typeof UNITS_MAP;