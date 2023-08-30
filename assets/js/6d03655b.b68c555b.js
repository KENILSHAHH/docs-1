"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65573],{78166:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});s(67294);var t=s(85893),o=s(11151);const i={title:"Stake Slashing",sidebar_position:4,description:"How Flow enforces honest node behaviour"},a=void 0,r={unversionedId:"building-on-flow/run-and-secure/staking/stake-slashing",id:"building-on-flow/run-and-secure/staking/stake-slashing",title:"Stake Slashing",description:"How Flow enforces honest node behaviour",source:"@site/docs/building-on-flow/run-and-secure/staking/04-stake-slashing.md",sourceDirName:"building-on-flow/run-and-secure/staking",slug:"/building-on-flow/run-and-secure/staking/stake-slashing",permalink:"/docs/next/building-on-flow/run-and-secure/staking/stake-slashing",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/staking/04-stake-slashing.md",tags:[],version:"current",lastUpdatedBy:"Chase Fleming",lastUpdatedAt:1693358711,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:4,frontMatter:{title:"Stake Slashing",sidebar_position:4,description:"How Flow enforces honest node behaviour"},sidebar:"buildingOnFlow",previous:{title:"Epoch Preparation Protocol",permalink:"/docs/next/building-on-flow/run-and-secure/staking/epoch-preparation"},next:{title:"Query Epoch Info with Scripts or Events",permalink:"/docs/next/building-on-flow/run-and-secure/staking/epoch-scripts-events"}},d={},l=[];function c(e){const n=Object.assign({p:"p",a:"a"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Flow slashes nodes only for acts that directly impact\nthe security and integrity of the network and its shared execution state.\nNodes are not slashed for liveness infractions.\nThe protocol reserves slashing for maintaining the security of the protocol rather than its liveness."}),"\n",(0,t.jsxs)(n.p,{children:["You can find more details on the conditions under which a node is slashed\nin the ",(0,t.jsx)(n.a,{href:"https://www.onflow.org/technical-paper",children:"Flow whitepapers"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Direct stake slashing is not currently enforced by the protocol and staking contract.\nIt will be handled on a case-by-case basis for the foreseeable future\nto ensure network participants have time to participate in the testing and rollout of slashing."}),"\n",(0,t.jsx)(n.p,{children:"There is a very basic form of slashing that is currently used, where\nnodes who have liveness issues during an epoch may have their rewards\nand their delegators' rewards reduced by a pre-determinded amount based on\nthe severity of the liveness infractions. This amount is often 50%\nand is only taken from the stakers' rewards for a given epoch.\nTheir staked FLOW is not touched at all."}),"\n",(0,t.jsx)(n.p,{children:"When slashing is enforced, slashable protocol violations must be adjudicated by a supermajority\nof more than 2/3 of the staked consensus nodes in order to take effect.\nIf a node is found guilty of committing a slashable protocol violation,\nthe consensus nodes directly deduct a fine from the node's stake."}),"\n",(0,t.jsx)(n.p,{children:"It is still TBD where the slashed tokens will be deposited."}),"\n",(0,t.jsx)(n.p,{children:"The remaining un-slashed stake is deposited back into node's unstaked pool\nat the end of the unstaking period."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);