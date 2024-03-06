// let options = {
//     method: "Post",
//     headers: { "content-type": "application/json"
//     },
//      body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }),

// }



// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// 2nd Method


const createTodo = async(todo) =>{

    let options = {
        method: "Post",
        headers: { "content-type": "application/json"
        },
         body: JSON.stringify(todo),
    
    }

    let p =await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;

}

let mainFunc = async () =>{
    let todo = {
        title: 'Anuj2',
            body: 'Kashyap2',
            userId: 101,
    }
    let todor = await createTodo(todo);
        console.log(todor)
}


mainFunc()