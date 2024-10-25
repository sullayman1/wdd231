const year = document.querySelector("#copy");
const currentYear = new Date().getFullYear();
year.textContent = currentYear

//footer

async function getSocial(){
    let responce = await fetch('./data/cardsInformation.json');
    let data = await responce.json();

    data.social.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('content-flex-row-small');
        let socialImg = document.createElement('img');

        socialImg.src = `${element.image}`;
        socialImg.loading = "lazy";

        card.appendChild(socialImg);

        document.querySelector('#social').appendChild(card);
    });
}

getSocial();