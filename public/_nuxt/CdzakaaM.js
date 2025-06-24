import{s as I}from"./DgJa8mg0.js";import{E as C,F as B,ag as g,a8 as a,x as m,a4 as l,y as n,a3 as d,a7 as w,ab as p,A as O,g as h,z as L,a9 as f,aa as x,B as y,a5 as P}from"./C7As8BTR.js";var N=C`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,S={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(i){var t=i.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},U=B.extend({name:"breadcrumb",style:N,classes:S}),A={name:"BaseBreadcrumb",extends:g,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:U,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:g,props:{item:null,templates:null,index:null},methods:{onClick:function(i){this.item.command&&this.item.command({originalEvent:i,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var i=this.item,t=i.to,s=i.url,o=typeof window<"u"?window.location.pathname:"";return t===o||s===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var i=this;return{action:a({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(s){return i.onClick(s)}},this.ptm("itemLink",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},E=["href","target","aria-current"];function M(e,i,t,s,o,r){return r.visible()?(n(),m("li",a({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(n(),d(p(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(n(),m("a",a({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:i[0]||(i[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(n(),d(p(t.templates.itemicon),{key:0,item:t.item,class:w(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(n(),m("span",a({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):l("",!0),t.item.label?(n(),m("span",a({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),O(r.label()),17)):l("",!0)],16,E))],16)):l("",!0)}k.render=M;var R={name:"Breadcrumb",extends:A,inheritAttrs:!1,components:{BreadcrumbItem:k,ChevronRightIcon:I}};function V(e,i,t,s,o,r){var u=h("BreadcrumbItem"),v=h("ChevronRightIcon");return n(),m("nav",a({class:e.cx("root")},e.ptmi("root")),[L("ol",a({class:e.cx("list")},e.ptm("list")),[e.home?(n(),d(u,a({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(n(!0),m(f,null,x(e.model,function(b,c){return n(),m(f,{key:b.label+"_"+c},[e.home||c!==0?(n(),m("li",a({key:0,class:e.cx("separator")},{ref_for:!0},e.ptm("separator")),[P(e.$slots,"separator",{},function(){return[y(v,a({"aria-hidden":"true",class:e.cx("separatorIcon")},{ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):l("",!0),y(u,{item:b,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}R.render=V;export{R as default};
