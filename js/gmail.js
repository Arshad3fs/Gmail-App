function filterEmails(event){
    const filterText = event.target.value.toLowerCase();    
    console.log(event.target)
    if(!filterText || filterText.trim() === '')
        window.location.reload();    

    applyFilter(filterText);
}

function applyFilter(filterText) {
    const tableRows = document.getElementsByTagName("tr");

    if (tableRows) {
        for (let i = 0; i < tableRows.length; i++) {
            const tableRow = tableRows[i];
            if (!tableRow.getAttribute("data-email").toLowerCase().startsWith(filterText)) {
                tableRow.style.display = "none";
            } else {
                tableRow.style.display = "block";
            }
        }
    }
}

function moreFilters() {    
    const expPanel = document.querySelector("#search-container .expansion-panel");
    if(expPanel){
       expPanel.remove();
    } else {
        const expansionPanel = document.createElement('div');
        expansionPanel.className = "expansion-panel";

        addField('From', expansionPanel);
        addField('To', expansionPanel);
        addField('Subject', expansionPanel);

        const footer = document.createElement('div');
        footer.className = 'panel-footer';

        const button = document.createElement('button');
        button.className = 'action-button';
        button.innerHTML = 'Search';
        button.addEventListener('click', function(){
            const from = document.querySelector('#From');
            applyFilter(from.value);
            moreFilters();
        });
        footer.appendChild(button);

        expansionPanel.appendChild(footer);
        document.getElementById('search-container').appendChild(expansionPanel);

    }
}

function addField(label, expansionPanel){
    const container = document.createElement('div');
    container.className = 'row';

    const labelEl = document.createElement('label');
    labelEl.innerHTML = label;
    labelEl.className = 'label';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-field';
    input.id = label;

    container.appendChild(labelEl);
    container.appendChild(input);
    expansionPanel.appendChild(container);
}
