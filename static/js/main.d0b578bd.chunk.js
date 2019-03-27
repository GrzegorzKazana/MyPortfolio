(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(17),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),f=(a(18),a(1)),p=(a(19),a(20),function(e){var t=e.text,a=e.onClick;return l.a.createElement("div",{className:"TextButton",onClick:a},l.a.createElement("span",null,t),l.a.createElement("div",{className:"UnderLine"}))}),d=function(e){var t=e.onClick,a=e.className;return l.a.createElement("div",{className:"ArrowButtonWrapper",onClick:t},l.a.createElement("span",{className:"ArrowButton Down ".concat(a)}))},E=function(e){var t=e.onClick,a=e.className;return l.a.createElement("div",{className:"ArrowButtonWrapper",onClick:t},l.a.createElement("span",{className:"ArrowButton Up ".concat(a)}))},h=function(e){return l.a.createElement("div",{className:"Page ".concat(e.className),ref:e.inputRef},e.title&&l.a.createElement("h1",{className:"PageTitle"},e.title),l.a.createElement("div",{className:"PageContent"},e.children),e.onScrollDown&&l.a.createElement(d,{onClick:e.onScrollDown}),e.onScrollUp&&l.a.createElement(E,{onClick:e.onScrollUp}))},g=(a(21),function(e){var t=e.inputRef,a=Object(f.a)(e,["inputRef"]);return l.a.createElement(h,Object.assign({className:"HelloPage",inputRef:t},a),l.a.createElement("h1",{className:"Title"},"Hi, I'm Grzegorz"),l.a.createElement("h3",{className:"subtitle"},l.a.createElement("span",null,"Junior Front-End Dev |\xa0"),l.a.createElement("span",null,"ML enthusiast |\xa0"),l.a.createElement("span",null,"Eager Learner")))}),v=(a(22),function(e){var t=e.inputRef,a=Object(f.a)(e,["inputRef"]);return l.a.createElement(h,Object.assign({title:"About",className:"AboutPage",inputRef:t},a),l.a.createElement("div",null,l.a.createElement("p",null,"I am a third year undergraduate student in Computer Science in Silesian University Of Technology."),l.a.createElement("p",null,"I am all about learning new things and broadening my current experience."),l.a.createElement("p",null,"My craft is creating awesome websites with React. I'm into minimalism and smart design. In my free time I also like to dive deep into the world of Machine Learning. Not scared of math.")))}),k=(a(9),function(e){var t=e.level,a=e.maxLevel;return l.a.createElement("div",{className:"SkillRank"},new Array(a).fill(0).map(function(e,a){return l.a.createElement("div",{key:a,className:a<t?"SkillRankMarkActive":"SkillRankMark"})}))}),w=function(e){var t=e.active,a=e.skill,n=e.onClick;return l.a.createElement("div",{className:"SkillEntry ".concat(t?"active":""),onClick:n},l.a.createElement("i",{className:a.icon}),l.a.createElement(k,{level:a.level,maxLevel:5}))},b=[{name:"JS",icon:"devicon-javascript-plain",level:3,description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"React.js is the framework I feel comfortable and have the most experience with. I have been also working with React-Redux."),l.a.createElement("p",null,"I am familiar with ES6 features, and have at least basic knowledge about newest standards."))},{name:"HTML",icon:"devicon-html5-plain-wordmark",level:2,description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"My HTML skills allow me to easily create page layouts, and are sufficient for standard designs."))},{name:"CSS",icon:"devicon-css3-plain-wordmark",level:3,description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"I feel comfortable using CSS in my projects. I know how to use modern layouts, like flexbox or grid layout, and I am familiar with basic selectors."),l.a.createElement("p",null,"For styling my react projects i have been using plain CSS, styled-components and Material-UI."))},{name:"Python",icon:"devicon-python-plain-wordmark",level:3,description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Python is my go-to language when it comes to writing scripts and small apps for personal use."),l.a.createElement("p",null,"I have basic Django Rest Framework knowledge and experience with NumPy and Pandas. Learning TensorFlow."))}],R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedSkill:0},a.onSelectSkillEntry=function(e){return function(){return a.setState({selectedSkill:e})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.inputRef,n=Object(f.a)(t,["inputRef"]),r=this.state.selectedSkill;return l.a.createElement(h,Object.assign({title:"Skills",className:"SkillsPage",inputRef:a},n),l.a.createElement("div",{className:"SkillList"},b.map(function(t,a){return l.a.createElement(w,{key:a,active:r===a,skill:t,onClick:e.onSelectSkillEntry(a)})})),l.a.createElement("div",{className:"SkillDescription"},b&&b[r].description))}}]),t}(l.a.Component),j=(a(7),function(e){var t=e.projectData,a=t.title,n=t.description,r=t.icon,c=t.url;return l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"ProjectLink"},l.a.createElement("div",{className:"ProjectEntry"},l.a.createElement("i",{className:r}),l.a.createElement("div",{className:"ProjectEntryContent"},l.a.createElement("div",{className:"ProjectEntryTitle"},a),l.a.createElement("div",{className:"ProjectEntrySubtitle"},n))))}),P=function(e){return l.a.createElement("a",{href:"https://github.com/GrzegorzKazana",target:"_blank",rel:"noopener noreferrer",className:"ProjectLink"},l.a.createElement("div",{className:"GithubButton"},l.a.createElement("i",{className:"devicon-github-plain"}),l.a.createElement("div",null,"MORE")))},y=[{title:"QuickQuiz",description:"Online tool for quiz sharing",icon:"devicon-javascript-plain",url:"https://github.com/GrzegorzKazana/QuickQuiz"},{title:"MyPortfolio",description:"Page you are currently watching",icon:"devicon-javascript-plain",url:"https://github.com/GrzegorzKazana/MyPortfolio"},{title:"QuickQuizAPI",description:"Django Rest Framework back-end for QuickQuiz",icon:"devicon-python-plain-wordmark",url:"https://github.com/GrzegorzKazana/QuickQuizAPI"}],N=function(e){var t=e.inputRef,a=Object(f.a)(e,["inputRef"]);return l.a.createElement(h,Object.assign({title:"Projects",className:"ProjectsPage",inputRef:t},a),l.a.createElement("div",null,"Here is what i've been working on lately."),l.a.createElement("div",{className:"ProjectsList"},y&&y.map(function(e,t){return l.a.createElement(j,{key:t,projectData:e})})),l.a.createElement(P,null))},S=(a(23),function(e){var t=e.inputRef,a=Object(f.a)(e,["inputRef"]);return l.a.createElement(h,Object.assign({title:"Contact me",className:"ContactPage",inputRef:t},a),l.a.createElement("div",{className:"EmailWrapper"},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),l.a.createElement("span",null,"kazana.grzegorz"),l.a.createElement("span",null,"@gmail.com")))}),T=(a(24),function(e){var t=e.children;return l.a.createElement("div",{className:"NavBar"},t)}),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).scrollTo=function(e){return window.scrollTo({top:e,behavior:"smooth"})},a.scrollToHello=function(){return a.scrollTo(a.helloPageRef.current.offsetTop)},a.scrollToAbout=function(){return a.scrollTo(a.aboutPageRef.current.offsetTop)},a.scrollToSkills=function(){return a.scrollTo(a.skillsPageRef.current.offsetTop)},a.scrollToProjects=function(){return a.scrollTo(a.projectsPageRef.current.offsetTop)},a.scrollToContact=function(){return a.scrollTo(a.contactPageRef.current.offsetTop)},a.helloPageRef=l.a.createRef(),a.aboutPageRef=l.a.createRef(),a.skillsPageRef=l.a.createRef(),a.projectsPageRef=l.a.createRef(),a.contactPageRef=l.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(T,null,l.a.createElement(p,{text:"About",onClick:this.scrollToAbout}),l.a.createElement(p,{text:"Skills",onClick:this.scrollToSkills}),l.a.createElement(p,{text:"Projects",onClick:this.scrollToProjects})),l.a.createElement(g,{inputRef:this.helloPageRef,onScrollDown:this.scrollToAbout}),l.a.createElement(v,{inputRef:this.aboutPageRef,onScrollDown:this.scrollToSkills}),l.a.createElement(R,{inputRef:this.skillsPageRef,onScrollDown:this.scrollToProjects}),l.a.createElement(N,{inputRef:this.projectsPageRef,onScrollDown:this.scrollToContact}),l.a.createElement(S,{inputRef:this.contactPageRef,onScrollUp:this.scrollToHello}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.d0b578bd.chunk.js.map