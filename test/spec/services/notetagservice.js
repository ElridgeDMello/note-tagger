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
    var testTag = 'test';

    it('is defined', function() {
      expect(noteTagService.addTag).toBeFunction();
    });

    it('defines a tag if it is new', function() {
      var noteId = 'note1';
      var associatedNotesBefore = noteTagService.getAssociatedNotes(testTag);
      expect(associatedNotesBefore).toBeUndefined();

      // when
      noteTagService.addTag(noteId, testTag);

      // then
      expect(noteTagService.getAssociatedNotes(testTag)).toBeArrayOfSize(1);
      expect(noteTagService.getAssociatedNotes(testTag)[0]).toEqual(noteId);
    });

    it('adds multiple notes to a tag', function() {
      var tagBreakfast = 'breakfast',
        noteQuinoa = 'blueberry_quinoa',
        noteOmelet = 'colorado_omelette',
        actual;

      // when
      noteTagService.addTag(noteOmelet, tagBreakfast);
      noteTagService.addTag(noteQuinoa, tagBreakfast);

      // then
      actual = noteTagService.getAssociatedNotes(tagBreakfast);
      expect(actual).toBeArrayOfSize(2);
      expect(actual).toContain(noteOmelet);
      expect(actual).toContain(noteQuinoa);
    });
  });

  describe('the addTags method', function() {

    beforeEach(function() {
      spyOn(noteTagService, 'addTag').and.callThrough();
    });

    it('is defined', function() {
      expect(noteTagService.addTags).toBeFunction();
    });

    it('delegates to addTag method', function() {
      var noteId = 'breakfast quinoa',
        tags = ['sweet', 'healthy'];

      // when
      noteTagService.addTags(noteId, tags);

      // then
      tags.forEach(function(tag) {
        expect(noteTagService.addTag)
          .toHaveBeenCalledWith(noteId, tag);
      });
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
