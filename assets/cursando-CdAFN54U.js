import{c as r,d as c,a as o,t as u,b as d,F as m,g as h,w as v,r as g,o as e,n as f,h as b,v as y,i as p}from"./index-CSDKmVUu.js";import{_ as k}from"./header-B_NMzy1q.js";import{t as C}from"./tmFooter-BkvdDmoR.js";import{d as M}from"./dados-D9BYLT5d.js";import"./logo-ext-roxo-BbGWQZ4e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={key:0},w={class:"area-curso"},L=["src"],T={class:"area-text"},A={class:"titulo-curso"},$={class:"autor-curso"},H={class:"nota"},N={class:"area-modulos"},V={class:"modulos"},B=["onClick"],S=["id"],q={class:"modulo-conteudo"},D={id:"titulo_conteudo"},I={class:"area-texto"},O=["innerHTML"],R={key:0,id:"div-video"},j=["src"],z=["innerHTML"],E={class:"area-botao"},Q={key:1},Y={class:"erro"};let G=M;const J={data(){return{cursoFiltrado:null,nModulos:8,moduloAtual:1}},created(){const i=Number(this.$route.params.id);this.cursoFiltrado=G.cursos.find(s=>s.id===i)},methods:{setModulo(i){console.log(i),this.moduloAtual=i,console.log("modulo atual = "+this.moduloAtual)},getModulo(i){return this.moduloAtual===i},concluirModulo(){let i=document.querySelector("#modulo"+this.moduloAtual);i.innerHTML+=' <i class="fa-solid fa-circle-check" style="color: green;"></i>',this.moduloAtual++},concluirCurso(){this.$router.push("/concluircurso/"+this.$route.params.id)}}},x=Object.assign(J,{__name:"cursando",setup(i){return(s,t)=>{const _=g("RouterLink");return e(),r(m,null,[c(k,{busca_exibir:!0,usuario_exibir:!1}),s.cursoFiltrado?(e(),r("main",F,[o("div",w,[o("img",{src:s.cursoFiltrado.capa,alt:"Capa do curso"},null,8,L),o("div",T,[o("h1",A,u(s.cursoFiltrado.titulo),1),o("h5",$,u(s.cursoFiltrado.autor),1),o("p",H,[t[2]||(t[2]=o("i",{class:"fa fa-star"},null,-1)),d(" "+u(s.cursoFiltrado.avaliacao),1)]),t[3]||(t[3]=o("a",null,"Cursando",-1))])]),o("div",N,[o("div",V,[(e(!0),r(m,null,h(s.cursoFiltrado.modulos,(l,a)=>(e(),r("div",{class:f(["modulo",s.getModulo(a+1)?"ativo":""]),key:l.id,onClick:n=>s.setModulo(a+1)},[o("p",{id:"modulo"+(a+1)},"Modulo "+u(a+1),9,S)],10,B))),128))]),(e(!0),r(m,null,h(s.cursoFiltrado.modulos,(l,a)=>b((e(),r("div",{class:"modulos-content",key:l.id},[o("div",q,[o("h2",D,"Módulo "+u(l.id)+" - "+u(l.titulo),1),o("div",I,[o("div",{class:"paragrafo",innerHTML:l.textoum},null,8,O),l.videoId?(e(),r("div",R,[o("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/"+l.videoId,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,j)])):p("",!0),o("div",{class:"paragrafo",innerHTML:l.segundoTexto},null,8,z)])]),o("div",E,[a+1<s.cursoFiltrado.modulos.length?(e(),r("button",{key:0,class:"botao",onClick:t[0]||(t[0]=n=>s.concluirModulo())},"Concluir módulo")):p("",!0),a+1===s.cursoFiltrado.modulos.length?(e(),r("button",{key:1,class:"botao",onClick:t[1]||(t[1]=(...n)=>s.concluirCurso&&s.concluirCurso(...n))},"Concluir curso")):p("",!0)])])),[[y,s.getModulo(a+1)]])),128))])])):(e(),r("main",Q,[o("div",Y,[t[7]||(t[7]=o("h5",null,"Que pena! O curso que você acessou não existe. :(",-1)),o("p",null,[t[5]||(t[5]=d("Você pode voltar para a ")),c(_,{to:"/home"},{default:v(()=>t[4]||(t[4]=[d("página inicial")])),_:1}),t[6]||(t[6]=d("!"))])])])),c(C)],64)}}});export{x as default};
