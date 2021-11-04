/* 
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/


//constanti
const cards = [
    {
        "nome": 'Wayne Barnett',
        "ruolo": 'Founder & CEO',
        "foto": 'wayne-barnett-founder-ceo.jpg',
    },
    {
        "nome": 'Angela Caroll',
        "ruolo": 'Chief Editor',
        "foto": 'angela-caroll-chief-editor.jpg',
    },
    {
        "nome": 'Walter Gordon',
        "ruolo": 'Office Manager',
        "foto": 'walter-gordon-office-manager.jpg',
    },
    {
        "nome": 'Angela Lopez',
        "ruolo": 'Social Media Manager',
        "foto": 'angela-lopez-social-media-manager.jpg',
    },
    {
        "nome": 'Scott Estrada',
        "ruolo": 'Developer',
        "foto": 'scott-estrada-developer.jpg',
    },
    {
        "nome": 'Barbara Ramos',
        "ruolo": 'Graphic Designer',
        "foto": 'barbara-ramos-graphic-designer.jpg',
    }
]

const sectionTeam = document.querySelector('.team-container')
const addBtn = document.getElementById('addMemberButton')

//creo le card dall'array
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    createTeamsCards(cards[i])
}

//aggiungo una card
addBtn.addEventListener('click', function(){
    const new_obj = {
        "nome": document.getElementById('name').value,
        "ruolo": document.getElementById('role').value,
        "foto": document.getElementById('image').value,
    }
    console.log(new_obj);
    cards.push(new_obj);
    createTeamsCards(new_obj)
    document.getElementById('name').value = ''
    document.getElementById('role').value = ''
    document.getElementById('image').value = ''
})

//funzione per creare le card
function createTeamsCards(obj) {
    sectionTeam.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${obj.foto}"
            alt="${obj.nome}"
            />
        </div>
        <div class="card-text">
            <h3>${obj.nome}</h3>
            <p>${obj.ruolo}</p>
        </div>
    </div>
    `
}