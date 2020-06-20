let starWarsPeople = document.querySelector('p');

fetch('https://swapi.dev/api/people/')
.then(function(response) { 
    return response.json(); 
})

.then(function(json) {
    let people = json.results;

    for(p of people) {
        let name = document.createElement('p');
        let birth_year = document.createElement('p');
        let eye_color = document.createElement('p');
        let gender = document.createElement('p');
        let hair_color = document.createElement('p');
        let height = document.createElement('p');
        let mass = document.createElement('p');
        let skin_color = document.createElement('p');
        let starWarsPeopleList = document.createElement('div');
        starWarsPeopleList.className = 'border';


        name.innerHTML = '<p>' + p.name + '</p>';
        birth_year.innerHTML = '<p>' + 'birth year: ' + p.birth_year + '</p>';
        eye_color.innerHTML = '<p>' + 'eye color: ' + p.eye_color + '</p>';
        gender.innerHTML = '<p>' + 'gender: ' + p.gender + '</p>';
        hair_color.innerHTML = '<p>' + 'hair color: ' + p.hair_color + '</p>';
        height.innerHTML = '<p>' + 'height: ' + p.height + '</p>';
        mass.innerHTML = '<p>' + 'mass: ' + p.mass + '</p>';
        skin_color.innerHTML = '<p>' + 'skin color: ' + p.skin_color + '</p>';

        starWarsPeople.appendChild(starWarsPeopleList);
        starWarsPeopleList.appendChild(name).style.color='yellow'; 
        starWarsPeopleList.appendChild(name).style.fontSize='2em'; 
        starWarsPeopleList.appendChild(birth_year);
        starWarsPeopleList.appendChild(eye_color);
        starWarsPeopleList.appendChild(gender);
        starWarsPeopleList.appendChild(hair_color);
        starWarsPeopleList.appendChild(height);
        starWarsPeopleList.appendChild(mass);
        starWarsPeopleList.appendChild(skin_color); 
      }
});

  
  