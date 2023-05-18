console.log('ahmad bandar');
// direction: 'rtl',
// page main slider

let imageCarouselll=document.getElementById('image-carouselll');
{
  if(imageCarouselll){
  var splideaa = new Splide( '#image-carouselll', {
      type  : 'loop',
      // rewind: true,
      arrows:false,
      autoplay:true,
      direction: 'rtl',
    } );
    
    splideaa.mount();
  }
  }
  console.log('ahmad');

let allSlid=document.querySelectorAll('.allSlid');
if(allSlid){
  console.log('ahmad');
  allSlid.forEach(allSl =>{
    var splideProduct22 = new Splide(allSl , {
            type  : 'loop',
            rewind: true,
            // arrows:false,
            autoplay:true,
            pagination:false,
            direction: 'rtl',
          })
          splideProduct22.mount();
       })
}


 //
 let sss=document.getElementById("sss");
{
  if(sss){
  var splidee = new Splide('#sss' ,{
    type  : 'loop',
    rewind: true,
    // arrows:false,
    autoplay:true,
    pagination:false,
    direction: 'rtl',

} );
  splidee.mount();
}
}
let ssss=document.getElementById("ssss");
{
  // Featured products
  if(ssss){
  var splidees = new Splide( '#ssss' ,{
    type  : 'loop',
    rewind: true,
    // arrows:false,
    autoplay:true,
    pagination:false,
    direction: 'rtl',
} );
  splidees.mount();
}
}
  // model
  let mainSlider1=document.getElementById("main-slider1");
{
  if(mainSlider1){
  var splideProduct = new Splide("#main-slider1", {
        type:'loop',
        width: 600,
        height: 400,
        pagination: false,
        cover: true,
        heightRatio: 0.5,
        direction: 'rtl',
  });

  var thumbnailssa = document.getElementsByClassName("thumbnailAs");
  var currentAS;

  for (var i = 0; i < thumbnailssa.length; i++) {
    initThumbnail(thumbnailssa[i], i);
  }

  function initThumbnail(thumbnailAS, index) {
    thumbnailAS.addEventListener("click", function () {
      splideProduct.go(index);
    });
  }

  splideProduct.on("mounted move", function () {
    var thumbnailAs = thumbnailssa[splideProduct.index];

    if (thumbnailAs) {
      if (currentAS) {
        currentAS.classList.remove("is-active");
      }

      thumbnailAs.classList.add("is-active");
      currentAS = thumbnailAs;
    }
  });

  splideProduct.mount();
}
}


  // model  2
let mainSlider2=document.getElementById("main-slider2");
{
  if(mainSlider2){
  var splideProduct2 = new Splide("#main-slider2", {
    type:'loop',
    width: 600,
    height: 400,
    pagination: false,
    cover: true,
    heightRatio: 0.5,
    direction: 'rtl',
  });

  var thumbnailsSa = document.getElementsByClassName("thumbnail");
  var currentSa;

  for (var i = 0; i < thumbnailsSa.length; i++) {
    initThumbnail(thumbnailsSa[i], i);
  }

  function initThumbnail(thumbnailaa, index) {
    thumbnailaa.addEventListener("click", function () {
      splideProduct2.go(index);
    });
}

  splideProduct2.on("mounted move", function () {
    var thumbnailSa = thumbnailsSa[splideProduct2.index];

    if (thumbnailSa) {
      if (currentSa) {
        currentSa.classList.remove("is-active");
      }

      thumbnailSa.classList.add("is-active");
      currentSa = thumbnailSa;
    }
  });
  splideProduct2.mount();
}
}

  //Main sections
let mainSections=document.getElementById("mainSections");
{
 if(mainSections){ 
  var splidemain = new Splide( '#mainSections', {
    type  : 'loop',
    perPage: 6,
    rewind: true,
    perMove: 1,
    autoplay:true,
    pagination:false,
    direction: 'rtl',
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 2,
      },
    },

  } );
  
  splidemain.mount();
}
}

   //Main sections
let mainSections2=document.getElementById("mainSections2");
{
  if(mainSections2){
   var splidemain2 = new Splide( '#mainSections2', {
    type  : 'loop',
    perPage: 6,
    rewind: true,
    perMove: 1,
    autoplay:true,
    pagination:false,
    direction: 'rtl',
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 2,
      },
    },

  } );
  
  splidemain2.mount();
}
}






// main page slider



const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".sliderAlid .progressAs");
let priceGap = 100;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
         maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.right = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

const rangeInputt = document.querySelectorAll(".range-inputt input"),
priceInputt = document.querySelectorAll(".price-inputt input"),
ranget = document.querySelector(".sliderAlidt .progressAst");
let priceGapt = 100;
priceInputt.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInputt[0].value),
         maxPrice = parseInt(priceInputt[1].value);
        
        if((maxPrice - minPrice >= priceGapt) && maxPrice <= rangeInputt[1].max){
            if(e.target.className === "input-min"){
                rangeInputt[0].value = minPrice;
                ranget.style.left = ((minPrice / rangeInputt[0].max) * 100) + "%";
            }else{
                rangeInputt[1].value = maxPrice;
                ranget.style.right = 100 - (maxPrice / rangeInputt[1].max) * 100 + "%";
            }
        }
    });
});
rangeInputt.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInputt[0].value),
        maxVal = parseInt(rangeInputt[1].value);
        if((maxVal - minVal) < priceGapt){
            if(e.target.className === "range-min"){
                rangeInputt[0].value = maxVal - priceGapt
            }else{
                rangeInputt[1].value = minVal + priceGapt;
            }
        }else{
            priceInputt[0].value = minVal;
            priceInputt[1].value = maxVal;
            ranget.style.right = ((minVal / rangeInputt[0].max) * 100) + "%";
            ranget.style.left = 100 - (maxVal / rangeInputt[1].max) * 100 + "%";
        }
    });
});

// test
let productPageslider=document.getElementById("productPageslider");
{
  if(productPageslider){
var splideProductPage = new Splide("#productPageslider", {
    type:'loop',
    width: 600,
    height: 400,
    pagination: false,
    cover: true,
    heightRatio: 0.5,
    direction: 'rtl',
    });

    var thumbnails = document.getElementsByClassName("thumbnail");
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
        splideProductPage.go(index);
    });
    }

    splideProductPage.on("mounted move", function () {
    var thumbnail = thumbnails[splideProductPage.index];

    if (thumbnail) {
        if (current) {
        current.classList.remove("is-active");
        }

        thumbnail.classList.add("is-active");
        current = thumbnail;
    }
    });

    splideProductPage.mount();
  }
}

let similaProducts=document.getElementById("similaProducts");
{
  if(similaProducts){
    var splidesame = new Splide( '#similaProducts', {
            type  : 'loop',
            perPage: 4,
            rewind: true,
            perMove: 1,
            autoplay:true,
            pagination:false,
            direction: 'rtl',
            breakpoints: {
            640: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            },
            },

        } );
        
        splidesame.mount();
      }
}

   // model
   let mainSlider11=document.getElementById('main-slider11');
   {
     if(mainSlider11){
    var splideProduct11= new Splide("#main-slider11", {
          type:'loop',
          width: 600,
          height: 400,
          pagination: false,
          cover: true,
          heightRatio: 0.5,
          direction: 'rtl',
    });
  
    var thumbnailssa = document.getElementsByClassName("thumbnailAs");
    var currentAS;
  
    for (var i = 0; i < thumbnailssa.length; i++) {
      initThumbnail(thumbnailssa[i], i);
    }
  
    function initThumbnail(thumbnailAS, index) {
      thumbnailAS.addEventListener("click", function () {
        splideProduct11.go(index);
      });
    }
  
    splideProduct11.on("mounted move", function () {
      var thumbnailAs = thumbnailssa[splideProduct11.index];
  
      if (thumbnailAs) {
        if (currentAS) {
          currentAS.classList.remove("is-active");
        }
  
        thumbnailAs.classList.add("is-active");
        currentAS = thumbnailAs;
      }
    });
  
    splideProduct11.mount();
  }
  }




// test

// serch slider
const ana=document.querySelectorAll('.sarAh');
ana.forEach(an =>{
  var splideProduct22 = new Splide(an , {
                  type:'loop',
                  width: 600,
                  height: 400,
                  pagination: false,
                  cover: true,
                  heightRatio: 0.5,
                  direction: 'rtl',
                }).mount();

  const ana2=document.querySelectorAll('.thumbnails');
  
      ana2.forEach(an2 =>{
         
            var thumbnailssa = document.getElementsByClassName("thumbnail");
          var currentAS;
        
          for (var i = 0; i < thumbnailssa.length; i++) {
            initThumbnail(thumbnailssa[i], i);
          }
        
          function initThumbnail(thumbnailAS, index) {
            thumbnailAS.addEventListener("click", function () {
              splideProduct22.go(index);
            });
          }
        
          splideProduct22.on("mounted move", function () {
            var thumbnailAs = thumbnailssa[splideProduct22.index];
        
            if (thumbnailAs) {
              if (currentAS) {
                currentAS.classList.remove("is-active");
              }
        
              thumbnailAs.classList.add("is-active");
              currentAS = thumbnailAs;
            }
          });
        
        
      })
})



