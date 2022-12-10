function getInfo(){
    fetch("https://eldoov.github.io/BU-MET-CS601/CS601-fetch/info.json").then((response) => {
        if(response.ok){
            return response.json();
        }else {
            throw new Error("Error.");
        }
    }).then(data => {
        console.log(data);
    }).catch((error) => {
        console.log("Error.");
    })
}


