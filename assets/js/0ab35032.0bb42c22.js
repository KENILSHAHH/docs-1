"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33890],{60958:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});o(67294);var a=o(85893),l=o(11151);const c={title:"Data Collection",description:"Data collected from Flow CLI usage"},n=void 0,i={unversionedId:"tooling/flow-cli/data-collection",id:"tooling/flow-cli/data-collection",title:"Data Collection",description:"Data collected from Flow CLI usage",source:"@site/docs/tooling/flow-cli/data-collection.md",sourceDirName:"tooling/flow-cli",slug:"/tooling/flow-cli/data-collection",permalink:"/docs/next/tooling/flow-cli/data-collection",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tooling/flow-cli/data-collection.md",tags:[],version:"current",lastUpdatedBy:"Giovanni Sanchez",lastUpdatedAt:1685559899,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Data Collection",description:"Data collected from Flow CLI usage"},sidebar:"tutorialSidebar",previous:{title:"Create an Account with the Flow CLI",permalink:"/docs/next/tooling/flow-cli/create-accounts"},next:{title:"Decode Public Keys with the Flow CLI",permalink:"/docs/next/tooling/flow-cli/decode-keys"}},s={},d=[{value:"Why do we collect data about flow cli usage?",id:"why-do-we-collect-data-about-flow-cli-usage",level:2},{value:"What data do we collect?",id:"what-data-do-we-collect",level:2}];function r(e){const t=Object.assign({p:"p",code:"code",h2:"h2",a:"a"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Flow CLI tracks flow command usage count using Mixpanel."}),"\n",(0,a.jsxs)(t.p,{children:["Data collection is enabled by default. Users can opt out of our data collection through running ",(0,a.jsx)(t.code,{children:"flow settings metrics disable"}),".\nTo opt back in, users can run ",(0,a.jsx)(t.code,{children:"flow settings metrics enable"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"why-do-we-collect-data-about-flow-cli-usage",children:"Why do we collect data about flow cli usage?"}),"\n",(0,a.jsx)(t.p,{children:"Collecting aggregate command count allow us to prioritise features and fixes based on how users use flow cli."}),"\n",(0,a.jsx)(t.h2,{id:"what-data-do-we-collect",children:"What data do we collect?"}),"\n",(0,a.jsx)(t.p,{children:"We only collect the number of times a command is executed."}),"\n",(0,a.jsx)(t.p,{children:"We don't keep track of the values of arguments, flags used\nand the values of the flags used. We also don't associate any commands to any particular user."}),"\n",(0,a.jsx)(t.p,{children:"The only property that we collect from our users are their preferences for opting in / out of data collection.\nThe analytics user ID is specific to Mixpanel and does not permit Flow CLI maintainers to e.g. track you across websites you visit."}),"\n",(0,a.jsxs)(t.p,{children:["Further details regarding the data collected can be found under Mixpanel's data collection page in ",(0,a.jsx)(t.code,{children:"Ingestion API"}),"\nsection of ",(0,a.jsx)(t.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004613766-Default-Properties-Collected-by-Mixpanel",children:"https://help.mixpanel.com/hc/en-us/articles/115004613766-Default-Properties-Collected-by-Mixpanel"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Please note that although Mixpanel's page above mentions that geolocation properties are recorded by default,\nwe have turned off geolocation data reporting to Mixpanel."})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}}}]);