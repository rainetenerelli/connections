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
        createCard(col, result);
    });
};

function createCard(col, result) {
    // Create the card
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', result.name);
    col.appendChild(card);

    // Create the first card body
    var cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body');
    cardBody1.setAttribute('id', 'info')
    card.appendChild(cardBody1);

    // Create title and add to cardBody1
    var title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = result.name;
    cardBody1.appendChild(title);

    // Create subtitle and add to cardBody1
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
    card.appendChild(cardBody2);

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