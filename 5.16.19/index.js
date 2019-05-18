function hide() {
    var hiddendiv=document.getElementById('hideMe');
    // HEADER 
    var heading1=document.createElement('h1');
    heading1.innerHTML='How much wood would a wood chuck chuck if a wood chuck could chuck wood, Ben?';
    heading1.style.textAlign='center';
    hiddendiv.appendChild(heading1);
    // IMAGE
    var image=document.createElement('img');
    image.src='chuck.jpg';
    image.style.textAlign='center';
    image.style.height='400px';
    hiddendiv.appendChild(image);
    // PARA
    var para=document.createElement('p');
    para.innerHTML='Over 9000 is how much wood a wood chuck would chuck if a wood chuck could chuck wood.'
    para.style.fontSize='24px';
    para.style.textAlign='center';
    para.style.backgroundColor='yellow';
    para.style.padding='20rem';
    hiddendiv.appendChild(para);
    // PARA 2  
    var page=document.createElement('p');
    page.innerHTML='What other kind of jokes do you have?';
    page.style.textAlign='center';
    page.style.padding='10rem';
    hiddendiv.appendChild(page);
    // PARA 3
    var pages=document.createElement('p');
    pages.innerHTML='Knock. Knock.';
    pages.style.padding='5rem';
    pages.style.textAlign='center';
    pages.style.backgroundColor='green';
    hiddendiv.appendChild(pages);
    // IMAGE
    var images=document.createElement('img');
    images.src='goodbye.jpg';
    images.style.height='400px';
    hiddendiv.appendChild(images);

    if (hiddendiv.style.display === 'none'){
        hiddendiv.style.display='block';
    } else if (hiddendiv.style.display === 'block'){
        hiddendiv.style.display='none';
    }


    document.getElementById('diss').style.visibility='hidden';

};
