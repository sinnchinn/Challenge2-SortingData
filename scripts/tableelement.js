import { PeopleData } from "./app.js";

async function MakeRow() {

    let newPplData = await PeopleData();

    let tableBody = document.getElementById("tableBody");

    let th = document.createElement("th");
    th.scope = "row";
    th.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";

    let td1= document.createElement("td");
    td1.textContent = newPplData.Id;
    td1.className = "px-6 py-4";

    let td2 = document.createElement("td");
    td2.textContent = newPplData.FirstName;
    td2.className = "px-6 py-4";

    let td3 = document.createElement("td");
    td3.textContent = newPplData.LastName;
    td3.className = "px-6 py-4";

    let td4 = document.createElement("td");
    td4.textContent = newPplData.Email;
    td4.className = "px-6 py-4";

    let td5 = document.createElement("td");
    td5.textContent = newPplData.Age;
    td5.className = "px-6 py-4";

    let td6 = document.createElement("td");
    td6.textContent = newPplData.Height;
    td6.className = "px-6 py-4";

    let tr = document.createElement("tr");
    tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    tableBody.appendChild(tr)

}


{/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th id="pplId" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td id="pplFirstName" class="px-6 py-4">
              Sinatha
            </td>
            <td id="pplLastName" class="px-6 py-4">
              Chin
            </td>
            <td id="pplEmail" class="px-6 py-4">
              sinathachin@gmail.com
            </td>
            <td id="pplAge" class="px-6 py-4">
              26
            </td>
            <td id="pplHeight" class="px-6 py-4">
              5'4
            </td>
          </tr> */}

export { MakeRow }