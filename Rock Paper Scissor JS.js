

let computerChoices =   [{choice: 'Rock', value: 0},
                        {choice: 'Paper', value: 1},
                        {choice: 'Scissor', value: 2}];

function computerPlay () {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}