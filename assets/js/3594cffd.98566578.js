"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88741],{42950:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});o(67294);var s=o(85893),t=o(11151);const i={title:"Flow Nodes",sidebar_position:7},a="Hello Node Operator!",r={unversionedId:"building-on-flow/nodes/index",id:"building-on-flow/nodes/index",title:"Flow Nodes",description:"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger.",source:"@site/docs/building-on-flow/nodes/index.md",sourceDirName:"building-on-flow/nodes",slug:"/building-on-flow/nodes/",permalink:"/docs/next/building-on-flow/nodes/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/nodes/index.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694034145,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:7,frontMatter:{title:"Flow Nodes",sidebar_position:7},sidebar:"buildingOnFlow",previous:{title:"Basic Staking Guide (Deprecated)",permalink:"/docs/next/building-on-flow/run-and-secure/staking/staking-guide"},next:{title:"Access API",permalink:"/docs/next/building-on-flow/nodes/access-api"}},d={},l=[{value:"Why run a node?",id:"why-run-a-node",level:2},{value:"Which node should you run?",id:"which-node-should-you-run",level:2},{value:"Light node a.k.a. Observer node",id:"light-node-aka-observer-node",level:2},{value:"Archive node",id:"archive-node",level:2},{value:"Full node",id:"full-node",level:2},{value:"Access node",id:"access-node",level:2},{value:"Validator node",id:"validator-node",level:2},{value:"Running a staked node",id:"running-a-staked-node",level:3}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",img:"img",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hello-node-operator",children:"Hello Node Operator!"}),"\n",(0,s.jsx)(n.p,{children:"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger."}),"\n",(0,s.jsx)(n.h2,{id:"why-run-a-node",children:"Why run a node?"}),"\n",(0,s.jsx)(n.p,{children:"By running your own node, you have direct access to the evolving state of the network, without having to rely on third parties.\nThis increases privacy and security, reduces reliance on external servers, and helps balance load distribution.\nBy running a node, you also directly contribute to the security and decentralization of the whole network."}),"\n",(0,s.jsx)(n.p,{children:"Flow multirole architecture makes it more scalable and provides several node types that you as a node operator can pick and choose from."}),"\n",(0,s.jsx)(n.h2,{id:"which-node-should-you-run",children:"Which node should you run?"}),"\n",(0,s.jsxs)(n.p,{children:["The different types of nodes are described ",(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-roles",children:"here"}),". As node operator, you can choose to run any of the different types of node that best fits your needs."]}),"\n",(0,s.jsx)(n.p,{children:"The nodes are classified as follows"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(18992).Z+"",loading:"lazy",alt:"Flownodesdiagram.jpg",width:"720",height:"540"})}),"\n",(0,s.jsx)(n.h2,{id:"light-node-aka-observer-node",children:"Light node a.k.a. Observer node"}),"\n",(0,s.jsx)(n.p,{children:"The light node is one of the easiest nodes to spin up and can be run by Dapp developers who need the latest block data available locally, e.g. a wallet application that needs to track the latest block ID and height.\nIn addition to supporting dapps, an observer node can also be run by access node operators who want to scale their access nodes' endpoints. Access node operators can spin up geographically dispersed observer nodes which can talk to their staked access nodes and to each other."}),"\n",(0,s.jsx)(n.p,{children:"The observer node is not staked but still provides the same API as the access node."}),"\n",(0,s.jsxs)(n.p,{children:["To run a light node, follow this ",(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/observer-node",children:"guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"archive-node",children:"Archive node"}),"\n",(0,s.jsx)(n.p,{children:"The Archive node provides a scalable and efficient way to access the history of Flow protocol and the execution state for the current spork. Like the observer node, it too can be run by anyone without being staked or added to the approved list of nodes.\nThe Archive node follows the chain, stores and indexes both protocol and execution state, and allows retrieval of blocks, collections, transactions and events from the genesis of the current spork."}),"\n",(0,s.jsx)(n.p,{children:"It also allows script execution and other read-only queries that require the execution state to be read. It can answer any queries from past data e.g. \u201cwhat was the Flow account balance at height X?\u201d, where X is several thousand blocks in the past."}),"\n",(0,s.jsxs)(n.p,{children:["The archive node is currently in beta and will be available as a GA release in H2 2023 (see ",(0,s.jsx)(n.a,{href:"https://flow.com/post/flow-blockchain-node-operation-archive-node",children:"here"})," for more)"]}),"\n",(0,s.jsx)(n.h2,{id:"full-node",children:"Full node"}),"\n",(0,s.jsx)(n.p,{children:"In a nutshell, Full Nodes are staked network participants that drive network progress, e.g. by creating and executing new blocks. They are the primary contributors to network safety (all of them validate the correctness of the consensus process and secure the network additionally through their role-specific tasks). In comparison, Light Nodes don't contribute to the networks progress. Though, they help to secure the network by also validating the integrity of the consensus process."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Access node is a full node that serves as an RPC node and acts as a gateway node for the network."}),"\n",(0,s.jsx)(n.li,{children:"The Validator node (Collection, Consensus, Verification and Execution) is a full node that plays a role in block generation."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access-node",children:"Access node"}),"\n",(0,s.jsx)(n.p,{children:"If you want local access to the protocol state data (blocks, collections, transactions) and do not want to use one of the community access nodes you can run an access node.\nDapp developers, chain explorers, chain analytics etc. who want exclusive access to chain data and not be subject to the rate-limits on the community access node can choose to run an access node."}),"\n",(0,s.jsxs)(n.p,{children:["An access node is minimally staked for network security.\nThe central goal for Access Nodes is to provide RPC functionality to its node operator.\nIn comparison, contributing to protocol progress (e.g. routing transactions to collector clusters, relaying blocks to the unstaked peer-to-peer network, etc.) should only take up a marginal fraction an Access Node's computational resources.\nFurthermore, Access Node operators can freely rate-limit the amount of resources their Access Node dedicates to supporting the broader ecosystem. Therefore, Access Nodes do not receive staking rewards.\nTo run an access node, see the ",(0,s.jsx)(n.a,{href:"#running-a-staked-node",children:"Running a staked node"})," section below."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternately, instead of running an access node, you can use the ",(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/access-api",children:"Flow community"})," access nodes or the ones run by any of the other node operators."]}),"\n",(0,s.jsx)(n.h2,{id:"validator-node",children:"Validator node"}),"\n",(0,s.jsx)(n.p,{children:"You can also be a core participant in running the Flow network and contribute to securing it. Depending on your preference, you could run one or any combination of the following node roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Collection Nodes collaboratively create batches of transactions (in Flow terminology collections)."}),"\n",(0,s.jsx)(n.li,{children:"Consensus Nodes create blocks, schedule them for asynchronous execution, and commit execution results once they are verified (so called sealing). In addition, they orchestrate the Flow protocol and enforce protocol compliance."}),"\n",(0,s.jsx)(n.li,{children:"Execution Nodes asynchronously execute blocks. They are the power-houses in the protocol, providing the vast computational resources available to Flow transactions."}),"\n",(0,s.jsx)(n.li,{children:"Verification Nodes check the execution results in a distributed manner."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Nodes with these roles are staked and also receive staking rewards."}),"\n",(0,s.jsx)(n.h3,{id:"running-a-staked-node",children:"Running a staked node"}),"\n",(0,s.jsx)(n.p,{children:"To run a staked node (node type access, collection, consensus, verification or execution) the node must:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be registered with sufficient stake"}),"\n",(0,s.jsx)(n.li,{children:"be authorized by the service account"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Before proceeding, ensure you have the stake required for your new node and that your node will be authorized by the service account (apply ",(0,s.jsx)(n.a,{href:"https://www.onflow.org/node-validators",children:"here"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"To set up a new Flow node you will need to complete the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-setup",children:"Provision"})," the machine on which your node will run."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap",children:"Generate and register"})," your node identity."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap#step-3---start-your-flow-node",children:"Start"})," your node!"]}),"\n"]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},18992:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/Flownodesdiagram-92491aea8b976e101643982506ed4256.jpg"}}]);