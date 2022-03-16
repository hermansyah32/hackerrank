function vowelsAndConsonants(s) {
    [...s].forEach(char =>{
        if ("aiueo".includes(char)) console.log(char);
    });
    [...s].forEach(char =>{
        if (!'aiueo'.includes(char)) console.log(char);
    });
}