function generateImg(){
   
   
    const images = [ 
    innerHTML= '<img src="./image/Без названия (2).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (3).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (4).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (5).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (6).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (7).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (8).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (9).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (10).jpeg" alt="">',
    innerHTML= '<img src="./image/Без названия (11).jpeg" alt="">',
]
    

    
    const randomIndex = Math.floor(Math.random() * images.length)
    const img = images[randomIndex]
    document.getElementById('img').innerHTML = img
    

    function saveImg(){
        const img = document.getElementById('img').innerHTML
        localStorage.setItem('img', img)
    }
    }
    



    function loadImg() {
        const img = localStorage.getItem('img')
        if (img) {
            document.getElementById('img').innerHTML = img
        }else {
            generateImg()
        } 
    }

    
    document.getElementById('new-img').addEventListener('click', function() {
        generateImg()
        saveImg()
    })
    

    
    window.addEventListener('load', function(){
        loadImg
    })







