let myText = document.getElementById("myText")
let btnAll = document.getElementById("btnAll")
let btnSearch = document.getElementById("btnSearch")
let div=document.getElementById("div")

$("#btnAll").click(function(e){
    $("#myText").empty()
    $("#div").empty()
    e.preventDefault()
    $("#myText").empty()
    $.get("https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;currencies;flag",function(data){
let display = document.createElement("div")
let body = document.getElementsByTagName("body")[0]
 body.appendChild(display)
 
 for(let i=0; i<data.length; i++){
    $("#myText").empty()
   
     let mydiv = document.createElement("div")
     mydiv.setAttribute("class","mydiv")

     let bigDiv = document.createElement("div")
     bigDiv.setAttribute("class","bigDiv")

     let name = document.createElement("p")
     name.textContent = "Name: "+data[i].name 

     let topLevelDomain = document.createElement("p")    
     topLevelDomain.textContent+="Top Level Domain: "+data[i].topLevelDomain 
    
     let capital = document.createElement("p")    
     capital.textContent+="Capital: "+data[i].capital

     let currencies = document.createElement("p") 
     currencies.textContent= "Currencies: " + JSON.stringify(data[i].currencies[0])
    
     let flag = document.createElement("img") 
     flag.setAttribute("class","flag")
     flag.src+=data[i].flag
 
     $(div).append(mydiv)
     $(mydiv).append(bigDiv)
     $(bigDiv).append(flag)
     $(bigDiv).append(name)
     $(bigDiv).append(topLevelDomain)
     $(bigDiv).append(capital)
     $(bigDiv).append(currencies)
     
    // console.log(data[i])
    console.log(data[i].currencies)
    console.log(data[i].name)
    console.log(data[i].capital)
    console.log(data[i].flag)
    console.log(data[i].topLevelDomain)
    
 }
       
    })
})

$("#btnSearch").click(function(e){
    let mydiv = document.createElement("div")
    mydiv.setAttribute("class","mydiv")
    e.preventDefault()
    $("#div").empty()
    $.get("https://restcountries.eu/rest/v2/name/"+$('#myText').val()+"?fields=name;topLevelDomain;capital;currencies;flag",function(data){
        let display = document.createElement("div")
        let body = document.getElementsByTagName("body")[0]
         body.appendChild(display)
         
         $("#div").empty()

         for(let i=0; i<data.length; i++){
             
           
             let bigDiv = document.createElement("div")
             bigDiv.setAttribute("class","bigDiv")
             
             let name = document.createElement("p")
             name.textContent = `Name: `+data[i].name 
     
             let topLevelDomain = document.createElement("p")    
             topLevelDomain.textContent+="Top Level Domain: "+data[i].topLevelDomain 
            
            
             let capital = document.createElement("p")    
             capital.textContent+="Capital: "+data[i].capital
           
             let currencies = document.createElement("p") 
             currencies.textContent= "Currencies " + JSON.stringify(data[i].currencies[0])
            
             let flag = document.createElement("img") 
             flag.setAttribute("class","flag")
             flag.src+=data[i].flag
            
          
            $(div).append(mydiv)
            $(mydiv).append(bigDiv)
            $(bigDiv).append(flag)
            $(bigDiv).append(name)
            $(bigDiv).append(topLevelDomain)
            $(bigDiv).append(capital)
            $(bigDiv).append(currencies)
            
            // console.log(data[i])
            console.log(data[i].currencies)
            console.log(data[i].name)
            console.log(data[i].capital)
            console.log(data[i].flag)
            console.log(data[i].topLevelDomain)
            
         }
               
            })
        })
        