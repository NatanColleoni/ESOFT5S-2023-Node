const v = [
    {id: 1,  nome: "Oi"},
    {id: 2,  nome: "Oi2"},
    {id: 3,  nome: "Oi3"},
    {id: 4,  nome: "Oi4"},
    {id: 5,  nome: "Oi5"},
    {id: 6,  nome: "Oi6"},
    {id: 7,  nome: "Oi7"},
    {id: 8,  nome: "Oi8"},
    {id: 9,  nome: "Oi9"},
    {id: 10, nome: "Oi10"},
]

const randomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

for(i = 0; i < 4; i++)
    console.log(randomElement(v))