/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

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

window.onload = () => {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap("map");

  // customMap.addUserMarker(user);
  // customMap.addCompanyMarker(company);

  customMap.addMarker(user);
  customMap.addMarker(company);
};
