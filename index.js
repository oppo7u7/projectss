     //                               'use strict'
let title=document.getElementById('title')
let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let count=document.getElementById('count')
let category=document.getElementById('category')
let submit =document.getElementById('submit')
let tbody=document.getElementById('tbody')
let btnd=document.getElementById('deleteall')
let searchs=document.getElementById('search')
let mood='create'
let tmp;
let dt;
let searchmood='title'
if(localStorage.product != "" && localStorage.product != undefined){dt=JSON.parse(localStorage.product)}
else{dt=[]}


function total1(){
                   if(price.value != ''){let result=(+price.value + +taxes.value + +ads.value)-discount.value
                         ; total.innerText=result; total.style.backgroundColor='green'}
                   else{total.innerText="0000"; total.style.backgroundColor='rgb(247, 57, 57)'}} 
                   
submit.onclick=function(){
let data={titles:title.value,
          prices:price.value,
          taxess:taxes.value,
          adss:ads.value,
          discounts:discount.value,
          totals:total.innerHTML,
          counts:count.value,
          categorys:category.value,}


          if(title.value !='' && data.counts<10){
          if(mood =='create'){
              if(data.counts !=''){ for(let i=0 ; i<data.counts;i++){dt.push(data)} }
              else{dt.push(data)}}

          else{dt[tmp]=data
      mood='creat'
      submit.innerHTML='create'
      count.style.display='block'}
      xx()
    }
          
          
          console.log(dt)
          localStorage.setItem('product', JSON.stringify(dt))
          function xx(){title.value=""
title.value=''
price.value=''
taxes.value=''
ads.value=''
discount.value=''
total.innerHTML=''
count.value=''
category.value=''
}

showdata()
da()



}
function showdata(){let table='';
                   for(let i=0;i<dt.length;i++){table+=`<tr>
                   <td>${i+1}</td>
                   <td>${dt[i].titles}</td>
                   <td>${dt[i].prices}</td>
                   <td>${dt[i].taxess}</td>
                   <td>${dt[i].adss}</td>
                   <td>${dt[i].discounts}</td>
                   <td>${dt[i].totals}</td>
                   <td>${dt[i].categorys}</td>
                   <td><button onclick=up(${i}) id="update">update</button></td>
                   <td><button onclick=deletedata(${i})  id="delete">delete</button></td></tr>`}
                    tbody.innerHTML=table
                    //if(dt !=''){deleteall.innerHTML=`<button>delete all</button>`}
                    //else{deleteall.innerHTML=''}
                    total1()
                  }

                  showdata()
                              
      function da(){ if(dt != ''){deleteall.innerHTML=`<button onclick=ppp()>delete all ${ dt.length}</button>`}
           else{deleteall.innerHTML=''}
         }
          da()


 function deletedata(i){dt.splice(i,1);
                       localStorage.product=JSON.stringify(dt)
                       da()
                        showdata()

                       
                }
function ppp(){dt.splice(0);localStorage.product=JSON.stringify(dt);
      da();
      showdata();}

function up(i){title.value=dt[i].titles
               price.value=dt[i].prices
               taxes.value=dt[i].taxess
               ads.value=dt[i].adss
               discount.value=dt[i].discounts
               category.value=dt[i].categorys
               total1()
               count.style.display='none'
               submit.innerHTML='update'
               mood='update'
               tmp=i
               scroll({top:0,behavior:'smooth'})
               total1()

}
function search(id){if(id=='searchtitle'){searchmood='title' ; searchs.placeholder='search by title'}
                    else{searchmood='category' ; searchs.placeholder='search by category'}
                  console.log(searchmood)
                searchs.focus()
              searchs.value=''
            showdata()}





function searchdata(value){let table='';
  if(searchmood=='title'){for(let i=0;i<dt.length;i++){
    if(dt[i].titles.toLowerCase().includes(value.toLowerCase())){table+=`<tr>
    <td>${i+1}</td>
    <td>${dt[i].titles}</td>
    <td>${dt[i].prices}</td>
    <td>${dt[i].taxess}</td>
    <td>${dt[i].adss}</td>
    <td>${dt[i].discounts}</td>
    <td>${dt[i].totals}</td>
    <td>${dt[i].categorys}</td>
    <td><button onclick=up(${i}) id="update">update</button></td>
    <td><button onclick=deletedata(${i})  id="delete">delete</button></td></tr>`}

    else{}
  
}}






else{for(let i=0;i<dt.length;i++){
  if(dt[i].categorys.toLowerCase().includes(value.toLowerCase())){table+=`<tr>
  <td>${i+1}</td>
  <td>${dt[i].titles}</td>
  <td>${dt[i].prices}</td>
  <td>${dt[i].taxess}</td>
  <td>${dt[i].adss}</td>
  <td>${dt[i].discounts}</td>
  <td>${dt[i].totals}</td>
  <td>${dt[i].categorys}</td>
  <td><button onclick=up(${i}) id="update">update</button></td>
  <td><button onclick=deletedata(${i})  id="delete">delete</button></td></tr>`}

  else{}



}}
tbody.innerHTML=table
}




