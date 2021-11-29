const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const AdminBroExpressjs = require('@admin-bro/express')

AdminBro.registerAdapter(AdminBroMongoose)

const express = require('express')
const app = express()
const trendsTelha = express()
const trendsTumelero = express()
const trendsObraja = express()
const trendsKlabin = express()
const trendsLocaweb = express()
const trendsMitisubish = express()
const trendsSuhai = express()
const trendsSuzuki = express()
const apiSheetsSuhai30D = express()
const apiSheetsSuhai7D = express()
const apiSheetsSuhai24H = express()
let acessUser;

// console.log(`${acessUser} : "Varivel criada"`)

const run = async () => {
  await mongoose.connect('mongodb+srv://techandsol:techandsol@cluster0.x9bvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

run()

const Usuario = mongoose.model('Usuario', {
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  email: { type: String, required: true },
  acesso: { type: String, enum: ['Admin', 'C-Level', 'Cliente', 'Head', 'Operacional', 'Suhai', 'Mídia'], required: true },
})

const Topics = mongoose.model('Topicos Web', {
  titulo: { type: String, required: true },
  tipo: { type: String, required: true },
  codigo: { type: String, required: true },
  termo: { type: String, required: true },
  interesse: { type: String, required: true }, 
})

const Investimentos = mongoose.model('Investimentos de Mídia', {
  Cliente: { type: String, enum: ['C6 bank', 'Telhanorte', 'Tumelero', 'Obraja', 'Klabin', 'Locaweb', 'Mitsubishi', 'Suhai'], required: true },
  Tipo: { type: String,  enum: ['TV Aberta', 'TV Fechada', 'Mídia Out of Home',], required: true },
  Valor: { type: Number, required: true },
  Inicio: { type: Date, required: true },
  Fim: { type: Date, required: true },
})
 
// const podeEditarClientes = ({ currentAdmin }) => currentAdmin.acesso === 'Head' || currentAdmin.acesso === 'C-Level'
const podeEditarUsuarios = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'Admin'
const GrupoSuhai = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'Suhai'
const codigo = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'Dev'
const CRUDmidia = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'Mídia'
// const clevel = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'C-Level'
// const operacional = ({ currentAdmin }) => currentAdmin.acesso === 'Operacional'

const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: Usuario,
      options: {
        parent: 'Configurações',
        properties: {
          senha: {
            type: 'password',
            isVisible: {
              list: false, edit: true, filter: false, show: false, new: true,
            },
          },
          _id: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
        },
        actions: {
          edit: { isAccessible: podeEditarUsuarios },
          delete: { isAccessible: podeEditarUsuarios },
          new: { isAccessible: podeEditarUsuarios },
          show: { isAccessible: podeEditarUsuarios },
          list: { isAccessible: podeEditarUsuarios },
        }
      }
    },
    {
      resource: Investimentos,
      options: {
        parent: 'Menu',
        properties: {
          _id: {
						isVisible: { list: false, filter: false, show: false, edit: false },
					},
        },
        actions: {
          edit: { isAccessible: codigo },
          delete: { isAccessible: codigo },
          new: { isAccessible: CRUDmidia },
          show: { isAccessible: CRUDmidia },
          list: { isAccessible: CRUDmidia },
        }
      }
    },
    {
      resource: Topics,
      options: {
        parent: 'Menu',
        properties: {
          _id: {
						isVisible: { list: false, filter: false, show: false, edit: false },
					},
        },
        actions: {
          edit: { isAccessible: codigo },
          delete: { isAccessible: codigo },
          new: { isAccessible: codigo },
          show: { isAccessible: GrupoSuhai },
          list: { isAccessible: GrupoSuhai },
        }
      }
    },
  ],
  pages: {

  },
  branding: {
    companyName: 'Tech and Soul',
    logo: 'https://www.techandsoul.com.br/img/techandsoul.svg',
    softwareBrothers: false,
  },
  dashboard: {
    component: AdminBro.bundle('./c6Bank'),
  },
  locale: {
    translations: {
      actions: {
        new: 'Registrar',
        edit: 'Editar',
        show: 'Mostrar',
        delete: 'Deletar',
        bulkDelete: 'Deletar tudo',
        list: '',
      },
      buttons: {
        save: 'Salvar',
        addNewItem: 'Adicionar Novo Item',
        filter: 'Filtro',
        applyChanges: 'Aplicar Mudanças',
        resetFilter: 'Limpar Filtros',
        confirmRemovalMany: 'Confirmar a remoção de {{count}} registro(s)',
        confirmRemovalMany_plural: 'Confirmar a remoção de {{count}} registros',
        logout: 'Sair',
        login: 'Entrar',
        seeTheDocumentation: 'Ver: <1>a documentação</1>',
        createFirstRecord: 'Criar primeiro registro',
      },
      labels: {
        navigation: '',
        Logout: 'Sair',
        Login: 'Entrar',
        pages: 'Páginas',
        selectedRecords: 'Selecionados ({{selected}})',
        filters: 'Filtros',
        adminVersion: 'Admin: {{version}}',
        appVersion: 'App: {{version}}',
        loginWelcome: 'Bem vindo',
        Product: "Produtos",
        myFirstDatabase: 'Configurações'
      },
      messages: {
        successfullyBulkDeleted: 'removido(s) {{count}} registro(s)',
        successfullyBulkDeleted_plural: 'removidos {{count}} registros',
        successfullyDeleted: 'Registro deletado',
        successfullyUpdated: 'Registro atualizado',
        thereWereValidationErrors: 'Erros de validação, cheque-os abaixo',
        forbiddenError: 'Você não pode executar a ação {{actionName}} em {{resourceId}}',
        anyForbiddenError: 'Você não pode executar esta ação',
        successfullyCreated: 'Criado novo registro',
        bulkDeleteError: 'Houve um erro deletando registros, cheque o console para saber mais.',
        errorFetchingRecords: 'Houve um erro buscando registros, cheque o console para saber mais.',
        errorFetchingRecord: 'Houve um erro buscando record, cheque o console para saber mais.',
        noRecordsSelected: 'Você não selecionou nenhum dos registros',
        theseRecordsWillBeRemoved: 'O(s) seguinte(s) registro(s) vai(ão) ser deletado(s)',
        theseRecordsWillBeRemoved_plural: 'Os seguintes registros vão ser deletados',
        pickSomeFirstToRemove: 'Para deletar registros, você precisa selecionar primeiro',
        error404Resource: 'Recurso de id: {{resourceId}} não encontrado',
        error404Action: 'Recurso de id: {{resourceId}} não tem nenhuma ação nomeada de: {{actionName}}',
        error404Record: 'Recurso de id: {{resourceId}} não tem nenhum registro com o ID: {{recordId}}',
        seeConsoleForMore: 'Veja o console de desenvolvimento para mais detalhes...',
        noActionComponent: 'Você deve implementar o componente de ação para a sua Ação',
        noRecordsInResource: '',
        noRecords: 'Sem registros',
        confirmDelete: 'Tem certeza de que deseja remover este item?',
        welcomeOnBoard_title: 'Bem-vindo a bordo!',
        welcomeOnBoard_subtitle: 'Agora você é um de nós! Preparamos algumas dicas para você começar:',
        loginWelcome: '',
        addingResources_title: 'Adicionando recursos',
        addingResources_subtitle: 'Como adicionar novos recursos à barra lateral',
        customizeResources_title: 'Recursos Personalizados',
        customizeResources_subtitle: 'Definindo comportamento, adicionando propriedades e mais ...',
        customizeActions_title: 'Personalizar Ações',
        customizeActions_subtitle: 'Modificando ações existentes e adicionando novas',
        writeOwnComponents_title: 'Escreva os Componentes',
        writeOwnComponents_subtitle: 'Como modificar a aparência do AdminBro',
        customDashboard_title: 'Painel Personalizado',
        customDashboard_subtitle: 'Como modificar esta visualização e adicionar novas páginas na barra lateral',
        roleBasedAccess_title: 'Controle de acesso baseado em função',
        roleBasedAccess_subtitle: 'Crie funções de usuário e permissões no AdminBro',
        community_title: 'Junte-se à comunidade slack',
        community_subtitle: 'Fale com os criadores do AdminBro e outros usuários AdminBro',
        foundBug_title: 'Encontrou um bug? precisa de melhorias?',
        foundBug_subtitle: 'Levantar um problema em nosso repositório GitHub',
        needMoreSolutions_title: 'Precisa de soluções mais avançadas?',
        needMoreSolutions_subtitle: 'Estamos aqui para fornecer a você um belo design de UX/UI e um software feito sob medida com base (não apenas) no AdminBro',
        invalidCredentials: 'Email e/ou password errados',
      }
    }
  }
})

let paginas = adminBro.options.pages;
let dashboard = adminBro.options.dashboard;

// const router = AdminBroExpress.buildRouter(adminBro)

const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, senha) => {
    const user = await Usuario.findOne({ email })
    var nivel = user.acesso
    acessUser = nivel;
    console.log(nivel)
    console.log(`${acessUser} : "Varivel de fora"`)

    if(acessUser == "Suhai") { 
      let dash = adminBro.options.dashboard

      delete dash.component
      suhai = {Suhai: {
        component: AdminBro.bundle('./suhai'),
      }}; 
      suhaiFlashReport = {FlashReport: {
        component: AdminBro.bundle('./suhaidaily'),
      }};

      const returnedTarget = Object.assign(paginas, suhai, suhaiFlashReport)
      const returnedTarget2 = Object.assign(dashboard)
      let testinho = adminBro.options.pages
      
      delete testinho.C6;
      delete testinho.Telhanorte;
      delete testinho.Tumelero;
      delete testinho.Obraja;
      delete testinho.Klabin;
      delete testinho.Locaweb;
      delete testinho.Mitsubishi;
      delete testinho.Suzuki;
      // console.log(returnedTarget)
      // console.log("ALEEEEEEEEEEEEFEEE") 
    } 

    
    if(acessUser == "Mídia") { 
      let dash = adminBro.options.dashboard

      delete dash.component
      let testinho = adminBro.options.pages
      delete testinho.C6;
      delete testinho.Telhanorte;
      delete testinho.Tumelero;
      delete testinho.Obraja;
      delete testinho.Klabin;
      delete testinho.Locaweb;
      delete testinho.Mitsubishi;
      delete testinho.Suzuki;
      delete testinho.suhai;
      delete testinho.suhaiFlashReport;
      delete testinho.suhaiReport7dias;
      delete testinho.suhaiReport24horas;
      // console.log(returnedTarget)
      // console.log("ALEEEEEEEEEEEEFEEE") 
    } 

    if(acessUser == "Admin") { 
      c6 = {C6: {
        component: AdminBro.bundle('./c6Bank'),
      }};
      telhanorte = {Telhanorte: {
        component: AdminBro.bundle('./homepage'),
      }};
      tumelero = {Tumelero: {
        component: AdminBro.bundle('./tumelero'),
      }};
      obraja = {Obraja: {
        component: AdminBro.bundle('./obraja'),
      }};
      klabin = {Klabin: {
        component: AdminBro.bundle('./klabin'),
      }};
      locaweb = {Locaweb: {
        component: AdminBro.bundle('./locaweb'),
      }};
      mitisubish = {Mitsubishi: {
        component: AdminBro.bundle('./mitsubishi'),
      }};
      suhai = {Suhai: {
        component: AdminBro.bundle('./suhai'),
      }};
      Suzuki = {Suzuki: {
        component: AdminBro.bundle('./suzuki'),
      }};
      const returnedTarget = Object.assign(paginas, c6, telhanorte, tumelero, obraja, klabin, locaweb, mitisubish, suhai, Suzuki)
      let testinho = adminBro.options.pages
      delete testinho.suhaiFlashReport;
      delete testinho.suhaiReport24horas;
      delete testinho.suhaiReport7dias;
    } 

    if(acessUser == "C-Level") { 
      c6 = {C6: {
        component: AdminBro.bundle('./c6Bank'),
      }};
      telhanorte = {Telhanorte: {
        component: AdminBro.bundle('./homepage'),
      }};
      tumelero = {Tumelero: {
        component: AdminBro.bundle('./tumelero'),
      }};
      obraja = {Obraja: {
        component: AdminBro.bundle('./obraja'),
      }};
      klabin = {Klabin: {
        component: AdminBro.bundle('./klabin'),
      }};
      locaweb = {Locaweb: {
        component: AdminBro.bundle('./locaweb'),
      }};
      mitisubish = {Mitsubishi: {
        component: AdminBro.bundle('./mitsubishi'),
      }};
      suhai = {Suhai: {
        component: AdminBro.bundle('./suhai'),
      }};
      Suzuki = {Suzuki: {
        component: AdminBro.bundle('./suzuki'),
      }};
      const returnedTarget = Object.assign(paginas, c6, telhanorte, tumelero, obraja, klabin, locaweb, mitisubish, suhai, Suzuki)
      let testinho = adminBro.options.pages
      delete testinho.suhaiFlashReport;
      delete testinho.suhaiReport24horas;
      delete testinho.suhaiReport7dias;
    } 

    if(acessUser == "Head") { 
      c6 = {C6: {
        component: AdminBro.bundle('./c6Bank'),
      }};
      telhanorte = {Telhanorte: {
        component: AdminBro.bundle('./homepage'),
      }};
      tumelero = {Tumelero: {
        component: AdminBro.bundle('./tumelero'),
      }};
      obraja = {Obraja: {
        component: AdminBro.bundle('./obraja'),
      }};
      klabin = {Klabin: {
        component: AdminBro.bundle('./klabin'),
      }};
      locaweb = {Locaweb: {
        component: AdminBro.bundle('./locaweb'),
      }}; 
      const returnedTarget = Object.assign(paginas, c6, telhanorte, tumelero, obraja, klabin, locaweb)
      let testinho = adminBro.options.pages
      delete testinho.Mitisubish;
      delete testinho.Suhai;
      delete testinho.Suzuki;
      delete testinho.suhaiFlashReport;
      delete testinho.suhaiReport24horas;
      delete testinho.suhaiReport7dias;
    }

    if(acessUser == "Operacional") { 
      c6 = {C6: {
        component: AdminBro.bundle('./c6Bank'),
      }};
      telhanorte = {Telhanorte: {
        component: AdminBro.bundle('./homepage'),
      }};
      tumelero = {Tumelero: {
        component: AdminBro.bundle('./tumelero'),
      }};
      const returnedTarget = Object.assign(paginas, c6, telhanorte, tumelero)
      let testinho = adminBro.options.pages
      delete testinho.Obraja;
      delete testinho.Klabin;
      delete testinho.Locaweb;
      delete testinho.Suhai;
      delete testinho.Mitsubishi;
      delete testinho.Suzuki;
      delete testinho.suhaiFlashReport;
      delete testinho.suhaiReport24horas;
      delete testinho.suhaiReport7dias;
    }
    if (user) {
      const matched = await user.senha
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
  resave: false,
  saveUnitilialized: true,
})

app.use(adminBro.options.rootPath, router)
apiSheetsSuhai30D.use(morgan('dev'))
apiSheetsSuhai30D.use(bodyParser.urlencoded({ extended: false }))
apiSheetsSuhai30D.use(express.json())
apiSheetsSuhai30D.use(cors())

apiSheetsSuhai7D.use(morgan('dev'))
apiSheetsSuhai7D.use(bodyParser.urlencoded({ extended: false }))
apiSheetsSuhai7D.use(express.json())
apiSheetsSuhai7D.use(cors())

apiSheetsSuhai24H.use(morgan('dev'))
apiSheetsSuhai24H.use(bodyParser.urlencoded({ extended: false }))
apiSheetsSuhai24H.use(express.json())
apiSheetsSuhai24H.use(cors())

app.listen(8080, () => console.log('Sistema rodando em localhost:8080/admin'))
trendsTelha.listen(3001, () => console.log('Trends telhanorte rodando em localhost:3001'))
trendsTumelero.listen(3002, () => console.log('Trends tumelero rodando em localhost:3002'))
trendsObraja.listen(3003, () => console.log('Trends obraja em localhost:3003'))
trendsKlabin.listen(3004, () => console.log('Trends klabin em localhost:3004'))
trendsLocaweb.listen(3005, () => console.log('Trends locaweb em localhost:3005'))
trendsMitisubish.listen(3006, () => console.log('Trends mitsubishi em localhost:3006'))
trendsSuhai.listen(3007, () => console.log('Trends suhai em localhost:3007'))
trendsSuzuki.listen(3008, () => console.log('Trends suzuki em localhost:3008'))
apiSheetsSuhai30D.listen(3099, () => console.log('API sheets suhai 30 dias rodando'))
apiSheetsSuhai7D.listen(3091, () => console.log('API sheets suhai 7 dias rodando'))
apiSheetsSuhai24H.listen(3092, () => console.log('API sheets suhai 24 horas rodando'))

apiSheetsSuhai30D.get('/', (req, res) => {
  const { GoogleSpreadsheet } = require('google-spreadsheet')
  const credenciais = require('./credenciais.json')
  const arquivo = require('./arquivo.json')
  const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.id);

    await doc.useServiceAccountAuth({
      client_email: credenciais.client_email,
      private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
  }

  let sheetInvestido;
  getDoc().then(doc => {
    sheetInvestido = doc.sheetsByIndex[0];
    sheetInvestido.getRows().then(rows => {
      rows.map(row => {
        var dados = new Object();
        dados.investido = row.investido
        dados.impressoes = row.impressoes
        dados.views = row.views
        dados.impressoesPD = row.impressoesPD
        dados.CPMD = row.CPMDP
        dados.CTRDP = row.CTRDP
        dados.impressoesYT = row.impressoesYT
        dados.CPMYT = row.CPMYT
        dados.VCRYT = row.VCRYT
        dados.impressoesW = row.impressoesW
        dados.CPMW = row.CPMW
        dados.ERW = row.ERW
        dados.CPMFBIT = row.CPMFBIT
        dados.ERFBIT = row.ERFBIT
        dados.impressoesBigNumbers = row.impressoesBIG

        return res.json(dados)
      })
    })
  })
})

apiSheetsSuhai7D.get('/', (req, res) => {
  const { GoogleSpreadsheet } = require('google-spreadsheet')
  const credenciais = require('./credenciais.json')
  const arquivo = require('./arquivo.json')
  const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.id);

    await doc.useServiceAccountAuth({
      client_email: credenciais.client_email,
      private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
  }

  let sheetInvestido;
  getDoc().then(doc => {
    sheetInvestido = doc.sheetsByIndex[1];
    sheetInvestido.getRows().then(rows => {
      rows.map(row => {
        var dados = new Object();
        dados.investido = row.investido
        dados.impressoes = row.impressoes
        dados.views = row.views
        dados.impressoesPD = row.impressoesPD
        dados.CPMD = row.CPMDP
        dados.CTRDP = row.CTRDP
        dados.impressoesYT = row.impressoesYT
        dados.CPMYT = row.CPMYT
        dados.VCRYT = row.VCRYT
        dados.impressoesW = row.impressoesW
        dados.CPMW = row.CPMW
        dados.ERW = row.ERW
        dados.CPMFBIT = row.CPMFBIT
        dados.ERFBIT = row.ERFBIT
        dados.impressoesBigNumbers = row.impressoesBIG

        return res.json(dados)
      })
    })
  })
})

apiSheetsSuhai24H.get('/', (req, res) => {
  const { GoogleSpreadsheet } = require('google-spreadsheet')
  const credenciais = require('./credenciais.json')
  const arquivo = require('./arquivo.json')
  const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.id);

    await doc.useServiceAccountAuth({
      client_email: credenciais.client_email,
      private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
  }

  let sheetInvestido;
  getDoc().then(doc => {
    sheetInvestido = doc.sheetsByIndex[2];
    sheetInvestido.getRows().then(rows => {
      rows.map(row => {
        var dados = new Object();
        dados.investido = row.investido
        dados.impressoes = row.impressoes
        dados.views = row.views
        dados.impressoesPD = row.impressoesPD
        dados.CPMD = row.CPMDP
        dados.CTRDP = row.CTRDP
        dados.impressoesYT = row.impressoesYT
        dados.CPMYT = row.CPMYT
        dados.VCRYT = row.VCRYT
        dados.impressoesW = row.impressoesW
        dados.CPMW = row.CPMW
        dados.ERW = row.ERW
        dados.CPMFBIT = row.CPMFBIT
        dados.ERFBIT = row.ERFBIT
        dados.impressoesBigNumbers = row.impressoesBIG

        return res.json(dados)
      })
    })
  })
})

app.use('/', (req, res) => {
  AdminBro.bundle('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js">  </script><script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsTelha.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"geo=BR&q=telhanorte&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"geo=BR&q=telhanorte&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"geo=BR&q=telhanorte&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"geo=BR&q=telhanorte&date=today 1-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsTumelero.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"tumelero","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=tumelero","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"tumelero","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=tumelero","guestPath":"https://trends.google.com.br:443/trends/embed/"});trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"tumelero","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=tumelero","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"tumelero","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=tumelero","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsObraja.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"obra já","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=obra%20j%C3%A1","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"obra já","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=obra%20j%C3%A1","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"obra já","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=obra%20j%C3%A1","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"obra já","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=obra%20j%C3%A1","guestPath":"https://trends.google.com.br:443/trends/embed/"});  </script>');
})
trendsKlabin.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=klabin","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=klabin","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=klabin","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=klabin","guestPath":"https://trends.google.com.br:443/trends/embed/"});  </script>');
})
trendsLocaweb.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"locaweb","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=locaweb","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"locaweb","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=locaweb","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"locaweb","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=locaweb","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"locaweb","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=locaweb","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsMitisubish.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"Mitsubishi","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=Mitsubishi","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"Mitsubishi","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=Mitsubishi","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"Mitsubishi","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=Mitsubishi","guestPath":"https://trends.google.com.br:443/trends/embed/"});trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"Mitsubishi","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=Mitsubishi","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsSuhai.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"suhai","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suhai","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"suhai","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suhai","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"suhai","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suhai","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"suhai","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suhai","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})
trendsSuzuki.use('/', (req, res) => {
  res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"suzuki","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suzuki","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"suzuki","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suzuki","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"suzuki","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suzuki","guestPath":"https://trends.google.com.br:443/trends/embed/"}); trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"suzuki","geo":"BR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=BR&q=suzuki","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script>');
})