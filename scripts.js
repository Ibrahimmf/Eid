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
      link.click();
	    
	    // Create WhatsApp share button
            const whatsappLink = `whatsapp://send?text=Check%20out%20my%20greeting%20card!%0A${window.location.href}`;
            const whatsappButton = document.createElement("a");
            whatsappButton.href = whatsappLink;
            whatsappButton.target = "_blank";
            whatsappButton.innerText = "Share via WhatsApp";
            document.body.appendChild(whatsappButton);
	   
	    
	    
    });
  } else {
    alert("الرجاء إدخال اسم وعرض البطاقة قبل حفظها.");
  }
});

});
