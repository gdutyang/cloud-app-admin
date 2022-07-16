var ae=Object.defineProperty;var oe=(e,l,o)=>l in e?ae(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o;var b=(e,l,o)=>(oe(e,typeof l!="symbol"?l+"":l,o),o);import{t as ne,d as le,F as X,G as re,H as ie,B as se}from"./element-plus.796eaf0d.js";import{_ as ce}from"./CTable.vue_vue_type_script_setup_true_lang.ad1373b3.js";import{m as Y,r as s,f as v,w as ue,d as Z,a6 as pe,o as R,c as U,X as f,Q as g,V as P,W as O,u as a,P as A,U as K,J as de,R as j,S as Q,T as G,M as me,a9 as ge,n as H,a0 as ee,a3 as fe,a as q}from"./@vue.868258c7.js";import{j as he,k as ve}from"./@element-plus.cf00268d.js";import{_ as _e,a as ye}from"./ArticleEditDialog.vue_vue_type_script_setup_true_lang.b299dca1.js";import{u as N}from"./vue-i18n.8110a5da.js";import{c as M,j as J}from"./index.21661719.js";import"./lodash-es.082cdea4.js";import"./@vueuse.b31bd3d5.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.cba15af0.js";import"./@intlify.f00429e5.js";import"./vue-echarts.3b6c88e9.js";import"./resize-detector.4e96b72b.js";import"./echarts.3adaecf4.js";import"./tslib.60310f1a.js";import"./zrender.46c0e42b.js";import"./pinia.3f1ced68.js";import"./vue-demi.65474690.js";import"./xe-utils.a7d87cf6.js";/* empty css                     */import"./vxe-table.18ff3017.js";import"./qs.d2aa2b80.js";import"./side-channel.38d98334.js";import"./get-intrinsic.89e72507.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.4b19860c.js";import"./object-inspect.621f328c.js";import"./js-cookie.31874410.js";import"./vue-router.c009eb29.js";import"./nprogress.54513b29.js";import"./yup.0bed65b0.js";import"./nanoclone.7d3cb5fe.js";import"./lodash.489bb805.js";import"./property-expr.48609aa3.js";import"./toposort.5e0934c4.js";const we=Y({__name:"SearchFilter",props:{options:{type:Array,required:!0},model:{type:Object,required:!0},loading:{type:Boolean,default:!1},searchDisabled:{type:Boolean,default:!1},resetDisabled:{type:Boolean,default:!1},showExpand:{type:Boolean,default:!1},showReset:{type:Boolean,default:!0}},emits:["search","reset"],setup(e,{emit:l}){const o=e,d=s(!1),c=s(0),_=s(!0),C=s(0),y=300,h=s(),z=s({}),{t:r}=N(),i=v(()=>{let t=Math.floor(c.value/y)||3;return t>4&&(t=4),t<1&&(t=1),t}),E=v(()=>o.showExpand&&D.value.length>i.value),x=v(()=>({span:24/i.value})),m=v(()=>o.options.filter(t=>!t.hidden)),F=v(()=>{let t=[],p=x.value.span;if(m.value.length<i.value-1)p=(i.value-m.value.length%i.value)*24/i.value,t=[...m.value];else for(let S=0;S<m.value.length;S++){const T=m.value[S];if(t.push(T),t.length>=i.value-1)break}return t.push({name:"search",scopedSlot:"search",colSpan:{span:p}}),t}),D=v(()=>{const t=(i.value-m.value.length%i.value)*24/i.value;return[...m.value,{name:"search",scopedSlot:"search",colSpan:{span:t}}]}),B=v(()=>d.value||!o.showExpand?D:F.value),w=s();function $(t){l("search",t)}function n(){var t;(t=h.value)==null||t.submit()}function u(){k(),H(()=>{l("reset")})}function k(...t){h.value.resetFields(...t)}function V(){d.value=!d.value}function W(){!_.value||(_.value=!1,C.value=setTimeout(()=>{w.value&&(c.value=w.value.offsetWidth,_.value=!0)},300))}function L(){H(()=>{c.value=w.value.clientWidth}),window.addEventListener("resize",W,!1)}return ue(()=>o.model,t=>{z.value=t},{immediate:!0}),Z(()=>{L()}),pe(()=>{}),(t,p)=>{const S=X,T=ne,I=le;return R(),U("div",{ref_key:"filterWrapRef",ref:w},[f(_e,me({ref_key:"form",ref:h},t.$attrs,{value:z.value,"onUpdate:value":p[0]||(p[0]=te=>z.value=te),options:a(B).value,layout:"inline","col-span":a(x),gutter:12,onSubmit:$,onKeyup:ge(n,["enter"])}),{search:g(()=>[f(T,null,{default:g(()=>[f(S,{type:"primary",icon:"search",loading:e.loading,disabled:e.searchDisabled,onClick:n},{default:g(()=>[P(O(a(r)("page.common.btn.search")),1)]),_:1},8,["loading","disabled"]),e.showReset?(R(),A(S,{key:0,type:"primary",icon:"brush",loading:e.loading,disabled:e.resetDisabled,onClick:u},{default:g(()=>[P(O(a(r)("page.common.btn.reset")),1)]),_:1},8,["loading","disabled"])):K("",!0)]),_:1})]),default:g(()=>[de(t.$slots,"extraButtons",{loading:e.loading}),a(E)?(R(),U("a",{key:0,onClick:V},[P(O(d.value?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),j(f(I,null,{default:g(()=>[(R(),A(G(a(he))))]),_:1},512),[[Q,d.value]]),j(f(I,null,{default:g(()=>[(R(),A(G(a(ve))))]),_:1},512),[[Q,!d.value]])])):K("",!0)]),_:3},16,["value","options","col-span","onKeyup"])],512)}}});class Se{constructor(l){b(this,"dataSource",s([]));b(this,"loading",s(!1));b(this,"queryParam",s());b(this,"url",s({}));b(this,"modalFormRef",s());b(this,"drawerFormRef",s());b(this,"ipagination",ee({current:1,total:0,pageSize:10,pageSizeOptions:[5,10,20,50,100]}));this.url.value=l}}function be(e){const l=new Se(e),{t:o}=N(),{dataSource:d,ipagination:c,loading:_,queryParam:C,modalFormRef:y,drawerFormRef:h}=fe(ee(l)),z=()=>({page:c.value.current,pageSize:c.value.pageSize,...C.value}),r=async(n=!1)=>{if(!e.list){M("error",o("page.common.notice.set_url_list"));return}n&&(c.value.current=1);const u=z();try{_.value=!0;const k=await J.get(e.list,u);d.value=k.data,c.value.total=k.total}finally{_.value=!1}},i=()=>{y.value.edit({}),y.value.title=o("page.common.title.add")},E=n=>{C.value=n,r(!0)},x=()=>{C.value={},r(!0)},m=(n,u=o("page.common.title.edit"))=>{y.value.edit(n),y.value.title=u},F=async n=>{if(!e.delete){M("error",o("page.common.notice.set_url_delete"));return}const u=await J.post(e.delete,{params:{id:n}});u.code===200&&u.data.count>0&&(M("success",o("page.common.notice.delete_success")),r(!0))},D=()=>{h.value.add(),h.value.title=o("page.common.title.add")},B=(n,u=o("page.common.title.edit"))=>{h.value.edit(n),h.value.title=u},w=n=>{c.value.pageSize=n,r()},$=n=>{c.value.current=n,r()};return Z(async()=>{await r(!0)}),{loadData:r,handleAdd:i,handleEdit:m,handleReset:x,handleDelete:F,handleSearch:E,handleAddDrawer:D,handleEditDrawer:B,handleSizeChange:w,handleCurrentChange:$,dataSource:d,ipagination:c,modalFormRef:y,loading:_}}const Ce=()=>{const{t:e}=N(),l=v(()=>[{label:e("page.common.design.article.search.title"),name:"title",tagName:"el-input",props:{placeholder:e("page.common.design.article.search.title_placeholder"),maxLength:"24"}},{label:e("page.common.design.article.search.content"),name:"content",tagName:"el-input",props:{placeholder:e("page.common.design.article.search.content_placeholder"),maxLength:"24"}},{label:e("page.common.design.article.search.type"),name:"type",tagName:"async-select",props:{placeholder:e("page.common.design.article.search.type_placeholder"),url:"/article/type",size:"default",style:{width:"100%"}}}]),o=v(()=>[{prop:"id",label:e("page.common.design.article.column.id"),width:"80"},{prop:"title",label:e("page.common.design.article.column.title"),width:"180"},{prop:"content",label:e("page.common.design.article.column.content"),showOverflowTooltip:!0},{prop:"actions",label:e("page.common.design.article.column.action"),fixed:"right",scoped:"actions",width:"150"}]);return{articleFilterOptions:l,articleColumns:o}},ze={class:"relative w-full"},ke={class:"p-[8px] absolute w-full"},Re={class:"mx-3 mt-5"},xe={class:"float-right mt-2"},wt=Y({__name:"ArticlePage",setup(e){const{t:l}=N(),o={list:"/article",delete:"/deleteArticle"},d={title:"",content:"",type:""},{articleFilterOptions:c,articleColumns:_}=Ce(),C=s(d),y=v(()=>c.value),{loading:h,dataSource:z,ipagination:r,modalFormRef:i,loadData:E,handleSizeChange:x,handleCurrentChange:m,handleEdit:F,handleDelete:D,handleSearch:B,handleReset:w}=be(o);return($,n)=>{const u=we,k=X,V=re,W=ce,L=ie,t=se;return R(),U("div",ze,[q("div",ke,[q("div",Re,[f(u,{model:C.value,options:a(y),"show-reset":!0,onReset:a(w),onSearch:a(B)},null,8,["model","options","onReset","onSearch"])]),j((R(),A(W,{"table-data":a(z),columns:a(_),align:"right","header-align":"right",stripe:"",style:{width:"100%"}},{actions:g(({scope:p})=>[f(k,{size:"small",onClick:S=>a(F)(p.row)},{default:g(()=>[P(O(a(l)("page.common.btn.edit")),1)]),_:2},1032,["onClick"]),f(V,{title:a(l)("page.common.btn.delete_popover"),onConfirm:S=>a(D)(p.row.id)},{reference:g(()=>[f(k,{size:"small",type:"danger"},{default:g(()=>[P(O(a(l)("page.common.btn.delete")),1)]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1},8,["table-data","columns"])),[[t,a(h)]]),q("div",xe,[f(L,{currentPage:a(r).current,"onUpdate:currentPage":n[0]||(n[0]=p=>a(r).current=p),"page-size":a(r).pageSize,"onUpdate:page-size":n[1]||(n[1]=p=>a(r).pageSize=p),small:"","page-sizes":a(r).pageSizeOptions,background:!0,layout:"sizes, prev, pager, next",total:a(r).total,onSizeChange:a(x),onCurrentChange:a(m)},null,8,["currentPage","page-size","page-sizes","total","onSizeChange","onCurrentChange"])])]),f(ye,{ref_key:"modalFormRef",ref:i,onClose:a(E)},null,8,["onClose"])])}}});export{wt as default};
