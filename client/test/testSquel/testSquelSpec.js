describe('version', function() {
  beforeEach(module('testSquel.services'));

  iit('should return current version', inject(function(version) {
      console.log("zioooo" , version);
      expect(version).toEqual('0.1');
  }));
});
