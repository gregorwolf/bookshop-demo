require("dotenv").config();
const { product0002 } = require("./PRODUCT_0002/service");

const destination = { destinationName: "S4H" };

async function readAllProducts() {
  const { productApi, productDescriptionApi } = product0002();
  const products = await productApi
    .requestBuilder()
    .getAll()
    .select(productApi.schema.PRODUCT, productApi.schema.ITEM_CATEGORY_GROUP)
    .expand(
      productApi.schema.PRODUCT_DESCRIPTION.select(
        productDescriptionApi.schema.LANGUAGE,
        productDescriptionApi.schema.PRODUCT_DESCRIPTION
      ).filter(productDescriptionApi.schema.LANGUAGE.equals("EN"))
    )
    .top(2)
    .execute(destination);
  console.log("Number of Results: " + products.length);
  console.dir(products, { depth: null });
}

readAllProducts();
