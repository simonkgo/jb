/*
    127.0.0.1 - localhost
    port;

    server;
    http;
    1 const app = express();

    1 app.listen(5000, () => console.log("Listening on port 3001..."));
    2 app.listen(3002, () => console.log("Listening on port 3001..."));


    3   
    תביא את כל הפסרים
    תביא.אקספרס(“url", (בקשה, תשובה) => {
        response.json(books); // status 200
    });

    app.get("/api/books", (request, response) => {
        request - תופס שמכיל פרטים לגבי הבקשה שהגיע
        response - תופס שמכיל פרטים וקונפיגורציה לגבי התשובה שנשלח ללקוח
        response.json({name:"moishe"}); // status 200
        response.send();

        request.body   = מכיל את מה שנלח בגוף  הבקשה
    });

    app.get("/api/books/:id", (request, response) => {
        request - תופס שמכיל פרטים לגבי הבקשה שהגיע
        response - תופס שמכיל פרטים וקונפיגורציה לגבי התשובה שנשלח ללקוח
        response.json({name:"moishe"}); // status 200
        response.send();
        request.url = כתובת מלאה
        request.body   = מכיל את מה שנלח בגוף  הבקשה
    });


    app.post("/api/books", (request, response) => {
        request.params = מכיל את כל הפרמטרים שנשלחו בבקשה
        request.body   = מכיל את מה שנלח בגוף  הבקשה
    });

    get/put/post/patch/delete;

 */