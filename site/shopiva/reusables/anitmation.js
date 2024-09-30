export function handleAside() {
    let elem = document.querySelector('.entrepreneur-aside');
    let aside_overlay = document.querySelector('.aside-overlay');

    if(elem.hasAttribute('id')){
      elem.removeAttribute('id')
      setTimeout(() => {
        aside_overlay.removeAttribute('id')
      }, 450);
    }else{
      aside_overlay.setAttribute('id', 'aside-overlay')
      setTimeout(() => {
        elem.setAttribute('id', 'entrepreneur-aside')
      }, 450);
    }
  }

  export function handleFloater(type,position={}) {
    
    let elem = document.querySelector('.entrepreneur-floater-cnt');
    // elem.classList.remove('entrepreneur-floater-cnt-xtra')

    if(type ==='profile'){
        if(elem.hasAttribute('id')){
            elem.removeAttribute('id')
          }else{
            elem.setAttribute('id', 'entrepreneur-floater-cnt')
          }
    }else if(type ==='notification'){
        if(elem.hasAttribute('id')){
            elem.removeAttribute('id')
          }else{
            elem.setAttribute('id', 'entrepreneur-floater-cnt')
          }
    }else if(type=== 'search'){
        let elem_x = document.querySelector('.entrepreneur-floater-cnt-xtra');

        if(elem_x.hasAttribute('id')){
            elem_x.removeAttribute('id')
          }else{
            elem_x.setAttribute('id', 'entrepreneur-floater-cnt')
            // console.log(position)
            if(window.innerWidth >= 600){
              elem_x.style.left = `calc(50% - 50px)`
            }else{
              elem_x.style.left = `0px`
            }
            // elem.classList.add('entrepreneur-floater-cnt-xtra')
        }
    }
    
  }