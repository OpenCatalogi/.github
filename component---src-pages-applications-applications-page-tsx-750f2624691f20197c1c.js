"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[149],{3687:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(7294),a=n(5697),r=n.n(a),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e},h=(e,t,n)=>{const a=(0,i.forwardRef)(((t,a)=>{var r,l=t,{color:m="currentColor",size:h=24,stroke:f=2,children:v}=l,b=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(l,["color","size","stroke","children"]);return(0,i.createElement)("svg",g((r=g({ref:a},o),s(r,c({width:h,height:h,stroke:m,strokeWidth:f,className:`tabler-icon tabler-icon-${e}`}))),b),[...n.map((([e,t])=>(0,i.createElement)(e,t))),...v||[]])}));return a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number]),stroke:r().oneOfType([r().string,r().number])},a.displayName=`${t}`,a}},2162:function(e,t,n){n.d(t,{Z:function(){return i}});var i=(0,n(3687).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},6422:function(e,t,n){n.d(t,{w:function(){return p}});var i=n(5663),a=n(4478),r=n(2162),o=n(7814),l=n(9417),s=n(989),c=n(4523),u=n(1562),d=n(5893);const p=e=>{let{title:t,description:n,tags:p}=e;const{t:m}=(0,a.$)();return(0,d.jsxs)(c.UK,{className:"ApplicationCard-module--container--af780",onClick:()=>(0,u.c4)(t.href),children:[(0,d.jsx)(c.Ol,{className:"ApplicationCard-module--cardHeader--4aa85",children:(0,d.jsx)(c.wP,{children:(0,d.jsxs)(i.rU,{className:"ApplicationCard-module--titleLink--5e3d5",onClick:()=>(0,u.c4)(t.href),children:[(0,d.jsx)(i.JO,{children:(0,d.jsx)(r.Z,{})}),t.label]})})}),(0,d.jsx)(i.nv,{className:"ApplicationCard-module--description--e916e",children:n}),(0,d.jsxs)("div",{className:"ApplicationCard-module--tags--3a901",children:[p.organization&&(0,d.jsxs)(i.Ou,{"data-tooltip-id":s.TOOLTIP_ID,"data-tooltip-content":"Organisatie",children:[(0,d.jsx)(o.G,{icon:l.wp6}),p.organization]}),p.githubLink&&(0,d.jsxs)(i.Ou,{"data-tooltip-id":s.TOOLTIP_ID,"data-tooltip-content":"Demo",onClick:e=>{e.stopPropagation(),open(p.githubLink)},children:[(0,d.jsx)(o.G,{icon:l.py1}),m("Demo")]})]})]})}},6006:function(e,t,n){n.d(t,{k:function(){return u}});var i=n(7294),a=n(6010),r=n(7536),o=n(4523),l=n(1634),s=n(4478),c=n(5893);const u=e=>{let{queryLimitName:t,layoutClassName:n}=e;const{watch:u,register:p,control:m,setValue:g,formState:{errors:h}}=(0,r.cI)(),{queryLimit:f,setQueryLimit:v}=(0,l.TL)(),{t:b}=(0,s.$)(),y=u("limit"),x=f[t];return i.useEffect((()=>{if(!y)return;if(parseInt(y.value)===x)return;const e=d.find((e=>e.value===y.value));e&&v({...f,[t]:parseInt(e.value)})}),[y]),i.useEffect((()=>{g("limit",d.find((e=>e.value===(void 0!==x&&x.toString()))))}),[]),(0,c.jsxs)("div",{className:(0,a.Z)("PaginationLimitSelect-module--container--4b5a5",n&&n),children:[(0,c.jsxs)("span",{children:[b("Results per page"),":"]}),(0,c.jsx)(o.Nh,{ariaLabel:b("Select result limit"),register:p,errors:h,control:m,defaultValue:l.mr,name:"limit",options:d,menuPlacement:"auto",placeholder:b("Limit")})]})},d=[{label:"6",value:"6"},{label:"8",value:"8"},{label:"10",value:"10"},{label:"16",value:"16"},{label:"20",value:"20"},{label:"40",value:"40"},{label:"60",value:"60"},{label:"100",value:"100"}]},4706:function(e,t,n){n.d(t,{o:function(){return o}});var i=n(7294),a=n(8767),r=n(7177);const o=e=>{const t=i.useContext(r.Z);return{getOne:n=>(0,a.useQuery)(["applications",n],(()=>null==t?void 0:t.Applications.getOne(n)),{initialData:()=>{var t;return null===(t=e.getQueryData("applications"))||void 0===t?void 0:t.find((e=>e.id===n))},onError:e=>{throw new Error(e.message)},enabled:!!n}),getAll:(e,n,i)=>(0,a.useQuery)(["applications",e,n,i],(()=>null==t?void 0:t.Applications.getAll(n,i)),{onError:e=>{throw new Error(e.message)}}),getCount:()=>(0,a.useQuery)(["applications_count"],(()=>null==t?void 0:t.Applications.getCount()),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5})}}},7307:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(7294),a=n(6010),r=n(549),o=n(5663),l=n(4523),s=n(5983),c=n(4478),u=n(6422),d=n(8767),p=n(4706),m=n(9201),g=n(6006),h=n(1634),f=n(7814),v=n(9417),b=n(5893);const y=()=>{var e,t,n;const{t:y}=(0,c.$)(),{filters:x}=(0,s.P)(),{queryLimit:j}=(0,h.TL)(),{pagination:w,setPagination:k}=(0,m.E)(),C=new d.QueryClient,N=(0,p.o)(C),O=N.getAll({...x},w.applicationCurrentPage,j.applicationsQueryLimit),A=N.getCount();return i.useEffect((()=>{k({...w,applicationCurrentPage:1})}),[j.applicationsQueryLimit]),(0,b.jsxs)(l.W2,{layoutClassName:"ApplicationsTemplate-module--container--2be0f",children:[(0,b.jsx)("div",{className:"ApplicationsTemplate-module--header--15411",children:(0,b.jsxs)("div",{children:[(0,b.jsxs)(o.X6,{level:2,className:(0,a.Z)("ApplicationsTemplate-module--title--2d10c",!A.isSuccess&&"ApplicationsTemplate-module--loading--11c2f"),children:[y("Applications")," ",A.data>=0?`(${A.data})`:(0,b.jsxs)(b.Fragment,{children:["(",(0,b.jsx)(r.Z,{height:"1ch",width:"1ch"}),")"]})]}),(0,b.jsxs)(o.nv,{className:"ApplicationsTemplate-module--description--e2fbb",children:["Totaal oplossing op basis van een set componenten. Het gaat om werkende software die een oplossing biedt voor een bepaalde"," ",(0,b.jsx)("span",{children:(0,b.jsxs)(o.rU,{className:"ApplicationsTemplate-module--inlineTextLink--feaef",target:"_new",href:"https://www.gemmaonline.nl/index.php/GEMMA_Bedrijfsfuncties",children:[(0,b.jsx)(o.JO,{children:(0,b.jsx)(f.G,{icon:v.gJF})}),y("Business function")]})}),"."]})]})}),O.isSuccess&&0!==O.data.total&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"ApplicationsTemplate-module--ComponentsGrid--a2045",children:null===(e=O.data)||void 0===e||null===(t=e.results)||void 0===t?void 0:t.map((e=>{var t,n;return(0,b.jsx)(u.w,{title:{label:e.name,href:`/applications/${e.id}`},description:e.shortDescription,tags:{organization:null==e||null===(t=e.embedded)||void 0===t||null===(n=t.owner)||void 0===n?void 0:n.fullName,githubLink:null==e?void 0:e.demoUrl}},e.id)}))}),(0,b.jsxs)("div",{className:"ApplicationsTemplate-module--pagination--6741f",children:[(0,b.jsx)(l.tl,{layoutClassName:"ApplicationsTemplate-module--paginationContainer--c29fa",totalPages:O.data.pages,currentPage:O.data.page,setCurrentPage:e=>k({...w,applicationCurrentPage:e}),ariaLabels:{nextPage:y("Next page"),previousPage:y("Previous page"),page:y("Page")}}),(0,b.jsx)(g.k,{queryLimitName:"applicationsQueryLimit"})]})]}),!(null!==(n=O.data)&&void 0!==n&&n.results)&&!O.isLoading&&y("No results found"),O.isSuccess&&0===O.data.total&&y("No results available"),O.isLoading&&(0,b.jsx)(r.Z,{height:"200px"})]})};var x=e=>(0,b.jsx)(y,{})},549:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294);const a=i.createContext({}),r=!0;function o({baseColor:e,highlightColor:t,width:n,height:i,borderRadius:a,circle:o,direction:l,duration:s,enableAnimation:c=r}){const u={};return"rtl"===l&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof i&&"number"!=typeof i||(u.height=i),"string"!=typeof a&&"number"!=typeof a||(u.borderRadius=a),o&&(u.borderRadius="50%"),void 0!==e&&(u["--base-color"]=e),void 0!==t&&(u["--highlight-color"]=t),u}function l({count:e=1,wrapper:t,className:n,containerClassName:l,containerTestId:s,circle:c=!1,style:u,...d}){var p,m,g;const h=i.useContext(a),f={...d};for(const[i,a]of Object.entries(d))void 0===a&&delete f[i];const v={...h,...f,circle:c},b={...u,...o(v)};let y="react-loading-skeleton";n&&(y+=` ${n}`);const x=null!==(p=v.inline)&&void 0!==p&&p,j=[],w=Math.ceil(e);for(let a=0;a<w;a++){let t=b;if(w>e&&a===w-1){const n=null!==(m=t.width)&&void 0!==m?m:"100%",i=e%1,a="number"==typeof n?n*i:`calc(${n} * ${i})`;t={...t,width:a}}const n=i.createElement("span",{className:y,style:t,key:a},"‌");x?j.push(n):j.push(i.createElement(i.Fragment,{key:a},n,i.createElement("br",null)))}return i.createElement("span",{className:l,"data-testid":s,"aria-live":"polite","aria-busy":null!==(g=v.enableAnimation)&&void 0!==g?g:r},t?j.map(((e,n)=>i.createElement(t,{key:n},e))):j)}}}]);
//# sourceMappingURL=component---src-pages-applications-applications-page-tsx-750f2624691f20197c1c.js.map