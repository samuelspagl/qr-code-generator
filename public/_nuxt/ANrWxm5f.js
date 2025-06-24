import{bC as c,E as u,F as f,ag as g,x as m,y as i,a4 as h,z as r,a8 as t,A as s,a9 as v,aa as y,ae as b,bD as T}from"./C7As8BTR.js";var p=c(),w=u`
    .p-terminal {
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`,k={root:"p-terminal p-component",welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},L=f.extend({name:"terminal",style:w,classes:k}),x={name:"BaseTerminal",extends:g,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:L,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},C={name:"Terminal",extends:x,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){p.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){p.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.key==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),p.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function M(e,n,S,V,l,a){return i(),m("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},e.ptmi("root")),[e.welcomeMessage?(i(),m("div",t({key:0,class:e.cx("welcomeMessage")},e.ptm("welcomeMessage")),s(e.welcomeMessage),17)):h("",!0),r("div",t({class:e.cx("commandList")},e.ptm("content")),[(i(!0),m(v,null,y(l.commands,function(o,d){return i(),m("div",t({key:o.text+d.toString(),class:e.cx("command")},{ref_for:!0},e.ptm("commands")),[r("span",t({class:e.cx("promptLabel")},{ref_for:!0},e.ptm("prompt")),s(e.prompt),17),r("span",t({class:e.cx("commandValue")},{ref_for:!0},e.ptm("command")),s(o.text),17),r("div",t({class:e.cx("commandResponse"),"aria-live":"polite"},{ref_for:!0},e.ptm("response")),s(o.response),17)],16)}),128))],16),r("div",t({class:e.cx("prompt")},e.ptm("container")),[r("span",t({class:e.cx("promptLabel")},e.ptm("prompt")),s(e.prompt),17),b(r("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(o){return l.commandText=o}),class:e.cx("promptValue"),type:"text",autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return a.onKeydown&&a.onKeydown.apply(a,arguments)})},e.ptm("commandText")),null,16),[[T,l.commandText]])],16)],16)}C.render=M;export{C as default};
