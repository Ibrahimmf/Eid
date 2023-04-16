document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name-input");
    const submitName = document.getElementById("submit-name");
    const saveCard = document.getElementById("save-card");
    const nameDisplay = document.getElementById("name-display");

    const generateCard = function () {
        const name = nameInput.value;

        if (name.trim() !== "") {
            nameDisplay.textContent = name;

            const cardText = document.getElementById("card-text");
            cardText.style.display = "block";

            const cardImage = document.getElementById("card-image");
            cardImage.style.display = "block";
        } else {
            alert("الرجاء إدخال اسم قبل المتابعة.");
        }
    };

 submitName.addEventListener("click", function () {
	 
	 generateCard();
 });
saveCard.addEventListener("click", function () {
  if (nameDisplay.textContent.trim() !== "") {
    const cardImage = document.getElementById("card-image");
    const cardText = document.getElementById("card-text");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = cardImage.offsetWidth;
    canvas.height = cardImage.offsetHeight;

    ctx.drawImage(cardImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "20px Almarai, sans-serif";
    ctx.fillStyle = "#835C3B"; // Brown color
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(nameDisplay.textContent, canvas.width / 2, canvas.height / 2);

    canvas.toBlob(function (blob) {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "بطاقة_التهنئة.png";

  // إنشاء رابط مشاركة الواتساب
  const whatsappLink = "https://api.whatsapp.com/send?text=تم%20إنشاء%20هذه%20البطاقة%20لك%20من%20موقع%20التهنئة.%20قم%20بتحميل%20الصورة:%20" + encodeURIComponent(link.href);
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = whatsappLink;
  whatsappBtn.target = "_blank";
  whatsappBtn.innerText = "مشاركة عبر الواتساب";

  // إضافة الزر لصفحة الويب
  const container = document.getElementById("container");
  container.appendChild(whatsappBtn);
});

  } else {
    alert("الرجاء إدخال اسم وعرض البطاقة قبل حفظها.");
  }
});

});
