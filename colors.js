


const colors = ["oranje", "red", "yellow", "blue", "green"];

let text=""

let i = 0
while (i <colors.length){
    console.log (text = colors [i])
    i++
}


for (let i = 0; i <colors.length; i++){

    console.log (text= colors[i])
}


colors.forEach(element => console.log(element));

/* vragen
Hoeveel regels neemt mijn for loop en mijn while loop in beslag? 
while loop: 7 for loop: 4
Hoeveel regels neemt mijn forEach method in beslag? 2

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? 
ik snap beter wat de code gaat doen, 
als er staat 'for each element' neem ik aan dat ie het op elk element gaat toepassen. Het lijkt me ook minder 
omslachtig, want de code hoeft niet te tellen hoeveel elementen het zijn om vervolgens te kunnen stoppen. 
En je hoeft geen stop in te bouwen.

Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch 
die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
antw: ik denk het wel, want het herhaalt iets vanzelf... aan de andere kant, kan dat (lijkt me) handiger met 
objecten, omdat je juist de code voor je kan laten tellen. */

const object = { a: 1, b: 2, c: 3, d: 4, e:5};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


