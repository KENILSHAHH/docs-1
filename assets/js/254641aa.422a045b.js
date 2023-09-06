"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41461],{70581:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>a});t(67294);var c=t(85893),l=t(11151);const n={title:"Flow Access API rate limits on Dapper Labs Access nodes",sidebar_label:"Access API Rate Limits",sidebar_position:2},i=void 0,r={unversionedId:"building-on-flow/nodes/access-api-rate-limits",id:"building-on-flow/nodes/access-api-rate-limits",title:"Flow Access API rate limits on Dapper Labs Access nodes",description:"Rate limits",source:"@site/docs/building-on-flow/nodes/access-api-rate-limits.mdx",sourceDirName:"building-on-flow/nodes",slug:"/building-on-flow/nodes/access-api-rate-limits",permalink:"/docs/next/building-on-flow/nodes/access-api-rate-limits",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/nodes/access-api-rate-limits.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694034145,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:2,frontMatter:{title:"Flow Access API rate limits on Dapper Labs Access nodes",sidebar_label:"Access API Rate Limits",sidebar_position:2},sidebar:"buildingOnFlow",previous:{title:"Access API",permalink:"/docs/next/building-on-flow/nodes/access-api"},next:{title:"Archive API",permalink:"/docs/next/building-on-flow/nodes/archive-access-api"}},d={},a=[{value:"Rate limits",id:"rate-limits",level:4},{value:"Mainnet",id:"mainnet",level:5},{value:"Testnet",id:"testnet",level:5}];function o(e){const s=Object.assign({h4:"h4",p:"p",a:"a",code:"code",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",strong:"strong"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h4,{id:"rate-limits",children:"Rate limits"}),"\n",(0,c.jsxs)(s.p,{children:["Following are the current rate limits for the ",(0,c.jsx)(s.a,{href:"/docs/next/building-on-flow/nodes/access-api",children:"Access Node gRPC API"})," in total across all Dapper Labs Access nodes. The actual limits are enforced by each individual node. If you are using a load balanced endpoint, the limits below are the max rate, and may vary depending on how your requests are routed."]}),"\n",(0,c.jsxs)(s.p,{children:["Once the limit has reached, the client will receive an RPC error ",(0,c.jsx)(s.code,{children:"ResourceExhausted"})," in the gRPC response."]}),"\n",(0,c.jsx)(s.p,{children:"Please note, these limits only apply to the access nodes hosted by Dapper Labs. Access nodes run by other node operators will have different rate limits."}),"\n",(0,c.jsx)(s.h5,{id:"mainnet",children:"Mainnet"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{align:"left",children:"gRPC API"}),(0,c.jsx)(s.th,{align:"center",children:"Total request per second per client IP"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/Ping"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestBlockHeader"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockHeaderByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockHeaderByHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockByHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetCollectionByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/SendTransaction"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetTransaction"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetTransactionResult"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccount"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtBlockHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetEventsForHeightRange"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetEventsForBlockIDs"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetNetworkParameters"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestProtocolStateSnapshot"}),(0,c.jsx)(s.td,{align:"center",children:"4"})]})]})]}),"\n",(0,c.jsx)(s.h5,{id:"testnet",children:"Testnet"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{align:"left",children:"gRPC API"}),(0,c.jsx)(s.th,{align:"center",children:"Total request per second per IP"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/Ping"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestBlockHeader"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockHeaderByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockHeaderByHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetBlockByHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetCollectionByID"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/SendTransaction"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetTransaction"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetTransactionResult"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccount"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtBlockHeight"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtLatestBlock"}),(0,c.jsx)(s.td,{align:"center",children:"200"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,c.jsx)(s.td,{align:"center",children:"200"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,c.jsx)(s.td,{align:"center",children:"200"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetEventsForHeightRange"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetEventsForBlockIDs"}),(0,c.jsx)(s.td,{align:"center",children:"100"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetNetworkParameters"}),(0,c.jsx)(s.td,{align:"center",children:"2000"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetLatestProtocolStateSnapshot"}),(0,c.jsx)(s.td,{align:"center",children:"4"})]})]})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.em,{children:"The rate limits are the same for the gRPC web interface"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:["The rate limits for ALL the REST API is ",(0,c.jsx)(s.strong,{children:"40"})," request per second per client IP"]})}),"\n",(0,c.jsx)(s.p,{children:"Please note: The rate limits are applied by each of the access nodes behind a load balancer and limits listed here are the aggregate total from all the access nodes. Actual limits may be somewhat less depending on how the requests are routed."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}}}]);