const noteForm = document.getElementById('noteForm');
const notesContainer = document.getElementById('notesContainer');
let notes = [];

noteForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const text = document.getElementById('noteText').value.trim();
  const priority = parseInt(document.getElementById('notePriority').value);

  if (text && priority >= 1 && priority <= 100) {
    const note = { text, priority };
    notes.push(note);

    // Ordenar por prioridad (menor número = mayor prioridad)
    notes.sort((a, b) => a.priority - b.priority);

    renderNotes();

    // Limpiar inputs
    noteForm.reset();
  }
});

function renderNotes() {
  notesContainer.innerHTML = '';
  notes.forEach(note => {
    const div = document.createElement('div');
    div.classList.add('note');
    div.innerHTML = `<strong>Prioridad: ${note.priority}</strong>${note.text}`;
    notesContainer.appendChild(div);
  });
}