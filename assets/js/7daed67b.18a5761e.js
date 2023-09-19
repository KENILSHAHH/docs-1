"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80102],{85202:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});s(67294);var a=s(85893),n=s(11151);const c={title:"Cadence Security Best Practices",sidebar_label:"Security Best Practices",sidebar_position:3},i=void 0,r={unversionedId:"cadence/security-best-practices",id:"cadence/security-best-practices",title:"Cadence Security Best Practices",description:"This is an opinionated list of best practices Cadence developers should follow to write more secure Cadence code.",source:"@site/docs/cadence/security-best-practices.md",sourceDirName:"cadence",slug:"/cadence/security-best-practices",permalink:"/docs/next/cadence/security-best-practices",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/security-best-practices.md",tags:[],version:"current",lastUpdatedBy:"Jordan Schalm",lastUpdatedAt:1695145958,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:3,frontMatter:{title:"Cadence Security Best Practices",sidebar_label:"Security Best Practices",sidebar_position:3},sidebar:"cadence",previous:{title:"Anti-Patterns",permalink:"/docs/next/cadence/anti-patterns"},next:{title:"1. First Steps",permalink:"/docs/next/cadence/tutorial/first-steps"}},o={},l=[{value:"References",id:"references",level:2},{value:"Account Storage",id:"account-storage",level:2},{value:"Auth Accounts",id:"auth-accounts",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Types",id:"types",level:2},{value:"Access Control",id:"access-control",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This is an opinionated list of best practices Cadence developers should follow to write more secure Cadence code."}),"\n",(0,a.jsxs)(t.p,{children:["Some practices listed below might overlap with advice in the ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/design-patterns",children:"Cadence Anti-Patterns"})," section, which is a recommended read as well."]}),"\n",(0,a.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"./language/references",children:"References"})," are ephemeral values and cannot be stored. If persistence is required, store a capability and borrow it when needed."]}),"\n",(0,a.jsx)(t.p,{children:"When exposing functionality, provide the least access necessary. When creating an authorized reference,\ncreate it with only the minimal set of entitlements required to achieve the desired functionality."}),"\n",(0,a.jsx)(t.h2,{id:"account-storage",children:"Account Storage"}),"\n",(0,a.jsxs)(t.p,{children:["Don't trust a users\u2019 ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/language/accounts/storage",children:"account storage"}),". Users have full control over their data and may reorganize it as they see fit. Users may store values in any path, so paths may store values of \u201cunexpected\u201d types. These values may be instances of types in contracts that the user deployed."]}),"\n",(0,a.jsxs)(t.p,{children:["Always ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/language/accounts/capabilities",children:"borrow"})," with the specific type that is expected. Or, check if the value is an instance of the expected type."]}),"\n",(0,a.jsx)(t.h2,{id:"auth-accounts",children:"Auth Accounts"}),"\n",(0,a.jsxs)(t.p,{children:["Access to an ",(0,a.jsx)(t.code,{children:"AuthAccount"})," gives full access to the account's storage, keys, and contracts. Therefore, ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/anti-patterns#avoid-using-authaccount-as-a-function-parameter",children:"avoid using AuthAccount"})," as a function parameter unless absolutely necessary."]}),"\n",(0,a.jsxs)(t.p,{children:["It is preferable to use capabilities over direct ",(0,a.jsx)(t.code,{children:"AuthAccount"})," storage when exposing account data. Using capabilities allows the revocation of access by unlinking and limits the access to a single value with a certain set of functionality \u2013 access to an ",(0,a.jsx)(t.code,{children:"AuthAccount"})," gives full access to the whole storage, as well as key and contract management."]}),"\n",(0,a.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsxs)(t.p,{children:["Don't issue and publish capabilities unless really required.\nAnyone can access capabilities that are published.\nIf public access is needed, follow the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege",children:"principle of least privilege/authority"}),":\nMake sure that the capability type only grants access to the fields and functions that should be exposed, and nothing else.\nIdeally, create a capability with a reference type that is unauthorized."]}),"\n",(0,a.jsx)(t.p,{children:"If an entitlement is necessary to access the field or function,\nensure it is only used for the particular field or function,\nand not also by other fields and functions.\nIf needed, introduce a new, fine-grained entitlement."}),"\n",(0,a.jsxs)(t.p,{children:["When linking a capability, the link might already be present. In that case, Cadence will not panic with a runtime error but the link function will return ",(0,a.jsx)(t.code,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is a good practice to check if the link already exists with ",(0,a.jsx)(t.code,{children:"getLinkTarget"})," before creating it. This function will return ",(0,a.jsx)(t.code,{children:"nil"})," if the link does not exist."]}),"\n",(0,a.jsxs)(t.p,{children:["If it is necessary to handle the case where borrowing a capability might fail, the ",(0,a.jsx)(t.code,{children:"account.check"})," function can be used to verify that the target exists and has a valid type."]}),"\n",(0,a.jsx)(t.p,{children:"Ensure capabilities cannot be accessed by unauthorized parties. For example, capabilities should not be accessible through a public field, including public dictionaries or arrays. Exposing a capability in such a way allows anyone to borrow it and perform all actions that the capability allows."}),"\n",(0,a.jsx)(t.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsxs)(t.p,{children:["Audits of Cadence code should also include ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/language/transactions",children:"transactions"}),", as they may contain arbitrary code, just, like in contracts. In addition, they are given full access to the accounts of the transaction\u2019s signers, i.e. the transaction is allowed to manipulate the signers\u2019 account storage, contracts, and keys."]}),"\n",(0,a.jsxs)(t.p,{children:["Signing a transaction gives access to the ",(0,a.jsx)(t.code,{children:"AuthAccount"}),", i.e. full access to the account\u2019s storage, keys, and contracts."]}),"\n",(0,a.jsx)(t.p,{children:"Do not blindly sign a transaction. The transaction could for example change deployed contracts by upgrading them with malicious statements, revoking or adding keys, transferring resources from storage, etc."}),"\n",(0,a.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/language/intersection-types",children:"intersection types and interfaces"}),". Always use the most specific type possible, following the principle of least privilege. Types should always be as restrictive as possible, especially for resource types."]}),"\n",(0,a.jsx)(t.p,{children:"If given a less-specific type, cast to the more specific type that is expected. For example, when implementing the fungible token standard, a user may deposit any fungible token, so the implementation should cast to the expected concrete fungible token type."}),"\n",(0,a.jsx)(t.h2,{id:"access-control",children:"Access Control"}),"\n",(0,a.jsxs)(t.p,{children:["Declaring a field as ",(0,a.jsx)(t.a,{href:"/docs/next/cadence/language/access-control",children:(0,a.jsx)(t.code,{children:"access(all)"})})," only protects from replacing the field\u2019s value, but the value itself can still be mutated if it is mutable. Remember that containers, like dictionaries, and arrays, are mutable."]}),"\n",(0,a.jsx)(t.p,{children:"Prefer non-public access to a mutable state. That state may also be nested. For example, a child may still be mutated even if its parent exposes it through a field with non-settable access."}),"\n",(0,a.jsxs)(t.p,{children:["Do not use the ",(0,a.jsx)(t.code,{children:"access(all)"})," modifier on fields unless necessary.\nPrefer ",(0,a.jsx)(t.code,{children:"access(self)"}),", or ",(0,a.jsx)(t.code,{children:"access(contract)"})," and ",(0,a.jsx)(t.code,{children:"access(account)"})," when other types in the contract or account need to have access,\nand entitlement-based access for other cases."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);