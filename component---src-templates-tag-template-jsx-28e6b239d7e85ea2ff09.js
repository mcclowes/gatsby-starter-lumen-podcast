webpackJsonp([2638498282051],{42:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(3),u=n(s),i=a(13),c=n(i),f=a(36),p=n(f);a(49);var d=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,o=e.description,r=this.props.data.node.fields,l=r.slug,s=r.categorySlug;return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,p.default)(a).format("MMMM D, YYYY")},(0,p.default)(a).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:s},u.default.createElement(c.default,{to:s,className:"post__meta-category-link"},n))),u.default.createElement("h2",{className:"post__title"},u.default.createElement(c.default,{className:"post__title-link",to:l},t)),u.default.createElement("p",{className:"post__description"},o),u.default.createElement(c.default,{className:"post__readmore",to:l},"Read"))},t}(u.default.Component);t.default=d,e.exports=t.default},49:function(e,t){},227:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(3),u=n(s),i=a(42),c=n(i),f=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.tag,a=this.props.data.allMarkdownRemark.edges;return a.forEach(function(t){e.push(u.default.createElement(c.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},u.default.createElement("div",{className:"page"},u.default.createElement("h1",{className:"page__title"},'All Posts tagget as "',t,'"'),u.default.createElement("div",{className:"page__body"},e))))},t}(u.default.Component);t.default=f,e.exports=t.default},237:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(3),u=n(s),i=a(20),c=n(i),f=a(24),p=n(f),d=a(227),m=n(d),_=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return u.default.createElement("div",null,u.default.createElement(c.default,{title:'All Posts tagget as "'+t+'" - '+e}),u.default.createElement(p.default,this.props),u.default.createElement(m.default,this.props))},t}(u.default.Component);t.default=_;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-jsx-28e6b239d7e85ea2ff09.js.map