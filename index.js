
 let array = [
  {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
  "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  },
  {
  "id": 4,
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  },
  {
  "id": 5,
  "name": "Jerry Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
  "id": 6,
  "name": "Abadango Cluster Princess",
  "status": "Alive",
  "species": "Alien",
  "type": "",
  "gender": "Female",
  },
  {
  "id": 7,
  "name": "Abradolf Lincler",
  "status": "unknown",
  "species": "Human",
  "type": "Genetic experiment",
  "gender": "Male",
  },
  {
  "id": 8,
  "name": "Adjudicator Rick",
  "status": "Dead",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
  "id": 9,
  "name": "Agency Director",
  "status": "Dead",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
  "id": 10,
  "name": "Alan Rails",
  "status": "Dead",
  "species": "Human",
  "type": "Superhuman (Ghost trains summoner)",
  "gender": "Male",
  }
  ]

function showTable() {
 
  
    let tableDisplay = document.querySelector("#tablaObject");
  
    let tableHtml = `<div>`;
    array.forEach(function (acc, index) {
      if (index < 11) {
        tableHtml =
          tableHtml +
          `
        <table class="">
        <table>
        <thead>
          <tr>
            <th>${Object.keys(acc)}</th>
            <th>name</th>
            <th>status</th>
            <th>species</th>
            <th>type</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${acc.id}</td>
            <td>${acc.name}</td>
            <td>${acc.status}</td>
            <td>${acc.species}</td>
            <td>${acc.type}</td>
            <td>${acc.gender}</td>
          </tr>
        </tbody>
        </table>
       </div>`;
      }
    });
  
    tableHtml = tableHtml + `</div>`;
    tableDisplay.innerHTML = tableHtml;
  }
  showTable();
