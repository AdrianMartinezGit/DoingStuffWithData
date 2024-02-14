const sortByIdBtn = document.getElementById('sortByIdBtn');
const sortByFirstnameBtn = document.getElementById('sortByFirstnameBtn');
const sortByLastnameBtn = document.getElementById('sortByLastnameBtn');
const sortByEmailBtn = document.getElementById('sortByEmailBtn');
const sortByAgeBtn = document.getElementById('sortByAgeBtn');
const sortByHeightBtn = document.getElementById('sortByHeightBtn');

const display10ResultsBtn = document.getElementById('display10ResultsBtn');
const display20ResultsBtn = document.getElementById('display20ResultsBtn');
const display30ResultsBtn = document.getElementById('display30ResultsBtn');
const display40ResultsBtn = document.getElementById('display40ResultsBtn');
const display50ResultsBtn = document.getElementById('display50ResultsBtn');

const displayResultsDiv = document.getElementById('displayResultsDiv');

let displayResultsInt = 100;
let sortType = 'id';

let sortIdToggle = false;
let sortFNameToggle = false;
let sortLNameToggle = false;
let sortEmailToggle = false;
let sortAgeToggle = false;
let sortHeightToggle = false;

const fetchData = async () => {
    const promise = await fetch('./data/data.json');
    const response = await promise.json();

    console.log(response);

    return response;
}

const createListElements = async () => {
    displayResultsDiv.innerHTML = '';

    let data = await fetchData();

    switch (sortType)
    {
        case 'id':
            if (!sortIdToggle) {
                data.People.sort((a, b) => (a.Id > b.Id ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.Id > b.Id ? -1 : 1));
            }
        break;

        case 'firstname':
            if (!sortFNameToggle) {
                data.People.sort((a, b) => (a.FirstName > b.FirstName ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.FirstName > b.FirstName ? -1 : 1));
            }
        break;

        case 'lastname':
            if (!sortLNameToggle) {
                data.People.sort((a, b) => (a.LastName > b.LastName ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.LastName > b.LastName ? -1 : 1));
            }
        break;

        case 'email':
            if (!sortEmailToggle) {
                data.People.sort((a, b) => (a.Email > b.Email ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.Email > b.Email ? -1 : 1));
            }
        break;

        case 'age':
            if (!sortAgeToggle) {
                data.People.sort((a, b) => (a.Age > b.Age ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.Age > b.Age ? -1 : 1));
            }
        break;

        case 'height':
            if (!sortHeightToggle) {
                data.People.sort((a, b) => (a.Height > b.Height ? 1 : -1));
            } else {
                data.People.sort((a, b) => (a.Height > b.Height ? -1 : 1));
            }
        break;
    }
    console.log(data);

    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.className = 'flex justify-center align-middle p-4 text-left text-white';
    div2.className = 'grid grid-cols-6 text-center';

    let p1 = document.createElement('p');
    p1.className = 'w-16 font-bold';
    p1.textContent = 'Id'

    let p2 = document.createElement('p');
    p2.className = 'w-32 font-bold';
    p2.textContent = 'First Name'

    let p3 = document.createElement('p');
    p3.className = 'w-48 font-bold';
    p3.textContent = 'Last Name'

    let p4 = document.createElement('p');
    p4.className = 'w-64 font-bold';
    p4.textContent = 'Email'

    let p5 = document.createElement('p');
    p5.className = 'w-16 font-bold';
    p5.textContent = 'Age'

    let p6 = document.createElement('p');
    p6.className = 'w-32 font-bold';
    p6.textContent = 'Height'

    let hr = document.createElement('hr');

    displayResultsDiv.append(div1);
    div1.append(div2);
    div2.append(p1);
    div2.append(p2);
    div2.append(p3);
    div2.append(p4);
    div2.append(p5);
    div2.append(p6);
    displayResultsDiv.append(hr);

    data.People.map((element, index) => {
        if (index >= displayResultsInt) 
            return;

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        div1.className = 'flex justify-center align-middle p-4 text-left text-white';
        div2.className = 'grid grid-cols-6 text-center';

        let p1 = document.createElement('p');
        p1.className = 'w-16';
        p1.textContent = element.Id;

        let p2 = document.createElement('p');
        p2.className = 'w-32';
        p2.textContent = element.FirstName;

        let p3 = document.createElement('p');
        p3.className = 'w-48';
        p3.textContent = element.LastName;

        let p4 = document.createElement('p');
        p4.className = 'w-64';
        p4.textContent = element.Email;

        let p5 = document.createElement('p');
        p5.className = 'w-16';
        p5.textContent = element.Age;

        let p6 = document.createElement('p');
        p6.className = 'w-32';
        p6.textContent = element.Height;

        displayResultsDiv.append(div1);
        div1.append(div2);
        div2.append(p1);
        div2.append(p2);
        div2.append(p3);
        div2.append(p4);
        div2.append(p5);
        div2.append(p6);
    });
}

createListElements();

display10ResultsBtn.addEventListener('click', () => {
    displayResultsInt = 10;
    createListElements();
    //console.log(displayResultsInt);
});
display20ResultsBtn.addEventListener('click', () => {
    displayResultsInt = 20;
    createListElements();
    //console.log(displayResultsInt);
});
display30ResultsBtn.addEventListener('click', () => {
    displayResultsInt = 30;
    createListElements();
    //console.log(displayResultsInt);
});
display40ResultsBtn.addEventListener('click', () => {
    displayResultsInt = 40;
    createListElements();
    //console.log(displayResultsInt);
});
display50ResultsBtn.addEventListener('click', () => {
    displayResultsInt = 50;
    createListElements();
    //console.log(displayResultsInt);
});


sortByIdBtn.addEventListener('click', () => {
    sortType = 'id';
    sortIdToggle = !sortIdToggle;
    createListElements();
});
sortByFirstnameBtn.addEventListener('click', () => {
    sortType = 'firstname';
    sortFNameToggle = !sortFNameToggle;
    createListElements();
});
sortByLastnameBtn.addEventListener('click', () => {
    sortType = 'lastname';
    sortLNameToggle = !sortLNameToggle;
    createListElements();
});
sortByEmailBtn.addEventListener('click', () => {
    sortType = 'email';
    sortEmailToggle = !sortEmailToggle;
    createListElements();
});
sortByAgeBtn.addEventListener('click', () => {
    sortType = 'age';
    sortAgeToggle = !sortAgeToggle;
    createListElements();
});
sortByHeightBtn.addEventListener('click', () => {
    sortType = 'height';
    sortHeightToggle = !sortHeightToggle;
    createListElements();
});