import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {FilterType} from "../models/Filters.model";
import {InventoryType} from "../models/Inventory.model";

type InventoryStore = {
    inventory: InventoryType[];
    currency: string;
    availableFilters: FilterType[];
    setInventory: (inventory: InventoryType[]) => void;
    setCurrency: (currency: string) => void;
};

const useInventoryStore = create<InventoryStore>()(
    devtools(
        (set) => ({
            inventory: [],
            currency: "EUR",
            availableFilters: [],
            setInventory: (inventory) => set({inventory}),
            setCurrency: (currency) => set({currency}),
        })
    )
);
export default useInventoryStore;