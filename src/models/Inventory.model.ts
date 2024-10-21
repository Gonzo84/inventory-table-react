export type RegionType ={
    key: string;
    label: string;
    units: number;
    price: number | string;
    gross_revenue: number;
}

export type InventoryType = {
    label: string;
    id: string;
    version: string;
    regions: RegionType[];
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