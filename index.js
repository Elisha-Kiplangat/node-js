import data from './data.json' assert {type: 'json'}
import {createData} from './controller.js';
// All data
const loopJSON = (data) => {
    data && data.forEach((item) => {
        console.log(`item: ${item.joke}`)
    });
}

loopJSON(data);

//deleting item via id

const deleteData = (data, id) => {

    data && data.forEach((item, index) => {
        if (item.id == id){
            data.splice(index, 1);
        }
    });

    console.log(data);
}

deleteData(data,1);

// Adding data
const addData = (data, id, joke, rating) => {
    data.push({
        id: id,
        joke: joke,
        rating: rating
    });
    console.log(data);
}

addData(data, data.length + 1, 'new joke', 10);

// Updating data

const updateData = (data, id, joke, rating) => {
    data && data.forEach((item, index) => {
        if (item.id == id){
            data[index].joke = joke;
            data[index].rating = rating;
        }
    });
    console.log(data);
}

updateData(data, 6, 'new joke', 10);
 


const newData = {
    id: data.length + 1,
    joke: 'This is a new joke',
    rating: 5
}

createData(newData, data);


const myJson = 'https://jsonplaceholder.typicode.com/users';



   fetch(myJson)
   .then(response => response.json())
   .then(data => console.log(data))  // Displaying the data

// Adding data
   .then(existingData => {
    
    existingData.push( {
        id: existingData.length + 1,
        name: 'newName',
        username: 'newUsername',
        email: 'newEmail@example.com',
    });

    console.log(existingData);

   })
   .catch(err => console.log(err));

   




