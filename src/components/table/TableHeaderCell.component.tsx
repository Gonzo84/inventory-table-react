import useOpenController from "../../hooks/useOpenController.ts";

type TableHeaderCellProps = {
    label: string;
    regionKey: string;
    onClick: (key: string) => void;
};

const TableHeaderCell = ({label, regionKey, onClick}: TableHeaderCellProps) => {
    const {isOpen, toggle} = useOpenController(true);
    const handleHeaderCellClick = () => {
        onClick(regionKey)
        toggle();
    }
    return (
        <th onClick={handleHeaderCellClick} className={`cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100 ${isOpen ? '' : 'w-12'}`}>
            {isOpen ? label : <span
                className="material-symbols-outlined"
                style={{
                    opacity: !isOpen ? 1 : 0,
                    transition: "all 0.25s",
                }}
            >
        add_circle
      </span>}
        </th>
    );
};

export default TableHeaderCell;