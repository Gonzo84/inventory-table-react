import useOpenController from "../../hooks/useOpenController";
import {InventoryType, UnitsMapKey} from "../../models/Inventory.model.ts";
import TableRowComponent from "./TableRow.component.tsx";

type tableSectionProps = {
    inventoryItem: InventoryType;
    nestedLevel?: number;
}

const TableSectionComponent = ({inventoryItem, nestedLevel = 0}: tableSectionProps) => {
    const {isOpen, toggle} = useOpenController(false);
    const renderRow = (renderExpendableButton: boolean, unitesKey: UnitsMapKey) => {
        return <TableRowComponent unitesKey={unitesKey} rowData={inventoryItem}
                                  renderExpendableButton={renderExpendableButton}
                                  isOpen={isOpen} toggle={toggle} nestedLevel={nestedLevel}></TableRowComponent>

    }

    return (
        <>
            {renderRow(true, "units")}

            {renderRow(false, "price")}


            {renderRow(false, "gross_revenue")}

            {inventoryItem.inventory && isOpen && inventoryItem.inventory.map(item => {
                return (
                    <TableSectionComponent inventoryItem={item} key={item.id} nestedLevel={nestedLevel + 1}/>
                )
            })}
        </>
    );
};
export default TableSectionComponent;