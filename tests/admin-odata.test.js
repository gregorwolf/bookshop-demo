const project = __dirname + "/.."; // The project's root folder
const cds = require("@sap/cds/lib");
const { GET, expect } = cds.test(project);
const auth = {
  username: "admin",
  password: "",
};
describe("Admin OData Service", () => {
  it("serves $metadata documents in v4", async () => {
    const { headers, status, data } = await GET(`/admin/$metadata`, {
      auth: auth,
    });
    expect(status).to.equal(200);
    expect(headers).to.contain({
      "content-type": "application/xml",
      "odata-version": "4.0",
    });
    expect(data).to.contain(
      '<Annotation Term="Common.Label" String="Currency"/>'
    );
  });

  it("supports $search in multiple fields", async () => {
    const { data } = await GET`/admin/Books ${{
      auth: auth,
      params: { $select: `title` },
    }}`;
    expect(data.value).to.eql([
      { ID: 1, title: "Moby Dick" },
      { ID: 2, title: "1" },
      { ID: 3, title: "true" },
      { ID: 201, title: "Wuthering Heights" },
      { ID: 207, title: "Jane Eyre" },
      { ID: 251, title: "The Raven" },
      { ID: 252, title: "Eleonora" },
      { ID: 271, title: "Catweazle" },
    ]);
  });
});
