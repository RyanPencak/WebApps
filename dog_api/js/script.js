var breed_names = ["Affenpinscher", "African", "Airedale", "Akita", "Appenzeller", "Basenji", "Beagle", "Bluetick", "Borzoi", "Bouvier", "Boxer", "Brabancon", "Briard", "Bull Dog", "Bull Terrier", "Cairn", "Chihuahua", "Chow", "Clumber", "Collie", "Coon Hound", "Corgi", "Dachshund", "Dane", "Deer Hound", "Dhole", "Dingo", "Doberman", "Glkhound", "Gntlebucher", "Gskimo", "German Shepherd", "Greyhound", "Groenendael", "Hound", "Husky", "Keeshond", "Kelpie", "Komondor", "Kuvasz", "Labrador", "Leonberg", "Lhasa", "Malamute", "Malinois", "Maltese", "Mastiff", "Mexican Hairless", "Mountain", "Newfoundland", "Otterhound", "Papillon", "Pekinese", "Pembroke", "Pinscher", "Pointer", "Pomeranian", "Poodle", "Pug", "Pyrenees", "Redbone", "Retriever", "Ridgeback", "Rottweiler", "Saluki", "Samoyed", "Schipperke", "Schnauzer", "Setter", "Sheepdog", "Shiba", "Shihtzu", "Spaniel", "Springer", "St. Bernard", "Terrier", "Vizsla", "Weimaraner", "Whippet", "Wolf Hound"];

function menu(breed) {
  this.getDogBreedPic(breed.value);
}

function getBreedList(object) {
  let keys = [];
  for(var breed in object) {
    keys.push(breed);
  }
  return keys;
}

function getRandomDogPic() {
  console.log("loading dog...");
  fetch('https://dog.ceo/api/breeds/image/random')
  .then( res => {
    // console.log(res);
    res.json()
    .then( pic => {
      // console.log(pic.message);
      document.getElementById('dogPic').src = pic.message;
    })
    .catch()
  })
  .catch (error => console.log("ERROR"+error))
}

function getDogBreedPic(breed) {
  console.log("loading dog...");
  fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(res => {
      res.json()
          .then( pic => {
            // console.log(pic.message)
            document.getElementById('dogPic')
              .src = pic.message
          })
    })
    .catch(err => {
      console.log(err);
    });
}

function listDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        res.json()
          .then( data => {
            var options = getBreedList(data.message);
            var select = document.getElementById('selectBreed');

            for(var i = 0; i < options.length; i=i+1) {
              var opt = options[i];
              var elt = document.createElement('option');
              elt.textContent = breed_names[i];
              elt.value = opt;
              select.appendChild(elt);
            }
          })
      })
      .catch(err => {
        console.log(err);
      });
}

document.addEventListener("DOMContentLoaded", listDogBreeds);
