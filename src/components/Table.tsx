import { listSetType } from '../constants/data';
import { getMean, getMedian, getMode  } from '../utils/common'

export const Table = ({ rowData, type }: { rowData: listSetType, type:string }) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Measure</th>
                {
                    Object.keys(rowData).map((item:string) => {
                      return <th key={`measure${item}`}>Class {item}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
                <tr>
                  <th>{type} Mean</th>
                    {
                        Object.keys(rowData).map((item:string) => {
                          return <td key={`mean${item}`}>{getMean(rowData[item])?.toPrecision(3)}</td>
                        })
                    }
                </tr>
                <tr>
                  <th>{type} Median</th>
                    {
                        Object.keys(rowData).map((item:string) => {
                          return <td key={`median${item}`}>{getMedian(rowData[item])?.toPrecision(3)}</td>
                        })
                    }
                </tr>
                <tr>
                  <th>{type} Mode</th>
                    {
                        Object.keys(rowData).map((item:string) => {
                          return <td key={`mode${item}`}>{getMode(rowData[item])?.toPrecision(3)}</td>
                        })
                    }
                </tr>
        </tbody>
    </table>
  )
}
