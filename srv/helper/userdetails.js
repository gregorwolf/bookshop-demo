exports.getAuthorizations = (req) => {
  return {
    username: req.user.id,
    is_admin: req.user.is("admin"),
    is_roleadmin: req.user.is("roleadmin"),
    is_booksadmin: req.user.is("booksadmin"),
  };
};

exports.getUserdetails = (req) => {
  const userdetails = {
    username: req.user.id,
  };
  // check for $expand=authorizations
  const expandIndex = req.query.SELECT.columns.findIndex(
    ({ expand, ref }) => expand && ref[0] === "authorizations"
  );
  if (expandIndex < 0) return userdetails;
  userdetails.authorizations = getAuthorizations(req);

  return userdetails;
};
