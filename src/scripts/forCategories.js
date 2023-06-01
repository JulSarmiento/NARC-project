import "dotenv/config.js";

import sequelize from "../utils/postgresql.config.js";
import { Category, Product, Store, Subcategory } from "../models/index.js";

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

  await sequelize.close();

  process.exit(0);
})();
