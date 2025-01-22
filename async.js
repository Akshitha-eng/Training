/*console.log(10);
console.log(20);
setTimeout(()=>{
    console.loag(30);
})
console.log(40);
console.log(50);
setInterval(()=>{
    console.log(30);
},5000)
console.log(40);
console.log(50);*/

function fetchUsers(){
    let response =fetch("https://jsonplaceholder.typicode.com/users");
    response.then(result=>{
        // console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>
            {
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            }
            )
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();