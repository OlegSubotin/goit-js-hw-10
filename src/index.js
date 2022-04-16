import './css/styles.css';
import { onShowCountryList, onShowCountryInfo } from './js/markup.js';
import fetchCountries from './js/fetch-service';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const listEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
    evt.preventDefault();

    let searchCountry = inputEl.value.trim();

    if (searchCountry === '') {
        listEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
        return;
    }

    if (searchCountry) {
        fetchCountries(searchCountry)
            .then(positiveProcessing)
            .catch(errorProcessing);  
    }
}

function positiveProcessing(data) {
    if (data.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        listEl.innerHTML = "";
        countryInfoEl.innerHTML = "";
        return;
    }

    if (data.length >= 2 && data.length <= 10) {
        listEl.innerHTML = data.map(country => onShowCountryList(country)).join('');
        countryInfoEl.innerHTML = '';        
    }

    if (data.length === 1) {
        listEl.innerHTML = '';
        countryInfoEl.innerHTML = data.map(country => onShowCountryInfo(country)).join(''); 
    }
};

function errorProcessing() {
    Notify.failure('Oops, there is no country with that name');
    listEl.innerHTML = '';
    countryInfoEl.innerHTML = "";
}



 

