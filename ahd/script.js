function NewShop(){
    let imgUrl = document.getElementById('inputImg').value ;
    let title = document.getElementById('inputTitle').value ;
    let info = document.getElementById('inputInformation').value ;
    let galleryContainer = document.querySelector('.gallery-container');
    let newDiv = document.createElement('div');
    let newTitle = document.createElement('h1');
    let newImg = document.createElement('img');
    let newInfo = document.createElement('p');
    newImg.classList.add('NewImgAdded')


    newTitle.innerText= title ;
    newInfo.innerText= info ;
    newDiv.appendChild(newTitle) ;
    newImg.src=imgUrl;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInfo);

    galleryContainer.appendChild(newDiv);
}