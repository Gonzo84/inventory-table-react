import {useInventory} from '../../hooks/useInventory.ts';
import TableSectionComponent from './TableSection.component.tsx';
import TableHeaderCell from "./TableHeaderCell.component.tsx";
import useInventoryStore from "../../store/Inventory.store.ts";

const TableComponent = () => {
    const {inventory, regions} = useInventory();

    const renderTableSections = () => {
        return inventory.map(item => (
            <TableSectionComponent inventoryItem={item} key={item.id}/>
        ));
    };
    const handleHeaderCellClick = (regionKey: string) => {
        useInventoryStore.getState().setFilter({key: regionKey, type: "region"});

    };
    const renderRegions = () => {
        return regions.map(region => <TableHeaderCell label={region.label} key={region.key} regionKey={region.key}
                                                      onClick={handleHeaderCellClick}/>);
    };

    return (
        <table className="table-fixed w-full">
            <thead>
            <tr className="h-12 border-b">
                <td></td>
                <td></td>
                {/*add regions dynamically*/}
                {renderRegions()}
            </tr>
            </thead>
            <tbody>
            {renderTableSections()}
            </tbody>
        </table>
    );
};

export default TableComponent;
