import{S as g,r as i,j as e}from"./vendor-B9VfTayZ.js";import{s as c,B as t,k as l,l as d,j as n}from"./mui-CtnW1stf.js";const p=[{nome:"Tableau",imgSrc:"tableau.svg"},{nome:"Power BI",imgSrc:"powerbi.svg"},{nome:"Python",imgSrc:"python.svg"},{nome:"NodeJS",imgSrc:"nodejs.svg"},{nome:"Docker",imgSrc:"docker.svg"},{nome:"GitHub Actions",imgSrc:"cicd.svg"},{nome:"PostgreSQL",imgSrc:"postgre.svg"},{nome:"MongoDB",imgSrc:"mongodb.svg"},{nome:"Puppeteer",imgSrc:"puppeteer.svg"},{nome:"Jest",imgSrc:"jest.svg"},{nome:"React",imgSrc:"react.svg"},{nome:"Power Automate",imgSrc:"pwauto.svg"},{nome:"Vue",imgSrc:"vue.svg"},{nome:"Express",imgSrc:"express.svg"},{nome:"Swagger",imgSrc:"swagger.svg"},{nome:"docker-compose",imgSrc:"docker-compose.svg"},{nome:"Mui",imgSrc:"mui.svg"},{nome:"Bootstrap",imgSrc:"bootstrap.svg"},{nome:"Axios",imgSrc:"axios.svg"},{nome:"Nginx",imgSrc:"nginx.svg"}],u=c(t)({display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",img:{width:"50px",height:"50px"}}),S=c(g)(({theme:r})=>({"& .slick-track":{display:"flex",alignItems:"center"},"& .slick-slide":{display:"flex",justifyContent:"center",alignItems:"center"}})),h=()=>{const r=l(),o=i.useRef(null),a={infinite:!0,speed:5e3,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,cssEase:"linear",pauseOnHover:!1,arrows:!1,responsive:[{breakpoint:960,settings:{slidesToShow:4}},{breakpoint:600,settings:{slidesToShow:3}}]};return i.useEffect(()=>{const s=()=>{o.current&&(o.current.slickPause(),setTimeout(()=>{o.current.slickPlay()},100))};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsx(t,{sx:{width:"100%",borderTop:`1px solid ${r.palette.divider}`,backgroundColor:r.palette.background.default},children:e.jsxs(d,{maxWidth:"md",children:[e.jsx(n,{variant:"h4",align:"center",gutterBottom:!0,sx:{color:r.palette.text.primary,marginTop:4},children:"Habilidades"}),e.jsx(t,{sx:{width:"100%",overflow:"hidden",py:4},children:e.jsx(S,{ref:o,...a,children:p.map((s,m)=>e.jsxs(u,{children:[e.jsx("img",{src:s.imgSrc,alt:s.nome}),e.jsx(n,{variant:"caption",align:"center",children:s.nome})]},m))})})]})})};export{h as default};
