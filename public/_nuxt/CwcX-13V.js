import{E as o,F as s,b0 as t,g as n,x as l,y as d,a5 as i,B as p,a8 as a}from"./C7As8BTR.js";var v=o`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,g={root:"p-overlaybadge"},c=s.extend({name:"overlaybadge",style:v,classes:g}),y={name:"OverlayBadge",extends:t,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},m={name:"OverlayBadge",extends:y,inheritAttrs:!1,components:{Badge:t}};function u(e,b,B,$,f,h){var r=n("Badge");return d(),l("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),p(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}m.render=u;export{m as default};
