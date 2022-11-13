// Add your code here

function submitData(name, email) {
    
    const configurationObject = {
        method: "POST",

        headers: {
           
            "Content-Type": "application/json",
            "Accept": "application/json",

        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        }),

    };
    
    return fetch ("http://localhost:3000/users", configurationObject)
    .then(function (response){
        return response.json();
    })
    .then(function (object){
        console.log(object);
        console.log(object.id);
        document.body.innerHTML= object.id
    })
    .catch(function(error){
        
        
        document.body.innerHTML = error.message;


        
    });

}



