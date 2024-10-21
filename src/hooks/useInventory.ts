import { useEffect, useCallback } from 'react';
import { getAllInventory } from '../services/Inventory.service';
import useInventoryStore from '../store/Inventory.store';

export function useInventory() {
    const inventory = useInventoryStore(state => state.inventory);

    const fetchInventory = useCallback(async () => {
        await getAllInventory();
    }, []);

    useEffect(() => {
        fetchInventory();
    }, [fetchInventory]);

    return {
        inventory
    };
}