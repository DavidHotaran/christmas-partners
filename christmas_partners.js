const people = [
    {name: 'David', spouse: 'Lydia'},
    {name: 'Lydia', spouse: 'David'},
    {name: 'Caleb', spouse: 'Krista'},
    {name: 'Krista', spouse: 'Caleb'},
    {name: 'Destiny', spouse: 'Travis'},
    {name: 'Travis', spouse: 'Destiny'},
    {name: 'Josiah', spouse: 'Chanel'},
    {name: 'Chanel', spouse: 'Josiah'},
    {name: 'Abigal', spouse: 'Derrick'},
    {name: 'Derrick', spouse: 'Abigal'},
    {name: 'Levi', spouse: 'none'},
    {name: 'Josh', spouse: 'none'},
    {name: 'Luke', spouse: 'none'},
]

const get_partners = () => {
    let partners = []
    let chosen = []
    let avail = []

    for(const person of people){
        
        for(const p of people){
            if(p.name != person.name && p.spouse != person.name && !chosen.includes(p.name)){
                avail.push(p)
            }
        }

        if(avail.length === 0)
            break

        const num = Math.floor(Math.random() * avail.length);
        const other = avail[num]
        partners.push([`${person.name} has ${other.name}`])
        chosen.push(other.name)
        avail = []

    }

    return partners
}

/* Run get_partners() function, display partners, disable clicking button until reset */
$(document).ready(function(){
    $("#get_partners").click(function(){    
        const partners = get_partners()
        console.assert(partners.length === 13)
        for(const i of partners){
            console.log(i)
            $("#partners").append(`<p>${i}</p>`)
        }
        $("#get_partners").attr("disabled", true);
    });
});

/* Reset everything, clear screen of partners, enable "Get Partners!" button */
$(document).ready(function(){
    $("#reset").click(function(){
        $("#partners").empty();
        $("#get_partners").attr("disabled", false);
    });
});
