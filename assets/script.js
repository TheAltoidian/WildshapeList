let getAnimal = function() {
    fetch("https://www.dnd5eapi.co/api/monsters/brown-bear")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data.type);
            });
        });
};

let makeAnimalList = function() {
    let animalList = [];
    let monsterList = [];
    // fetch("https://www.dnd5eapi.co/api/monsters")
    fetch ("https://www.dnd5eapi.co/api/monsters?challenge_rating=beast")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data)
            })
        })
};

let beastList = [];

let pullList = function() {
    
}

// getAnimal();
makeAnimalList();