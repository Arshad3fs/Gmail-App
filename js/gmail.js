function filterEmails(event){
    const filterText = event.target.value.toLowerCase();    
    
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
