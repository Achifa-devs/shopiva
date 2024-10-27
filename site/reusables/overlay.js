function entrepreneur_overlay_setup(status, content) {
    
    let overlay = document.createElement('div')

    let contentCnt = document.createElement('div')
    contentCnt.innerHTML = content;
    contentCnt.style.color='#fff'

    if(status === true){
        overlay.className='entrepreneur-overlay'
        overlay.id='entrepreneur-overlay'
        overlay.append(contentCnt)
        document.body.append(overlay)
    }else{
        // document.querySelector('.entrepreneur-overlay').removeAttribute('id');
        if(document.querySelector('.entrepreneur-overlay')){
            document.querySelector('.entrepreneur-overlay').remove();
            console.log(document.querySelector('.entrepreneur-overlay'));
        }
    }
}

function buyer_overlay_setup(status, content) {
    
    let overlay = document.createElement('div')

    let contentCnt = document.createElement('div')
    contentCnt.innerHTML = content;
    contentCnt.style.width='100%';
    contentCnt.style.textAlign='center'
    contentCnt.style.color='#fff'

    if(status === true){
        overlay.className='buyer-overlay'
        overlay.id='buyer-overlay'
        overlay.append(contentCnt)
        document.body.append(overlay)
    }else{
        // document.querySelector('.buyer-overlay').removeAttribute('id');
        document.querySelector('.buyer-overlay').remove();
        console.log(document.querySelector('.buyer-overlay'));
    }
}

module.exports={
    entrepreneur_overlay_setup,
    buyer_overlay_setup
}