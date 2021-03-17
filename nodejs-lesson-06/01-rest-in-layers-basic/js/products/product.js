"use strict";
/*
    Validation;
    ?למה;
    רוצים לבדוק שהמידע שמכניסים לדאטה בייס הוא חוקי
    כמו מספר טלפון אימייל טקסט או מספרים
    וגם למנוע הכנסה של תווים לא חוקיים שיכולים לפגוע בשרת והלקוחות שלו
    <script></sript>כמו סקריפטים

    ?איך;
    npm יש חבילות מעולות ב
    אפשר לכתוב קוד באופן עצמאי
    או להשתשמש בחבילה ולהרחיב את היכולות בהתאם לצורך

    express-validator/express-validation;
    joi - schema description language and data validator for JavaScript;
    Ajv - mozilla winner - 47 weekly million download - great with TypeScript;
    class-validator;

    ?ולידציה של תווים חוקיים;
    בדרך כלל נועדה לבדוק את התוכן ולעדכן את המשתשמש
    סוגי ולידה אלה כוללים ולידציה של כמות מינימלית של מספרים
    או שם משפחה חובה וכו

    ?ולידציה של תווים לא חוקיים;
    נלמד בהמשך כנגיע לסקיוריטי - נועדה לנקות תווים לא חוקיים
    למנוע פירצות לדאטה בייס בעזרת תווים אלו והתחכמויות אחרות
    <script></script> סוגי ולידיה אלו מורידים תווים כמו
    הדבר הנכון ביותר לעשות הוא לא לנסות למנוע תווים כאלה או אחרים
    אלא לאפשר לאפשר רק את מה שמותר
    לדוגמא מבקשים שם פרטי
    אז לאפשר רק אותיות בעברית, בלי רווחים בצד, ומותר רק רווח אחד בין אותיות
    (בשביל שמות כמו בת אל או שי חי)

    ?ולידציה בצד לקוח מול ולידציה בצד שרת;
    וולידציה בקליינט היא בעיקר עבור חווית משתמש
    וכדי למנוע שליחה מיותרת לשרת
    אין לסמוך על כי הקוד בקליינט ניתן לשינוי בקלות
    
    ?מה יקרה אם לוותר על הולידציה בקליינט;
    סתם ישלח בקשה, וגם חוויות משתשמש נםגעת כי הוא לא רואה בדיוק איפה מילא את התופס לא כמו שביקשו

    ?למה אי אפשר להסתפק בולידציה בצד הלקוח;
    כי הקוד נמצא במחשב הקליינט, ולכן הוא יכול לעקוף את הולידציות שכתבנו כדי לשרת את צרכיו
    לדוגמא אם כתבנו שאפשר רק ספרות ותווים מסויימים - הוא יכול לשלוח לפי מה שחוקי בקוד שלנו
    אבל רגע לפני שהבקשה יוצאת לעשות לה שינוי
    בשלב שהוא כבר אחרי בדיקת הולידציה
    וכך לעקוף את הולידציה שכתבנו ולשלוח לשרת את הקוד שישרת את הקלייט
    fiddler/wireshark and more... בעזרת תוכנות כמו
    !לכן ולידציה בצד שרת היא חובה
    
    *class-validator
    סיפריה שמאפשרת לעשות ולידציה בקלאסים מאד מתאימה לכתיב עם טייפסקריפט
    ? מה צריך כדי לעבוד איתה
    1 npm i class-validator;
    2 להוסיף ולידטורים למאפיינים בקלאסים
    3 validate להריץ פונקציה
    4 להחזיר לקליינט הודעות ולידציה במידה ויש
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var class_validator_1 = require("class-validator");
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    ;
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(2, 10),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(50),
        class_validator_1.Max(150),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        __metadata("design:type", Number)
    ], Product.prototype, "stock", void 0);
    return Product;
}());
exports.Product = Product;
;
