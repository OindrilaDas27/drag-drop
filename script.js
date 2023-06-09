//Get the draggable items
const draggable = document.querySelectorAll('.item');

//Get the droppable container
const container = document.querySelectorAll('.drop-area');

// Take a snapshot of the first container's items
const draggableItems = document.querySelector('.draggable-items');
const originalItems = Array.from(draggableItems.children);
const snapshotItems = originalItems.map(item => item.cloneNode(true));


//Add dragstart event listener to each draggable item
draggable.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        //Add class name dragging which activated when we drag an item
        draggable.classList.add('dragging');
    })

    //Add event listener for when the event stops to remove the dragging class
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

//Add drag over event litener to the droppable containter to determine the position of the draggable item 
container.forEach(container => {
    container.addEventListener('dragover', e => {
        //Prevent the default behavior of the browser
        e.preventDefault();
        console.log('dragover');

            const drag = document.querySelector('.dragging');
            container.appendChild(drag);
    })
})

function reset() {
    /// Clear the second container
  const dropArea = document.querySelector('.drop-area');
  dropArea.innerHTML = '';

  // Reset the first container to its original state
  const draggableItems = document.querySelector('.draggable-items');
  const originalItems = Array.from(draggableItems.children);

  // Reset the first container to its original state
  draggableItems.innerHTML = '';
  snapshotItems.forEach(item => {
    draggableItems.appendChild(item);
  });
}
