import { array } from "./array-practica";

let objeto = array;
function showTable(array, value) {
    let tablaContenidos = document.querySelector('#tablaObject')

let tablaHtml = 
 ` <div>
<table>
<thead>
  <tr>
    <th>${array.id}</th>
    <th>${array.name}</th>
    <th>${array.status}</th>
    <th>${array.species}</th>
    <th>${array.type}</th>
    <th>${array.gender}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${array.id.value}</td>
    <td>${array.name.value}</td>
    <td>${array.status.value}</td>
    <td>${array.species.value}</td>
    <td>${array.type.values}</td>
    <td>${array.gender.value}</td>
  </tr>
</tbody>
</table>`;
`</div>`;
tablaContenidos.innerHTML = tablaHtml;
}
showTable();

objeto.map((array, index) => (
      id={array.id}
      name={array.name}
      status={array.status}
      species={array.species}
      type={array.type}
      gender={array.gender}
  ));
  for(let first of second) {third}