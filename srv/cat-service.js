const { connect } = require("@sap/cds");
const cds = require("@sap/cds");
const metering = require("./metering");

module.exports = async function (srv) {
  const db = await cds.connect.to("db");
  const external = await cds.connect.to("ZPDCDS_SRV");

  srv.on("READ", ["SEPMRA_I_Product_E"], async (req) => {
    const externalTransaction = external.transaction(req);
    try {
      let result = await externalTransaction.run(req.query);
      // result.forEach(cleanObject);
      return result;
    } catch (error) {
      console.error("Error Message: " + error.message);
      if (error.request && error.request.path) {
        console.error("Request Path: " + error.request.path);
      }
    }
  });

  srv.on("getBooks", async (req) => {
    var tx = CatalogService.transaction(req);
    var books = await tx.run(SELECT.from("Books").limit(5));
    return books;
  });

  srv.before("*", "*", (req) => metering.beforeHandler(req));

  srv.before("READ", "Books", async (req) => {
    console.log("before READ Books: " + JSON.stringify(req.data));
    var logonName = req.user.id;
    if (logonName === "error@example.com") {
      req.error(403, `user ${logonName} isn't assigned to any role`);
    } else {
      return;
    }
  });

  srv.after("READ", "Books", (each) => {
    if (typeof each.publisher !== "undefined") {
      if (each.publisher !== null) {
        each.semanticURLtoPublisher =
          "#Publishers-display?ID=" + each.publisher.ID;
      }
      // console.log(each.semanticURLtoPublisher)
    }
  });

  srv.after("READ", "Genres", (each) => {
    each.genreSemanticObject = "genres";
    // console.log("After READ Handler for Genres");
  });

  srv.after("READ", "Orders", (entity, req) => {
    console.log("After READ Handler for Orders");
  });

  srv.on("READ", "UserScopes", async (req) => {
    const users = {
      username: req.user.id,
      is_admin: req.user.is("admin"),
      is_roleadmin: req.user.is("roleadmin"),
      is_booksadmin: req.user.is("booksadmin"),
    };
    console.log("User Attributes: ", req.user.attr);
    return users;
  });

  srv.on("getNumberOfBooksForDynamicTile", (req) => {
    console.log("getNumberOfBooksForDynamicTile: " + JSON.stringify(req.data));
    return {
      icon: "sap-icon://travel-expense",
      info: "Quarter Ends!",
      infoState: "Critical",
      number: "43.33",
      numberDigits: 1,
      numberFactor: "k",
      numberState: "Positive",
      numberUnit: "EUR",
      stateArrow: "Up",
      subtitle: "Quarterly overview",
      title: "Travel Expenses",
    };
  });

  // Sample based on
  // https://blogs.sap.com/2019/04/15/annotated-links-episode-15-of-hands-on-sap-dev-with-qmacro/
  srv.on("hello", (req) => {
    console.log("hello: " + JSON.stringify(req.data));
    return "Hello " + req.data.to;
  });

  srv.on(["updateBook"], "Orders", async (req) => {
    console.log("updateBook - Request Parameters:", req.params[0]);
    const bookOld = await cds.run(
      SELECT.one.from("Books").where("ID", "=", req.params[0])
    );
    const book = await cds.run(
      SELECT.one.from("Books").where("ID", "=", req.params[0])
    );
    book.stock = book.stock + 1;
    book.semanticURLtoPublisher = "Test";
    console.log(book);
    const update = await UPDATE("Books").set(book).where(bookOld);
    console.log(update);
  });

  // Reduce stock of ordered books if available stock suffices
  this.on("submitOrder", async (req) => {
    const { book, amount } = req.data;
    const n = await UPDATE("Books", book)
      .with({ stock: { "-=": amount } })
      .where({ stock: { ">=": amount } });
    n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`);
  });

  this.on("multipleOrders", async (req) => {
    console.log(
      "on INSERT multipleOrders: " + JSON.stringify(req.data.numberOfOrders)
    );
    const service = await cds.connect.to("CatalogService");
    const txService = service.tx(req);
    const { Orders } = service.entities;
    const ordersInput = await txService.run(
      SELECT.from(Orders).limit(req.data.numberOfOrders)
    );
    const orders = [];
    orders.push(UPDATE(Orders).set(line).where(where));
    const updateExcelRS = await txService.run(updates);
    const commitResult = await txService.commit();
  });

  srv.on("INSERT", "Orders", async (req, next) => {
    console.log("on INSERT Orders: " + JSON.stringify(req.data));
    return next();
  });
};
