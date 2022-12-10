let people = [];

document.getElementById("add-btn").addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let relationship = document.getElementById("relationship").value;

    if (name === '') {
        document.getElementById("name").style.borderColor = 'red';
        return;
    } else {
        people.push({ 'name': name, spouse: relationship === '' ? 'none' : relationship });
        document.getElementById("name").value = '';
        document.getElementById("relationship").value = '';
        let newElement = document.createElement("p");
        newElement.className = '';
        newElement.innerText = `Name: ${name} - Spouse: ${relationship === '' ? 'none' : relationship}`
        document.getElementById("participants").append(newElement);
    };
});

document.getElementById("get-partners").addEventListener('click', () => {
    let partners = [];
    let chosen = [];
    let avail = [];

    for (const person of people) {
        for (const p of people) {
            if (p.name != person.name && p.spouse != person.name && !chosen.includes(p.name)) {
                avail.push(p);
            };
        };

        if (avail.length === 0) break;

        const num = Math.floor(Math.random() * avail.length);
        const other = avail[num];
        partners.push([`${person.name} has ${other.name}`]);
        chosen.push(other.name);
        avail = [];
    };
    
    document.getElementById('partners-container').classList.remove('hide');
    partners.forEach(partner => {
        let newElement = document.createElement("p");
        newElement.className = '';
        newElement.innerText = partner;
        document.getElementById("partners").append(newElement);
    });
    document.getElementById("get-partners").setAttribute("disabled",true);
    document.getElementById("get-partners").classList.add('btn-disable');
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById("name").value = '';
    document.getElementById("relationship").value = '';
    document.getElementById("participants").innerText = "";
    document.getElementById('partners-container').classList.add('hide');
    document.getElementById("get-partners").removeAttribute("disabled");
    document.getElementById("get-partners").classList.remove('btn-disable');
    people = [];
    let partners = document.getElementById("partners");
    while (partners.hasChildNodes()) {
        partners.removeChild(partners.firstChild);
      };
});