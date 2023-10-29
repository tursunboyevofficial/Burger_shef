const product = {
    plainBurger:{
        name:'GAMBURGER',
        price:10000,
        kcall:120,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    freshBurger:{
        name:'GAMBURGER FRESH',
        price:20500,
        kcall:170,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    freshCombo:{
        name:'FRESH COMBO',
        price:31900,
        kcall:210,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    }
}

const productBtn = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', function () {
        plusMinus(this)
    })
    
}
function plusMinus(item) {
   const parent = item.closest('.main__product'),
         parentId = parent.getAttribute('id'),
         out = parent.querySelector('.main__product-num'),
         price = parent.querySelector('.main__product-price span'),
         kcall = parent.querySelector('.main__product-kcall span'),
         check = item.getAttribute('data-symbol')
         
         if (check == '+' && product[parentId].amount < 10) {
            product[parentId].amount++
         } else if(check == '-' && product[parentId].amount > 0){
            product[parentId].amount--
         }

         out.innerHTML = product[parentId].amount
         price.innerHTML = product[parentId].Summ
         kcall.innerHTML = product[parentId].Kcall
}


const addCart = document.querySelector('.addCart'),
      receipt = document.querySelector('.receipt'),
      receiptWindow = document.querySelector('.receipt__window'),
      receiptWindowOut = document.querySelector('.receipt__window-out'),
      receiptPay = document.querySelector('.receipt__window-btn')
  

let productList = [],
productName = ''
productPrice = 0
productKcall = 0



addCart.addEventListener('click',function () {  
    for (const key in product) {
            const item = product[key]
           if (item.amount > 0) {
               productList.push(item)
           }
           item.price = item.Summ
           item.kcall = item.Kcall
      
    }
    for (let i = 0; i < productList.length; i++) {
      const el = productList[i];
      productPrice=productPrice+el.price
      productKcall=productKcall+el.kcall
      productName=productName+ '\n'+el.name+'\n'
    }
    receiptWindowOut.innerHTML = `purchased : ${productName} \nCallory: ${productKcall} \nTotal price: ${productPrice}` 
    document.body.style.overflow = 'hidden'




    receipt.style.display = 'flex'

setTimeout(() => {
    receiptWindow.style.top = '20%'
}, 200);



setTimeout(() => {
    receipt.style.opacity = '1'
}, 100);

})
receiptPay.addEventListener('click',function () {
    setTimeout(() => {
        location.reload()
    }, 300);
    setTimeout(() => {
        receipt.style.opacity = '0'
    }, 200);
    
    setTimeout(() => {
        receiptWindow.style.top = '-100%'
    }, 100);
})

const level = document.querySelector('.header__timer-extra');
let speed  = 20
function LVL(i = 0) { 
    level.innerHTML = i
    i++
    if (i>1 && i<30) {
        
        level.style.textShadow = "0 0 10px #ff1177, 0 0 20px #d6249f, 0 0 30px #285AEB "
        
    } if (i>30 && i<60) {
        
        level.style.textShadow = "0 0 10px #25d366, 0 0 20px #48ee85, 0 0 30px #0ec0a5 "
        
    } if (i>60 && i<100) {
        
        level.style.textShadow = "0 0 10px #1877f2, 0 0 20px #1459b3, 0 0 30px #179bff "
    }
    if (i>50 && i<75) {
        speed = 50
       
        
    }else if(i>=75 && i< 85){
     speed=75
    
    }else if(i>=85 && i< 85){
       speed=100

       }else if(i>=95){
        speed=150
       }
    if (i<= 100) {
      
        setTimeout(() => {
            LVL(i)
        }, speed);
    }
 }
 LVL()
 console.log();

 const info = document.querySelectorAll('.main__product-info')
 let view = document.querySelector('.view')
 let vieImg = view.querySelector('img')
let close = document.querySelector('.close')

    for (let i = 0; i < info.length; i++) {

     const infos = info[i];

     infos.addEventListener('dblclick',function () {
         let img = infos.querySelector('.main__product-img')
         let x  = img.getAttribute('src')
         vieImg.setAttribute('src', x)

         view.classList.add('active')
        
         
    }) 
    
 }
 close.addEventListener('click', function(){
    view.classList.remove('active')
 })






       
  


