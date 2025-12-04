const productos = [

  {
    id: 1,
    nombre: "Notebook Lenovo Ideapad 3",
    categoria: "Notebooks",
    descripcion: "Intel i5, 8GB RAM, 512GB SSD",
    precio: 75000,
    stock: 10,
    img: "https://i.postimg.cc/NG7GvFNt/producto1.png"
  },
  {
    id: 2,
    nombre: "MacBook Air M2",
    categoria: "Notebooks",
    descripcion: "Chip Apple M2, 8GB RAM, 256GB SSD",
    precio: 220000,
    stock: 5,
    img: "https://i.postimg.cc/wB736z1F/producto2-removebg-preview.png"
  },


  {
    id: 3,
    nombre: "PC Gamer Dell",
    categoria: "PCs",
    descripcion: "AMD Ryzen 7, 16GB RAM, RTX 3060, SSD 1TB",
    precio: 180000,
    stock: 5,
    img: "https://i.postimg.cc/s1dgmGKC/producto4-removebg-preview.png"
  },
  {
    id: 4,
    nombre: "PC Office Lenovo",
    categoria: "PCs",
    descripcion: "Intel i5, 8GB RAM, SSD 512GB",
    precio: 85000,
    stock: 12,
    img: " https://i.postimg.cc/s1dgmGKC/producto4-removebg-preview.png"
  },

  {
    id: 5,
    nombre: "Placa Madre ASUS B550",
    categoria: "Componentes",
    descripcion: "Compatible con AMD Ryzen",
    precio: 20000,
    stock: 8,
    img: "https://i.postimg.cc/15BzwX6r/producto5.png"
  },
  {
    id: 6,
    nombre: "Tarjeta Gráfica RTX 3060",
    categoria: "Componentes",
    descripcion: "12GB GDDR6, ideal para gaming y diseño",
    precio: 120000,
    stock: 3,
    img: "https://i.postimg.cc/VLm6JnS6/producto6.png"
  },


  {
    id: 7,
    nombre: "Teclado Mecánico Logitech",
    categoria: "Periféricos",
    descripcion: "RGB, switches azules",
    precio: 12000,
    stock: 15,
    img: "https://i.postimg.cc/j2QS8d1W/producto7.png"
  },
  {
    id: 8,
    nombre: "Mouse Gamer Razer",
    categoria: "Periféricos",
    descripcion: "Sensor óptico 16000 DPI, RGB",
    precio: 9000,
    stock: 20,
    img: "https://i.postimg.cc/RFJ3Tm9K/producto8-removebg-preview.png"
  },

  {
    id: 9,
    nombre: "Monitor LG 27'' 4K",
    categoria: "Periféricos",
    descripcion: "Pantalla IPS, 4K, 60Hz",
    precio: 45000,
    stock: 6,
    img: "https://i.postimg.cc/J4VXPssz/producto9-removebg-preview-1.png"
  },
  {
    id: 10,
    nombre: "Auriculares HyperX",
    categoria: "Periféricos",
    descripcion: "USB, sonido envolvente, microfono",
    precio: 8000,
    stock: 10,
    img: "https://i.postimg.cc/VkzCP29h/producto9-removebg-preview.png"
  }
];

export const getProducts = () =>{
  let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(error){
          reject('Hubo un error, Intente mas tarde')
        }else{
          resolve(productos)
        }

      },2000)
    })
}

export const getOneProduct = (id) => {
console.log("ID recibido:", id, "tipo:", typeof id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      let prod = productos.find((prod) => prod.id === id)
      resolve(prod)
    }, 2000)
  })

}