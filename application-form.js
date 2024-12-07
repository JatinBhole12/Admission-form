const form = document.getElementById('app-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Process form data here
});
// assume you have a function to fetch states and districts from an API
function fetchStates(country) {
    // fetch states from API and return a promise
}

function fetchDistricts(state) {
    // fetch districts from API and return a promise
}

// get the country, state, and district dropdowns
const countryDropdown = document.getElementById('country');
const stateDropdown = document.getElementById('state');
const districtDropdown = document.getElementById('district');

// add event listener to country dropdown
countryDropdown.addEventListener('change', (e) => {
    const country = e.target.value;
    fetchStates(country).then((states) => {
        // clear the state dropdown
        stateDropdown.innerHTML = '';
        // add states to the dropdown
        states.forEach((state) => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });
    });
});

// add event listener to state dropdown
stateDropdown.addEventListener('change', (e) => {
    const state = e.target.value;
    fetchDistricts(state).then((districts) => {
        // clear the district dropdown
        districtDropdown.innerHTML = '';
        // add districts to the dropdown
        districts.forEach((district) => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    });
});
document.getElementById('declaration').addEventListener('change', function() {
    const declarationCheckbox = document.getElementById('declaration');
    const nextPageButton = document.getElementById('go-to-next-page-button');
    if (declarationCheckbox.checked) {
        nextPageButton.disabled = false;
    } else {
        nextPageButton.disabled = true;
    }
});
