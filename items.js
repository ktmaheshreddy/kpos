
import React from 'react';
import axios from 'axios';
const appendUrl = "https://content-sheets.googleapis.com/v4/spreadsheets/10Q-dDN1yT1bb3I4nPSItXrpPYVdp2nXpe6pncf4vJlQ/values/Sheet1:append?valueInputOption=RAW&alt=json"
const AUTH_TOKEN="Bearer ya29.a0AbVbY6Neck4A472njXVTqXoe5XqFk47OEcQYca-BJ95Q6jwSfj2kw0u7vYSeVYEhJvv24EaH-96P2jtzwzQt1t7_w0pzySSpd6P_DkOEbbaar0FcvGxIkNUeuIETMVoLfJYuJ5QaWARHM6aBRXJQv9I5X-FQOqfABZx54waCgYKAbUSARASFQFWKvPlZuJP7iMOw095iAGkj7eFGg0173";
function Items() {
    const getItems=()=>{
    const payload = {"majorDimension":"ROWS","range":"Sheet1","values":[["id","item"]]};
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.post(appendUrl,payload).then(res=>{
        console.log(res)
    }).catch(ex=>{console.log(ex);})
}

return(
    <div>
        <button onClick={getItems}>Update Items</button>
    </div>
)

}
export default Items;