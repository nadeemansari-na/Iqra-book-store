let sho = document.querySelector(".sho")
let order = document.querySelector(".order")
let close = document.querySelector(".close")
let cart = document.querySelectorAll(".card")
let addc = document.querySelectorAll(".addcart")
let input=document.querySelector(".search").querySelector("input")
let search=document.querySelector(".search").querySelector(".se")
let sin=document.querySelector(".search").querySelector("input")
let heading=document.querySelectorAll(".heading")
let feature=document.querySelector(".feature")
let cate=document.querySelector(".cate")
let cardcontainer=document.querySelector(".carcontainer")
let empty=document.querySelector(".empty")
let disp=document.querySelector(".disp")
let mainpage=document.querySelector(".mainpage")
let cartcount = 0;

// sidebar
 function load(){
     const mediaquery=window.matchMedia("(max-width:650px)")
    if(mediaquery.matches){
        order.style.right='-100%'
    }
    else{
        order.style.right='-25%'
    }
 }
    window.addEventListener("resize",(event)=>{
        load()
    })
sho.addEventListener("click", (v) => {
    // order.style.right='0%'
    // order.classList.remove("active")
    const mediaquery=window.matchMedia("(max-width:650px)")
    if(mediaquery.matches){
        order.style.right='0%'
    }
    else{
        order.style.right='0%'
    }
})
// closesidebar
close.addEventListener("click", (e) => {
    // order.style.right='-22%'
     const mediaquery=window.matchMedia("(max-width:650px)")
    if(mediaquery.matches){
        order.style.right='-100%'
    }
    else{
        order.style.right='-25%'
    }
    // order.classList.add("active")
})

// ordercart
let sum = 0;
function mainl(amount, tittle) {
    let head = document.querySelector("header")
    let div = document.createElement("div")
    div.classList.add("ormassage")
    div.innerHTML = ` <img width="42rem" height="52rem" src="Best_Seller_-_Love_Mercy_book_cover.webp" alt="">
            <div class="name">
                <p>${tittle}</p>
                <span>₹${amount.slice(3)}</span>
            </div>
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
    
                `
    head.after(div)
    let footer = document.querySelector(".tfoot")

    let cut = div.querySelector(".close")
    cut.addEventListener("click", () => {
        let amou = cut.previousElementSibling.lastElementChild.innerText
        console.log(sum)
        console.log(amou)
        sum -= parseInt(amou.slice(1))
        footer.innerText = `Total : ₹${sum}`
        div.remove()
          cartcount--
          if(cartcount==0){
            console.log("kaam kayse hoga")
            let empty=document.createElement("div")
            empty.classList.add("empty")
            empty.innerText="Your cart is empty."
            head.after(empty)
          }
        document.querySelector("#cart-count").textContent = cartcount
    })


    if (div == ' ') {
        sum = 0;
        footer.innerText = `Total : ₹${sum}`
    }
    else {
        let amt = div.querySelector("span").innerText

        sum += parseInt(amount.slice(3));
        footer.innerText = `Total : ₹${sum}`
    }

}

// addcartclick
let arr = Array.from(addc)
for (const btn of arr) {
    btn.addEventListener("click", (e) => {
        let empty=document.querySelector(".empty")
        console.log('button clicked:', btn)
        let parent = btn.parentElement
        let span = parent.querySelector("span")
        let name = parent.querySelector("p")
        let amount = span.innerText;
        let tittle = name.innerText;
        alert(`${tittle} added to cart!`)
        cartcount++
        document.querySelector("#cart-count").textContent = cartcount
        mainl(amount, tittle)
        empty.remove()
    })
}

// searchproduct serach by button
// search.addEventListener("click",()=>{
//     cardcontainer.innerHTML=''
    
//     let value=input.value
//    heading.forEach((v)=>{
//     let intext=v.innerText;
    
//     function havecommonpart(str1,str2){
//         let words1=str1.toLowerCase().split(/\s+/);
//         let words2=str2.toLowerCase().split(/\s+/);
//         let check = words1.some(w1=> words2.some(w2 => w1.includes(w2) || w2.includes(w1)))
//         if(check==true){
//            function gebit(text){
//             return Array.from(heading).filter(el => el.innerText.includes(text))
//             .map(el => el.parentElement)
//            }
//            let els=gebit(str2)
//            console.log(els[0])
//            let apply=els[0]
//            cate.remove()
           
//            cardcontainer.append(apply)
//         }
//     }
    
//     havecommonpart(value,intext)
//    })
// })           

// search by its own
sin.addEventListener("input",()=>{
    // feature.querySelector("h3").remove()
     function loa(){
     const mediaquer=window.matchMedia("(max-width:950px)")
    if(mediaquer.matches){
        console.log("is it working")
       if(sin.value==""){
         disp.classList.remove("active")
    }else{
        mainpage.style.height="auto"
        disp.classList.add("active")
    }

    }
 }
//  window.addEventListener("resize",()=>{
//     loa()
// })
     loa();
   
    cardcontainer.innerHTML=''
    
    let value=input.value
   heading.forEach((v)=>{
    let intext=v.innerText;
    
    function havecommonpartt(str1,str2){
        let words1=str1.toLowerCase().split(/\s+/);
        let words2=str2.toLowerCase().split(/\s+/);
        let check = words1.some(w1=> words2.some(w2 => w1.includes(w2) || w2.includes(w1)))
        if(check==true){
           function gebit(text){
            return Array.from(heading).filter(el => el.innerText.includes(text))
            .map(el => el.parentElement)
           }
           let els=gebit(str2)
           console.log(els[0])
           let apply=els[0]
           cate.remove()
           
           cardcontainer.append(apply)
        }
    }
    
    havecommonpartt(value,intext)
   })

})
