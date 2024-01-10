import playerData from "../data/playerData";

export const preparePlayerData = (playerData) => {
    return Object.values(playerData);
}

// output: [{player}, {player}]


// input: playerDataArray, matchData
export const addWinsToPlayers = (playerDataArray, matchData) => {
    return playerDataArray.map(player => {
        const currentWins = matchData.reduce((accumulator, match)=>{
            if(match.winner ===player.gamerTag){
                return accumulator += 1;
            } else {
                return accumulator;
            }
        },0);

        player.wins = currentWins;

        return player
    }); 
}

 // output: [{player}, {player}] (each player having a win key and a numerical value)