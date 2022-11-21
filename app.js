import { array } from "./array-practica";

let objeto = array;
objeto.forEach(function (acc, index) {
  for (let prop in acc) {
    alert(prop + " is " + acc[prop]);
  }
});
function showTable(params) {
  let tablaContenidos = document.querySelector("#tablaObject");

  let tablaHtml = ` <div>
<table>
<thead>
  <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Nationality</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Matt</td>
    <td>Delac</td>
    <td>French</td>
  </tr>
  <tr>
    <td>Amanda</td>
    <td>Smith</td>
    <td>American</td>
  </tr>
</tbody>
</table>`;
  `</div>`;
  tablaContenidos.innerHTML = tablaHtml;
}
showTable();
