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

        var noteTagMap = {},
            that = this;

        this.addTag = function (noteId, tag) {
            var currentTag;
            currentTag = noteTagMap[tag];
            if (!currentTag) {
                noteTagMap[tag] = {notes: [noteId]};
            } else {
                noteTagMap[tag].notes = noteTagMap[tag].notes.concat(noteId);
            }
            noteTagMap[tag].active = true;
        };

        this.addTags = function (noteId, tags) {
            tags.forEach(function (tag) {
                that.addTag(noteId, tag);
            });
        };

        // function to give state
        this.getAssociatedNotes = function (tag) {
            if (noteTagMap[tag]) {
                return noteTagMap[tag].notes;
            }
        };

        this.getActiveNotes = function () {
            var activeNotes = [];
            keys(noteTagMap).forEach(function (tag) {
                if (noteTagMap[tag].active) {
                    activeNotes = activeNotes.concat(noteTagMap[tag].notes);
                }
            });
            return activeNotes;
        };

        this.activateTags = function (tags) {
            keys(noteTagMap).forEach(function (tag) {
                if (!contains(tags, tag)) {
                    noteTagMap[tag].active = false;
                }
            });
        };

        this.activateAlltags = function() {
            keys(noteTagMap).forEach(function(tag) {
                noteTagMap[tag].active = true;
            });
        };

        function contains(array, value) {
            return array.indexOf(value) !== -1;
        }

        function keys(object) {
            var arrayOfKeys = [], key;
            for (key in object) {
                if (object.hasOwnProperty(key)) {
                    arrayOfKeys.push(key);
                }
            }
            return arrayOfKeys;
        }

    });
