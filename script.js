// const balls=document.querySelectorAll('.ball')
// const jars=document.querySelectorAll('.jar')
// const base=document.querySelectorAll('.base')
// const text=document.querySelectorAll('.text')
// const restart=document.querySelector('.fa-arrows-rotate')


// let selectedJar=null


// balls.forEach(ball => {
//     ball.addEventListener('click', () => {
//         ball.style.display = 'none'

//     })
// })


// restart.addEventListener('click', () => {
//     restart.style.transform='scale(1.05)'
// setTimeout(()=>{
//     location.reload();

// },300)
// });


// jars.forEach(jar=>{
//     jar.addEventListener('click',()=>{
//         selectedJar=jar
//         jar.classList.toggle('selected')
//         setTimeout(()=>jar.classList.remove('selected'),600)
//     })
// })


// balls.forEach(ball=>{
//     ball.addEventListener('click',()=>{

//         if(selectedJar){
//             if(selectedJar.children.length<4){
//                 selectedJar.appendChild(ball)
//                 ball.style.display='flex'

//             }else{
//                 alert('This jar cannot hold more than 5 balls!')
//             }
//         }else{
//             alert('Please select a jar first')
//         }
//     })
// })


// const start=document.querySelector('.startBtn')
// const startPage=document.querySelector('.container_start')
// const letsStart=document.querySelector('.letsStart')



// start.addEventListener('click',()=>{
//     startPage.classList.add('letsStart')
// })







// const balls=document.querySelectorAll('.ball')
// const jars=document.querySelectorAll('.jar')
// const base=document.querySelectorAll('.base')
// const text=document.querySelectorAll('.text')
// const restart=document.querySelector('.fa-arrows-rotate')
// const start=document.querySelector('.startBtn')
// const startPage=document.querySelector('.container_start')
// const letsStart=document.querySelector('.letsStart')



// start.addEventListener('click',()=>{
//     startPage.classList.add('letsStart')
// })

// restart.addEventListener('click', () => {
//     restart.style.transform='scale(1.05)'
//     setTimeout(()=>{
//         location.reload()
//     },300)
// })

// let selectedJar=null
// jars.forEach(jar=>{
//     jar.addEventListener('click',()=>{
//         selectedJar=jar
//         jar.classList.toggle('selected')
//         setTimeout(()=>jar.classList.remove('selected'),600)
//     })
// })

// balls.forEach(ball=>{
//     ball.addEventListener('click',()=>{
//         const parentjar=ball.parentElement
//         if(parentjar && parentjar.classList.contains('jar') && parentjar.lastElementChild!==ball){
//             alert('only the last ball in the jar can be moved.')
//             return
//         }
//         if (selectedJar){
//             if(selectedJar.children.length<4){
//                 selectedJar.appendChild(ball)
//                 ball.style.display='flex'
//             }else{
//                 alert("this jar can't hold more than 4 balls.")
//             }
//         }else {
//             alert('Select a jar first')
//         }
//     })
// })







// const balls=document.querySelectorAll('.ball')
// const jars=document.querySelectorAll('.jar')
// const bases=document.querySelectorAll('.base')
// const restart=document.querySelector('.fa-arrow-rotate')
// const start=document.querySelector('.startBtn')
// const startPage=document.querySelector('.container_start')
// const letsStart=document.querySelector('.letsStart')
// const selectedB=document.querySelector('.selectedB')

// start.addEventListener('click',()=>{
//     startPage.classList.add('letsStart')
// })

// restart.addEventListener('click',()=>{
//     restart.computedStyleMap.transform='scale(1.05)'
//     setTimeout(()=>{
//         location.reload()
//     },300)
// })





// let selectedJarOrBase=null


// jars.forEach(jar=>{
//     jar.addEventListener('click',()=>{
//         selectedJarOrBase=jar
//         jar.classList.add('selected')
//         setTimeout(()=>jar.classList.remove('selected'),600)
//     })
// })



// bases.forEach(base => {
//     base.addEventListener('click', () => {
//         selectedJarOrBase = base;
//         base.classList.add('selectedB');
//         setTimeout(() => base.classList.remove('selectedB'), 600);
//     });
// });



// balls.forEach(ball=>{
//     ball.addEventListener('click',()=>{
//         const parentJar=ball.parentElement

//         if(parentJar && parentJar.classList.contains('jar') && parentJar.lastElementChild!==ball){
//             alert('only the last ball in the jar can be moved.')
//             return
//         }
//         if (selectedJarOrBase){
//             if(selectedJarOrBase.classList.contains('jar')){
//                 if(selectedJarOrBase.children.length<4){
//                     selectedJarOrBase.appendChild(ball)
//                     ball.style.display='flex'
//                 }else{
//                     alert('jar can hold only 4 balls')
//                 }
//             }else if(selectedJarOrBase.classList.contains('base')){
//                 selectedJarOrBase.appendChild(ball)
//                 ball.style.display='block'
//             }
//         }else{
//             alert('Select jar first')
//         }
//     })
// })











const balls = document.querySelectorAll('.ball')
const jars = document.querySelectorAll('.jar')
const bases = document.querySelectorAll('.base')
const text = document.querySelectorAll('.text')
const restart = document.querySelector('.fa-arrows-rotate')
const start = document.querySelector('.startBtn')
const startPage = document.querySelector('.container_start')
const letsStart = document.querySelector('.letsStart')

start.addEventListener('click', () => {
    startPage.classList.add('letsStart')
})

restart.addEventListener('click', () => {
    restart.style.transform = 'scale(1.05)'
    setTimeout(() => {
        location.reload()
    }, 300)
})

let selectedJarOrBase = null

jars.forEach(jar => {
    jar.addEventListener('click', () => {
        selectedJarOrBase = jar
        jar.classList.add('selected')
        setTimeout(() => jar.classList.remove('selected'), 600)
    })
})


const selectedB=document.querySelector('selectedB')

bases.forEach(base => {
    base.addEventListener('click', () => {
        selectedJarOrBase = base
        base.classList.add('selectedB')
        setTimeout(() => base.classList.remove('selectedB'), 600)
    })
})

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        const parentJar = ball.parentElement

        if (parentJar && parentJar.classList.contains('jar') && parentJar.lastElementChild !== ball) {
            alert('Only the last ball in the jar can be moved.')
            return
        }

        if (selectedJarOrBase) {
            if (selectedJarOrBase.classList.contains('jar')) {
                if (selectedJarOrBase.children.length < 4) {
                    selectedJarOrBase.appendChild(ball)
                    ball.style.display = 'flex'
                } else {
                    alert("This jar can't hold more than 4 balls.")
                }
            } else if (selectedJarOrBase.classList.contains('base')) { 
                selectedJarOrBase.appendChild(ball)
                ball.style.display = 'flex'
            }
        } else {
            alert('Select a jar or a base first')
        }
    })
})












































































