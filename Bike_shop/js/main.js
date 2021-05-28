$(document).ready(function(){

fetch('https://json-project3.herokuapp.com/products', {
    method: 'GET'
})
.then(function(response){                   // JSON response
    return response.json() 
}) 

.then(function(data){                       // Response data 

    let cardContent = $('#cards-content')       // get the element for content

    function appendContent(user){   // function for content printing==================================
        cardContent.append( `
        <div class="card m-3" style="width: 18rem;">
            <img src="./img/${user.image}.png" style="width: 250px; height: 180px;" class="card-img-top" alt="bike">
            <div class="card-body bg-warning">
                <h6 class="card-title">${user.name}</h6>
                <p class="card-text"><b>Price: </b>${user.price} <b> $</b></p>
            </div>
        </div>
    
    `)
    }
    // data  for  bikes==================================
    data.forEach(user => {                      // Print all cards
        appendContent(user)
    });
// data  for ALL bikes==================================
    $('.showAll').on("click",function(){       // Show all bikes
        $(this).addClass("active");
        cardContent.empty()  // delete,hide make empty the cardContent
        data.forEach(user => {
            appendContent(user)
        });
    })
    $('.showAllBadge').html(data.length) // dinamic badge value
// data filter for MALE bikes==================================
    let male_bikes =  data.filter(function(obj){
        return (obj.gender == "MALE")
    })
    $(".male").on("click",function(){        
        cardContent.empty() // delete,hide make empty the cardContent
        male_bikes.forEach(male => {
            appendContent(male)           
        });
    })
    $('.maleBadge').html(male_bikes.length) // dinamic badge value
// data filter for FEMALE bikes==================================
    let female_bikes =  data.filter(function(obj){
        return (obj.gender == "FEMALE")
    })
    $(".female").on("click",function(){        
        cardContent.empty() // delete,hide make empty the cardContent
        female_bikes.forEach(female => {
            appendContent(female)            
        });
    })
    $('.femaleBadge').html(female_bikes.length) // dinamic badge value
// data filter for LE GRAND BIKES bikes==================================
    let leGrandBikes =  data.filter(function(obj){
        return (obj.brand == "LE GRAND BIKES")
    })
    $(".le-grand-bikes").on("click",function(){       
        cardContent.empty() // delete,hide make empty the cardContent
        leGrandBikes.forEach(legrand => {
            appendContent(legrand)            
        });
    })
    $('.leGrandBadge').html(leGrandBikes.length) // dinamic badge value
// data filter for KROSS bikes==================================
    let kross =  data.filter(function(obj){
        return (obj.brand == "KROSS")
    })
    $(".kross").on("click",function(){        
        cardContent.empty() // delete,hide make empty the cardContent
        kross.forEach(kross => {
            appendContent(kross)            
        });
    })
    $('.krossBadge').html(kross.length) // dinamic badge value
// data filter for EXPLORER bikes==================================
    let explorer =  data.filter(function(obj){
        return (obj.brand == "EXPLORER")
    })
    $(".explorer").on("click",function(){        
        cardContent.empty() // delete,hide make empty the cardContent
        explorer.forEach(explorer => {
            appendContent(explorer)            
        });
    })
    $('.explorerBadge').html(explorer.length)  // dinamic badge value
// data filter for VISITOR bikes==================================
    let visitor =  data.filter(function(obj){
        return (obj.brand == "VISITOR")
    })
    $(".visitor").on("click",function(){       
        cardContent.empty() // delete,hide make empty the cardContent
        visitor.forEach(visitor => {
            appendContent(visitor)            
        });
    })
    $('.visitorBadge').html(visitor.length) // dinamic badge value
// data filter for PONY bikes==================================
    let pony =  data.filter(function(obj){
        return (obj.brand == "PONY")
    })
    $(".pony").on("click",function(){        
        cardContent.empty() // delete,hide make empty the cardContent
        pony.forEach(pony => {
            appendContent(pony)            
        });
    })
    $('.ponyBadge').html(pony.length) // dinamic badge value
// data filter for FORCE bikes==================================
    let force =  data.filter(function(obj){
        return (obj.brand == "FORCE")
    })
    $(".force").on("click",function(){       
        cardContent.empty() // delete,hide make empty the cardContent
        force.forEach(force => {
            appendContent(force)           
        });
    })
    $('.forceBadge').html(force.length) // dinamic badge value
// data filter for e-bikes======================================
    let ebikes =  data.filter(function(obj){
        return (obj.brand == "E-BIKES")
    })
    $(".e-bikes").on("click",function(){  
        cardContent.empty() // delete,hide make empty the cardContent
        ebikes.forEach(ebikes => {
            appendContent(ebikes)
        });
    })
    $('.ebikesBadge').html(ebikes.length) // dinamic badge value
// data filter for ideal bikes===================================
    let ideal =  data.filter(function(obj){
        return (obj.brand == "IDEAL")
    })
    $(".ideal").on("click",function(){    
        cardContent.empty() // delete,hide make empty the cardContent
        ideal.forEach(ideal => {  
            appendContent(ideal)     
        });
    })
    $('.idealBadge').html(ideal.length) // dinamic badge value
});

})