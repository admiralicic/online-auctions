exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/client/test/e2e/**/*spec.js']
};