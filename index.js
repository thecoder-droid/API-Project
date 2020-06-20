let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people/')
.then(function(response) { 
    return response.json(); 
})

.then(function(json) {
    let people = json.results;

    for(p of people) {
        let listItem = document.createElement('li'); 
        // listItem.innerHTML = '<p>' + p.name +  ':' + 'height: ' + p.height + p.mass + '</p>';  
        listItem.innerHTML = `<p> name: ${p.name}: <br> birthyear: ${p.birth_year} <br> eye color: ${p.eye_color} <br> gender: ${p.gender} <br> hair color: ${p.hair_color} <br> height: ${p.height} <br> mass: ${p.mass} <br> skin color: ${p.skin_color} <br> homeworld: ${p.homeworld} <br> films: ${p.films} <br> species: ${p.species} <br> starships: ${p.starships} <br> vehicles: ${p.vehicles} <br> url: ${p.url} </p>`;
        starWarsPeopleList.appendChild(listItem);  
      }
});

  
  