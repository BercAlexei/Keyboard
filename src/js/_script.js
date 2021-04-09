'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.modal__close'),
          sub = document.querySelector('#sub'),
          inps = document.querySelectorAll('input'),
          spans = document.querySelectorAll('span'),
          inpsReq = document.querySelectorAll('[data-req]'),
          form = document.querySelector('form');

    function closeModal (){
        inps.forEach(item => {
            item.value = '';
            inpsReq.forEach(item => {
                    item.style.border = ''
            })
            spans.forEach(item => {
                item.style.display = ''
            })
        })

        modal.classList.remove('modal__show');
    }      

    btns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            modal.classList.add('modal__show');
        })
    })

    closeBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code ==='Escape') {
            closeModal();
        } 
    })

    //Validation код оставляет желать лучшего (но будем совершенствоваться)
    sub.addEventListener('click', (e) => {
        e.preventDefault();
        
        let ar = [],
            arTrue; 

        inpsReq.forEach((item, key) => {
            ar[key] = item;
            if (!item.validity.valid) {
                item.style.border = '1px solid red'
                spans.forEach((red, k) => {
                    //! Чтобы красное сообщение об ошибке выдавалось только у определнного инпута нужно сделать условие строгого сравнения по номеру в массиве!!!!!!!!!!!!!!
                    if (k === key) {
                        red.style.display = 'block'
                    }
                })
            }
            
        })
        arTrue = ar.every((item) => {
            if (!item.validity.valid) {
                
            } else {
                return true;
            }
        });
        if(arTrue) {
            closeModal()
        }
    })
       
    inpsReq.forEach((item, i) => {
        item.addEventListener('input', () => {
            if (item.validity.valid) {
                item.style.border = ''
                spans.forEach((item, k) => {
                    //! Чтобы красное сообщение об ошибке выдавалось только у определнного инпута нужно сделать условие строгого сравнения рл нлмеру в массиве!!!!!!!!!!!!!!
                    if (k === i) {
                        item.style.display = ''
                    }
                })
            }
        })
    })
});