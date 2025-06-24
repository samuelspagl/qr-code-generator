import{E as e,F as r,aj as n,ak as a,x as s,y as u,a5 as i,a8 as p}from"./C7As8BTR.js";var d=e`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,c={root:"p-radiobutton-group p-component"},l=r.extend({name:"radiobuttongroup",style:d,classes:c}),m={name:"BaseRadioButtonGroup",extends:n,style:l,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},f={name:"RadioButtonGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||a("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||a("radiobutton-group-")}};function g(t,o,h,$,v,B){return u(),s("div",p({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}f.render=g;export{f as default};
