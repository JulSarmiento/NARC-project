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

  console.log("> Store created");
  console.table(store.dataValues);

  const product = await Product.create({
    name: "Arroz",
    description: "Tienda de la esquina",
    image: "https://picsum.photos/200",
    price: 1000,
    stock: 100,
    subcategoryId: subcategories[0][0].id,
    storeId: store.id,
  });

  console.log("> Product created");
  console.table(product.dataValues);

  const user = await User.create({
    dni: "1357924680",
    name: "Carlos",
    lastname: "López",
    email: "carlosl@example.com",
    birthdate: "1998-09-20",
    password: "abc123xyz",
    phone: "123456789",
    address: "Calle Principal 567, Ciudad, Departamento, Apartamento 404",
    role: false,
    status: true
  });

  console.log("> User created");
  console.table(user.dataValues);

  const cart = await Cart.create({
    userId: user.id,
    storeId: store.id
  });

  await cart.addProduct(product, { through: { count: 2 } }  )

  console.log("> Cart created");
  console.table(cart.dataValues);

  await sequelize.close();

  process.exit(0);
})();
