const galery = document.querySelector('.wireframes');

async function displayGalery(){
    let responce = await fetch("./data/galery.json");
    let data = await responce.json();
    displayImages(data.images);
}

const displayImages = (imgs)=>{
    console.log(imgs);
    imgs.forEach(i =>{
        let photoWireframe = document.createElement('img');

        photoWireframe.src = `${i.url}`

        galery.appendChild(photoWireframe);
    })
}

displayGalery();