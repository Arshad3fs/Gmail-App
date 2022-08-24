function filterEmails(event){
    const filterText = event.target.value.toLowerCase();    
    console.log(event.target)
    if(!filterText || filterText.trim() === '')
        window.location.reload();    

    const tableRows = document.getElementsByTagName("tr");
    
    if(tableRows) {

        for(let i=0; i<tableRows.length; i++){            
            const tableRow = tableRows[i];
            if(!tableRow.getAttribute("data-email").toLowerCase().startsWith(filterText)){
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
        const divContainerEl = document.createElement('div');
        divContainerEl.className = "expansion-panel";

        addField('From', divContainerEl);
        addField('To', divContainerEl);
        addField('Subject', divContainerEl);

        document.getElementById('search-container').appendChild(divContainerEl);
    }
}

function addField(label, divContainerEl){
    const container = document.createElement('div');
    container.className = 'row';

    const labelEl = document.createElement('label');
    labelEl.innerHTML = label;
    labelEl.className = 'label';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-field';

    container.appendChild(labelEl);
    container.appendChild(input);
    divContainerEl.appendChild(container);
}
