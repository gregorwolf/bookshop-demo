const project = __dirname + "/.."; // The project's root folder
const cds = require("@sap/cds/lib");
const { exists } = require("@sap/cds/lib/utils/cds-utils");
const { GET, expect } = cds.test(project);

describe("Orders Entity", () => {
  it("supports query for Orders", async () => {
    const db = await cds.connect.to("db");
    const { Orders } = db.entities;
    const result = await SELECT.from(Orders);
    expect(result.length).to.equal(9);
  });
  it("supports query for Orders where the Items contain Books where the Author country_code = 'GB'", async () => {
    const db = await cds.connect.to("db");
    const { Orders } = db.entities;
    // Items/any(item:item/book/any(book:book/author/country_code eq 'GB'))
    const queryString =
      "SELECT FROM Orders {*} WHERE EXISTS Items[EXISTS book[EXISTS author[country.code = 'GB']]]";
    const query = cds.parse.cql(queryString);
    const result = await db.run(query);
    expect(result.length).to.equal(9);
  });
});
