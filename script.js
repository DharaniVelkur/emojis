 fetching('smileys-and-people','category3')
 function fetching(category,id){
let promise= fetch(`https://emojihub.yurace.pro/api/all/category/${category}`);
promise.then(response=>response.json()).then((value)=>{
    // console.log(value[0].htmlCode)
    console.log(value)
    for(let i=0;i<value.length;i++){
        let dataofitems=[(value[i].htmlCode),value[i].name];
        call(dataofitems,id);
    }
})
 }
call=([emoji,name],id)=>{
    document.getElementById(id).innerHTML+=`<div class="card m-1" style="width: 10rem;">
    <div class="card-body">

    <div style="font-size:4em;" id="emojiid">${emoji}</div>
      <h5 class="text-center">${name}</h5>
    </div>
  </div>`
}

myfunction=()=>{
    let categ='food-and-drink';
    let id='category1';
    fetching(categ,id);
    document.getElementById('category1').style.display='flex';
    document.getElementById('category2').style.display='none';
    document.getElementById('category3').style.display='none';
    document.getElementById('category4').style.display='none';

    

 }
myfunction1=()=>{
    let categ='travel-and-places';
    let id='category2';
    fetching(categ,id);
    document.getElementById('category1').style.display='none';
    document.getElementById('category2').style.display='flex';
    document.getElementById('category3').style.display='none';
    document.getElementById('category4').style.display='none';


}
myfunction2=()=>{
    let categ='smileys-and-people';
    let id='category3';
    fetching(categ,id);
    document.getElementById('category1').style.display='none';
    document.getElementById('category2').style.display='none';
    document.getElementById('category3').style.display='flex';
    document.getElementById('category4').style.display='none';

}
myfunction3=()=>{
    let categ='animals-and-nature';
    let id='category4';
    fetching(categ,id);
    document.getElementById('category1').style.display='none';
    document.getElementById('category2').style.display='none';
    document.getElementById('category3').style.display='none';
    document.getElementById('category4').style.display='flex';

}