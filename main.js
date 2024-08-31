// DOM 초기화
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const colorBtns = document.querySelectorAll(".pallet button")
const eraserBtn = document.querySelectorAll("#eraser")
const downloadBtn = document.querySelectorAll("#download")

// 그리기 설정
let isDrawing = false;
let isErasin = false;