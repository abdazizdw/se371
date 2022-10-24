let initial = 0;

const paintings = [
  {title: "Girl with a pearl earring", artist: "Vermeer", value: 10},
  {title: "Artists Holding a Thristle", artist: "Durer", value: 7},
  {title: "Wheat field with Crows", artist: "Van Gogh", value: 16},
  {title: "Burial at Ornans", artist: "Courbet", value: 18},
  {title: "Wheat field with Crows", artist: "Van Gogh", value: 9}
];

const total = paintings.reduce( (prev, p) => prev + p.value, initial );
console.log( total );

const compareFn = (a, b) => a.value - b.value;

console.log( paintings.sort(compareFn));
