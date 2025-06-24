import{E as k,F as O,H as C,ag as x,g as V,x as f,y as h,z as m,a9 as S,aa as B,a8 as l,a5 as v,B as A,C as P,a7 as y}from"./C7As8BTR.js";var j=k`
    .p-inputchips {
        display: inline-flex;
    }

    .p-inputchips-input {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('inputchips.padding.y') / 2) dt('inputchips.padding.x');
        gap: calc(dt('inputchips.padding.y') / 2);
        color: dt('inputchips.color');
        background: dt('inputchips.background');
        border: 1px solid dt('inputchips.border.color');
        border-radius: dt('inputchips.border.radius');
        width: 100%;
        transition:
            background dt('inputchips.transition.duration'),
            color dt('inputchips.transition.duration'),
            border-color dt('inputchips.transition.duration'),
            outline-color dt('inputchips.transition.duration'),
            box-shadow dt('inputchips.transition.duration');
        outline-color: transparent;
        box-shadow: dt('inputchips.shadow');
    }

    .p-inputchips:not(.p-disabled):hover .p-inputchips-input {
        border-color: dt('inputchips.hover.border.color');
    }

    .p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
        border-color: dt('inputchips.focus.border.color');
        box-shadow: dt('inputchips.focus.ring.shadow');
        outline: dt('inputchips.focus.ring.width') dt('inputchips.focus.ring.style') dt('inputchips.focus.ring.color');
        outline-offset: dt('inputchips.focus.ring.offset');
    }

    .p-inputchips.p-invalid .p-inputchips-input {
        border-color: dt('inputchips.invalid.border.color');
    }

    .p-variant-filled.p-inputchips-input {
        background: dt('inputchips.filled.background');
    }

    .p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input {
        background: dt('inputchips.filled.focus.background');
    }

    .p-inputchips.p-disabled .p-inputchips-input {
        opacity: 1;
        background: dt('inputchips.disabled.background');
        color: dt('inputchips.disabled.color');
    }

    .p-inputchips-chip.p-chip {
        padding-top: calc(dt('inputchips.padding.y') / 2);
        padding-bottom: calc(dt('inputchips.padding.y') / 2);
        border-radius: dt('inputchips.chip.border.radius');
        transition:
            background dt('inputchips.transition.duration'),
            color dt('inputchips.transition.duration');
    }

    .p-inputchips-chip-item.p-focus .p-inputchips-chip {
        background: dt('inputchips.chip.focus.background');
        color: dt('inputchips.chip.focus.color');
    }

    .p-inputchips-input:has(.p-inputchips-chip) {
        padding-left: calc(dt('inputchips.padding.y') / 2);
        padding-right: calc(dt('inputchips.padding.y') / 2);
    }

    .p-inputchips-input-item {
        flex: 1 1 auto;
        display: inline-flex;
        padding-top: calc(dt('inputchips.padding.y') / 2);
        padding-bottom: calc(dt('inputchips.padding.y') / 2);
    }

    .p-inputchips-input-item input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-inputchips-input-item input::placeholder {
        color: dt('inputchips.placeholder.color');
    }
`,K={root:function(t){var n=t.instance,i=t.props;return["p-inputchips p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":i.invalid,"p-focus":n.focused,"p-inputwrapper-filled":i.modelValue&&i.modelValue.length||n.inputValue&&n.inputValue.length,"p-inputwrapper-focus":n.focused}]},input:function(t){var n=t.props,i=t.instance;return["p-inputchips-input",{"p-variant-filled":n.variant?n.variant==="filled":i.$primevue.config.inputStyle==="filled"||i.$primevue.config.inputVariant==="filled"}]},chipItem:function(t){var n=t.state,i=t.index;return["p-inputchips-chip-item",{"p-focus":n.focusedIndex===i}]},pcChip:"p-inputchips-chip",chipIcon:"p-inputchips-chip-icon",inputItem:"p-inputchips-input-item"},D=O.extend({name:"inputchips",style:j,classes:K}),F={name:"BaseInputChips",extends:x,props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:[String,Object],default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:D,provide:function(){return{$pcInputChips:this,$parentInstance:this}}};function c(e){return R(e)||T(e)||E(e)||L()}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){if(e){if(typeof e=="string")return b(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function T(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function R(e){if(Array.isArray(e))return b(e)}function b(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var z={name:"InputChips",extends:F,inheritAttrs:!1,emits:["update:modelValue","add","remove","focus","blur"],data:function(){return{inputValue:null,focused:!1,focusedIndex:null}},mounted:function(){console.warn("Deprecated since v4. Use AutoComplete component instead with its typeahead property.")},methods:{onWrapperClick:function(){this.$refs.input.focus()},onInput:function(t){this.inputValue=t.target.value,this.focusedIndex=null},onFocus:function(t){this.focused=!0,this.focusedIndex=null,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.addItem(t,t.target.value,!1),this.$emit("blur",t)},onKeyDown:function(t){var n=t.target.value;switch(t.code){case"Backspace":n.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex!==null?this.removeItem(t,this.focusedIndex):this.removeItem(t,this.modelValue.length-1));break;case"Enter":case"NumpadEnter":n&&n.trim().length&&!this.maxedOut&&this.addItem(t,n,!0);break;case"ArrowLeft":n.length===0&&this.modelValue&&this.modelValue.length>0&&this.$refs.container.focus();break;case"ArrowRight":t.stopPropagation();break;default:this.separator&&(this.separator===t.key||t.key.match(this.separator))&&this.addItem(t,n,!0);break}},onPaste:function(t){var n=this;if(this.separator){var i=this.separator.replace("\\n",`
`).replace("\\r","\r").replace("\\t","	"),r=(t.clipboardData||window.clipboardData).getData("Text");if(r){var o=this.modelValue||[],p=r.split(i);p=p.filter(function(a){return n.allowDuplicate||o.indexOf(a)===-1}),o=[].concat(c(o),c(p)),this.updateModel(t,o,!0)}}},onContainerFocus:function(){this.focused=!0},onContainerBlur:function(){this.focusedIndex=-1,this.focused=!1},onContainerKeyDown:function(t){switch(t.code){case"ArrowLeft":this.onArrowLeftKeyOn(t);break;case"ArrowRight":this.onArrowRightKeyOn(t);break;case"Backspace":this.onBackspaceKeyOn(t);break}},onArrowLeftKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex=this.focusedIndex===null?this.modelValue.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))},onArrowRightKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex===this.modelValue.length-1?(this.focusedIndex=null,this.$refs.input.focus()):this.focusedIndex++)},onBackspaceKeyOn:function(t){this.focusedIndex!==null&&this.removeItem(t,this.focusedIndex)},updateModel:function(t,n,i){var r=this;this.$emit("update:modelValue",n),this.$emit("add",{originalEvent:t,value:n}),this.$refs.input.value="",this.inputValue="",setTimeout(function(){r.maxedOut&&(r.focused=!1)},0),i&&t.preventDefault()},addItem:function(t,n,i){if(n&&n.trim().length){var r=this.modelValue?c(this.modelValue):[];(this.allowDuplicate||r.indexOf(n)===-1)&&(r.push(n),this.updateModel(t,r,i))}},removeItem:function(t,n){if(!this.disabled){var i=c(this.modelValue),r=i.splice(n,1);this.focusedIndex=null,this.$refs.input.focus(),this.$emit("update:modelValue",i),this.$emit("remove",{originalEvent:t,value:r})}}},computed:{maxedOut:function(){return this.max&&this.modelValue&&this.max===this.modelValue.length},focusedOptionId:function(){return this.focusedIndex!==null?"".concat(this.$id,"_inputchips_item_").concat(this.focusedIndex):null}},components:{Chip:C}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(i){$(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function $(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=N(e,"string");return d(t)=="symbol"?t:t+""}function N(e,t){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(d(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var W=["aria-labelledby","aria-label","aria-activedescendant"],H=["id","aria-label","aria-setsize","aria-posinset","data-p-focused"],U=["id","disabled","placeholder","aria-invalid"];function q(e,t,n,i,r,o){var p=V("Chip");return h(),f("div",l({class:e.cx("root")},e.ptmi("root")),[m("ul",l({ref:"container",class:e.cx("input"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,onClick:t[5]||(t[5]=function(a){return o.onWrapperClick()}),onFocus:t[6]||(t[6]=function(){return o.onContainerFocus&&o.onContainerFocus.apply(o,arguments)}),onBlur:t[7]||(t[7]=function(){return o.onContainerBlur&&o.onContainerBlur.apply(o,arguments)}),onKeydown:t[8]||(t[8]=function(){return o.onContainerKeyDown&&o.onContainerKeyDown.apply(o,arguments)})},e.ptm("input")),[(h(!0),f(S,null,B(e.modelValue,function(a,u){return h(),f("li",l({key:"".concat(u,"_").concat(a),id:e.$id+"_inputchips_item_"+u,role:"option",class:e.cx("chipItem",{index:u}),"aria-label":a,"aria-selected":!0,"aria-setsize":e.modelValue.length,"aria-posinset":u+1},{ref_for:!0},e.ptm("chipItem"),{"data-p-focused":r.focusedIndex===u}),[v(e.$slots,"chip",{class:y(e.cx("pcChip")),index:u,value:a,removeCallback:function(s){return e.removeOption(s,u)}},function(){return[A(p,{class:y(e.cx("pcChip")),label:a,removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(s){return o.removeItem(s,u)},pt:e.ptm("pcChip")},{removeicon:P(function(){return[v(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:y(e.cx("chipIcon")),index:u,removeCallback:function(s){return o.removeItem(s,u)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,H)}),128)),m("li",l({class:e.cx("inputItem"),role:"option"},e.ptm("inputItem")),[m("input",l({ref:"input",id:e.inputId,type:"text",class:e.inputClass,style:e.inputStyle,disabled:e.disabled||o.maxedOut,placeholder:e.placeholder,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(a){return o.onFocus(a)}),onBlur:t[1]||(t[1]=function(a){return o.onBlur(a)}),onInput:t[2]||(t[2]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onKeydown:t[3]||(t[3]=function(a){return o.onKeyDown(a)}),onPaste:t[4]||(t[4]=function(a){return o.onPaste(a)})},w(w({},e.inputProps),e.ptm("inputItemField"))),null,16,U)],16)],16,W)],16)}z.render=q;export{z as default};
