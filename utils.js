const AdminBro = require('admin-bro')
 const paginas = { 
    pages: {
    C6: {
      component: AdminBro.bundle('./c6Bank'),
    },
    Telhanorte: {
      component: AdminBro.bundle('./homepage'),
    },
    Tumelero: {
      component: AdminBro.bundle('./tumelero'),
    },
    Obraja: {
      component: AdminBro.bundle('./obraja'),
    },
    Klabin: {
      component: AdminBro.bundle('./klabin'),
    },
    Locaweb: {
      component: AdminBro.bundle('./locaweb'),
    },
    Mitsubishi: {
      component: AdminBro.bundle('./mitsubishi'),
    },
    Suhai: {
      component: AdminBro.bundle('./suhai'),
    },
    suhaiFlashReport: {
      component: AdminBro.bundle('./suhaidaily'),
    },
    suhaiReport7dias: {
      component: AdminBro.bundle('./suhaiReport7dias'),
    },
    suhaiReport24horas: {
      component: AdminBro.bundle('./suhaiReport24horas'),
    },
    Suzuki: {
      component: AdminBro.bundle('./suzuki'),
    }
  }
}

module.exports = paginas.pages;