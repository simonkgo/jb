<<<<<<< HEAD

import {IsNumber, IsString, Length, Min, Max} from "class-validator"
=======
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

import { IsNumber, IsString, Length, Min, Max, IsPositive } from "class-validator";
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc

export class Product {

    @Min(0, {
        groups: ['shmuelTheKing'],
    })
    id: number;

    @IsString()
<<<<<<< HEAD
    @Length(2,10)
=======
    @Length(2, 10)
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    name: string;

    @IsNumber()
    @Min(50)
    @Max(150)
    price: number;

<<<<<<< HEAD
    stock: number;

    constructor(name: string,price: number,stock: number) {
        this.id = Math.floor(Math.random()*1000);
=======
    @IsNumber()
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Math.floor(Math.random() * 1000);
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
        this.name = name;
        this.price = price;
        this.stock = stock;
    };
<<<<<<< HEAD

=======
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
};