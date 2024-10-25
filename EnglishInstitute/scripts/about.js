const team = document.querySelector("#team");
const teamContainer = document.querySelector('#teamContainer');
const contactUs = document.querySelector('#contactUs');



function addTitle(title, int){
    titleH= document.createElement('h2')
    titleH.innerHTML= `${title}`
    int.prepend(titleH);
}
async function getTeam(a){
    try{
        const response = await fetch('./data/cardsInformation.json'); 
        if(response.ok){
            const data = await response.json();
            console.log(data.teachers)

            data.teachers.forEach(element => {
                //create elements
                let card = document.createElement('div');
                let cardText = document.createElement('div');
                let cardImg = document.createElement('img');
                let cardTitle = document.createElement('h5');
                let cardPargf = document.createElement('p')
        
                // card.classList.add('content-flex-row');
                card.classList.add('team-card');
                // card.classList.add('content-flex-column');
                cardImg.classList.add('picture');
                cardText.classList.add('textcontainer')
                
        
                //populateelements
                cardImg.src = `${element.image}`;
                cardImg.loading = "lazy";
                cardTitle.innerHTML = `${element.name}`;
                cardPargf.innerHTML = `${element.description}`;
        
                //append
        
                card.appendChild(cardImg);
                cardText.appendChild(cardTitle);
                cardText.appendChild(cardPargf);
                card.appendChild(cardText);
        
                a.appendChild(card);
         } )
        }else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

function getContat(){
    let card = document.createElement('div');
    let qrImg = document.createElement('img');
    let about = document.createElement('div');

    card.classList.add('space-between');
    card.classList.add('contactUs');
    about.classList.add('aboutCourses');

    about.innerHTML=`
    <h4>Para mas informacion en:</h4>
    <ul > 
    <li>Cursos de Ingles Basico</li>
    <li>Cursos de Ingles Intermedio</li>
    <li>Mentorias</li>
    </ul>`
    qrImg.src = './Images/qr.jpg';

    // about.style.padding = '50px';
    qrImg.style.padding = '30px';
    
    card.appendChild(qrImg);
    card.appendChild(about);
 
    contactUs.appendChild(card)
}

addTitle('Nuestro Team', teamContainer);
getTeam(team);
addTitle('Contactanos', contactUs)
getContat();