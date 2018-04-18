console.log('Starting app.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Yargs:', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(note) {
    console.log('Your note was successfully added');
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

  } else {
    console.log('Note title already taken.');
  }

} else if (command === 'list') {
  notes.getAll();

} else  if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);


  var message = noteRemoved ? 'Note was removed' : 'Note not found.';
  console.log(message);

  notes.removeNote(argv.title);

} else if (command === 'read') {
  let noteFound = notes.getNote(argv.title);

  var message = noteFound ? `Your note was found: Title: ${noteFound.title} | Body: ${noteFound.body}` : 'That note does not exist.';
  console.log(message);
} else {
  console.log('Command not recognized');
}
