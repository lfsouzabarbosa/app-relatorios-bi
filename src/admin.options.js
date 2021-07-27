const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
//const dash = require('./homepage');

/** @type {import(admin-bro).AdminBroOptions} */
const options = {
    resources: [AdminCompany],
    branding: {
        companyName: 'Tech and Soul',
        logo: 'https://www.techandsoul.com.br/img/techandsoul.svg',
        softwareBrothers: false,
    },
    dashboard: {
    component: AdminBro.bundle('../homepage')
  }
};

module.exports = options; 