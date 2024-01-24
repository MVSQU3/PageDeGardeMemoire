var soldes = "Toyota";

function carTypes(nom) {
  return nom === "Honda" ? nom : "Désolé, nous ne vendons pas de " + nom + ".";
}

var voiture = {
  maVoiture: "Saturn",
  getVoiture: carTypes("Honda"),
  spécial: soldes,
};
console.log(voiture.maVoiture); // Saturn
console.log(voiture.getVoiture); // Honda
console.log(voiture.spécial); // Toyota
