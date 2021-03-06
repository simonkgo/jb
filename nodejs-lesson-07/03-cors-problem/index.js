/*
    CORS;
    CORS - Problem;

    CORS - Cross Origin Resources Sharing;
    מנגנון הגנה שמאפשר לשרת לראות מאיזה כתובת הקליינט פנה דרך הדפדפן
    ולבחור האם לאפשר לו לקבל את המידע או לא
    המנגנון מסתמך על העובדה שקיימת בדפדפן פעולה שנקראת 
    preflight - הקדמה מראש

    *נקודות מפתח שיש להבין לפני
    - Origin - מקור - כתובת האתר;
    - איפה ניתן לראות אותו ?
      מופיע בהאדר של כל בקשה שנשלחת ואי אפשר לשנות אותו בדפדפן;

    - Same Origin - הקליינט והסרבר באו מאותו הכתובת;
    ?מזה כתובת זהה
    localhost:3000;
    localhost:3000;
    גם שם הדומיין/אתר וגם הפורט זהים - משמע זו אותה כתובת המקור

    - Cross Origin - הקליינט והסרבר נמצאים ב 2 כתובות שונות
    ?מזה כתובת שונה
    localhost:3000;
    localhost:3001;
    במידה שם הדומיין/אתר או ההפורט שונה - משמע הכתובת המקור שונה בין הקלייט והסרבר

    ?זהה Origin האם ה 
    localhost:3000/api/v1/users;
    localhost:3000/api/v1/products;    
    כן האוריגין מתייחס לשם הדומיין ולפורט ולא למה שאחרי
    שאר הכתובת נועדה לחלוקה של התוכנית שלנו כפי שעשינו בתרגילים

    ?הבעיה מתרחשת ב 2 מצבים 
    AJAX בקשת 
    Cross Origin - כאשר כתובת המקור של הקלייט ושל הסרבר לא תואמים
 */