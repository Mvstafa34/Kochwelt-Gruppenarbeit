async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}


function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch("https://formspree.io/f/xwkdydap", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "../send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}


function multiplyIngredient(receipe) {
  let inputNumber = document.getElementById('inputnumber').value;

  if (inputNumber <= 0) {
    alert("Bitte füge mindestens 1 Portion hinzu");
    return;
  };

  if (receipe == 'baklava') {
    addIngBaklava(inputNumber);
  } else if (receipe == 'salad') {
    addIngSalad(inputNumber);
  } else if (receipe == 'bigmac') {
    addIngBigMac(inputNumber);
  } else if (receipe == 'pizza') {
    addIngPizza(inputNumber);
  }
}


function addIngredient(amount, measure, name) {
  const newRow = document.createElement('tr');
  newRow.innerHTML += `<td><b>${amount} ${measure}</b></td>`;
  newRow.innerHTML += `<td>${name}</td>`;
  document.getElementById('tableIngredient').appendChild(newRow);
}


function addIngSalad(amount) {
  document.getElementById('tableIngredient').innerHTML = '';
  addIngredient((amount * 2), 'Tassen', 'zerkleinertes Römersalat-Herz');
  addIngredient((amount * 1), 'x', '	Hühnerbrust, gegrillt oder gebraten und in Streifen geschnitten');
  addIngredient((amount * 1), 'Scheibe', 'altbackenes oder geröstetes Brot, in kleine Würfel geschnitten');
  addIngredient((amount * 2), 'EL', 'frisch geriebener Parmesankäse');
  addIngredient((amount * 2), 'EL', 'Caesar-Dressing (fertiges oder selbstgemachtes)');
  addIngredient((amount * 1), 'EL', 'Zitronensaft');
  addIngredient((amount * 1), 'EL', 'Olivenöl');
  addIngredient('', 'nach Geschmack', 'Salz und Pfeffer');
}


function addIngBaklava(amount) {
  document.getElementById('tableIngredient').innerHTML = '';
  addIngredient((amount * 125), 'g', 'Filoteig aus dem Kühlregal');
  addIngredient((amount * 70), 'ml', 'Wasser');
  addIngredient((amount * 150), 'g', 'Zucker');
  addIngredient((amount * 50), 'g', 'Honig');
  addIngredient((amount * 50), 'g', 'gehackte Pistazien');
  addIngredient((amount * 120), 'g', 'gehackte Mandeln');
  addIngredient((amount * 120), 'g', 'gehackte Walnüsse');
  addIngredient((amount * 1), 'TL', 'Zimt');
  addIngredient((amount * 125), 'g', 'Flüssige Butter');
  addIngredient((amount * 3), 'EL', 'gehackte Pistazien zum Garnieren');
}


function addIngBigMac(amount) {
  document.getElementById('tableIngredient').innerHTML = '';
  addIngredient((amount * 250), 'g', 'Magerquark');
  addIngredient((amount * 100), 'g', 'geriebener Käse');
  addIngredient((amount * 3), 'x', 'Eier');
  addIngredient((amount * 1), 'TL', 'Pizzagewürz');
  addIngredient((amount * 4), 'x', 'Gewürzgurken');
  addIngredient((amount * 2), 'x', 'Zwiebel');
  addIngredient((amount * 1), 'x', 'Knoblauchzehe');
  addIngredient((amount * 4), 'EL', 'Mayonnaise (light)');
  addIngredient((amount * 1), 'EL', 'Ketchup');
  addIngredient((amount * 1), 'TL', 'Senf');
  addIngredient((amount * 1), 'TL', 'Weißweinessig');
  addIngredient('', 'nach Geschmack', 'Salz und Pfeffer');
  addIngredient((amount * 1), 'TL', 'Olivenöl');
  addIngredient((amount * 150), 'g', 'Rinderhackfleisch ');
  addIngredient((amount * 1), 'x', 'Tomate');
  addIngredient((amount * 2), 'Scheiben', 'Cheddar Schmelzkäse');
  addIngredient((amount * 4), 'x', 'Salatblätter');
}


function addIngPizza(amount) {
  document.getElementById('tableIngredient').innerHTML = '';
  addIngredient((amount * 500), 'g', 'Mehl Typ 550');
  addIngredient((amount * 10), 'g', 'frische Hefe');
  addIngredient((amount * 10), 'g', 'Salz');
  addIngredient((amount * 325), 'ml', 'warmes Wasser');
  addIngredient((amount * 5), 'Prisen', 'Semmelbrösel');
  addIngredient((amount * 200), 'ml', 'passierte oder Eiertomaten, aus der Dose');
  addIngredient((amount * 200), 'g', 'Büffelmozzarella, grob zerkleinert');
  addIngredient((amount * 30), 'g', 'Parmesan, frisch gerieben');
  addIngredient((amount * 4), 'EL', 'Olivenöl');
  addIngredient('', 'nach Geschmack', 'Salz, Zucker und Pfeffer');
}


function toggleMenu() {
  document.getElementById('menuOpen').classList.toggle('d-none');
  document.getElementById('menuClose').classList.toggle('d-none');
  document.getElementById('mobileNav').classList.toggle('d-none');
}


