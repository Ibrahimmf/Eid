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
            ctx.font = "1em Almarai, sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;
            ctx.fillText(nameDisplay.textContent, canvas.width / 2, canvas.height * 0.8);

            canvas.toBlob(function (blob) {
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "بطاقة_التهنئة.png";
                link.click();
            });
        } else {
            alert("الرجاء إدخال اسم وعرض البطاقة قبل حفظها.");
        }
    });
});
