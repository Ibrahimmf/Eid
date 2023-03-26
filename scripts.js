<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بطاقات التهنئة</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>أدخل اسمك لإنشاء بطاقة التهنئة</h1>
        <input type="text" id="nameInput" placeholder="اكتب اسمك هنا">
        <button onclick="generateCard()">إنشاء بطاقة التهنئة</button>
        <div class="card">
            <img src="card_background.jpg" alt="خلفية بطاقة التهنئة" id="cardImage">
            <div class="card-text" id="cardText"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
