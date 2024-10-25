const productDiv = document.querySelector('#product');

async function getProduct(){
    //C:\Users\Samuel Mercado\wdd231\EnglishInstitute\data\cardsInformation.json
    try{
         
        const response = await fetch('./data/cardsInformation.json');
        if(response.ok){
            const data = await response.json();
            console.log(data.products);
            displayCards( data.products, productDiv);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error)
    }
}


const comments = document.querySelector('#comments');

async function getReview(){
    try{
        const response = await fetch('./data/cardsInformation.json'); 
        if(response.ok){
            const data = await response.json();
            console.log(data.reviews)
            displayCards(data.reviews, comments);
        }else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

const displayCards = (d , a) =>{
    // console.log(d);
    if (a != comments){
        d.forEach(element => {
            //create elements
            let card = document.createElement('div');
            let cardImg = document.createElement('img');
            let cardTitle = document.createElement('h5');
            let cardPargf = document.createElement('p')
    
            card.classList.add('content-flex-column');
            card.classList.add('card');
            cardPargf.classList.add('paragraph')
    
            //populateelements
            cardImg.src = `${element.image}`;
            cardImg.loading = "lazy";
            cardTitle.innerHTML = `${element.title}`;
            cardPargf.innerHTML = `${element.description}`;
    
            //append
    
            card.appendChild(cardImg);
            card.appendChild(cardTitle);
            card.appendChild(cardPargf);
    
            a.appendChild(card);
        });
    } else{
         //create elements
         d.forEach(element =>{
            let card = document.createElement('div');
         let imgTextContainer = document.createElement('div');

         let cardImg = document.createElement('img');
         let cardTitle = document.createElement('h5');
         let cardPargf = document.createElement('p')
        
        imgTextContainer.classList.add('content-flex-row-left');
         card.classList.add('content-flex-column');
         card.classList.add('card');
         cardPargf.classList.add('paragraph')
 
         //populateelements
         cardImg.src = `${element.image}`;
         cardImg.loading = "lazy";
         cardTitle.innerHTML = `${element.name}`;
         cardPargf.innerHTML = `${element.description}`;
 
         //append
 
         imgTextContainer.appendChild(cardImg);
         imgTextContainer.appendChild(cardTitle);
         card.appendChild(imgTextContainer);
         card.appendChild(cardPargf);
 
         a.appendChild(card);
         })
    }
}


getProduct();
getReview();

const pClass = document.getElementsByClassName('paragraph')

//productDiv.addEventListener('mouseover', () => {
//    let paragraphs = document.getElementsByClassName('paragraph');
//    for (let paragraph of paragraphs) {
//        paragraph.style.display = 'block';  
//    }
// });

// productDiv.addEventListener('mouseout', () => {
//     let paragraphs = document.getElementsByClassName('paragraph');
//     for (let paragraph of paragraphs) {
//         paragraph.style.display = 'none';  
//     }
// });
//F:\descargas\wdd231\EnglishInstitute\Images


//display team 