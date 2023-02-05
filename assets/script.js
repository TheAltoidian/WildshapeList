let getAnimal = function() {
    fetch("https://www.dnd5eapi.co/api/monsters/brown-bear")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });
    // console.log(response)
};

getAnimal();