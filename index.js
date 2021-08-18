const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const bcrypt = require('bcrypt')
const AdminBroExpressjs = require('@admin-bro/express')

AdminBro.registerAdapter(AdminBroMongoose)

const express = require('express')
const app = express()

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
  acesso: { type: String, enum: ['Admin','C-Level', 'Cliente', 'Head', 'Operacional'], required: true },
})

const Clientes = mongoose.model('Clientes', {
  nome: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }
})

const C6 =  mongoose.model('C6', {
  seguidores: Number,
  Data: Date,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }
})
const telhanorte =  mongoose.model('telhanorte', {
  nome: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }
})
const tumelero =  mongoose.model('tumelero', {
  nome: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }
})
const suhai =  mongoose.model('suhai', {
  nome: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }
})

const podeEditarClientes = ({ currentAdmin }) =>  currentAdmin.acesso === 'Head' || currentAdmin.acesso === 'C-Level'
const podeEditarUsuarios = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'Admin'
const clevel = ({ currentAdmin }) => currentAdmin && currentAdmin.acesso === 'C-Level'
const operacional = ({ currentAdmin }) => currentAdmin.acesso === 'Operacional'

const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
    resource: Usuario,
    options: {
      parent: 'Configurações',
      icon: 'fa fa-cog',
      properties: {
        senha: {
          type: 'password',
            isVisible: {
            list: false, edit: true, filter: false, show: false, new: true,
          },
        }
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
    resource: C6,
    options: {
      parent: 'Clientes',
      properties: {
        ownerId: { isVisible: { edit: false, show: false, list: false, filter: false } },
        checkbox: { isVisible: { edit: false, show: false, list: false, filter: false } }
      },
      actions: {
        edit: { isAccessible: operacional },
        delete: { isAccessible: podeEditarClientes },
        new:  { isAccessible: operacional },
        show:  { isAccessible: podeEditarClientes },
        list:  { isAccessible: operacional },
      }
    }
  },
  {
    resource: telhanorte,
    options: {
      parent: 'Clientes',
      properties: {
        ownerId: { isVisible: { edit: false, show: false, list: false, filter: false } },
        checkbox: { isVisible: { edit: false, show: false, list: false, filter: false } }
      },
      actions: {
        edit: { isAccessible: podeEditarClientes },
        delete: { isAccessible: podeEditarClientes },
        new:  { isAccessible: podeEditarClientes },
        show:  { isAccessible: podeEditarClientes },
        list:  { isAccessible: podeEditarClientes },
      }
    }
  },
  {
    resource: tumelero,
    options: {
      parent: 'Clientes',
      properties: {
        ownerId: { isVisible: { edit: false, show: false, list: false, filter: false } },
        checkbox: { isVisible: { edit: false, show: false, list: false, filter: false } }
      },
      actions: {
        edit: { isAccessible: clevel },
        delete: { isAccessible: clevel },
        new:  { isAccessible: clevel },
        show:  { isAccessible: clevel },
        list:  { isAccessible: clevel },
      }
    }
  },
  {
    resource: suhai,
    options: {
      parent: 'Clientes',
      properties: {
        ownerId: { isVisible: { edit: false, show: false, list: false, filter: false } },
        checkbox: { isVisible: { edit: false, show: false, list: false, filter: false } }
      },
      actions: {
        edit: { isAccessible: clevel },
        delete: { isAccessible: clevel },
        new:  { isAccessible: clevel },
        show:  { isAccessible: clevel },
        list:  { isAccessible: clevel },
      }
    }
  }

  ],
  branding: {
    companyName: 'Tech and Soul',
    logo: 'https://www.techandsoul.com.br/img/techandsoul.svg',
    softwareBrothers: false,
  },
   dashboard: {
    component: AdminBro.bundle('./homepage'),
  },
  locale: {
    translations: {
      actions: {
        new: 'Criar novo',
        edit: 'Editar',
        show: 'Mostrar',
        delete: 'Deletar',
        bulkDelete: 'Deletar tudo',
        list: 'Listagem',
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
        navigation: 'Menu',
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
        noRecordsInResource: 'Não há registros neste recurso',
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

// const router = AdminBroExpress.buildRouter(adminBro)

const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, senha) => {
    const user = await Usuario.findOne({ email })
    if (user) {
      const matched = await  user.senha
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
app.listen(8080, () => console.log('Sistema rodando em localhost:8080/admin'))