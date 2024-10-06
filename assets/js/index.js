
let CpuMove = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));

let hamle = prompt("lütfen taş kağıt ya da makas seçiniz:");


// TAŞ İÇİN

if (hamle === "taş" && CpuMove === "kağıt")
  alert("Bilgisayarın hamlesi kağıttı. Bilgisayar yendi")

if (hamle === "taş" && CpuMove === "makas")
  alert("Bilgisayarın hamlesi makastı. Oyuncu yendi")

if (hamle === "taş" && CpuMove === "taş")
  alert("Tie")

// KAĞIT İÇİN

if (hamle === "kağıt" && CpuMove === "kağıt")
  alert("Tie")

if (hamle === "kağıt" && CpuMove === "makas")
  alert("Bilgisayarın hamlesi makastı. Bilgisayar yendi")

if (hamle === "kağıt" && CpuMove === "taş")
  alert("Bilgisayarın hamlesi taştı. Oyuncu yendi")


// MAKAS İÇİN

if (hamle === "makas" && CpuMove === "makas")
  alert("Tie")

if (hamle === "makas" && CpuMove === "kağıt")
  alert("Bilgisayarın hamlesi kağıttı. Oyuncu yendi")

if (hamle === "makas" && CpuMove === "taş")
  alert("Bilgisayarın hamlesi taştı. Bilgisayar yendi")

else (
  alert("Geçersiz Hamle"))




