// function getData(){
//   fetch('https://newsapi.org/v2/everything?q=apple&from=2023-11-20&to=2023-11-20&sortBy=popularity&apiKey=4f07a853400f4315aef24f483013baa8')
//   .then(data => data.json())
//   .then(data => {
//     console.log(data.articles);
//   })
//   .catch(err => console.log(err))
// }
// getData()
//*************************************************
let getDiv = document.getElementById('getDiv');

let getSearch = document.getElementById('news') //getsearch nam sy 1 varib bnya or inpt me id di thi news wo di 

let getNews = () => { //to yhn getnews name sy arow func bnya or pora code arow func k andr krdya

  fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2023-10-21&sortBy=publishedAt&apiKey=4f07a853400f4315aef24f483013baa8`)
  .then(res => res.json())
  .then(res => {
    //console.log(res.articles);
    for (let i = 0; i < res.articles.length; i++) {
      // console.log(res.articles[i]);
      getDiv.innerHTML += `
      <div class="card m-4" style="width: 18rem;">
      <img src="${res.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    }
  })
  .catch(error => console.log(error));  


}

//live server par news ayegi


// google par news api likh do kafi sari websi ayengi 1st web open uper he api ha wo copy krlo
//api laga kar live server pr consol me article me sari news ayengi
//dta me news ka sra dta ayega or articles me sari news ha tw .articles ab pori 1 1 news ka arry of objets ayega
//[0].urlToImage aeysa kr k 1 img he aegi 

//Your API key is: 4f07a853400f4315aef24f483013baa8 (ye form fill k bad mili ha apikey)

//phr mne upr 1 vari banya getDiv or bootstrap ka use kia id k zarye id or .innertext or boot ka pora card dal dia 
//or src='${data.articles[i].urlToImage}' is tarhn path k zariye image or baqi data api s utha sakte hn or innerhtml
//k bad inequal s phly + lga dia to sari api s ajaegi or api me q=tasla likha ha q se search krte hn or tesla ko hta do
//mne boot sy card ko style kia ha or ab me chahta hun k m search  m kch bh type kro to new app me news render hon to mene 
//navbar me inpt ko id di news or butn ko getNews ko event dia or form jo boot  k sath tha usko ura dia form masla krta ha ab kch img a rhi ha or kxh internt issue sy nh a rhi 
// phir mne 1 varib bnalya or get krlia id sy or api me q sy serch krte hn to template literls q=${getSearch.value} back tick k sath 
//ab ishe api k andr ab jo bh me search me type karuga wo news render ho jayegi