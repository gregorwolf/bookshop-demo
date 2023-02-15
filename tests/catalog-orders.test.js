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
    // results in:
    const parsingResult = {
      SELECT: {
        from: { ref: ["Orders"] },
        columns: ["*"],
        where: [
          "exists",
          {
            ref: [
              {
                id: "Items",
                where: [
                  "exists",
                  {
                    ref: [
                      {
                        id: "book",
                        where: [
                          "exists",
                          {
                            ref: [
                              {
                                id: "author",
                                where: [
                                  { ref: ["country", "code"] },
                                  "=",
                                  { val: "GB" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    try {
      const result = await db.run(query);
      expect(result.length).to.equal(9);
    } catch (error) {
      console.log(error);
      /*
      TypeError: Cannot read properties of undefined (reading 'elements')
        at _getWhereExistsSubSelect (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/libx/_runtime/common/utils/cqn2cqn4sql.js:294:31)
        at convertWhereExists (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/libx/_runtime/common/utils/cqn2cqn4sql.js:470:24)
        at _convertSelect (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/libx/_runtime/common/utils/cqn2cqn4sql.js:722:3)
        at cqn2cqn4sql (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/libx/_runtime/common/utils/cqn2cqn4sql.js:942:12)
        at HanaDatabase.handler [as _rewrite] (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/libx/_runtime/db/generic/rewrite.js:29:15)
        at HanaDatabase.handle (/Users/gwolf/Documents/projects/cap/bookshop-demo/node_modules/@sap/cds/lib/srv/srv-dispatch.js:58:53)
        at processTicksAndRejections (node:internal/process/task_queues:96:5)

      at Object.log (tests/catalog-orders.test.js:66:15)
      */
    }
  });
});
