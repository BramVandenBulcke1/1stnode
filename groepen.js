verdeel = (datum) => {
    var groep = datum % 7;
    var datum2 = window.prompt("What is your age? JJJJMMDD")
    var groep2 = datum2 % 7
    console.log('Je bent toegevoegd aan groep ' + groep + " " + groep2);
}
verdeel(20200903)