
let back =document.getElementById("back");  
 window?.addEventListener('scroll',function(){
   if(this.scrollY >= 400 ){
    back?.classList.add("aa");
   }else{
    back?.classList.remove("aa");
   }
 });

 back?.addEventListener('click',function(){
  window.scrollTo({
      top:0,
      behavior:"smooth",
    });
});


// let test=document.querySelectorAll('.test');
// if(test){
//   test.forEach(tes =>{
//      tes.addEventListener("click" ,function(){
//       tes.classList.remove('activeColor');
//       tes.classList.toggle('activeColor');
//      })
          
//        })

// }
let test=document.querySelectorAll('.test');
  for(let d=0;d<test.length;d++){
    test[d]?.addEventListener('click',function(){
      test[0].classList.remove('activeColor');
      test[1].classList.remove('activeColor');
      test[2].classList.remove('activeColor');
      test[d].classList.toggle('activeColor');
    
    })
  }



// let allSlid=document.querySelectorAll('.allSlid');
// if(allSlid){
//   allSlid.forEach(allSl =>{
//     var splideProduct22 = new Splide(allSl , {
//             type  : 'loop',
//             rewind: true,
//             // arrows:false,
//             autoplay:true,
//             pagination:false,
//             direction: 'rtl',
//           })
//           splideProduct22.mount();
//        })
// }
// nav
document.addEventListener("click", function (event) {
    if (!event.target.closest("#navbar_id") && document.getElementById("navbarSupportedContent").classList.contains("show")) {
        document.getElementById("ch")?.click();
    }
});


let ViHid=document.getElementById('ViHid');
let ViHid2=document.getElementById('ViHid2');
let cclos=document.getElementById('cclos');
let bo1=document.getElementsByTagName('body');

ViHid?.addEventListener('click',function(){
  ViHid2.classList.add("zzz");
  bo1[0].style.overflow='hidden';
 })

 cclos?.addEventListener('click',function(){
  ViHid2.classList.remove("zzz");
  bo1[0].style.overflow='visible';
 })


 let ViHid3=document.getElementById('ViHid3');
let ViHid4=document.getElementById('ViHid4');
let cclos2=document.getElementById('cclos2');
let bo2=document.getElementsByTagName('body');

ViHid3?.addEventListener('click',function(){
  ViHid4.classList.add("zzz");
  bo2[0].style.overflow='hidden';
 })

 cclos2?.addEventListener('click',function(){
  ViHid4.classList.remove("zzz");
  bo2[0].style.overflow='visible';
 })

 
let ll =document.getElementsByClassName("ll");
for(let i=0;i<ll.length;i++){
    ll[i]?.addEventListener('click',function(){
        let crr =document.getElementsByClassName('act');
        crr[0]?.classList.remove('act')
        this.classList.add("act");
    })   
}

let llSize =document.getElementsByClassName("llSize");
for(let i=0;i<llSize.length;i++){
    llSize[i]?.addEventListener('click',function(){
        let crr =document.getElementsByClassName('actt');
        crr[0]?.classList.remove('actt')
        this.classList.add("actt");
    })   
}




let paraChange=document.getElementById('paraChange');
let changeText=document.getElementById('changeText');
let changeImg=document.getElementById('changeImg');
let changeText1=document.getElementById('changeText1');
let changeImg1=document.getElementById('changeImg1');
let over=document.querySelectorAll('.over');

for (let index = 0; index < over.length; index++) { 
  let tool=over[0].getBoundingClientRect();
  if(tool?.height<61){
    paraChange.classList.add('Dnone');
  } 
    if(tool?.height>60){
      over[index].classList.add('over1');
    }    
  }

paraChange?.addEventListener("click",function(){
    // changeText.textContent="show less";
    changeText.classList.toggle('Dnone');
    changeText1.classList.toggle('Dnone');
    changeImg.classList.toggle('Dnone');
    changeImg1.classList.toggle('Dnone');
    for (let index = 0; index < over.length; index++) {
      over[index].classList.toggle('active1');      
    }
})

let paraSpe=document.getElementById('paraSpe');
let toggleSpe=document.getElementById('toggleSpe');
let toggleSpe1=document.getElementById('toggleSpe1');

paraSpe?.addEventListener("click",function(){
  toggleSpe.classList.toggle('Dnone');
  toggleSpe1.classList.toggle('Dnone');
})


const imgs =document.querySelectorAll('.xx');
let fixedBox =document.querySelector('#fixed-box');
let smallBox = document.querySelector('#small-box');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let closeBtn = document.querySelector('#close-btn');
let DN = document.querySelector('.DN');
let ForJs=document.querySelector('.ForJs');


let index = 0;

for(let i=0;i<imgs.length ;i++){
  // console.log(imgs[i].children[0].getAttribute('src'));
  imgs[i].addEventListener('click',function(){
    bo1[0].style.overflow='hidden';
    DN?.classList.add('Dnone');
    ForJs?.classList.add('Dnone');
    let clickImg = imgs[i].children[0].getAttribute('src');

    smallBox.style.backgroundImage=`url("${clickImg}")`;
    fixedBox.style.display="flex";
    index = i;
  })
}

closeBtn?.addEventListener('click',function(){
  fixedBox.style.display="none";
  bo1[0].style.overflow='visible';
  DN?.classList.remove('Dnone');
  ForJs?.classList.remove('Dnone');
  

})

function nextImg(){
  index++;
  if(index==imgs.length){
      index=0;
  }
  let nextImg= imgs[index].children[0].getAttribute('src');
  console.log(nextImg);
  smallBox.style.backgroundImage=`url("${nextImg}")`;

}

rightBtn?.addEventListener('click',nextImg);

function prevImg(){
  index--;
  if(index==-1){
      index = imgs.length-1;
  }
  let prevImg = imgs[index].children[0].getAttribute('src');
  smallBox.style.backgroundImage=`url("${prevImg}")`;
}

leftBtn?.addEventListener('click',prevImg);

document.addEventListener('keyup',function(e){
  if(e.key=='ArrowRight'){
      nextImg();
  }

})

document.addEventListener('keyup',function(e){
  if(e.key=='ArrowLeft'){
      prevImg();
  }

})

document.addEventListener('keyup',function(e){
  if(e.key=='Escape'){
      fixedBox.style.display="none";
      bo1[0].style.overflow='visible';
      DN?.classList.remove('Dnone');
      ForJs?.classList.remove('Dnone');



  }

})


//الاقسام
// 
let ch2=document.getElementById('ch2');
let close2=document.getElementById('clos2');
let listAbs=document.querySelector('.listAbs');
let navbarSupportedContent=document.getElementById('navbarSupportedContent');
ch2?.addEventListener('click',function(){
  bo1[0].style.overflow='hidden';
  listAbs.classList.add('listAbsSmall');
 })

 close2?.addEventListener('click',function(){
  listAbs?.classList.remove('listAbsSmall');

  navbarSupportedContent.classList.remove('show');
  bo1[0].style.overflow='visible';
 })

// 