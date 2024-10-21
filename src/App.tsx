import "./App.css"
import Table from "./components/table/Table.tsx";

function App() {

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white text-gray-600 font-mono items-center">
            <main
                className="flex-auto overflow-hidden flex flex-col overflow-y-auto items-center p-4 h-full w-full max-w-screen-xl">
                <Table/>
            </main>
        </div>
    )
}

export default App
