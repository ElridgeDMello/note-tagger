'use strict';

describe('Service: noteTagService', function () {

  // load the service's module
  beforeEach(module('noteTaggerApp'));

  // instantiate service
  var noteTagService;
  beforeEach(inject(function (_noteTagService_) {
    noteTagService = _noteTagService_;
  }));

  describe('the addTag method', function() {
    it('is defined', function() {
      expect(noteTagService.addTag).toBeFunction();
    });
  });

  describe('the addTags method', function() {

    it('is defined', function() {
      expect(noteTagService.addTags).toBeFunction();
    });

    it('delegates to addTag method', function() {

    });
  });

  describe('the getActiveNotes method', function() {

    it('is defined', function() {
      expect(noteTagService.getActiveNotes).toBeFunction();
    });
  });

  describe('the activateTags method', function() {

    it('is defined', function() {
      expect(noteTagService.activateTags).toBeFunction();
    });

  });

});
