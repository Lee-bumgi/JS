//1. left  라는 버튼을 눌렀을 때 , 말이 왼쪽으로   50px씩 이동
//2. right 라는 버튼을 눌렀을 때 , 말이 오른쪽으로 50px씩 이동
// 단, 말이 배경사진 밖으로 나가지 않게 할 것
let leftmove = 0
let jumpmove = 200
$('.btn.left').click(()=>{
    if(leftmove<1150){
        leftmove += 50
        $('#mushroom').css('right', `${leftmove}px`)
    }
})

$('.btn.right').click(()=>{
    if(leftmove>=50){
        leftmove -= 50
        $('#mushroom').css('right', `${leftmove}px`)
    }
})

// 키보드 방향키로 말의 위치를 이동
$('body').on('keydown', (event)=>{
    console.log(event.keyCode)

    if(event.keyCode == 37){
        if(leftmove<1150){
            leftmove += 50
            $('#mushroom').css('right', `${leftmove}px`)
        }
    }
})

$('body').on('keydown', (event)=>{
    console.log(event.keyCode)

    if(event.keyCode == 39){
        if(leftmove>=50){
            leftmove -= 50
            $('#mushroom').css('right', `${leftmove}px`)
        }
    }
})

$('body').on('keydown', (event)=>{
    console.log(event.keyCode)

    if(event.keyCode == 32){
        // animate()함수
        // css속성들을 이용해서 애니매이션을 수행하는 것
        // 단, 수치형 속성값으로만 가능하다. backgrond-color등은 불가능

        // .animate(css속성들, 속도)
        $('#mushroom')
        .animate({bottom:'250px'},'slow')
        .animate({bottom:'200px'},'slow')
        // if(jumpmove<=550){
        //     jumpmove += 50
        //     $('#mushroom').css('bottom', `${jumpmove}px`)
        // }
    }
})

// $('body').on('keydown', (event)=>{
//     console.log(event.keyCode)

//     if(event.keyCode == 40){ 
//         if(jumpmove>=250){
//             jumpmove -= 50
//             $('#mushroom').css('bottom', `${jumpmove}px`)
//         }
//     }
// })


   