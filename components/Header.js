// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerClass = document.createElement('div');
    const date = document.createElement('span');
    const mainHeader = document.createElement('h1');
    const temperature = document.createElement('span');

    headerClass.appendChild(date);
    headerClass.appendChild(mainHeader);
    headerClass.appendChild(temperature);

    headerClass.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    date.textContent = 'MARCH 28, 2020';
    mainHeader.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    return headerClass;
}
console.log(Header());

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
