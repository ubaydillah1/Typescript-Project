/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

// const person = new User();
// const company = new Company();

// console.log(person);
// console.log(company);
// console.log(google);

// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });

import { CustomMap } from "./CustomMap";

window.onload = () => {
  new CustomMap("map");
};

console.log("LKdsjfl");
