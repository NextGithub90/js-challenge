const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  // document.body.style.backgroundColor = "salmon";
  document.body.classList.toggle("salmon");
};

const tAcakWarna = document.createElement("button");
const tTulisan = document.createTextNode("acak warna");
tAcakWarna.appendChild(tTulisan);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");

const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
