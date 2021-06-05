const imgBox= document.querySelector('.imgBox');
const whiteBox= document.getElementsByClassName('whiteBox');

//Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart',(e)=>{
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(()=>{
        e.target.className = 'hide';
    })
});
imgBox.addEventListener('dragend',(e)=>{
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxs){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('DragOver has been triggered')
    });

    whiteBox.addEventListener('dragenter', ()=>{
        console.log('DragEnter has been triggered')
    });

    whiteBox.addEventListener('dragleave', ()=>{
        console.log('DragLeave has been triggered')
    });

    whiteBox.addEventListener('drop', (e)=>{
        console.log('Drop has been triggered')
        e.target.append(imgBox);
    });
}