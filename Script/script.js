// async function retrieve(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     if (!response.ok){
//         throw new Error(`Failed to fetch data: ${response.status}`)
//     }


//     return response.json();
// }catch(e){
//     console.log(e);
// }
// }

// 

fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    // console.log(data);
    return data.json();
}
) .then((tododata)=>{
    console.log(tododata);

    let tabledata="";
    tododata.map((values)=>{
    tabledata+=`<tr>
    
    <td>${values.userId}</td>
    <td>${values.id}</td>
    <td>${values.title}</td>
    <td><input type="checkbox" id="checkbox" onchange="count()"></td>
    
  </tr>`;
})
 document.getElementById("table-body").innerHTML= tabledata; 

})



  function count() {
    return new Promise((resolve, reject) => {
      let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkboxes.length >= 5) {
        resolve(alert(`Congrats!! ${checkboxes.length} tasks have been successfully completed`));
      } else {
        reject("Not all tasks are completed yet");
      }
    });
  }

count().then(
  result => alert(result),
  error => console.log(error)
);


// function count(){
 

//   let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//   if (checkboxes.length==5){
//     alert("Congrats!! 5 tasks have been successfully completed");
//   }
 
//  };

