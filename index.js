async function getcountries()
{ 
    try{
const url = "https://makeup-api.herokuapp.com/api/v1/products.json"
const value = await fetch(url);
const result = await value.json();
console.log(result)

brand(result)
link(result)

    }
catch{

}
}
function link(result)
{
    result.forEach((element)=>{
        console.log(element)
    })
}

getcountries();


 function brand(result)
{
    
   const listingcontainer =document.getElementById("class16");
   listingcontainer.innerHTML="";
   const final =[];
   if(result.length>0)
   {
    const cardnode = document.createElement("div")
    result.forEach((element) => {
        cardnode.innerHTML=` <div id="class17" class="container">
                                <div class="col-4">
                                  <div style="margin: 30px 20px 20px 70px;">
                                   <img src="${element.image_link}" style="width: 200px; height:200px;">
                                   </div>
                                   <div style="margin: 30px 20px 20px 120px;">${element.name}</div>
                                </div>
        <div class="col-8">
           <div id="class18">
             <div style="font-size: 30px;">
                 Product Name:   
             </div>
             <div style="font-size: 30px;">
                    ${element.name}
             </div>
           </div>
           <div id="class19">
             <div style="font-size: 30px;">
                 Brand Name:  
             </div>
             <div style="font-size: 30px;">
                   ${element.brand}
             </div>
           </div>
           <div id="class20">
             <div style="font-size: 30px;">
                 Price:   
             </div>
             <div style="font-size: 25px;">
                   ${element.price}
             </div>
           </div>
           <div id="class21">
             <div style="font-size: 20px;">
                 Description: 
             </div>
             <div style="font-size: 18px;">
                 ${element.description}
             </div>
           </div>
           <div id="class22">
             <div style="font-size: 20px;">
                 product_link:

             </div>
             <div style="font-size: 18px;">
                 <a href="${element.product_link}">${element.product_link}</a>
             </div>
           </div>
     </div>`
     final.push(cardnode)
    });
   }
    
   listingcontainer.append(...final)
}

// real example
heading();
function heading()
{
    const head= document.getElementById("class1")
    head.innerText="Makeup API"
}
description()
function description()
{
    const description= document.getElementById("class2")
    description.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cum illum soluta reprehenderit earum totam reiciendis natus non officiis doloremque ex, quae iste, eos doloribus."

}
para()
function para()
{
    const para= document.getElementById("para")
    para.innerText="About the Makeup API";

}
para1()
function para1()
{
    const para1= document.getElementById("para1")
    para1.innerText="Search Parameters";

}