import "./App.css"
import TableComponent from "./components/table/Table.component.tsx";
import FiltersComponent from "./components/filters/Filters.component.tsx";

function App() {

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white text-gray-600 font-mono items-center">
            <main
                className="flex-auto overflow-hidden flex flex-col overflow-y-auto items-center p-4 h-full w-full max-w-screen-xl gap-6">
                <FiltersComponent/>
                <TableComponent/>
            </main>
        </div>
    )
}

export default App
