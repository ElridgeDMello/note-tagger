'use strict';

describe('Service: noteTagService', function () {

  // load the service's module
  beforeEach(module('noteTaggerApp'));

  // instantiate service
  var noteTagService;
  beforeEach(inject(function (_noteTagService_) {
    noteTagService = _noteTagService_;
  }));

  it('should do something', function () {
    expect(!!noteTagService).toBe(true);
  });

  describe('the addTags method', function() {

    it('is defined', function() {
      expect(noteTagService.addTags).toBeDefined();
    });
  });

});
