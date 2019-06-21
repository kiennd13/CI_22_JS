// // let message = 'Welcom to my Website!'
// // // function welcome() {
// // //     alert('Welcome!!!')
// // // }

// // const welcome = function(){
// //     alert(message)
// // }
// // window.onclick = welcome

// let count = 0
// // function handclick() {
// //     count++
// //     console.log(count)
// // }
// // window.onclick = handclick

// // const clickevent = {
// //     count: 0,
// //     handclick: function () {
// //         console.log(array[0] + array[1] + array[2])
// //     }
// // }
// // const array = [1, 2, 3]
// // window.onclick = clickevent.handclick
// const clickevent = {

//     handclick: function () {
//         count++
//         if (count == 1) {
//             console.log("first click")
//         }
//         if (count == 2) {
//             console.log("second click")
//         }
//         else {
//             console.log("click" + count)
//         }
//     }
// }
// window.onclick = clickevent.handclick


// const components = {
//     header: `
//     <h1>welcome</h1>
//     `,
//     content: `
//     <p> website content </p>
//     `
// }
// window.onload = init

// function init() {
//     document.getElementById('app').innerHTML = components.header
// }

window.onload = init 

function  init() {
    view.showComponents('login')
}

function to_register() {
    view.showComponents('register')
}


