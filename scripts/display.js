// function one -> counts pets via pets.length

function petAmount() {
    const counter = document.getElementById("petsRegisterNum");
    counter.textContent = petSalon.pets.length.toString();
}
/*
function displayPetCards() {
    const DIV = document.getElementById("pets");
    let card = "";

    // travel the array
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        card += `
        <div id="${pet.id}">
            <p> Name: ${pet.name}</p> 
            <p> Age: ${pet.age}</p> 
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Service: ${pet.service}</p>
            <p> When: ${pet.time}</p>
            <p> <button onclick="deletePet(${pet.id})">🗑️</button></p>
        </div>
        `;
    }

    DIV.innerHTML = card;

}

*/

function displayPetCards() {
    const tbody = document.getElementById("pets");
    tbody.innerHTML = ""; 

    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        let row = document.createElement("tr");
        row.id = pet.id;


        row.innerHTML = `
            
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.price}</td>
            <td>${pet.breed}</td>
            <td>${pet.time}</td>
            <td><button onclick="deletePet(${pet.id})">🗑️</button></td>

            

            
        `;

        tbody.appendChild(row);
    }
}




