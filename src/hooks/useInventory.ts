import { useEffect, useCallback, useMemo } from 'react';
import { getAllInventory } from '../services/Inventory.service';
import useInventoryStore from '../store/Inventory.store';
import { InventoryType } from '../models/Inventory.model.ts';

export function useInventory() {
    const inventory = useInventoryStore(state => state.inventory);
    const regions = useInventoryStore(state => state.regions);
    const filters = useInventoryStore(state => state.filters);

    const fetchInventory = useCallback(async () => {
        await getAllInventory();
    }, []);

    useEffect(() => {
        fetchInventory();
    }, [fetchInventory]);

    const deepCopy = (arr: InventoryType[]): InventoryType[] => {
        return JSON.parse(JSON.stringify(arr));
    };

    const applyFilters = (items: InventoryType[]): InventoryType[] => {
        return items.map(item => {
            // Check if the item matches all filters
            const matches = filters.every(filter =>
                String(item[filter.key as keyof InventoryType]).toLowerCase() === filter.value?.toLowerCase()
            );

            // Create a shallow copy of the item
            let filteredItem = { ...item };

            // Recursively apply filters to sub-inventory if it exists
            if (item.inventory) {
                filteredItem.inventory = applyFilters(item.inventory);
            }

            // Include the item if it matches the filters or has filtered sub-inventory
            if (matches || (filteredItem.inventory && filteredItem.inventory.length > 0)) {
                return filteredItem;
            }

            return null;
        }).filter(item => item !== null) as InventoryType[];
    };

    const filteredInventory = useMemo(() => {
        return applyFilters(deepCopy(inventory));
    }, [inventory, filters]);

    return {
        inventory: filteredInventory,
        regions
    };
}