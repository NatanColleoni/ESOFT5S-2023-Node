document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const tbody = document.getElementById("tbody")
    
    const tr = document.createElement("tr")
    
    const tdname = document.createElement("td")
    tdname.textContent = event.target.name.value
    
    const tdemail = document.createElement("td")
    tdemail.textContent = event.target.email.value
    
    tr.appendChild(tdname)
    tr.appendChild(tdemail)
    tbody.appendChild(tr)
})