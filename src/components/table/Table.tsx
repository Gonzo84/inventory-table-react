import {useInventory} from '../../hooks/useInventory.ts';
import TableSection from './TableSection';
import {InventoryType} from "../../models/Inventory.model.ts";

const Table = () => {
    const {inventory} = useInventory();

    const renderTableSection = (item: InventoryType) => {
        return (
            <TableSection inventoryItem={item} key={item.id}/>
        );
    };

    return (
        <table className="table-fixed w-full">
            <thead>
            <tr>
                <td></td>
                {/*add regions dynamically*/}
                <th>Europe</th>
                <th>Germany</th>
                <th>Great Britain</th>
            </tr>
            </thead>
            <tbody>
            {inventory.map(item => renderTableSection(item))}
            </tbody>
        </table>
    );
};

export default Table;
