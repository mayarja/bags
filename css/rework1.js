/*start 2rnt al links*/

let mm = document.querySelectorAll('ul li');
let sp1 = document.querySelector('#one');
let sp2 = document.querySelector('#two');
let boxall = document.getElementById('box-all');
let boxall2 = document.getElementById('box-all2');

mm.forEach(function(e){
    e.onclick = function(){
        mm.forEach(function(e){
            e.classList.remove('active')
        });
        this.classList.add('active')
    }
});

sp1.onclick =function(){

    boxall.style.display = "block"
    boxall2.style.display = "none"
};

sp2.onclick =function(){
    boxall2.style.display = "block"
    boxall.style.display = "none"
}



/*end 2rnt al links*/


/*start 2rnt al kbsa tb3 al 9ora */
let imgc = document.querySelectorAll('.ko');
let imgsr = document.getElementById('sr')

imgc.forEach(function(e){
    e.onclick =function(e){
        let hh= this.parentElement.previousElementSibling.getAttribute('src');
        console.log(hh);
        imgsr.setAttribute('src',hh)
        console.log(imgsr)
    }
})

/*end 2rnt al kbsa tb3 al 9ora */

/*start scroll top */
let sc = document.getElementById('sc');

window.onscroll = function(){
    if(window.scrollY >=600){
        sc.style.display = "block";
    }
    else{
        sc.style.display = "none";
    }
}

sc.addEventListener('click',function(e){
    window.scrollTo({
        top:0,
        left:0,
        behavior :"smooth"
    })
})

/*end scroll top */

