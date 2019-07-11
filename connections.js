var contacts = JSON.stringify([{
    "name": "Jane Doe",
    "position": "Just an Average Doe",
    "email": "jdoe@gmail.com",
    "notes": "who?",
    "linkedin": "https://www.linkedin.com"
}, { 
    "name": "John Doe",
    "position": "The even more boring one",
    "email": "john@gmail.com",
    "notes": "Again, Who?",
    "linkedin": "https://www.linkedin.com"
}, {
    "name": "John Smith",
    "position": "The other john",
    "email": "theotherjohn@gmail.com",
    "notes": "Johnnnn",
    "linkedin": "https://www.linkedin.com"
}, {
    "name": "Jane Smith",
    "position": "The other jane",
    "email": "theotherjane@gmail.com",
    "notes": "Jannneeee",
    "linkedin": "https://www.linkedin.com"
},]);


window.onload = function() {
    var data = JSON.parse(contacts);
   
    var container = document.getElementById('contacts')
    var rowNum = 0;
    data.forEach(function(result, idx) {
        // If there are already three cards on a row, create a new row
        if (idx % 3 == 0) {
            rowNum++;
            var row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('id', 'row-' + rowNum);
            document.getElementById("contacts").appendChild(row);
        }
        
        var currentRow = document.getElementById('row-' + rowNum);
        container.appendChild(currentRow);
        
        var col = document.createElement('div');
        col.classList.add('col-md-4');

        // Add column to row and reset parent to be the column
        currentRow.appendChild(col);
        
        // Create the card
        createCard(col, result, idx);
    });
};

function createCard(col, result, idx) {
    // Create the accordion container
    var accordion = document.createElement('div');
    accordion.setAttribute('id', 'accordion-' + idx);
    col.appendChild(accordion);
    
    // Create the card
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', result.name);
    accordion.appendChild(card);
    
    // Create the heading button containing the name
    var header = document.createElement('div');
    header.classList.add('card-header');
    header.setAttribute('id', 'heading-' + idx);
    card.appendChild(header)
    
    // Create the button for the name and add to header
    var title = document.createElement('h5');
    title.classList.add('mb-0');
    header.appendChild(title);
    
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('btn-link');
    btn.classList.add('collapsed');
    btn.setAttribute('data-toggle', 'collapse');
    btn.setAttribute('data-target', '#collapse-' + idx);
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'collapse-' + idx);
    btn.innerHTML = result.name;
    title.appendChild(btn);
    
    // Create the wrapper for what collapse, then show
    var hidden = document.createElement('div');
    hidden.classList.add('collapse');
    //hidden.classList.add('show');
    hidden.setAttribute('id', 'collapse-' + idx);
    hidden.setAttribute('aria-labelledby', 'heading-' + idx);
    hidden.setAttribute('data-parent', '#accordion-' + idx);
    card.appendChild(hidden)
    

    // Create the first card body
    var cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body');
    cardBody1.setAttribute('id', 'info')
    hidden.appendChild(cardBody1);

//    // Create subtitle and add to cardBody1
    var subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle');
    subtitle.classList.add('mb-2');
    subtitle.classList.add('text-muted');
    subtitle.innerHTML = result.position;
    cardBody1.appendChild(subtitle);

    // Create the list of contacts and add to cardBody1
    var list = document.createElement('ul');
    list.classList.add('list-group');
    list.classList.add('list-group-flush');
    cardBody1.appendChild(list);

    var email = document.createElement('li');
    email.classList.add('list-group-item');
    email.innerHTML = 'email: ' + result.email;
    list.appendChild(email);

    var notes = document.createElement('li');
    notes.classList.add('list-group-item');
    notes.innerHTML = 'notes: ' + result.notes;
    list.appendChild(notes);

    // Create the section for the links
    var cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body');
    cardBody2.setAttribute('id', 'links')
    hidden.appendChild(cardBody2);

    // Create and add the links
    var linkedin = document.createElement('a');
    linkedin.classList.add('card-link');
    linkedin.setAttribute('id', 'linkedin');
    linkedin.setAttribute('href', result.linkedin);
    var icon = document.createElement('img');
    icon.setAttribute('src', 'icon.png');
    icon.setAttribute('id', 'icon');
    linkedin.appendChild(icon);
    cardBody2.appendChild(linkedin);
};