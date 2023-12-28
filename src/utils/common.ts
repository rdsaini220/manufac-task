import { winedata, wineDataType } from '../constants/data';

export const flavanoidsValue = (arr:wineDataType, pName:string) => {
    const classes:any = {};
    arr.forEach((item:any) => {
        const alcoholClass = item.Alcohol;
        const pValue = parseFloat(item[pName]);

        if (!isNaN(pValue)) {
        if (!classes[alcoholClass]) {
            classes[alcoholClass] = [];
        }
        classes[alcoholClass].push(pValue);
        }
    });
    return classes
}

export const getMean = (arr:number[]) => {
    const res = arr.reduce((acc:number, value:number) => acc + value, 0);
    return res / arr.length;
};
  
export const getMedian = (arr:number[]) => {
    const sorted = arr.slice().sort((a:number, b:number) => a - b);
    const midd = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[midd - 1] + sorted[midd]) / 2;
    } else {
        return sorted[midd];
    }
};

export const getMode = (arr:number[]) => {
    const valueCount:any = {};

    arr.forEach((value:number) => {
      valueCount[value] = (valueCount[value] || 0) + 1;
    });
  
    let mode;
    let maxCount = 0;
  
    for (const value in valueCount) {
      if (valueCount[value] > maxCount) {
        mode = parseFloat(value);
        maxCount = valueCount[value];
      }
    }
  
    return mode;
};

export const gammaValues = (arr:wineDataType) => {
    for(let i = 0; i < arr.length; i++) {
      const item:winedata = arr[i];
      const gamma = (Number(item?.Ash) * Number(item?.Hue)) / Number(item?.Magnesium);
      item.Gamma = gamma;
    }  
    return arr;
}
