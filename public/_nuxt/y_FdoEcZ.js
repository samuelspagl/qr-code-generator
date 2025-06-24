import{E as t,F as s,ag as l,x as n,y as d,z as r,a5 as o,a8 as a}from"./C7As8BTR.js";var p=t`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,i={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},b=s.extend({name:"toolbar",style:p,classes:i}),c={name:"BaseToolbar",extends:l,props:{ariaLabelledby:{type:String,default:null}},style:b,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},m={name:"Toolbar",extends:c,inheritAttrs:!1},y=["aria-labelledby"];function u(e,v,g,$,f,h){return d(),n("div",a({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[r("div",a({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),r("div",a({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),r("div",a({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,y)}m.render=u;export{m as default};
