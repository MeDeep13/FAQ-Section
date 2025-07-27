let allQue= document.querySelectorAll('.faqitems h3');

            allQue.forEach((item, index)=>{
                item.addEventListener('click',()=>{

                    // closing other answers
                    allQue.forEach((heading, ind)=>{
                        if(ind!= index){
                            heading.nextElementSibling.classList.remove('showAns');
                            if(heading.lastElementChild.innerText=='-'){
                                heading.lastElementChild.innerText='+';
                            }
                        }
                    });
                    // here we are changing + | -
                    if(item.lastElementChild.innerHTML=='+'){
                        item.lastElementChild.innerHTML='-';
                    }else{
                        item.lastElementChild.innerHTML='+';
                    }
                    // here we are changing show | hide
                    item.nextElementSibling.classList.toggle('showAns');
                });
            });