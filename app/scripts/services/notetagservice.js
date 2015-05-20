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

    this.addTag = function(/*noteId, tag*/) {};

    this.addTags = function(/*noteId, tags*/) {};

    // function to give state
    this.getAssociatedNotes = function(/*tag*/) {

    };

    this.getActiveNotes = function() {

    };

    this.activateTags = function(/*tags*/) {

    };

  });
