const profile = {
  name: "alex",
  age: 18,
  coords: {
    lat: 0,
    lng: 5,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const { coords }: { coords: { lat: number; lng: number } } = profile;

const { lat, lng }: { lat: number; lng: number } = coords;
// console.log(lat);

// atau

// const {
//   coords: { lat, lng },
// }: { coords: { lat: number; lng: number } } = profile;

console.log(lat);
console.log(lng);
