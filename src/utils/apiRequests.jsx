import axios from 'axios';
// const apiKey = process.env.REACT_APP_API_KEY;

export const getTooltipData = async () => {  
  const currentPlayer = await getCurrentPlayerData();
  const abilities = await getChampionAbilities(currentPlayer);
  const summonerSpells = await getSummonerSpells(currentPlayer);

  const response = {
    championName: currentPlayer.championName,
    abilities: abilities, // //get info using champion name
    summonerSpells: summonerSpells, //get info using champion name
    items: [],
    runes: {}
  }

  return response;
};

const getActivePlayerName = async () => {
  const link = '/liveclientdata/activeplayername';
  return await axios.get(link)
}

const getCurrentPlayerData = async () => {
  const gameDataLink = '/liveclientdata/allgamedata';
  const gameDataResponse = await axios.get(gameDataLink);
  const summonerName = await getActivePlayerName();
  
  return gameDataResponse.data.allPlayers.find(player => player.summonerName === summonerName.data)
}

const getChampionAbilities = async (currentPlayer) => {
  const championName = currentPlayer.championName;
  const champDataLink = `https://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion/${championName}.json`;
  const champDataLinkResponse = await axios.get(champDataLink);
  return {
    passive: champDataLinkResponse.data.data[championName].passive,
    spells: champDataLinkResponse.data.data[championName].spells
  };
}

const getSummonerSpells = async (currentPlayer) => {
  const summonersLink = 'https://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/summoner.json'
  const summonersResponse = await axios.get(summonersLink)

  const filteredSummonerSpellOne = Object.values(summonersResponse.data.data).find(summonerSpell => summonerSpell.name === currentPlayer.summonerSpells.summonerSpellOne.displayName)
  const filteredSummonerSpellTwo = Object.values(summonersResponse.data.data).find(summonerSpell => summonerSpell.name === currentPlayer.summonerSpells.summonerSpellTwo.displayName)
  return [
    filteredSummonerSpellOne,
    filteredSummonerSpellTwo,
  ]
}

export const getSpellIconUrl = (spell, type) => {
  if (type === 'Passive') {
    return `https://ddragon.leagueoflegends.com/cdn/12.20.1/img/passive/${spell}`
  } 
  return `https://ddragon.leagueoflegends.com/cdn/12.20.1/img/spell/${spell}`
}