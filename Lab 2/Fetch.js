const axios = require("axios");
const chalk = require("chalk");

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch() {
        const pokeColor = this.color;
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)

        .then(function (response) {
            const pokemon = response.data;

            console.log(chalk.hex(pokeColor)("This is a " + pokemon.name + " and its ID is " + pokemon.id));
        })
        .catch(function (error) {
            console.log(chalk.red("Your input is invalid: " + error));
        });

    }}

module.exports = Fetch;
// I added the "type": "module" to my package.json but I still continued to get the error message "SyntaxError: Cannot use import statement outside a module" when trying to use import and export. This was the only solution I found online but I am not sure if we are allowed to use it.