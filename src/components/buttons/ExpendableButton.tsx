type ExpendableButtonProps = {
    isOpen: boolean;
    toggle: () => void;
};
const ExpendableButton = ({isOpen, toggle}: ExpendableButtonProps) => {
    return (
        <button onClick={toggle} className="flex flex-col justify-center items-center">
      <span
          className="material-symbols-outlined"
          style={{
              transform: `rotate(${isOpen ? 0 : -90}deg)`,
              transition: "all 0.25s",
          }}
      >
        expand_more
      </span>
        </button>
    );
};
export default ExpendableButton;