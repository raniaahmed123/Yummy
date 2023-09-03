 

var allMeals=[];
getData()
function getData(){
    var req = new XMLHttpRequest()
req.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s=")
req.send();
req.addEventListener("readystatechange", function(){
    

    // console.log(req.readyState);
    if(req.readyState == 4 && req.status == 200){
       allMeals = JSON.parse(req.response).meals;
       displayAllMeals();
        // console.log(allMeals.length)
        // console.log(allMeals);
        

    
    }
});
}

// document.querySelector(".fa-bars").addEventListener('click' , function(){
      
//    this.classList.remove('d-block')
//    this.classList.add('d-none');

//     document.getElementById("blackside").classList.remove('d-none');
//     document.getElementById("blackside").classList.add('d-block');
//     document.getElementById("close").classList.remove('d-none');
//     document.getElementById("close").classList.add('d-block');


// })

// document.querySelector(".open-close-icon").addEventListener('click' , function(){

       
//    this.classList.remove('d-block')
//    this.classList.add('d-none');


//     document.getElementById("blackside").classList.remove('d-block');
//     document.getElementById("blackside").classList.add('d-none');
//     document.querySelector(".fa-bars").classList.remove('d-none');
//     document.querySelector(".fa-bars").classList.add('d-block');


// })
// $(".blackside").hide();

$(".open-close-icon").hide()
// $(".links").hide()


$(".fa-bars").click(function(){
    $(".open-close-icon").show()
    $(this).hide();
    $(".blackside").show(500, function(){
        $(".links").show(500)
        $(".copywrite").show()
    });
   
    
})

$(".open-close-icon").click(function(){
    $(".fa-bars").show()
    $(this).hide();
    $(".blackside").hide(500);
    
})

function displayAllMeals(){
    
    var cartona = '';
    for( var i = 0 ; i < allMeals.length ; i++){
   
        cartona+=`<div class="col-md-3">
        <figure class= " img position-relative">
        <div class="img-link" >
            <img src="${allMeals[i].strMealThumb}" class="w-100 rounded-3"  alt="mealImg">
          
            <div class="caption w-100 h-100  position-absolute bottom-0  p-2 rounded-3 my-auto " onclick = 'displayMelaDetails(${allMeals[i].idMeal})'>

                <h4 class="position-absolute top-50">${allMeals[i].strMeal}</h4>
                    </div>
                    </div>
        </figure>

    </div>`
    // allMeals[i].addEventListener('click' , function(){
        
    // })
    
    }
document.querySelector('.allmeals').innerHTML = cartona;

}




    function displayMelaDetails(id)

{


    for( var i = 0 ; i < allMeals.length ; i++){


        if(allMeals[i].idMeal == id){
       
    
var cartona = `<div class="row px-5">
<div class="col-md-4">
<img src=" ${allMeals[i].strMealThumb}" class="w-100 rounded-3" alt="meal"/>
<h3 class="text-white font-weight-bold">${allMeals[i].strMeal}</h3>
</div>
<div class="col-md-7">
    <h2>Instructions</h2>
    <p>${allMeals[i].strInstructions}</p>
    <h2>
        <span>Area : </span>${allMeals[i].strArea}
    </h2>
    <h2><span>Category : </span>${allMeals[i].strCategory}</h2>
    <h2>Recipes :</h2>
    <ul class="d-flex justify-content-between align-items-center list-unstyled">

        <li class=" alert alert-info p-1">${allMeals[i].strMeasure1} ${allMeals[i].strIngredient1}</li>

    </ul>
    <h2>Tags :</h2>
    
    <a href="${allMeals[i].strSource}" target="_blank" class="btn btn-danger"> Youtube</a>
    <a href="${allMeals[i].strYoutube}" target="_blank" class="btn btn-success"> Source</a>
</div>`
document.querySelector('.home').classList.add('d-none');
document.querySelector('.meal').classList.remove('d-none');
document.querySelector('.meal').innerHTML = cartona;

    // $(".home").hide()
    // $(".meal").show()


}}}



$(document).ready(function(){
    $('.loading .loader').fadeOut(500 , function(){
        $('.loading').fadeOut(500 , function(){
            $('body').css('overflow', 'auto');
        })
    })
})



function showSearch(){
        document.querySelector('.searchbox').classList.remove('d-none')

    // $(".search ").click(function(){
        $(".open-close-icon").hide()
        $(".fa-bars").show()
        // $(this).hide();
        $(".blackside").hide(500, function(){
            $(".links").hide(500)
            $(".copywrite").hide()
            
        });
    // }
    // )
    // document.querySelector('.home').classList.remove('d-flex')
    document.querySelector('.allmeals').innerHTML='';
    // document.querySelector('.meal').innerHTML='';
    // $(".meal").toggle()


}


function searchByName(mealName){
    var searchReq = new XMLHttpRequest()
    searchReq.open("GET",`www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    searchReq.send();
    searchReq.addEventListener("readystatechange", function(){
        
        if(searchReq.readyState == 4 && searchReq.status == 200){
            seachNameMeals = JSON.parse(req.response);
            console.log(seachNameMeals.meals)
            // displaySearchNameMeals();

        }
    });
}

function searchByFirstLetter(){

}
// function searchByName(){
    
//     var cartona = '';
//     for( var i = 0 ; i < allMeals.length ; i++){
   
//         cartona+=`<div class="col-md-3">
//         <figure class= " img position-relative">
//         <div class="img-link" >
//             <img src="${allMeals[i].strMealThumb}" class="w-100 rounded-3" onclick = 'displayMealDetails(${allMeals[i]})' alt="mealImg">
          
//             <div class="caption w-100 h-100  position-absolute bottom-0  p-2 rounded-3 my-auto">
//                 <h4 class="position-absolute top-50">${allMeals[i].strMeal}</h4>
//                     </div>
//                     </div>
//         </figure>

//     </div>`
//     // allMeals[i].addEventListener('click' , function(){
        
//     // })
    
//     }
// document.querySelector('.allmeals').innerHTML = cartona;

// }