import useInventoryStore from "../store/Inventory.store.ts";
import {InventoryDataType} from "../models/Inventory.model.ts";

export async function getAllInventory() {
    try {
        const response = await fetch('data/inventory.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                // set all inventory
                const data: InventoryDataType = await response.json();
                useInventoryStore.getState().setInventory(data.inventory)
                // set base currency
                const currency = data.metadata.currency;
                useInventoryStore.getState().setCurrency(currency);
                // set regions
                useInventoryStore.getState().setRegions(data.metadata.regions);
            } else {
                console.error('Expected JSON response but got:', contentType);
                console.log(await response.text());
            }
        } else {
            console.error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error('Failed to fetch inventory:', error);
    }
}