// // $('.pipi-carousel-control a[data-slide="prev"]')
// $('.pipi-carousel').each((i,item)=>{
//     let [next, prev] = createPipiCarousel($(item))
//     let $next = $(`#${$(item).attr('id')} .pipi-carousel-control a[data-slide="next"]`)
//     let $prev = $(`#${$(item).attr('id')} .pipi-carousel-control a[data-slide="prev"]`)
//     $next.on('click', next)
//     $prev.on('click', prev)
// })

// function createPipiCarousel($carousel){
//     // console.log($carousel,cols, $items, actives)
//     let cols = +$carousel.attr('data-cols')
//     let $items = $(`#${$carousel.attr('id')} .carousel-item`)
//     $items.removeClass('pipi-active')
//     for(let i = 0; $items.length < cols; i++){
//         // console.log($items.length)
//         $($items[i]).addClass('pipi-active')
//         $(`#${$carousel.attr('id')} .carousel-inner`).append($($items[i]).clone())
//         $items = $(`#${$carousel.attr('id')} .carousel-item`)
//         // console.log($items.length)
//     }
//     let nextSlide = ()=>{
//         let actives = $(`#${$carousel.attr('id')} .carousel-item.pipi-active`)
//         let a = Object.entries($items).findIndex((a)=>a[1]===actives[actives.length-1])
//         $(actives[0]).removeClass('pipi-active')
//         $($items[a+1]).addClass('pipi-active')
//     }
//     let prevSlide = ()=>{
//         let actives = $(`#${$carousel.attr('id')} .carousel-item.pipi-active`)
//         let a = Object.entries($items).findIndex((a)=>a[1]===actives[0])
//         $(actives[actives.length-1]).removeClass('pipi-active')
//         $($items[a-1]).addClass('pipi-active')
//     }
    
//     return [nextSlide, prevSlide]
// }


console.log('𝔐𝔞𝔡𝔢 𝔟𝔶 𝔭𝔦𝔭𝔦𝔰𝔞𝔰𝔞 (っ◔◡◔)っ ❤')

let date = new Date;
if(date.getDate()===31 && date.getMonth()===7){
    console.error(`
        ██╗░░██╗░█████╗░██╗░░░░░██╗░░░░░░█████╗░░██╗░░░░░░░██╗███████╗███████╗███╗░░██╗
        ██║░░██║██╔══██╗██║░░░░░██║░░░░░██╔══██╗░██║░░██╗░░██║██╔════╝██╔════╝████╗░██║
        ███████║███████║██║░░░░░██║░░░░░██║░░██║░╚██╗████╗██╔╝█████╗░░█████╗░░██╔██╗██║
        ██╔══██║██╔══██║██║░░░░░██║░░░░░██║░░██║░░████╔═████║░██╔══╝░░██╔══╝░░██║╚████║
        ██║░░██║██║░░██║███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗███████╗██║░╚███║
        ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝╚═╝░░╚══╝

        ░░░░░░░░░░░║
        ░░▄█▀▄░░░░░║░░░░░░▄▀▄▄
        ░░░░░░▀▄░░░║░░░░▄▀
        ░▄▄▄░░░░█▄▄▄▄▄▄█░░░░▄▄▄
        ▀░░░▀█░█▀░░▐▌░░▀█░█▀░░░▀
        ░░░░░░██░░▀▐▌▀░░██
        ░▄█▀▀▀████████████▀▀▀█
        █░░░░░░██████████░░░░░▀▄
        █▄░░░█▀░░▀▀▀▀▀▀░░▀█░░░▄█
        ░▀█░░░█░░░░░░░░░░█░░░█▀
    `)
}
if(date.getDate()===25 && date.getMonth()===6){
    console.log(`
        ██╗░░██╗░█████╗░██████╗░██████╗░██╗░░░██╗
        ██║░░██║██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝
        ███████║███████║██████╔╝██████╔╝░╚████╔╝░
        ██╔══██║██╔══██║██╔═══╝░██╔═══╝░░░╚██╔╝░░
        ██║░░██║██║░░██║██║░░░░░██║░░░░░░░░██║░░░
        ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░░░░╚═╝░░░
        
        ██████╗░██╗██████╗░████████╗██╗░░██╗██████╗░░█████╗░██╗░░░██╗██╗██╗██╗
        ██╔══██╗██║██╔══██╗╚══██╔══╝██║░░██║██╔══██╗██╔══██╗╚██╗░██╔╝██║██║██║
        ██████╦╝██║██████╔╝░░░██║░░░███████║██║░░██║███████║░╚████╔╝░██║██║██║
        ██╔══██╗██║██╔══██╗░░░██║░░░██╔══██║██║░░██║██╔══██║░░╚██╔╝░░╚═╝╚═╝╚═╝
        ██████╦╝██║██║░░██║░░░██║░░░██║░░██║██████╔╝██║░░██║░░░██║░░░██╗██╗██╗
        ╚═════╝░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═╝╚═╝
    `)
}