function menu(breed) {
  this.getDogBreedPic(breed.value);
}

function getRandomDogPic() {
  console.log("loading dog...");
  fetch('https://dog.ceo/api/breeds/image/random')
  .then( res => {
    console.log(res);
    res.json()
    .then( pic => {
      console.log(pic.message);
      document.getElementById('dogPic').src = pic.message;
    })
    .catch()
  })
  .catch (error => console.log("ERROR"+error))
}

function getDogBreedPic(breed) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
      .then(res => {
        res.json()
            .then( pic => {
              console.log(pic.message)
              document.getElementById('dogPic')
                .src = pic.message
            })
      })
      .catch(err => {
        console.log(err);
      });
}

// function listDogBreeds() {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//       .then(res => {
//         // return document.createElement(res);
//         res.json()
//             .then( data => {
//               console.log(data.message);
//               var dogs = document.getElementById("dogList");
//
//               //Add the Options to the DropDownList.
//               for (var i = 0; i < data.length; i++) {
//                 var option = document.createElement("OPTION");
//
//                 //Set Customer Name in Text part.
//                 option.innerHTML = data.message[i].Name;
//
//                 //Set CustomerId in Value part.
//                 option.value = customers[i].CustomerId;
//
//                 //Add the Option element to DropDownList.
//                 ddlCustomers.options.add(option);
//             }
//               // document.write(data);
//               // document.getElementById('dogList')
//               //   .li = data.message
//             })
//       })
//       .catch(err => {
//         console.log(err);
//       });
// }

// document.addEventListener("DOMContentLoaded", populateMenu);
