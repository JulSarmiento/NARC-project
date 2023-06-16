import "dotenv/config.js";

import sequelize from "../utils/postgresql.config.js";
import { Category, Product, Store, Subcategory, Cart, User } from "../models/index.js";

(async function () {
  await sequelize.drop({ cascade: true, force: true });
  await sequelize.sync();

  console.log("Seeding database...");

  const categories = await Category.bulkCreate([
    { name: "Comida" },
    { name: "Ropa" },
    { name: "Tecnología" },
    { name: "Hogar" },
  ]);

  console.log("> Categories created");
  console.table(categories.map((category) => category.dataValues));

  const names = [
    [
      "China",
      "Asiática",
      "Rápida",
      "Pizzas",
      "Hamburguesas",
      "Sushi",
      "Mexicana",
      "Italiana",
    ],
    ["Mujer", "Hombre", "Niños", "Bebés", "Calzado", "Accesorios"],
    ["Televisores", "Computadores", "Celulares", "Tablets", "Consolas"],
    ["Neveras", "Lavadoras", "Cafeteras", "Licuadoras", "Ollas", "Cubiertos"],
  ];

  const subcategories = await Promise.all(
    names.map((name, i) =>
      Subcategory.bulkCreate(
        name.map((subcategory) => ({
          name: subcategory,
          categoryId: categories[i].id,
        }))
      )
    )
  );

  console.log("> Subcategories created");
  console.table(
    subcategories.map((subcategory) => subcategory.map((sub) => sub.dataValues))
  );

  const store = await Store.create({
    name: "Tienda de la esquina",
    categoryId: categories[0].id,
    image: "https://picsum.photos/200",
  });

  const store2 = await Store.create({
    name: 'Fashion Boutique',
    categoryId: categories[2].id,
    image: 'https://picsum.photos/200',
  });
  
  const store3 = await Store.create({
    name: 'Electronics World',
    categoryId: categories[1].id,
    image: 'https://picsum.photos/200',
  });

  console.log("> Store created");
  console.table(store.dataValues);
  console.table(store2.dataValues);
  console.table(store3.dataValues);

  const product1 = await Product.create({
    name: "Arroz",
    description: "Tienda de la esquina",
    image: "https://picsum.photos/200",
    price: 1000,
    stock: 100,
    subcategoryId: subcategories[0][0].id,
    storeId: store.id,
  });

  const product2 = await Product.create({
    name: 'Leche',
    description: 'Producto lácteo',
    image: 'https://picsum.photos/200',
    price: 500,
    stock: 50,
    subcategoryId: subcategories[0][0].id,
    storeId: store.id,
  });
  
  const product3 = await Product.create({
    name: 'Pan',
    description: 'Pan fresco del día',
    image: 'https://picsum.photos/200',
    price: 200,
    stock: 20,
    subcategoryId: subcategories[0][0].id,
    storeId: store.id,
  });

  const product4 = await Product.create({
    name: 'Camiseta',
    description: 'Camiseta de algodón para hombre',
    image: 'https://picsum.photos/200',
    price: 1500,
    stock: 30,
    subcategoryId: subcategories[1][0].id,
    storeId: store2.id,
  });
  
  const product5 = await Product.create({
    name: 'Pantalón',
    description: 'Pantalón vaquero para mujer',
    image: 'https://picsum.photos/200',
    price: 2500,
    stock: 20,
    subcategoryId: subcategories[1][0].id,
    storeId: store2.id,
  });
  
  const product6 = await Product.create({
    name: 'Vestido',
    description: 'Vestido elegante para ocasiones especiales',
    image: 'https://picsum.photos/200',
    price: 3500,
    stock: 15,
    subcategoryId: subcategories[1][0].id,
    storeId: store2.id,
  });

  const product7 = await Product.create({
    name: 'Laptop',
    description: 'Laptop de última generación con procesador i7',
    image: 'https://picsum.photos/200',
    price: 50000,
    stock: 10,
    subcategoryId: subcategories[2][0].id,
    storeId: store3.id,
  });
  
  const product8 = await Product.create({
    name: 'Smartphone',
    description: 'Teléfono inteligente con cámara de alta resolución',
    image: 'https://picsum.photos/200',
    price: 25000,
    stock: 20,
    subcategoryId: subcategories[2][0].id,
    storeId: store3.id,
  });
  
  const product9 = await Product.create({
    name: 'Auriculares inalámbricos',
    description: 'Auriculares con cancelación de ruido y conexión Bluetooth',
    image: 'https://picsum.photos/200',
    price: 5000,
    stock: 50,
    subcategoryId: subcategories[2][0].id,
    storeId: store3.id,
  });

  console.log("> Product created");
  console.table(product1.dataValues);
  console.table(product2.dataValues);
  console.table(product3.dataValues);
  console.table(product4.dataValues);
  console.table(product5.dataValues);
  console.table(product6.dataValues);
  console.table(product7.dataValues);
  console.table(product8.dataValues);
  console.table(product9.dataValues);
    

  const userClient = await User.create({
    dni: "1357924680",
    name: "Carlos",
    lastname: "López",
    email: "carlosl@example.com",
    birthdate: "1998-09-20",
    password: "1234567",
    phone: "123456789",
    address: "Calle Principal 567, Ciudad, Departamento, Apartamento 404",
    role: "client",
    status: true
  });

  const userSeller = await User.create({
    dni: '2468135790',
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juanp@example.com',
    birthdate: '1990-05-15',
    password: 'password123',
    phone: '987654321',
    address: 'Avenida Principal 123, Ciudad, Departamento',
    role: 'seller',
    status: true,
  });

  console.log("> User created");
  console.table(userClient.dataValues);
  console.table(userSeller.dataValues);

  const cart = await Cart.create({
    userId: userClient.id,
    storeId: store.id
  });

  await cart.addProduct(product1, { through: { count: 2 } }  )

  console.log("> Cart created");
  console.table(cart.dataValues);

  await sequelize.close();

  process.exit(0);
})();
