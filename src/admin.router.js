const {default: AdminBro} = require('admin-bro') ;
const {buildAuthenticatedRouter} = require('admin-bro-expressjs');
const argon2 = require('argon2');
const express = require('express');
const MongoDbStore = require('connect-mongo');

const { Company } = require('./companies/company.entity');

/**
* @param {AdminBro} admin
* @return {express.Router} router
*/
const buildAdminRouter = (admin) => {
        const router = buildAuthenticatedRouter(admin, {
        cookieName: 'admin-bro',
        cookiePassword: 'superlongandcomplicatedname',
        authenticate: async (email, password) => {
            const company = await Company.findOne({email})
            if (company && await argon2.verify(company.encryptedPassword, password)){
                return company.toJSON()
            }
          return null;
        }
    }, null, {
        resave: false,
        saveUninitialized: true,
        store: MongoDbStore.create({ mongoUrl: 'mongodb+srv://techandsol:techandsol@cluster0.x9bvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' })
    }); 
    return router;
    // const router = buildRouter(admin);
    // return router;
};

module.exports = buildAdminRouter;