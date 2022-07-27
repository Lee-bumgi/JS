//1. left  라는 버튼을 눌렀을 때 , 말이 왼쪽으로   50px씩 이동
//2. right 라는 버튼을 눌렀을 때 , 말이 오른쪽으로 50px씩 이동
// 단, 말이 배경사진 밖으로 나가지 않게 할 것
let leftmove = 0
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


