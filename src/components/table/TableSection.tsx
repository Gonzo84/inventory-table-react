import useOpenController from "../../hooks/useOpenController";
import ExpendableButton from "../buttons/ExpendableButton.tsx";
import {InventoryType} from "../../models/Inventory.model.ts";
import {useCallback} from "react";

type tableSectionProps = {
    inventoryItem: InventoryType;
    nestedLevel?: number;
}

const TableSection = ({inventoryItem, nestedLevel = 0}: tableSectionProps) => {
    const {isOpen, toggle} = useOpenController(false);

    const getNestedLevelStyling = useCallback(() => {
        return nestedLevel ? {paddingLeft: `${nestedLevel * 24}px`} : {};
    }, [nestedLevel]);

    return (
        <>
            <tr className="h-12 even:bg-white odd:bg-slate-50 border-b transition duration-150 ease-in-out hover:bg-gray-100">
                <td className="h-12 p-2 flex flex-row items-center" style={getNestedLevelStyling()}>
                    {inventoryItem.inventory ? (
                        <ExpendableButton isOpen={isOpen} toggle={toggle}/>
                    ) : (
                        <div className="w-6"></div>
                    )}
                    {inventoryItem.label}
                </td>
                <td className="text-end p-2 h-full">test</td>
                <td className="text-end p-2 h-full">test</td>
                <td className="text-end p-2 h-full">test</td>
            </tr>
            {inventoryItem.inventory && isOpen && inventoryItem.inventory.map(item => {
                return (
                    <TableSection inventoryItem={item} key={item.id} nestedLevel={nestedLevel + 1}/>
                )
            })}
        </>
    );
};
export default TableSection;