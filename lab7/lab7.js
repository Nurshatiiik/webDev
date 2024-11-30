let savedHeroes = [];
let url = "https://akabab.github.io/superhero-api/api/all.json"; 
let heroImage = document.getElementById("hero-avatar"); 
let heroTitle = document.getElementById("hero-title"); 
let heroDescription = document.getElementById("hero-description");
let heroDetails = document.getElementById("hero-details");

async function fetchAllHeroes() { 
    try { 
        let response = await fetch(url); 
        let heroes = await response.json(); 
        savedHeroes = heroes;
        
        let randomIndex = Math.floor(Math.random() * heroes.length); 
        let firstHero = heroes[randomIndex]; 
        console.log(firstHero); 
        
        // Update hero title and description
        heroTitle.innerText = firstHero.name; 
        heroDescription.innerText = `First Appearance: ${firstHero.biography.firstAppearance}`;
        
        // Update hero image
        heroImage.setAttribute("src", firstHero.images.md);
        
        // Display hero characteristics in a list format
        heroDetails.innerHTML = `
            <li class="list-group-item"><strong>Alter Ego:</strong> ${firstHero.biography['alterEgos']}</li>
            <li class="list-group-item"><strong>Real Name:</strong> ${firstHero.biography['fullName']}</li>
            <li class="list-group-item"><strong>Place of Birth:</strong> ${firstHero.biography['placeOfBirth']}</li>
            <li class="list-group-item"><strong>Alignment:</strong> ${firstHero.biography['alignment']}</li>
            <li class="list-group-item"><strong>Powers:</strong> ${firstHero.powers.join(', ')}</li>
            <li class="list-group-item"><strong>Height:</strong> ${firstHero.appearance.height[1]}</li>
            <li class="list-group-item"><strong>Weight:</strong> ${firstHero.appearance.weight[1]}</li>
            <li class="list-group-item"><strong>Gender:</strong> ${firstHero.appearance.gender}</li>
            <li class="list-group-item"><strong>Eye Color:</strong> ${firstHero.appearance['eyeColor']}</li>
            <li class="list-group-item"><strong>Hair Color:</strong> ${firstHero.appearance['hairColor']}</li>
            <li class="list-group-item"><strong>Workplace:</strong> ${firstHero.work['occupation']}</li>
            <li class="list-group-item"><strong>First Comic Appearance:</strong> ${firstHero.biography['firstAppearance']}</li>
            <li class="list-group-item"><strong>Combat Skill:</strong> ${firstHero.powerstats.combat}</li>
            <li class="list-group-item"><strong>Strength Level:</strong> ${firstHero.powerstats.strength}</li>
        `;
    }
    catch (error) { 
        console.log(`Error fetching hero data: ${error}`); 
    } 
}

document.addEventListener("DOMContentLoaded", fetchAllHeroes);
