'use strict';

/**
 * @ngdoc service
 * @name noteTaggerApp.noteTagService
 * @description
 * # noteTagService
 * Service in the noteTaggerApp.
 */
angular.module('noteTaggerApp')
  .service('noteTagService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var noteTagMap = {};

    this.addTag = function(noteId, tag) {
      var currentTag, currentNotes;
      currentTag = noteTagMap[tag];
      if (!currentTag) {
        noteTagMap[tag] = { notes: [noteId] };
      }
    };

    this.addTags = function(/*noteId, tags*/) {};

    // function to give state
    this.getAssociatedNotes = function(tag) {
      if (noteTagMap[tag]) {
        return noteTagMap[tag].notes;
      }
    };

    this.getActiveNotes = function() {

    };

    this.activateTags = function(/*tags*/) {

    };

  });
