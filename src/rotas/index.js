import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'index', 
      component: () => import('../paginas/index/index.vue')
    },
    { 
      path: '/login', 
      name: 'login', 
      component: () => import('../paginas/entrada/login.vue'), 
      meta: { title: " - Login" } 
    },
    { 
      path: '/cadastro', 
      name: 'cadastro', 
      component: () => import('../paginas/entrada/cadastro.vue'),
      meta: { title: " - Cadastro" } 
    },
    { 
      path: '/home', 
      name: 'home', 
      component: () => import('../paginas/sistema/home/home.vue'),
      meta: { title: " - Home" } 
    },
    { 
      path: '/exibircurso/:id', 
      name: 'exibirCurso', 
      component: () => import('../paginas/sistema/cursos/exibircurso.vue'),
      meta: { title: " - Curso" } 
    },
    {
      path: '/perfil',
      name: 'perfilUsuario',
      component: () => import('../paginas/sistema/usuario/perfil.vue'),
      meta: { title: " - Perfil"},
      children: [
        {path: 'dados', component: () => import('../paginas/sistema/usuario/componentes/telaDados.vue')},
        {path: 'cursos', component: () => import('../paginas/sistema/usuario/componentes/telaCursos.vue')},
        {path: 'configs', component: () => import('../paginas/sistema/usuario/componentes/telaConfigs.vue')}
      ]
    },
    {
      path: '/cursando/:id',
      name: 'cursando',
      component: () => import('../paginas/sistema/cursos/cursando.vue'),
      meta: { title: " - Cursando" }
    },
    {
      path: '/concluircurso/:id',
      name: "concluirCurso",
      component: () => import('../paginas/sistema/cursos/concluircurso.vue'),
      meta: { title: " - Concluir Curso" }
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../paginas/paginaErro.vue') },
  ]
});
export default router
