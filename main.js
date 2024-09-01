// DOM 초기화
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const colorBtns = document.querySelectorAll(".pallet button")
const eraserBtn = document.querySelector("#eraser")
const downloadBtn = document.querySelectorAll("#download")

// 그리기 설정
let isDrawing = false;
let isErasin = false;

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

//이벤트 리스너
function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function drawing(e) {
    if (!isDrawing) return;
    if (isErasin) {
        //지우개
        console.log("erasing...");
    } else {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
    ctx.closePath();

}

function startErasing(e) {
    isErasin = true;
    colorBtns.forEach((button) => button.classList.remove("selected"));
    e.currentTarget.classList.add("selected");
}

//내가 선택한 코드 활성화
function changeColor(e) {
    ctx.strokeStyle = e.currentTarget.dataset.color;
    colorBtns.forEach(button => {
        if (button === e.currentTarget) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    })
}


// 이벤트 연결
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);
colorBtns.forEach((button) => button.addEventListener("click", changeColor));
eraserBtn.addEventListener("click", startErasing);