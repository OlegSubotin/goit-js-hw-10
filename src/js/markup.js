export function onShowCountryList ({ flags, name }){
    return `
    <li style="display:flex;">
    <img style="margin-right: 15px;" src="${flags.svg}" alt="${name.official}" width=50/>
    <h2>${name.official}</h2>
    </li>
    `
};

export function onShowCountryInfo ({ flags, name, capital, population, languages}){
    return `
    <div style='display: flex; align-items: center;'>
        <img style="margin-right: 15px;" src='${flags.svg}' alt='${name.official}' width=100 />
        <h2 style="font-size: 36px; font-weight: 700;">${name.official}</h2>
     </div>
    <div style='display: flex; align-items: center;'>
        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Capital:</p>
        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${capital}</span>
    </div>
    <div style='display: flex; align-items: center;'>
        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Population:</p>
        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${population}</span>
    </div>
    <div style='display: flex; align-items: center;'>
        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Languages:</p>
        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${Object.values(languages)}</span>
    </div>
    `
};