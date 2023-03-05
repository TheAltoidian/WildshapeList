// const beastList = [
//     "Baboon", "Bat", "Black Bear", "Blood Hawk", "Cat", "Crab", "Ape", "Axe Beak", "Boar", "Camel", "Constrictor Snake", "Crocodile", "Badger", "Brown Bear", "Deer", "Giant Centipede", "Giant Fire Beetle", "Giant Hyena", "Giant Octopus", "Giant Rat (Diseased)", "Giant Spider", "Giant Weasel", "Hunter Shark", "Hyena", "Lion", "Dire Wolf", "Eagle", "Flying Snake", "Giant Bat", "Giant Constrictor Snake", "Giant Scorpion", "Giant Sea Horse", "Giant Toad", "Giant Wolf Spider", "Goat", "Draft Horse", "Elephant", "Elk", "Giant Badger", "Giant Crab", "Giant Crocodile", "Giant Goat", "Giant Lizard", "Giant Poisonous Snake", "Giant Wasp", "Killer Whale", "Lizard", "Frog", "Giant Ape", "Giant Boar", "Giant Eagle", "Giant Elk", "Giant Frog", "Giant Owl", "Giant Rat", "Giant Shark", "Giant Vulture", "Hawk", "Jackal", "Mammoth", "Mastiff", "Plesiosaurus", "Poisonous Snake", "Rat", "Raven", "Tyrannosaurus Rex", "Vulture", "Panther", "Quipper", "Reef Shark", "Rhinoceros", "Saber-Toothed Tiger", "Warhorse", "Octopus", "Owl", "Scorpion", "Spider", "Stirge", "Triceratops", "Weasel", "Mule", "Polar Bear", "Pony", "Riding Horse", "Sea Horse", "Tiger", "Wolf"
// ]

const beastList = [
    "Baboon", "Bat", "Black Bear", "Blood Hawk", "Cat", "Crab", "Ape", "Axe Beak", "Boar", "Camel", "Constrictor Snake", "Crocodile", "Badger", "Brown Bear", "Deer", "Giant Centipede", "Giant Fire Beetle", "Giant Hyena", "Giant Octopus", "Giant Rat (Diseased)", "Giant Spider", "Giant Weasel", "Hunter Shark", "Hyena", "Lion", "Dire Wolf", "Eagle", "Flying Snake", "Giant Bat", "Giant Constrictor Snake", "Giant Scorpion", "Giant Sea Horse", "Giant Toad", "Giant Wolf Spider", "Goat", "Draft Horse", "Elephant", "Elk", "Giant Badger", "Giant Crab", "Giant Crocodile", "Giant Goat", "Giant Lizard", "Giant Poisonous Snake", "Giant Wasp", "Killer Whale", "Lizard", "Frog", "Giant Ape", "Giant Boar", "Giant Eagle", "Giant Elk", "Giant Frog", "Giant Owl", "Giant Rat", "Giant Shark", "Giant Vulture", "Hawk", "Jackal", "Mammoth", "Mastiff", "Plesiosaurus", "Poisonous Snake", "Rat", "Raven", "Tyrannosaurus Rex", "Vulture", "Panther", "Quipper", "Reef Shark", "Rhinoceros", "Saber-Toothed Tiger", "Warhorse", "Octopus", "Owl", "Scorpion", "Spider", "Stirge", "Triceratops", "Weasel", "Mule", "Polar Bear", "Pony", "Riding Horse", "Sea Horse", "Tiger", "Wolf"
]


// // import { beastList } from "./beast_list";

// let getAnimal = function() {
//     fetch("https://www.dnd5eapi.co/api/monsters/brown-bear")
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data.type);
//             });
//         });
// };

// let makeAnimalList = function() {
//     let animalList = [];
//     let monsterList = [];
//     // fetch("https://www.dnd5eapi.co/api/monsters")
//     fetch ("https://www.dnd5eapi.co/api/monsters?challenge_rating=beast")
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data)
//             })
//         })
// };

let displayBeastList = function() {
    // console.log(beastList[5])
    console.log(beastList.length)
    console.log(typeof beastList)
    let currentBeastList = document.getElementById("beast-list");
    // currentBeastList.textContent = beastList;
    for (let i = 0; i < beastList.length; i++) {
        console.log("test");
        console.log(i);
        console.log(beastList[i]);
        currentBeastList.push(beastList[i]);
        
    }
};

displayBeastList();
// getAnimal();
// makeAnimalList();