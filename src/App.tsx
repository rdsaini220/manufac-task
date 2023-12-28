import { wineDataSet, wineDataType, listSetType } from './constants/data';
import { flavanoidsValue, gammaValues } from './utils/common';
import { Table } from './components/Table';

function App() {
  const flavanoidList:listSetType = flavanoidsValue(wineDataSet, 'Flavanoids') || {}
  const gammaData:wineDataType = gammaValues(wineDataSet) || []
  const gammaList:listSetType = flavanoidsValue(gammaData, 'Gamma') || {}
  return (
    <div>
      <div>
        <h2 style={{marginBottom:'8px'}}>Flavanoids Data Table</h2>
        <Table rowData={flavanoidList} type="Flavanoids" />
      </div>
      <div style={{marginTop:'1rem'}}>
        <h2 style={{marginBottom:'8px'}}>Gamma Data Table</h2>
        <Table rowData={gammaList} type="Gamma" />
      </div>
    </div>
  );
}

export default App;
