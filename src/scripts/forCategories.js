import "dotenv/config.js";

import sequelize from "../utils/postgresql.config.js";
import { Category, Subcategory } from "../models/index.js";

(async function() {
  await sequelize.sync({ force: true });

  console.log("Seeding database...");

  const categories = await Promise.all([
    Category.bulkCreate([
      {name: "Comida"},
      {name: "Ropa"},
      {name: "Tecnología"},
      {name: "Hogar"},
    ]),
  ]);

  const subcategories = [
    ["China", "Asiática", "Rápida", "Pizzas", "Hamburguesas", "Sushi", "Mexicana", "Italiana"],
    ["Mujer", "Hombre", "Niños", "Bebés", "Calzado", "Accesorios"],
    ["Televisores", "Computadores", "Celulares", "Tablets", "Consolas"],
    ["Neveras", "Lavadoras", "Cafeteras", "Licuadoras", "Ollas", "Cubiertos"],
  ]
  
  await Promise.all([
    Subcategory.bulkCreate(subcategories[0].map(subcategory => {
      return {name: subcategory, CategoryId: categories[0][0].id};
    })),
    Subcategory.bulkCreate(subcategories[1].map(subcategory => {
      return {name: subcategory, CategoryId: categories[0][1].id};
    })),
    Subcategory.bulkCreate(subcategories[2].map(subcategory => {
      return {name: subcategory, CategoryId: categories[0][2].id};
    })),
    Subcategory.bulkCreate(subcategories[3].map(subcategory => {
      return {name: subcategory, CategoryId: categories[0][3].id};
    })),
  ]);

  await sequelize.close();

  process.exit(0);
})();