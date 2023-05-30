const createCategoriesSubcategories = async () => {
  await sequelize.sync({ force: true });

  // Crear categorías y subcategorías
  const comida = await Category.create({ name: 'Comida' });
  const ropa = await Category.create({ name: 'Ropa' });
  const tecnologia = await Category.create({ name: 'Tecnología' });
  const hogar = await Category.create({ name: 'Hogar' });

  const china = await Subcategory.create({ name: 'China', CategoryId: comida.id });
  const asiatica = await Subcategory.create({ name: 'Asiática', CategoryId: comida.id });
  const rapida = await Subcategory.create({ name: 'Rápida', CategoryId: comida.id });
  const pizzas = await Subcategory.create({ name: 'Pizzas', CategoryId: comida.id });
  const hamburguesas = await Subcategory.create({ name: 'Hamburguesas', CategoryId: comida.id });
  const sushi = await Subcategory.create({ name: 'Sushi', CategoryId: comida.id });
  const mexicana = await Subcategory.create({ name: 'Mexicana', CategoryId: comida.id });
  const italiana = await Subcategory.create({ name: 'Italiana', CategoryId: comida.id });

  const mujer = await Subcategory.create({ name: 'Mujer', CategoryId: ropa.id });
  const hombre = await Subcategory.create({ name: 'Hombre', CategoryId: ropa.id });
  const ninos = await Subcategory.create({ name: 'Niños', CategoryId: ropa.id });
  const bebes = await Subcategory.create({ name: 'Bebés', CategoryId: ropa.id });
  const calzado = await Subcategory.create({ name: 'Calzado', CategoryId: ropa.id });
  const accesorios = await Subcategory.create({ name: 'Accesorios', CategoryId: ropa.id });
  
  const televisores = await Subcategory.create({ name: 'Televisores', CategoryId: tecnologia.id });
  const computadores = await Subcategory.create({ name: 'Computadores', CategoryId: tecnologia.id });
  const celulares = await Subcategory.create({ name: 'Celulares', CategoryId: tecnologia.id });
  const tablets = await Subcategory.create({ name: 'Tablets', CategoryId: tecnologia.id });
  const consolas = await Subcategory.create({ name: 'Consolas', CategoryId: tecnologia.id });

  const neveras = await Subcategory.create({ name: 'Neveras', CategoryId: hogar.id });
  const lavadoras = await Subcategory.create({ name: 'Lavadoras', CategoryId: hogar.id });
  const cafeteras = await Subcategory.create({ name: 'Cafeteras', CategoryId: hogar.id });
  const licuadoras = await Subcategory.create({ name: 'Licuadoras', CategoryId: hogar.id });
  const ollas = await Subcategory.create({ name: 'Ollas', CategoryId: hogar.id });
  const cubiertos = await Subcategory.create({ name: 'Cubiertos', CategoryId: hogar.id });
};

export default createCategoriesSubcategories;

