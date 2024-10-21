import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {FilterType} from "../models/Filters.model";
import {InventoryType, RegionType} from "../models/Inventory.model";

type InventoryStore = {
    inventory: InventoryType[];
    regions: RegionType[];
    currency: string;
    filters: FilterType[];
    setInventory: (inventory: InventoryType[]) => void;
    setRegions: (regions: RegionType[]) => void;
    setCurrency: (currency: string) => void;
    setFilter: (filter: FilterType) => void;
};

const useInventoryStore = create<InventoryStore>()(
    devtools(
        (set) => ({
            inventory: [],
            regions: [],
            currency: "EUR",
            filters: [],
            setInventory: (inventory) => set({inventory}),
            setRegions: (regions) => set({regions}),
            setCurrency: (currency) => set({currency}),
            setFilter: (filter: FilterType) => set((state) => {
                const existingFilterIndex = state.filters.findIndex(f => f.type === filter.type && f.key === filter.key);
                if (existingFilterIndex !== -1) {
                    // Remove the existing filter
                    return { filters: state.filters.filter((_, index) => index !== existingFilterIndex) };
                } else {
                    // Add the new filter
                    return { filters: [...state.filters, filter] };
                }
            }),
        })
    )
);
export default useInventoryStore;