const footballTeam = {
  team: "FC Code Masters",
  year: 2024,
  headCoach: "Alex Silva",
  players: [
    {
      name: "Lucas Andrade",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Bruno Costa",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rafael Souza",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Diego Martins",
      position: "goalkeeper",
      isCaptain: true
    }
  ]
};
//exibir os valores na tela
const team = document.getElementById('team');
team.innerText = footballTeam.team;

const year = document.getElementById('year');
year.innerText = footballTeam.year;

const headCoach = document.getElementById('head-coach');
headCoach.innerText = footballTeam.headCoach;


const playerCardsContainer = document.getElementById('player-cards');
const selectContainer = document.querySelector("select");

//funcao para separar por categorias
function getPlayersByCategory(playerCategory) {
  return playerCategory === 'all'
    ? footballTeam.players
    : footballTeam.players.filter(({ position }) => position === playerCategory);
}
//funcao para criar o Card
function createPlayerCards(players) {
  return players
    .map(({ name, position, isCaptain }) => `
  <div class="player-card">
    <h2>
      ${name} 
      ${isCaptain ? '<span class="captain"> (Captain)</span>' : ''}
    </h2>
    <p>Position: ${position}</p>
  </div>
`).join("")
}
//funcao para mostrar o card na tela
function setPlayerCards(category) {
  playerCardsContainer.innerHTML = createPlayerCards(
    getPlayersByCategory(category)
  );
}

// function setPlayerCards(category) {
//   let players = getPlayersByCategory(category);
//   let cards = createPlayerCard(players);

//   playerCardsContainer.innerHTML = cards;
// }


//visualização padrao
setPlayerCards("all");

//evento pra quando mudar o valor 
selectContainer.addEventListener("change", () => {
  setPlayerCards(selectContainer.value);
})
