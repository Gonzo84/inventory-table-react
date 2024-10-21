import useInventoryStore from "../../store/Inventory.store.ts";
import {TypesOfFilter} from "../../models/Filters.model.ts";

const Filter = () => {
    const {setFilter, resetFilter} = useInventoryStore()
    const dimensions = [
        {
            name: 'Article',
            filter_key: 'label',
            options: ['Bikes', 'Mountain Bikes', 'Road Bikes', 'City Bikes', 'Complementary Products', 'Subscription']
        },
        {
            name: 'Legal Entity',
            filter_key: 'legal_entity',
            options: ['11', '12', '13']
        },
        {
            name: 'Version',
            filter_key: 'version',
            options: ['Actual', 'Budget']
        },
    ];

    const handleFilterChange = (filterName: TypesOfFilter, filterValue: string) => {
        if (filterValue === "all") {
            // reset all filters with the same key
            resetFilter({key: filterName, type: filterName});
        } else {
            setFilter({key: filterName, type: filterName, value: filterValue});
        }
    };

    return (
        <div className="w-full flex flex-row justify-start gap-4">
            {dimensions.map((dimension) => (
                <div className="w-full bg-gray-50 hover:bg-gray-100 font-semibold p-2
                       rounded-s focus:outline-none flex flex-row justify-between" key={dimension.filter_key}>
                    <label>{dimension.name}</label>
                    <select onChange={(e) => handleFilterChange(dimension.filter_key as TypesOfFilter, e.target.value)}>
                        <option key={`all-${dimension.name}`}
                                value="all">All
                        </option>
                        {dimension.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default Filter;
