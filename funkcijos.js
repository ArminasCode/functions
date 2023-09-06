//Sukurti žemiau nurodytas funkcijas:

//1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
//1.1. Funkcija priima vieną parametrą: žmogaus amžius.
//1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

//2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
//2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
//2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

//3. Funkciją, kuri konvertuoja dienas į savaites:
//3.1. Funkcija priima vieną argumentą: dienų skaičių.
//3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

//4. Funkciją, kuri konvertuoja dienas į metus:
//4.1. Funkcija priima vieną argumentą: dienų skaičių.
//4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

//5. Funkciją, kuri konvertuoja metus į valandas:
//5.1. Funkcija priima vieną argumentą: metų skaičių.
//5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

//6. Funkciją, kuri konvertuoja mėnesius į valandas:
//6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
//6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

//7. Funkciją, kuri konvertuoja mėnesius į minutes:
//7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
//7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.



console.log ('Suns metai') 

function humanToDogYears(humanYears) {
    let dogYears = humanYears * 7
    console.log(humanYears + ' zmogaus metai yra ' + dogYears + '  suns metai')
}

humanToDogYears(25)
humanToDogYears(25)
humanToDogYears(33)

console.log ('perkaitytos knygos') 

function booksToRead(books) {
    let timeToRead = 360 / books
    console.log('Norint perskaityti ' + books + ' knygu reikia ' +  timeToRead + ' dienu')
}
booksToRead(10)
booksToRead(5)
booksToRead(15)


console.log ('Dienos i savaites') 

function daysToWeeks(days) {
    let weeks = days / 7
    console.log(days + ' dienos yra ' + weeks + ' savaites')
}

daysToWeeks(56)
daysToWeeks(49)
daysToWeeks(28)


console.log ('Dienos i metus') 

function daysToYears(days) {
    let years = days / 365
    console.log(days + ' dienos yra ' + years + ' metai')
}
daysToYears(365)
daysToYears(730)
daysToYears(1095)

console.log ('Metus i valandas') 

function yearsToHours(years) {
    let hours = years * 365 * 24
    console.log(years + ' metai yra ' + hours + ' valandos')
}

yearsToHours(1)
yearsToHours(2)
yearsToHours(3)

console.log ('Menesiai i valandas') 

function monthsToHours(months) {
    let hours = months * 30 * 24
    console.log(months + ' menesiai yra ' + hours + ' valandos')
}

monthsToHours(2)
monthsToHours(3)
monthsToHours(4)

console.log ('Menesiai i minutes')

function monthsToMinutes(months) {
    let minutes = months * 30 * 24 * 60
    console.log(months + ' menesiai yra ' + minutes + ' minutes')
}

monthsToMinutes(2)
monthsToMinutes(3)
monthsToMinutes(4)











