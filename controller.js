
import data from './data.json' assert{type: 'json'}

export const createData = (newData, data) => {
    data.push(newData);
    console.log(data);

}

