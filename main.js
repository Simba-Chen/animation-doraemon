function writeCss(code,callback){
    let n = 0
    let id = setInterval(function (){
        n++
        styleTag.innerHTML = code.substring(0, n)
        if(n >= code.length){
            window.clearInterval(id)
            callback()
        }
    },10)
}

function writeHtml(code,callback){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(function (){
        n++
        domCode.innerHTML = code.substring(0, n)
        domCode.scronllTop = domCode.scrollHeight //当页面不够高的时候，页面自动向上滚动
        if(n >= code.length){
            window.clearInterval(id)
            callback()
        }
    },1)
}

var codestyle = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper{
    height: 500px;
    width: 500px;
    border-radius: 50%;
    border: 6px solid black;
    background-color: rgb(1,159,233);
    position: relative;
}
.face{
    height: 420px;
    width: 420px;
    border-radius: 50%;
    border: 4px solid black;
    background-color: white;
    position: absolute;
    bottom: 0px;
    left: 35px;
}
.eye{
    height: 110px;
    width: 90px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    display: inline-block;
}
.eye.left{
    position: absolute;
    left: 158px;
    top: 4px;
}
.eye.right{
    position: absolute;
    left: 246px;
    top: 4px;
}
.eyeBall{
    width: 36px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: black;
    position: absolute;
}
.eyeBall.left{
    left: 10px;
    top: 55px;
}
.eyeBall.right{
    left: 10px;
    top: 55px;
}
.eyeHight{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 8px;
    top: 10px;
}
.nose{
    width: 52px;
    height: 52px;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    left: 221px;
    top: 96px;
    background-color: red;
}
.noseHight{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 4px;
    left: 8px;
}
.lineVertical{
    height: 230px;
    border: 1px solid black;
    position: absolute;
    top: 148px;
    left: 244px;
}
.beardTop{
    height: 0px;
    width: 150px;
    border: 1px solid black;
}
.beardTop.left{
    transform: rotate(18deg);
    position: absolute;
    top: 155px;
    left: 75px;
}
.beardTop.right{
    transform: rotate(-18deg);
    position: absolute;
    top: 155px;
    right: 75px;
}
.beardBetween{
    height: 0px;
    width: 144px;
    border: 1px solid black;
}
.beardBetween.left{
    position: absolute;
    left: 80px;
    top: 200px;
}
.beardBetween.right{
    position: absolute;
    right: 80px;
    top: 200px;
}
.beardBottom{
    height: 0px;
    width: 150px;
    border: 1px solid black;
}
.beardBottom.left{
    position: absolute;
    left: 75px;
    top: 240px;
    transform: rotate(-18deg);
}
.beardBottom.right{
    position: absolute;
    right: 75px;
    top: 240px;
    transform: rotate(18deg);
}
.mouth{
    width: 250px;
    height: 150px;
    border: 4px solid black;
    border-radius: 0 0 50% 50%;
    border-top: none;
    border-left: none;
    border-right: none;
    position: absolute;
    top: 232px;
    left: 118px;
}
.bell{
    height: 30px;
    width: 282px;
    border: 4px solid black;
    border-radius: 15px;
    background-color: red;
    position: absolute;
    bottom: -6px;
    left: 104px;
}
.bell>.ball{
    height: 54px;
    width: 54px;
    border: 4px solid black;
    border-radius: 50%;
    background-color: rgb(236,200,26);
    position: absolute;
    top: -14px;
    left: 110px;
}
.bell>.ball>.line{
    height: 12px;
    width: 66px;
    border: 4px solid black;
    border-radius: 6px;
    background-color: rgb(236,200,26);
    position: absolute;
    top: 12px;
    left: -10px;
}
.bell>.ball>.dot{
    height: 14px;
    width: 14px;
    border: 4px solid black;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    bottom: 6px;
    left: 16px;
}
.bell>.ball>.verticalLine{
    height: 10px;
    width: 2px;
    border: 2px solid black;
    position: absolute;
    left: 21px;
    bottom: 0;
}
`
let codeHtml = `
<audio autoplay loop src="//pcnr8hfja.bkt.clouddn.com/%E6%9D%8E%E9%9B%AA%E8%8E%B1%20-%20%E5%A5%BD%E6%83%B3%E4%BD%A0.mp3"></audio>
<div class="wrapper">
<div class="face"></div>
<div class="eye left"><div class="eyeBall left"><div class="eyeHight"></div></div></div><div class="eye right"><div class="eyeBall right"><div class="eyeHight"></div></div></div>
<div class="nose"><div class="noseHight"></div></div>
<div class="lineVertical"></div>
<div class="beardTop left"></div>
<div class="beardTop right"></div>
<div class="beardBetween left"></div>
<div class="beardBetween right"></div>
<div class="beardBottom left"></div>
<div class="beardBottom right"></div>
<div class="mouth"></div>
<div class="bell">
    <div class="ball">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="verticalLine"></div>
    </div>
</div>    
</div>
`

writeHtml(codeHtml,()=>{
    writeCss(codestyle,()=>{
        alert('页面绘制完成，谢谢观赏！')
    })
})
