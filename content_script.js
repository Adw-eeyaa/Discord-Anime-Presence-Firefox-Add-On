
function getAnimeDetails(){
    const titleElement = document.querySelector('h1 a');
    const animeTitle = titleElement ? titleElement.innerText : "Unknown Title";
    const timeElapsed = document.querySelector('.plyr__controls__item.plyr__time--current.plyr__time');
    const totalTime = timeElapsed ? timeElapsed.textContent : "0:00";
    const imageSRC = document.querySelector('theatre-info img');
    const animeImage = imageSRC ? imageSRC.getAttribute('src') : "no image";
    console.log(animeImage);
    const h1Text = document.querySelector("h1");
    let episodeNumber = '';
    if(h1Text){
    h1Text.childNodes.forEach(node =>{
        if(node.nodeType === 3){
            episodeNumber = node.textContent.trim();
        }
    })
}

    return {
        title:animeTitle,
        episode:episodeNumber,
        imageURL:animeImage,
        timestamp:totalTime,


    };
}

browser.runtime.sendMessage(getAnimeDetails());
