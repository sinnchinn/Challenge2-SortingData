import { MakeRow } from "./tableelement.js";

let btn10 = document.getElementById("btn10");
let btn20 = document.getElementById("btn20");
let btn30 = document.getElementById("btn30");
let btn40 = document.getElementById("btn40");
let btn50 = document.getElementById("btn50");
let btn60 = document.getElementById("btn60");

let tableBody = document.getElementById("tableBody");

let sortId = document.getElementById("sortId");
let sortFirst = document.getElementById("sortFirst");
let sortLast = document.getElementById("sortLast");
let sortEmail = document.getElementById("sortEmail");
let sortAge = document.getElementById("sortAge");


const PeopleData = async () => {
    const promise = await fetch('./data/data.json')
    const data = await promise.json();
    let pplData = data.People;
    return pplData;
}

const pplId = async () => {
    let pplArray = await PeopleData();
    console.log(pplArray);


    pplArray.map(people => {

        let td1 = document.createElement("td");
        td1.textContent = people.Id;
        console.log(td1);
        td1.className = "px-6 py-4";

        let td2 = document.createElement("td");
        td2.textContent = people.FirstName;
        td2.className = "px-6 py-4";

        let td3 = document.createElement("td");
        td3.textContent = people.LastName;
        td3.className = "px-6 py-4";

        let td4 = document.createElement("td");
        td4.textContent = people.Email;
        td4.className = "px-6 py-4";

        let td5 = document.createElement("td");
        td5.textContent = people.Age;
        td5.className = "px-6 py-4";

        let td6 = document.createElement("td");
        td6.textContent = people.Height;
        td6.className = "px-6 py-4";

        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        tableBody.appendChild(tr)
    })
}

const pplFirstName = async () => {
    let pplArray = await PeopleData();

    let pplFirst = pplArray.sort((a, b) => {

        const nameA = a.FirstName.toUpperCase();
        const nameB = b.FirstName.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    })

    console.log(pplArray);


    pplFirst.map(people => {

        let td1= document.createElement("td");
        td1.textContent = people.Id;
        console.log(td1);
        td1.className = "px-6 py-4";
    
        let td2 = document.createElement("td");
        td2.textContent = people.FirstName;
        td2.className = "px-6 py-4";
    
        let td3 = document.createElement("td");
        td3.textContent = people.LastName;
        td3.className = "px-6 py-4";
    
        let td4 = document.createElement("td");
        td4.textContent = people.Email;
        td4.className = "px-6 py-4";
    
        let td5 = document.createElement("td");
        td5.textContent = people.Age;
        td5.className = "px-6 py-4";
    
        let td6 = document.createElement("td");
        td6.textContent = people.Height;
        td6.className = "px-6 py-4";
    
        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        tableBody.appendChild(tr)
    } )

}


const pplLastName = async () => {

    let pplArray = await PeopleData();

    let pplFirst = pplArray.sort((a, b) => {

        const nameA = a.LastName.toUpperCase();
        const nameB = b.LastName.toUpperCase();

        if (nameA > nameB) {
            return -1;
        }

        if (nameA < nameB) {
            return 1;
        }

        return 0;
    })

    console.log(pplArray);

    pplFirst.map(people => {

        let td1= document.createElement("td");
        td1.textContent = people.Id;
        console.log(td1);
        td1.className = "px-6 py-4";
    
        let td2 = document.createElement("td");
        td2.textContent = people.FirstName;
        td2.className = "px-6 py-4";
    
        let td3 = document.createElement("td");
        td3.textContent = people.LastName;
        td3.className = "px-6 py-4";
    
        let td4 = document.createElement("td");
        td4.textContent = people.Email;
        td4.className = "px-6 py-4";
    
        let td5 = document.createElement("td");
        td5.textContent = people.Age;
        td5.className = "px-6 py-4";
    
        let td6 = document.createElement("td");
        td6.textContent = people.Height;
        td6.className = "px-6 py-4";
    
        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        tableBody.appendChild(tr)
    } )

}


const pplEmail = async () => {

    let pplArray = await PeopleData();

    let pplFirst = pplArray.sort((a, b) => {

        const nameA = a.Email.toUpperCase();
        const nameB = b.Email.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    })


    pplFirst.map(people => {
        let td1= document.createElement("td");
        td1.textContent = people.Id;
        console.log(td1);
        td1.className = "px-6 py-4";
    
        let td2 = document.createElement("td");
        td2.textContent = people.FirstName;
        td2.className = "px-6 py-4";
    
        let td3 = document.createElement("td");
        td3.textContent = people.LastName;
        td3.className = "px-6 py-4";
    
        let td4 = document.createElement("td");
        td4.textContent = people.Email;
        td4.className = "px-6 py-4";
    
        let td5 = document.createElement("td");
        td5.textContent = people.Age;
        td5.className = "px-6 py-4";
    
        let td6 = document.createElement("td");
        td6.textContent = people.Height;
        td6.className = "px-6 py-4";
    
        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        tableBody.appendChild(tr)
    } )
}

const pplAge = async () => {
    let pplArray = await PeopleData();

    let pplFirst = pplArray.sort((a, b) => a.Age - b.Age);

    pplFirst.map(people => {
        let td1= document.createElement("td");
        td1.textContent = people.Id;
        console.log(td1);
        td1.className = "px-6 py-4";
    
        let td2 = document.createElement("td");
        td2.textContent = people.FirstName;
        td2.className = "px-6 py-4";
    
        let td3 = document.createElement("td");
        td3.textContent = people.LastName;
        td3.className = "px-6 py-4";
    
        let td4 = document.createElement("td");
        td4.textContent = people.Email;
        td4.className = "px-6 py-4";
    
        let td5 = document.createElement("td");
        td5.textContent = people.Age;
        td5.className = "px-6 py-4";
    
        let td6 = document.createElement("td");
        td6.textContent = people.Height;
        td6.className = "px-6 py-4";
    
        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        tableBody.appendChild(tr)
    })

}

const pplHeight = async () => {
    let pplArray = await PeopleData();

    const pplFirst = pplArray.split(" ").sort(((a, b) => a.Height - b.Height));
    console.log(pplFirst);
}

pplHeight();


PeopleData();


sortId.addEventListener('click', async () => {
    tableBody.textContent = "";
    await pplId();

})

sortFirst.addEventListener('click', async () => {
    tableBody.textContent = "";

    await pplFirstName();
})

sortLast.addEventListener('click', async () => {
    tableBody.textContent = "";

    await pplLastName();
})

sortEmail.addEventListener('click', async () => {
    tableBody.textContent = "";

    await pplEmail();
})

sortAge.addEventListener('click', async () => {
    tableBody.textContent = "";

    await pplAge();
})

sortHeight.addEventListener('click', async () => {
    tableBody.textContent = "";

})

export { PeopleData }
