import{c as r,d as h,a as s,t as o,h as d,v as u,F as c,g as f,o as n,n as p,u as v}from"./index-CSDKmVUu.js";import{_}from"./header-B_NMzy1q.js";import{t as m}from"./tmFooter-BkvdDmoR.js";import{d as b}from"./dados-D9BYLT5d.js";import"./logo-ext-roxo-BbGWQZ4e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"titulo_respostas"},k={id:"respondendo"},A={id:"titulo"},C={id:"enunciado"},g={id:"area-alternativas"},S=["onClick"],B=["id"],F={id:"botao"},R=["innerHTML"];let $=b.cursos,y=["A","B","C","D","E","F"];const D={data(){return{cursofiltrado:null,questaoAtual:1,alternativaSelecionada:null,respostasCorretas:0,feedback:null}},created(){const t=this.$route.params.id;this.cursofiltrado=$.find(e=>e.id===Number(t)),console.log(this.cursofiltrado)},methods:{selecionarQuestao(t){this.alternativaSelecionada=t},responder(){const e=this.cursofiltrado.questoes[this.questaoAtual-1].alternativas.find(l=>l.isCorreta);this.alternativaSelecionada===e.id&&this.respostasCorretas++,this.questaoAtual<this.cursofiltrado.questoes.length?this.questaoAtual++:(this.questaoAtual++,this.exibirResultado()),this.alternativaSelecionada=null},exibirResultado(){const t=this.respostasCorretas;this.feedback=`   <h3 id="parabens">Parabéns!</h3>
                                <p>Você acertou</p>
                                <h4>`+t+"/"+this.cursofiltrado.questoes.length+`</h4>
                                <a href="/home">Obter certificado</a>`}}},O=Object.assign(D,{__name:"concluircurso",setup(t){return(e,l)=>(n(),r(c,null,[h(_,{busca_exibir:!1,usuario_exibir:!1}),s("main",null,[s("div",q,[s("p",k,"Responda às questões - "+o(e.cursofiltrado.titulo),1),d(s("p",{id:"questao_atual"},o(e.questaoAtual)+"/"+o(e.cursofiltrado.questoes.length),513),[[u,e.feedback===null]])]),(n(!0),r(c,null,f(e.cursofiltrado.questoes,i=>d((n(),r("div",{class:"questao",key:i.id},[s("div",A,[s("h5",C,o(i.id)+". "+o(i.enunciado),1)]),s("div",g,[(n(!0),r(c,null,f(i.alternativas,a=>(n(),r("div",{class:p(["alternativa",e.alternativaSelecionada===a.id?"selecionado":""]),key:a.id,onClick:L=>e.selecionarQuestao(a.id)},[s("a",{id:"alt"+a.id},o(v(y)[a.id-1])+") "+o(a.resposta),9,B)],10,S))),128)),s("div",F,[d(s("button",{onClick:l[0]||(l[0]=a=>e.responder())},"Responder questão",512),[[u,e.alternativaSelecionada!=null]])])])])),[[u,i.id===e.questaoAtual]])),128)),d(s("div",{class:"resultado",innerHTML:e.feedback},null,8,R),[[u,e.feedback!=null]])]),h(m)],64))}});export{O as default};
