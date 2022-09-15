import {RussianCities} from "./russianCitiesArray";


export let ProjectState = {
    initialstate:{
      currentCords: '!',
      renderType: false
    },
    
    stateUpdater(){

    },
    eventHandler(props){
        
        this.stateUpdater = props; 
    },
    cords: '',
    renderType: true
    
}


export let renderSwitcher = () => {
    if (ProjectState.initialstate.renderType === true) {
      ProjectState.initialstate.renderType = false;
      ProjectState.stateUpdater(ProjectState.initialstate) 
    } else {
      ProjectState.initialstate.renderType = true;
      ProjectState.stateUpdater(ProjectState.initialstate) 
    }
}



function coordsPrepare (argu){
  argu = argu.toString();
  let arguTransformArray = [];
  for(let i=0; i<argu.length; i++){
    arguTransformArray.push(argu[i])
  }
 
  let dotIndex = arguTransformArray.indexOf('.')
  console.log(dotIndex); 
  arguTransformArray.length = 9;
  
  return arguTransformArray.join('');
}

function dataFetcher (cords) {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?${cords}&exclude=minutely&appid=17a2a05179606595e90bf4a02fd2ce0a`)
    .then(function(rspns){return rspns.json()})
    .then(function(data){
     console.log('fetch'); 
     ProjectState.initialstate[cords] = data;
     ProjectState.initialstate.currentCords = cords;
     ProjectState[cords] = data;
     ProjectState.stateUpdater(ProjectState.initialstate);
    })
}

function getUserCoords () {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = coordsPrepare(position.coords.latitude);
        let longitude = coordsPrepare(position.coords.longitude);
      
        ProjectState.cords = `lat=${latitude}&lon=${longitude}`
        console.log(ProjectState.cords);
        ProjectState[`lat=${latitude}&lon=${longitude}`] = 
        dataFetcher(ProjectState.cords)

    })
}
getUserCoords();

export function getSearchCoords (argument) {
    argument = argument.toLowerCase();
    argument = argument.split('');
    let argumentFormating = () => {
      if (argument[argument.length-1] === ' '){
        argument.splice(argument.length-1,1);
        argumentFormating();

      }
      if (argument[0] === ' '){
        argument.splice(argument[0],1);
        argumentFormating();

      }
    };
    argumentFormating();
    argument = argument.join('').toString();  
    let SearchCordinates = '';
    RussianCities.forEach(elem=>{
      
        if (argument === elem.name.toLowerCase()) {
            SearchCordinates = `lat=${elem['coord'].lat}&lon=${elem['coord'].lon}`;
            
        } 
       
    })

    if (SearchCordinates === ''){
        alert ('Я пока знаю только российские города, но этого не нашел. Может есть ошибка в названии?')
        SearchCordinates = ProjectState.initialstate.currentCords;
    } 

    if (!ProjectState[`${SearchCordinates}`]){
      ProjectState[`${SearchCordinates}`] = {};
      dataFetcher(SearchCordinates);
      console.log(`success`);
    } else if(SearchCordinates === ProjectState.initialstate.currentCords){
      dataFetcher(SearchCordinates);
      console.log(`city name error`);
    }else{
      ProjectState.cords = SearchCordinates;
      ProjectState.initialstate.currentCords = ProjectState.cords;
      
      ProjectState.stateUpdater(ProjectState.initialstate);
    }
     
    
}


