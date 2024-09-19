import{j as e,o as m}from"./vendor-BurwWo3F.js";import{s as l,j as s,P as p,k as h,B as t,l as x,G as i,m as u,n as g,o as y,I as j,p as d}from"./mui-BG02N_Bk.js";import{h as b,s as f,d as v}from"./syntax-highlighter-DiyBigBx.js";const D=l(s)(({theme:r})=>({color:r.palette.primary.main})),S=l(p)(({theme:r})=>({backgroundColor:r.palette.mode==="light"?r.palette.grey[100]:r.palette.grey[900],padding:r.spacing(2),color:r.palette.mode==="light"?r.palette.text.primary:r.palette.common.white,fontFamily:"monospace",fontSize:"0.9rem",whiteSpace:"pre-wrap",wordBreak:"break-all",overflowX:"auto"})),P=()=>{const r=h(),o={nome:"Caio Damasceno Alves",habilidades:["Tableau","Power BI","Python","NodeJS","Docker","SGBD's Relacionais e NoSQL","CI/CD","Testes Automatizados"],trabalhadorDedicado:!0,aprendizadoRapido:!0,resolvedorProblemas:!0,contratado:function(){return this.trabalhadorDedicado&&this.resolvedorProblemas&&this.habilidades.length>=5}},c=`const desenvolvedor = {
  nome: '${o.nome}',
  habilidades: ${JSON.stringify(o.habilidades,null,2)},
  trabalhadorDedicado: ${o.trabalhadorDedicado},
  aprendizadoRapido: ${o.aprendizadoRapido},
  resolvedorProblemas: ${o.resolvedorProblemas},
  contratado: function() {
    return (
      this.trabalhadorDedicado &&
      this.resolvedorDeProblemas
    );
  }
};`;return e.jsx(t,{sx:{bgcolor:"background.paper",minHeight:"100vh",my:6,mx:4},children:e.jsxs(x,{maxWidth:"lg",children:[e.jsxs(i,{container:!0,spacing:4,alignItems:"flex-start",children:[e.jsxs(i,{item:!0,xs:12,md:6,children:[e.jsx(s,{variant:"h2",component:"h1",gutterBottom:!0,sx:{fontSize:{xs:"2.5rem",sm:"3rem"},color:"text.primary"},children:"Olá,"}),e.jsxs(s,{variant:"h1",component:"h2",gutterBottom:!0,sx:{fontSize:{xs:"2rem",sm:"3rem"},fontWeight:"bold",color:"text.primary"},children:["Eu sou"," ",e.jsx(D,{component:"span",sx:{fontSize:{xs:"2.5rem",sm:"3.5rem"},color:"text.primary"},children:"CAIO DAMASCENO"}),","]}),e.jsx(s,{variant:"h4",component:"h3",gutterBottom:!0,sx:{fontSize:{xs:"1.5rem",sm:"2rem"},color:"text.primary"},children:e.jsx(m,{text:["Analista de Dados","Desenvolvedor de Dados","Analista de Sistemas","Engenheiro de Dados e Sistemas"],speed:50,eraseSpeed:50,eraseDelay:1e3,typingDelay:500,cursorRenderer:a=>e.jsx(e.Fragment,{children:a}),displayTextRenderer:(a,n)=>e.jsx(e.Fragment,{children:a})})})]}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(S,{elevation:6,children:e.jsx(b,{language:"javascript",style:r.palette.mode==="light"?f:v,children:c})})})]}),e.jsxs(t,{sx:{my:4,textAlign:"center"},children:[e.jsx(t,{sx:{mb:4},children:[u,g,y].map((a,n)=>e.jsx(j,{color:"primary",sx:{mx:1},children:e.jsx(a,{})},n))}),e.jsxs(t,{sx:{display:"flex",justifyContent:"center",gap:2},children:[e.jsx(d,{variant:"outlined",color:"primary",children:"ENTRE EM CONTATO"}),e.jsx(d,{variant:"contained",color:"primary",children:"BAIXAR CURRÍCULO"})]})]})]})})};export{P as default};
