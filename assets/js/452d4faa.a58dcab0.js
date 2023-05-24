"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4414],{87087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});n(67294);var s=n(85893),i=n(11151);const o={title:"Hybrid Custody",sidebar_position:9},a="Hybrid Custody Overview",c={unversionedId:"concepts/hybrid-custody/index",id:"concepts/hybrid-custody/index",title:"Hybrid Custody",description:"The Hybrid Custody model on Flow enables developers to provide seamless onboarding and in-app experiences while simultaneously empowering users with real ownership and self-sovereignty.\xa0 With this new custodial model, developers can deliver the benefits of both app and self-custody in a unified experience.",source:"@site/docs/concepts/hybrid-custody/index.md",sourceDirName:"concepts/hybrid-custody",slug:"/concepts/hybrid-custody/",permalink:"/docs/concepts/hybrid-custody/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/hybrid-custody/index.md",tags:[],version:"current",lastUpdatedBy:"Supun Setunga",lastUpdatedAt:1684949031,formattedLastUpdatedAt:"May 24, 2023",sidebarPosition:9,frontMatter:{title:"Hybrid Custody",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"ios",permalink:"/docs/concepts/mobile/references/ios"},next:{title:"Get Started with Account Linking",permalink:"/docs/concepts/hybrid-custody/get-started"}},r={},d=[{value:"The Path to Hybrid Custody",id:"the-path-to-hybrid-custody",level:3},{value:"Why Care?",id:"why-care",level:3}];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3",ol:"ol",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"hybrid-custody-overview",children:"Hybrid Custody Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The Hybrid Custody model on Flow enables developers to provide seamless onboarding and in-app experiences while simultaneously empowering users with real ownership and self-sovereignty.\xa0 With this ",(0,s.jsx)(t.a,{href:"https://forum.onflow.org/t/hybrid-custody/4016",children:"new custodial model"}),", developers can deliver the benefits of both app and self-custody in a unified experience."]}),"\n",(0,s.jsx)(t.p,{children:"The full Hybrid Custody model is enabled by three core components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Walletless Onboarding - App managed account creation, funding, and custody"}),"\n",(0,s.jsx)(t.li,{children:"Account Linking - App custodied accounts delegate access to wallet-authenticated users"}),"\n",(0,s.jsx)(t.li,{children:"LinkedAccounts contract - A standard contract enabling users to view and manage their linked accounts"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0f Note that the documentation on Hybrid Custody covers the current state and will likely differ from the final implementation. Builders should be aware that breaking changes will deploy between current state and the stable version. Interested in shaping the conversation? ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flips/pull/72",children:"Join in!"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"the-path-to-hybrid-custody",children:"The Path to Hybrid Custody"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The app creates, funds, and manages access to a Flow account initialized on user onboarding. This enables the app to abstract away the complexities of interacting with smart contract powered applications, and focus on creating slick user experiences behind familiar Web2 authentication and fiat denominated payments."}),"\n",(0,s.jsx)(t.li,{children:"Once a user returns to the app with a self-custodial wallet, they can authenticate their wallet-managed account in the app, allowing the app to give the user's main account delegated access to the app managed account."}),"\n",(0,s.jsx)(t.li,{children:'Upon linking, the user\'s main account - now the "parent" account - adds the app created account - now the "child" account - to a collection of all linked child accounts. At this point, Hybrid Custody is reached'}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"why-care",children:"Why Care?"}),"\n",(0,s.jsxs)(t.p,{children:["Hybrid Custody grants users full access to their linked child accounts without needing to interface with the child account's custodial app, ",(0,s.jsx)(t.strong,{children:"and"})," the custodial app can interact with the relevant assets in the child account on behalf of the user in a frictionless UX free from transaction prompts."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"All assets in the app account can now jump the walled garden to play in the rest of the Flow ecosystem."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This shared control over the digital items in the in-app account enables users to establish real ownership of the items beyond the context of the app, where they can use their self-custody wallet to take the items to other apps in the ecosystem, such as a marketplace or a game."}),"\n",(0,s.jsx)(t.p,{children:"Most importantly, users are able to do this without the need to transfer the digital items between the two accounts, making it seamless to continue using the original app while also using other apps."}),"\n",(0,s.jsx)(t.p,{children:"With account linking, developers can build walletless onboarding experiences for new users that provide a clear path to self-custody. Continue on to read our Walletless Onboarding guide for more details on how you can use Account Linking to build spectacular experiences on Flow."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);