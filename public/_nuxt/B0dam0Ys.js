import{E as f,F as m,R as y,am as v,aN as B,aQ as k,ag as w,O as P,g as $,x as p,y as d,z as s,B as u,a5 as l,a4 as c,a8 as t,A as C,a7 as A,C as h,a3 as D,ab as S,ae as E,at as I,ac as K}from"./C7As8BTR.js";var L=f`
    .p-panel {
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,N={root:function(a){var g=a.props;return["p-panel p-component",{"p-panel-toggleable":g.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},T=m.extend({name:"panel",style:L,classes:N}),V={name:"BasePanel",extends:w,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:T,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:V,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(a){this.d_collapsed=a}},methods:{toggle:function(a){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:a,value:this.d_collapsed})},onKeyDown:function(a){(a.code==="Enter"||a.code==="NumpadEnter"||a.code==="Space")&&(this.toggle(a),a.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return P({toggleable:this.toggleable})}},components:{PlusIcon:k,MinusIcon:B,Button:v},directives:{ripple:y}},z=["data-p"],M=["data-p"],O=["id"],R=["id","aria-labelledby"];function F(e,a,g,Q,r,o){var b=$("Button");return d(),p("div",t({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[s("div",t({class:e.cx("header"),"data-p":o.dataP},e.ptm("header")),[l(e.$slots,"header",{id:e.$id+"_header",class:A(e.cx("title"))},function(){return[e.header?(d(),p("span",t({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),C(e.header),17,O)):c("",!0)]}),s("div",t({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?l(e.$slots,"togglebutton",{key:0,collapsed:r.d_collapsed,toggleCallback:function(i){return o.toggle(i)},keydownCallback:function(i){return o.onKeyDown(i)}},function(){return[u(b,t({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:a[0]||(a[0]=function(n){return o.toggle(n)}),onKeydown:a[1]||(a[1]=function(n){return o.onKeyDown(n)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(n){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},function(){return[(d(),D(S(r.d_collapsed?"PlusIcon":"MinusIcon"),t({class:n.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,M),u(K,t({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[E(s("div",t({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",t({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(d(),p("div",t({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16,R),[[I,!r.d_collapsed]])]}),_:3},16)],16,z)}j.render=F;export{j as default};
