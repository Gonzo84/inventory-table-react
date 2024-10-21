import ExpendableButtonComponent from "../buttons/ExpendableButton.component.tsx";
import {useCallback} from "react";
import useInventoryStore from "../../store/Inventory.store.ts";
import {InventoryType, RegionDataType, UnitsMapKey, UNITS_MAP} from "../../models/Inventory.model.ts";


type TableRowProps = {
    rowData: InventoryType;
    unitesKey: UnitsMapKey;
    renderExpendableButton: boolean;
    isOpen: boolean;
    toggle: () => void;
    nestedLevel?: number;
};

const TableRowComponent = ({
                               rowData,
                               unitesKey,
                               renderExpendableButton,
                               isOpen,
                               toggle,
                               nestedLevel = 0,
                           }: TableRowProps) => {

    const {regions, filteredRegions} = useInventoryStore();

    const getNestedLevelStyling = useCallback(() => {
        return nestedLevel ? {paddingLeft: `${nestedLevel * 32}px`} : {};
    }, [nestedLevel]);
    const isRegionFiltered = (item: RegionDataType) => {
        return filteredRegions.some(filter => {
            return item.key.toLowerCase().includes(filter.key.toLowerCase());
        });
    }
    const getRegionValue = (item: RegionDataType) => {
        return isRegionFiltered(item) ? " " : item[unitesKey];
    }
    const renderRegionRowData = () => {
        return (
            <>
                <td className="text-end border  p-2 h-full">{UNITS_MAP[unitesKey]}</td>
                {regions.map(region => {
                    const regionItem = rowData.regions.find(item => item.key === region.key);
                    return (
                        <td key={region.key} className="text-end border p-2 h-full">
                            {regionItem && getRegionValue(regionItem)}
                        </td>
                    )
                })}
            </>
        )

    }

    return (
        <tr className="h-12 even:bg-white odd:bg-slate-50 border-b transition duration-150 ease-in-out hover:bg-gray-100">
            <td className="h-12 p-2 flex flex-row items-center" style={getNestedLevelStyling()}>
                {renderExpendableButton ? (
                    <>
                        {rowData.inventory && <ExpendableButtonComponent isOpen={isOpen} toggle={toggle}/>}
                        {rowData.label}
                    </>
                ) : (
                    <div className="w-6"></div>
                )}
            </td>
            {renderRegionRowData()}
        </tr>
    );
};

export default TableRowComponent;