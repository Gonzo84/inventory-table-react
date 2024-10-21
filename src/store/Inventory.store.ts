import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {FilterType} from "../models/Filters.model";
import {InventoryType, RegionType} from "../models/Inventory.model";

type InventoryStore = {
    inventory: InventoryType[];
    regions: RegionType[];
    currency: string;
    filteredRegions: FilterType[];
    filters: FilterType[];
    setInventory: (inventory: InventoryType[]) => void;
    setRegions: (regions: RegionType[]) => void;
    setCurrency: (currency: string) => void;
    setFilter: (filter: FilterType) => void;
    resetFilter: (filter: FilterType) => void;
};

const useInventoryStore = create<InventoryStore>()(
    devtools(
        (set) => ({
            inventory: [],
            regions: [],
            currency: "EUR",
            filteredRegions: [],
            filters: [],
            setInventory: (inventory) => set({inventory}),
            setRegions: (regions) => set({regions}),
            setCurrency: (currency) => set({currency}),
            setFilter: (filter: FilterType) => set((state) => {
                if (filter.type === "region") {
                    const existingFilterIndex = state.filteredRegions.findIndex(f => f.type === filter.type && f.key === filter.key);
                    if (existingFilterIndex !== -1) {
                        // Remove the existing filter
                        return {filteredRegions: state.filteredRegions.filter((_, index) => index !== existingFilterIndex)};
                    } else {
                        // Add the new filter
                        return {filteredRegions: [...state.filteredRegions, filter]};
                    }
                } else {
                    const existingFilterIndex = state.filters.findIndex(f => f.type === filter.type);
                    if (existingFilterIndex !== -1) {
                        // Replace the existing filter
                        const newFilters = [...state.filters];
                        newFilters[existingFilterIndex] = filter;
                        return {filters: newFilters};
                    } else {
                        // Add the new filter
                        return {filters: [...state.filters, filter]};
                    }
                }
            }),
            resetFilter: (filter: FilterType) => set((state) => {
                return {filters: state.filters.filter(f => f.type !== filter.type)};
            }),
        })
    )
);
export default useInventoryStore;