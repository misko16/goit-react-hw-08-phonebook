"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[613],{801:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(791),r=t(434),s=t(97),c=t(184),i=function(e){var n=e.id,t=e.name,a=e.number,i=(0,r.I0)();return(0,c.jsxs)("div",{className:"contact-item",children:[(0,c.jsx)("div",{className:"contact-icon"}),(0,c.jsx)("div",{className:"contact-name",children:(0,c.jsxs)("p",{children:[t,":"]})}),(0,c.jsx)("div",{className:"contact-number",children:(0,c.jsx)("p",{children:a})}),(0,c.jsx)("div",{className:"contact-buttons",children:(0,c.jsx)("button",{className:"delete-button",onClick:function(){return function(e){i((0,s.GK)(e))}(n)},children:"Delete"})})]},n)},o=t(916),u=function(e){return e.contactsList.contacts.items},l=function(e){return e.contactsList.contacts.isLoading},m=function(e){return e.contactsList.contacts.error},d=(0,o.P1)([u,function(e){return e.filter.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),f=t(134),h=function(){var e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(m),o=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(f.a,{}),o.length>0&&(0,c.jsx)("div",{children:o.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,c.jsx)(i,{name:t,number:a,id:n},n)}))}),t&&alert("Sorry, something is wrong!")]})},p=t(439),b=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n},v=function(){var e=(0,a.useState)(""),n=(0,p.Z)(e,2),t=n[0],i=n[1],o=(0,a.useState)(""),l=(0,p.Z)(o,2),m=l[0],d=l[1],f=(0,r.I0)(),h=(0,r.v9)(u),v=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":i(a);break;case"number":d(a);break;default:return}},x=function(){i(""),d("")};return(0,c.jsx)("div",{className:"loginPageContainer",children:(0,c.jsxs)("form",{className:"form contact-form",onSubmit:function(e){e.preventDefault();var n={id:b(),name:t,number:m};h.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):(f((0,s.uK)(n)),x())},children:[(0,c.jsxs)("label",{className:"formLabel",children:["Name:",(0,c.jsx)("input",{className:"form-input input inputField",type:"text",name:"name",value:t,onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:"form-label label",children:["Number:",(0,c.jsx)("input",{className:"form-input input inputField",type:"tel",name:"number",value:m,onChange:v,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{className:"form-button submitButton",type:"submit",children:"Add contact"})]})})},x=function(){return(0,c.jsxs)("div",{className:"app-container",children:[(0,c.jsx)(v,{}),(0,c.jsx)(h,{})]})}}}]);
//# sourceMappingURL=613.7e3f233a.chunk.js.map