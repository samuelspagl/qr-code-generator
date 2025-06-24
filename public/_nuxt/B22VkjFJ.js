import{E as a,F as r,aj as s,ak as t,x as n,y as c,a5 as p,a8 as u}from"./C7As8BTR.js";var i=a`
    .p-checkbox-group {
        display: inline-flex;
    }
`,l={root:"p-checkbox-group p-component"},d=r.extend({name:"checkboxgroup",style:i,classes:l}),h={name:"BaseCheckboxGroup",extends:s,style:d,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},m={name:"CheckboxGroup",extends:h,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||t("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||t("checkbox-group-")}};function x(e,o,k,f,g,b){return c(),n("div",u({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}m.render=x;export{m as default};
