module.exports = class HelloWorldService {
  hello(req) {
    return `Hello ${req.data.to}!`;
  }
};
