"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18804],{62806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>o});a(67294);var i=a(85893),s=a(11151);const n={title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",sidebar_title:"Best practices"},r=void 0,c={unversionedId:"tooling/nft-marketplace/best-practices",id:"tooling/nft-marketplace/best-practices",title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",source:"@site/docs/tooling/nft-marketplace/best-practices.md",sourceDirName:"tooling/nft-marketplace",slug:"/tooling/nft-marketplace/best-practices",permalink:"/docs/next/tooling/nft-marketplace/best-practices",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tooling/nft-marketplace/best-practices.md",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1685407459,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",sidebar_title:"Best practices"},sidebar:"tutorialSidebar",previous:{title:"NFT Marketplace",permalink:"/docs/next/tooling/nft-marketplace/"},next:{title:"Building blocks",permalink:"/docs/next/tooling/nft-marketplace/building-blocks"}},l={},o=[{value:"Maintain accuracy of displayed price",id:"maintain-accuracy-of-displayed-price",level:2},{value:"Clean up stale NFT listings",id:"clean-up-stale-nft-listings",level:2},{value:"Provide rich filtering/search capabilities",id:"provide-rich-filteringsearch-capabilities",level:2}];function p(e){const t=Object.assign({p:"p",h2:"h2",a:"a"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Besides following the best practices of building a scalable web application that can handle unexpected user traffic surge, NFT marketplaces should also follow the best practices listed below but often ignored."}),"\n",(0,i.jsx)(t.h2,{id:"maintain-accuracy-of-displayed-price",children:"Maintain accuracy of displayed price"}),"\n",(0,i.jsx)(t.p,{children:"NFT purchase ultimately settles on the blockchain, but NFT buyers see the prices of the NFTs for sale on the marketplace website. The marketplace platform should ensure that the price listed on the web page, their backend, and the blockchain are in sync. If that is not the case, it can lead to ugly surprises for the NFT buyers."}),"\n",(0,i.jsx)(t.h2,{id:"clean-up-stale-nft-listings",children:"Clean up stale NFT listings"}),"\n",(0,i.jsxs)(t.p,{children:["Often, sellers change their listing price for the NFT on sale. That can lead to multiple listings on the chain. After a price change, marketplace platforms should ensure that any lower price listings are deleted from the chain. Also, once the NFT is sold, the marketplace should ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/nft-storefront/blob/main/transactions/cleanup_purchased_listings.cdc",children:"clean up"})," all sale listings for that NFT."]}),"\n",(0,i.jsx)(t.h2,{id:"provide-rich-filteringsearch-capabilities",children:"Provide rich filtering/search capabilities"}),"\n",(0,i.jsx)(t.p,{children:"Frequently, NFT buyers are inundated by irrelevant NFTs while not being able to find what they are looking for. Having comprehensive search and filtering capabilities on the platform can help provide good UX to the NFT buyers. Filtering capability should be implemented, keeping in mind that different NFT types have different traits"})]})}const d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(p,e)})):p(e)}}}]);