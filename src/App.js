import "./App.scss";
import Header from "./component/Header";
import DynasicDataTable from "./component/DynasicDataTable";
import CreateDataEntryForm from "./component/CreateDataEntryForm";
import DataEntryForm from "./component/DataEntryForm";
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <DynasicDataTable />

        {/* <CreateDataEntryForm />


<DataEntryForm /> */}
      </div>
    </>
  );
}

export default App;
