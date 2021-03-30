//Entity - part of product domain, can implement behaivor and applied in diff use cases as validation etc...
const Joi = require("joi"); // npm i joi;

class Product {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.stock = obj.stock;
    };
    
    /* ---------------------------------- First --------------------------------- */
    //define rules regarding product properties - validation schema per method
    /*
        בניה של סכמה של תבנית שלפיה תעשה הולידציה
        את הולידציה נפעיל בקונטרולר
     */
    static postValidationSchema = Joi.object({
        id: Joi.number().optional(),
        name: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(2).max(10000),
        stock: Joi.number().required().min(0).max(10000).integer()
    });

    static patchValidationSchema = Joi.object({
        id: Joi.number().required().positive().integer(),
        name: Joi.string().min(100).max(100),
        price: Joi.number().min(0).max(10000),
        stock: Joi.number().min(0).max(10000).integer()
    });

    /* --------------------------------- Second --------------------------------- */
    //perform the validation on our product-controller;:
     /*
        abortEarly - ביטול של זה יגרום לכל השגיאות לחזור לקלייט
        true באופן דיפולטיבי זה מוגדר כ 
        לכן איך שמופיע שגיאה ראשונה התשובה ישר תחזור עם השיגאה
     */
    static validatePost(product) {
        /*
            postValidationSchema 
            product מבקשים מקלאס 
            postValidationSchema להפעיל את הפנוקציה 
            שתעשה ולידציה שאובייקט שיצרנו זה עתה מהקלאס
         */
        const result = Product.postValidationSchema.validate(product, { abortEarly: false });
        return result.error ? result.error.message : null; // Return one string of the errors. for returning array of string errors: return result.error ? result.error.message.split(". ") : null;
    };


    static validatePatch(product) {
        console.log(product)
        const result = Product.patchValidationSchema.validate(product, { abortEarly: false });
        return result.error ? result.error.message : null; // Return one string of the errors.
    };
};

module.exports = Product;