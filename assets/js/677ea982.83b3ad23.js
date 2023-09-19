"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67690],{81743:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});s(67294);var n=s(85893),a=s(11151);const i={title:"Stake Slashing",sidebar_position:4,description:"How Flow enforces honest node behaviour"},o=void 0,r={unversionedId:"architecture/staking/stake-slashing",id:"architecture/staking/stake-slashing",title:"Stake Slashing",description:"How Flow enforces honest node behaviour",source:"@site/docs/architecture/staking/04-stake-slashing.md",sourceDirName:"architecture/staking",slug:"/architecture/staking/stake-slashing",permalink:"/docs/next/architecture/staking/stake-slashing",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/architecture/staking/04-stake-slashing.md",tags:[],version:"current",lastUpdatedBy:"Jordan Schalm",lastUpdatedAt:1695145958,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:4,frontMatter:{title:"Stake Slashing",sidebar_position:4,description:"How Flow enforces honest node behaviour"},sidebar:"architecture",previous:{title:"Epoch Preparation Protocol",permalink:"/docs/next/architecture/staking/epoch-preparation"},next:{title:"Query Epoch Info with Scripts or Events",permalink:"/docs/next/architecture/staking/epoch-scripts-events"}},c={},h=[];function d(e){const t=Object.assign({p:"p",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Flow slashes nodes only for acts that directly impact\nthe security and integrity of the network and its shared execution state.\nNodes are not slashed for liveness infractions.\nThe protocol reserves slashing for maintaining the security of the protocol rather than its liveness."}),"\n",(0,n.jsxs)(t.p,{children:["You can find more details on the conditions under which a node is slashed\nin the ",(0,n.jsx)(t.a,{href:"https://www.onflow.org/technical-paper",children:"Flow whitepapers"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Direct stake slashing is not currently enforced by the protocol and staking contract.\nIt will be handled on a case-by-case basis for the foreseeable future\nto ensure network participants have time to participate in the testing and rollout of slashing."}),"\n",(0,n.jsx)(t.p,{children:"There is a very basic form of slashing that is currently used, where\nnodes who have liveness issues during an epoch may have their rewards\nand their delegators' rewards reduced by a pre-determinded amount based on\nthe severity of the liveness infractions. This amount is often 50%\nand is only taken from the stakers' rewards for a given epoch.\nTheir staked FLOW is not touched at all."}),"\n",(0,n.jsx)(t.p,{children:"When slashing is enforced, slashable protocol violations must be adjudicated by a supermajority\nof more than 2/3 of the staked consensus nodes in order to take effect.\nIf a node is found guilty of committing a slashable protocol violation,\nthe consensus nodes directly deduct a fine from the node's stake."}),"\n",(0,n.jsx)(t.p,{children:"It is still TBD where the slashed tokens will be deposited."}),"\n",(0,n.jsx)(t.p,{children:"The remaining un-slashed stake is deposited back into node's unstaked pool\nat the end of the unstaking period."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);