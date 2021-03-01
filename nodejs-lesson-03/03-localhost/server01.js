/*
      ---
      למדנו ששרת זו תוכנה שכתובה בשפה כזו או אחרת
      זו תוכנה שבדרך כלל רצה במחשב מאזינה לבקשות וכל פעם שיש בקשה היא מריצה קוד מסויים
      אנחנו נלמד לכתוב שרת בסביבת נואד
      http אנחנו נפנה אליו מהפדפן בפרוטוקול שלמדנו 

      ?localhost מזה 

      ברגע שמחברים אותו לאינטרנט ip לכל מחשב יש כתובת 
      אם לא מחברים אז לא יהיה לו
       
      אבל יש כתובת מיוחדת שהיא תמיד שם ובכל המחשבים היא זהה
      אפשר לפנות אליה בשם או בכתובת
      localhost - 127.0.0.1 (local host - שרת מקומי)

      program - moisheufnikprogram;
      ? אם נרצה לפנות לתוכנה של משה מהדפדפן איך זה יראה
      http://localhost:moisheufnikprogram

      !מה יכולה להיות הבעיה פה 
      http://localhost:moisheufnikprogram
      http://www.ynet.co.il
      (כתובת זו כמו בניין עצום עם 65000 דירות , לדוגמא אם משה כתב תוכנה ושם בדירה 3100, נוכל לגשת לתוכנה שלו אם נלך לחדר)

      ports:
      http://localhost:3000/moisheufnikprogram

      program - kipifnikprogram;
      http://localhost:3001/kipifnikprogram
 */

const http = require('http');
/*
    createServer - מתודה מיוחדת שיוצרת שרת 
    request - פרטים לגבי הבקשה שהגיע
    response - פרטים לגבי התשובה שנחזיר
 */
const server = http.createServer((request, response) => {
    console.log("request url", request.url);
    console.log("request method", request.method);
    console.log("request header", request.headers);

    response.statusCode = 200;
    response.end("Hi from server 1 :)");
});

/*
      listen - פונקציה מיוחדת שמאזינה שמחברת את השרת שלנו
      מקבלת 3 אגומנטים 
      1 מספר הפורט 
      2 כתובת ההוסט
      3 פונקציה שבמקרה פה רק נדפיס שהשרת עלה
      server.listen(port, hostname, functionBlalba) 
 */
server.listen(3000, "127.0.0.1", () => {
    console.log(`Server is listening on port 3000`);
});
