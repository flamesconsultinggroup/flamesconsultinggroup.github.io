(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(A,a,e){"use strict";var t=e(0),d=e.n(t),h=e(49),s=e.n(h),c=e(303),i=e(304),E=e(305),o=e(306),g=e(307),B=e(308),f=e(309),Q=e(315),b=e(316),n=e(310),j=e(311),r=(e(214),e(215),e(204)),l=e.n(r);e(208);var p=function(A){var a,e;function t(a){var e;return(e=A.call(this,a)||this).toggleNavbar=e.toggleNavbar.bind(function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(e)),e.state={collapsed:!0},e}e=A,(a=t).prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e;var h=t.prototype;return h.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},h.render=function(){return d.a.createElement("div",null,d.a.createElement(c.a,{dark:!0,style:{backgroundColor:"#8d0707"},expand:"lg"},d.a.createElement(i.a,{href:"/",className:"mr-auto"},d.a.createElement("img",{src:l.a,width:"50",height:"50",className:"d-inline-block align-center",alt:"FCG"})),d.a.createElement(E.a,{onClick:this.toggleNavbar,className:"mr-2"}),d.a.createElement(o.a,{isOpen:!this.state.collapsed,navbar:!0},d.a.createElement("ul",{className:"navbar-nav mr-auto"}),d.a.createElement(g.a,{navbar:!0},d.a.createElement(B.a,null,d.a.createElement(f.a,{href:"/"},"Home")),d.a.createElement(Q.a,{nav:!0,inNavbar:!0},d.a.createElement(b.a,{nav:!0,caret:!0},"Our Team"),d.a.createElement(n.a,{right:!0},d.a.createElement(j.a,{href:"/Executive_Board/"},"Executive Board"))),d.a.createElement(B.a,null,d.a.createElement(f.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLScjmd_iy6X-OuXMxwiHcXBMIRVQe8f3HcwELtKWU2kQ3yOBCQ/viewform"},"Membership")),d.a.createElement(B.a,null,d.a.createElement(f.a,{href:"/Accenture_Case_Comp/"},"Accenture Case Comp.")),d.a.createElement(B.a,null,d.a.createElement(f.a,{href:"https://medium.com/fcg-fahrenheit"},"Blog"))))),this.props.children,d.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},t}(d.a.Component);E.a.propTypes={type:s.a.string,tag:s.a.oneOfType([s.a.func,s.a.string])},a.a=p},203:function(A,a,e){"use strict";var t=e(206),d=e(0),h=e.n(d),s=e(216),c=e.n(s);function i(A){var a=A.description,e=A.lang,d=A.meta,s=A.title,i=t.data.site,E=a||i.siteMetadata.description;return h.a.createElement(c.a,{htmlAttributes:{lang:e},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:E},{property:"og:title",content:s},{property:"og:description",content:E},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:E}].concat(d)})}i.defaultProps={lang:"en",meta:[],description:""},a.a=i},204:function(A,a,e){A.exports=e.p+"static/fcg_logo_corrected-817242e8f3d46fa388e390b5259a51bf.png"},206:function(A){A.exports={data:{site:{siteMetadata:{title:"Flames Consulting Group",description:"",author:"Sean Barber"}}}}},210:function(A,a,e){"use strict";e(212);var t=e(217),d=e(0),h=e.n(d),s=e(219),c=e.n(s);a.a=function(A){var a=t.data;return console.log(A.photoToUse),"chicago_skyline"===A.photoToUse?h.a.createElement(c.a,{fluid:a.chicago_skyline.childImageSharp.fluid}):"karina_utyuzh_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.karina_utyuzh_headshot.childImageSharp.fluid}):"safia_ghouse_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.safia_ghouse_headshot.childImageSharp.fluid}):"christopher_campagna_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.christopher_campagna_headshot.childImageSharp.fluid}):"deekshita_jaligama_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.deekshita_jaligama_headshot.childImageSharp.fluid}):"david_robinson_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.david_robinson_headshot.childImageSharp.fluid}):"arvid_haque_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.arvid_haque_headshot.childImageSharp.fluid}):"william_wale_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.william_wale_headshot.childImageSharp.fluid}):"alima_abdirova_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.alima_abdirova_headshot.childImageSharp.fluid}):"adit_bhagat_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.adit_bhagat_headshot.childImageSharp.fluid}):"accenture_logo"===A.photoToUse?h.a.createElement(c.a,{fixed:a.accenture_logo.childImageSharp.fixed}):"deloitte_logo"===A.photoToUse?h.a.createElement(c.a,{fixed:a.deloitte_logo.childImageSharp.fixed}):"silverCrest_logo"===A.photoToUse?h.a.createElement(c.a,{fixed:a.silverCrest_logo.childImageSharp.fixed}):"weiss_scholarship_logo"===A.photoToUse?h.a.createElement(c.a,{fixed:a.weiss_scholarship_logo.childImageSharp.fixed}):"accenture_case_comp"===A.photoToUse?h.a.createElement(c.a,{fixed:a.AccentureCaseComp.childImageSharp.fixed}):"johan_hedstrom_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.johan_hedstrom_headshot.childImageSharp.fluid}):"sundus_shafqat_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.sundus_shafqat_headshot.childImageSharp.fluid}):"sean_barber_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.sean_barber_headshot.childImageSharp.fluid}):"sam_soliman_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.sam_soliman_headshot.childImageSharp.fluid}):"megan_mehta_headshot"===A.photoToUse?h.a.createElement(c.a,{fluid:a.megan_mehta_headshot.childImageSharp.fluid}):(console.log("default"),h.a.createElement(c.a,{fluid:a.chicago_skyline.childImageSharp.fluid}))}},217:function(A){A.exports={data:{chicago_skyline:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAPoAAAD6AG1e1JrAAADIUlEQVQozxXL+VcSCQAA4PlD2nJLxG0FpRiOShRGxmFmROUImIhLEREFEsdQ8kYQvFATXBNSURJdEjSBdtIi86RWX6/3+nd6fb9/gEef8NlSIXJvsf9gZSi/4aO2Jg7fTn3MLhwfvjo72/z2/8711b/X1ztX3za/nkfPPs1+pMb/o0Zz74cOgJ62naFnmaAnF/YdxqYLazOf12c/b80fZ5ZOM5HTdPgkH734sFY8en2Zf/nl3dRRfvLwve93pgYOgD7XfnCUejn5aWX+y+riaTxylly+SL66SK0Ud2PFdKy4F71MLZ0mF44TM0fxiaM1LxUbzEVc6bn2bWB4kAr6C/PTJ8sL57HwRXy5mIh+3U38GHYnA73x/M7P9MZVZuNHoD/pME7sr33fjpyvTx8vjVAzPfvAnDu15d/f9mWiY5kl78HiWPaf8WwiVOg2TroNE3uxy83Qh2S44HX5zUpydfZk2Z9dDeQig+k51xugvbFtrsOestmzdnsH9oTEjSFtZ9xK2jGTS64b1LdO6cmgud+EylqwJ2MmMmx1j+pcw0S7X98KdKC4pRFzSjR6Ac4uZz2TE/o6KQGhQlDiwJogJlPEhvpMdoWYkImUzcKGEZNGB2MqAc+C8QF1Nf8Rs/I+nYawwF7C0EMYmqulTRwIqRJohDj7r3Ieg2FA5QQkRR8i1ma5HMZtGP60mqPi/g00sCrvljJLb5Uwbt4akknN0AOHWGyGsVELqRUh1RVllmYJWM4iwHsYCD5Xo231iAdFPUidms8AUPpNlPMA4TC7ZDwvxusScbtkMresye9wk9BDuOyPF+1OLaoYM3XpBIJWDMI5gmEpvm6sx1h3AM8jGlxxB6m8oarjJPS8XKeoU2fyGg0rhCWkQhTM22aJ1IgTA86AU613gnR1Fbu3AevFReKyciAIMzF6iRKs5NNBnwqiHDVWpWZAq1joHikE+kaEtJaaWgLGnYbOlkaVk8sal0qswlrajT+VIAPQcko1tbASfiyu4ipAfkrLlFbcZpWUjNvIsK37BQK5FOoOhUHd8FRd/5hDv0eKawk+l02j4SDjF4rnWNri28+tAAAAAElFTkSuQmCC",aspectRatio:2.017857142857143,src:"/static/b1df9f9efe879b1f3ad2872b6da8470b/d1091/chicago_skyline_1.png",srcSet:"/static/b1df9f9efe879b1f3ad2872b6da8470b/370c2/chicago_skyline_1.png 113w,\n/static/b1df9f9efe879b1f3ad2872b6da8470b/2f5b2/chicago_skyline_1.png 225w,\n/static/b1df9f9efe879b1f3ad2872b6da8470b/d1091/chicago_skyline_1.png 450w,\n/static/b1df9f9efe879b1f3ad2872b6da8470b/cac03/chicago_skyline_1.png 675w,\n/static/b1df9f9efe879b1f3ad2872b6da8470b/db3e8/chicago_skyline_1.png 900w,\n/static/b1df9f9efe879b1f3ad2872b6da8470b/5df62/chicago_skyline_1.png 1548w",sizes:"(max-width: 450px) 100vw, 450px"}}},karina_utyuzh_headshot:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:1,src:"/static/0369e915d549b5c34235dbd04ce7be3b/3234f/karina_utyuzh_headshot.png",srcSet:"/static/0369e915d549b5c34235dbd04ce7be3b/4de36/karina_utyuzh_headshot.png 94w,\n/static/0369e915d549b5c34235dbd04ce7be3b/03cea/karina_utyuzh_headshot.png 188w,\n/static/0369e915d549b5c34235dbd04ce7be3b/3234f/karina_utyuzh_headshot.png 375w,\n/static/0369e915d549b5c34235dbd04ce7be3b/fa3eb/karina_utyuzh_headshot.png 563w,\n/static/0369e915d549b5c34235dbd04ce7be3b/c3506/karina_utyuzh_headshot.png 750w,\n/static/0369e915d549b5c34235dbd04ce7be3b/c361f/karina_utyuzh_headshot.png 2731w",sizes:"(max-width: 375px) 100vw, 375px"}}},safia_ghouse_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAEch1AUc3//xAAaEAACAgMAAAAAAAAAAAAAAAABAgQQESFB/9oACAEBAAEFAuZpjqUoSv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQACAwAAAAAAAAAAAAAAABEAEANRYf/aAAgBAQAGPwJhxvGar//EABoQAQADAAMAAAAAAAAAAAAAAAEAESEQMVH/2gAIAQEAAT8hsF4Iq9DjEHviqPN0YM//2gAMAwEAAgADAAAAEN8f/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EAMYv//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAgEBPxArn//EABsQAQACAwEBAAAAAAAAAAAAAAEAESFBcVHR/9oACAEBAAE/EL6byUbhmmNjS9QnI3EK+4YOaugFfYpfZ//Z",aspectRatio:1,src:"/static/42686641f4e3b694fbb9f056fda8c2ec/1874a/safia_ghouse_headshot.jpg",srcSet:"/static/42686641f4e3b694fbb9f056fda8c2ec/9c8d0/safia_ghouse_headshot.jpg 94w,\n/static/42686641f4e3b694fbb9f056fda8c2ec/f0bbb/safia_ghouse_headshot.jpg 188w,\n/static/42686641f4e3b694fbb9f056fda8c2ec/1874a/safia_ghouse_headshot.jpg 375w,\n/static/42686641f4e3b694fbb9f056fda8c2ec/dc8bd/safia_ghouse_headshot.jpg 563w,\n/static/42686641f4e3b694fbb9f056fda8c2ec/82e82/safia_ghouse_headshot.jpg 750w,\n/static/42686641f4e3b694fbb9f056fda8c2ec/504ff/safia_ghouse_headshot.jpg 1242w",sizes:"(max-width: 375px) 100vw, 375px"}}},christopher_campagna_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQAEA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABSzajk3XSTiCkLo/VH//EAB0QAAICAgMBAAAAAAAAAAAAAAECABIDBBAiIzP/2gAIAQEAAQUCqsBRnpwGCZ5YCZGsddvDZydCZrfD/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Bg//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASH/xAAeEAABBAEFAAAAAAAAAAAAAAAAAQIQIREiMkFhkf/aAAgBAQAGPwIwxxuWNddxz4KNpSoZZ//EAB0QAAMBAAIDAQAAAAAAAAAAAAABESExYRBBUeH/2gAIAQEAAT8hctRthOYV+42+BGekaoo1m24QsuxrqzJTRqOeGvUz52f/2gAMAwEAAgADAAAAEAgzMP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxDMWEjs3//EABYRAQEBAAAAAAAAAAAAAAAAABEQAf/aAAgBAgEBPxB1gGf/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhMUFRYYGh8P/aAAgBAQABPxC8QALW4SSrUSJnM8IQo8E5IpWhTKeLYWLGxjtAWtuviMx7b7lkuZCxBQihaIRaz8QlUKv7gbFFsA9p/9k=",aspectRatio:1,src:"/static/9b437cd5767fc5cb71a27258f8fece46/1874a/christopher_campagna_headshot.jpg",srcSet:"/static/9b437cd5767fc5cb71a27258f8fece46/9c8d0/christopher_campagna_headshot.jpg 94w,\n/static/9b437cd5767fc5cb71a27258f8fece46/f0bbb/christopher_campagna_headshot.jpg 188w,\n/static/9b437cd5767fc5cb71a27258f8fece46/1874a/christopher_campagna_headshot.jpg 375w,\n/static/9b437cd5767fc5cb71a27258f8fece46/1a411/christopher_campagna_headshot.jpg 548w",sizes:"(max-width: 375px) 100vw, 375px"}}},sam_soliman_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQP/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAB7txzCmKkHWQen9ErpoH/AP/EAB4QAAEEAQUAAAAAAAAAAAAAAAEAAgMRIgQSITEz/9oACAEBAAEFAo1wt4UYIF0SpDgSoso3dOFP0/j/AP/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhIQ/9oACAEDAQE/AcpmIJ5//8QAGBEAAgMAAAAAAAAAAAAAAAAAABIBAxD/2gAIAQIBAT8BaR7d/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECEBExEiJh/9oACAEBAAY/Ar7SaN8cm7i/KeBH/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBUWGhsf/aAAgBAQABPyGv2Xmdq56ImaLdMSWY08MKOZa4dSXYXss7tj94RNLmUf/aAAwDAQACAAMAAAAQNOPB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxAENlxJ8s3t/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQAhETH/2gAIAQIBAT8QR7yX0ckvMv/EAB4QAQACAgMAAwAAAAAAAAAAAAEAESExQWGBUZGh/9oACAEBAAE/ELrThe5YibDZnRGkpktlJUQRUHQgcDW91uUEzGKLKgiKRfsa7UEFfHUGhRffEdu+QMIqgKPCbHNCH3P/2Q==",aspectRatio:1,src:"/static/578d8972a14a056052f3b2ad367fadbf/1874a/sam_soliman_headshot.jpg",srcSet:"/static/578d8972a14a056052f3b2ad367fadbf/9c8d0/sam_soliman_headshot.jpg 94w,\n/static/578d8972a14a056052f3b2ad367fadbf/f0bbb/sam_soliman_headshot.jpg 188w,\n/static/578d8972a14a056052f3b2ad367fadbf/1874a/sam_soliman_headshot.jpg 375w,\n/static/578d8972a14a056052f3b2ad367fadbf/dc8bd/sam_soliman_headshot.jpg 563w,\n/static/578d8972a14a056052f3b2ad367fadbf/82e82/sam_soliman_headshot.jpg 750w,\n/static/578d8972a14a056052f3b2ad367fadbf/31b68/sam_soliman_headshot.jpg 3024w",sizes:"(max-width: 375px) 100vw, 375px"}}},sundus_shafqat_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAROkFGu01//EABkQAAMBAQEAAAAAAAAAAAAAAAECAwQSIf/aAAgBAQABBQKx5Rac1fOxYMX06/WmxM//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGo/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAECAQE/AQyf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECESJhQVFx/9oACAEBAAY/AvdmSotUQvgS6TIvR//EABoQAAICAwAAAAAAAAAAAAAAAAERACExQVH/2gAIAQEAAT8hGhAnHKKCokoXIDjlAOKlo2ozwsNT/9oADAMBAAIAAwAAABArL//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAwEBPxDCX//EABgRAAIDAAAAAAAAAAAAAAAAAAABITFR/9oACAECAQE/EL7J0//EABoQAAIDAQEAAAAAAAAAAAAAAAERACExQXH/2gAIAQEAAT8Q66ohQlsMbiORJ9yMxeWKCJwwALCYxorFaobIiUvE/9k=",aspectRatio:1,src:"/static/d2806ad6c53ba4aad4c44bc86b169029/1874a/sundus_shafqat_headshot.jpg",srcSet:"/static/d2806ad6c53ba4aad4c44bc86b169029/9c8d0/sundus_shafqat_headshot.jpg 94w,\n/static/d2806ad6c53ba4aad4c44bc86b169029/f0bbb/sundus_shafqat_headshot.jpg 188w,\n/static/d2806ad6c53ba4aad4c44bc86b169029/1874a/sundus_shafqat_headshot.jpg 375w,\n/static/d2806ad6c53ba4aad4c44bc86b169029/dc8bd/sundus_shafqat_headshot.jpg 563w,\n/static/d2806ad6c53ba4aad4c44bc86b169029/82e82/sundus_shafqat_headshot.jpg 750w,\n/static/d2806ad6c53ba4aad4c44bc86b169029/8f6ea/sundus_shafqat_headshot.jpg 6000w",sizes:"(max-width: 375px) 100vw, 375px"}}},megan_mehta_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAFTwFUQn//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEyH/2gAIAQEAAQUCjGsOaVE2A8P/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBABAQEBAQAAAAAAAAAAAAAAAQAREFH/2gAIAQEABj8Ch96atl//xAAbEAADAQADAQAAAAAAAAAAAAAAAREhMUFhof/aAAgBAQABPyG4MVzq+C+IexroQvJc3gSlWH//2gAMAwEAAgADAAAAEO8v/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EARuf//EABcRAAMBAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QNuL/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFBcf/aAAgBAQABPxDG66IJvDTG2vcxB6fZwINdgloVCDbw1fZ//9k=",aspectRatio:1,src:"/static/fda63a92f5397502d9609e3c9fdaea2b/1874a/megan_mehta_headshot.jpg",srcSet:"/static/fda63a92f5397502d9609e3c9fdaea2b/9c8d0/megan_mehta_headshot.jpg 94w,\n/static/fda63a92f5397502d9609e3c9fdaea2b/f0bbb/megan_mehta_headshot.jpg 188w,\n/static/fda63a92f5397502d9609e3c9fdaea2b/1874a/megan_mehta_headshot.jpg 375w,\n/static/fda63a92f5397502d9609e3c9fdaea2b/dc8bd/megan_mehta_headshot.jpg 563w,\n/static/fda63a92f5397502d9609e3c9fdaea2b/82e82/megan_mehta_headshot.jpg 750w,\n/static/fda63a92f5397502d9609e3c9fdaea2b/8f6ea/megan_mehta_headshot.jpg 6000w",sizes:"(max-width: 375px) 100vw, 375px"}}},sean_barber_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAXSrQmyRgf/EABoQAAEFAQAAAAAAAAAAAAAAAAEAAgMSIhH/2gAIAQEAAQUCfLpkx7cKMXcBtf/EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/AYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAEAAwEAAAAAAAAAAAAAAAABABASMf/aAAgBAQAGPwLMy8pVv//EABsQAAIDAAMAAAAAAAAAAAAAAAERACExEEFh/9oACAEBAAE/IccDLMDcZvrIEi4+ZgX7HJx//9oADAMBAAIAAwAAABCkL//EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPxBMT//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QUwh//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIUFxMVHw/9oACAEBAAE/EDs8FTe/Myd8Q5VZvvBE7AcZuUBB894Z2iVvWLXP/9k=",aspectRatio:1,src:"/static/afba53fb5d39d9a6f62b20222f336a9d/1874a/sean_barber_headshot.jpg",srcSet:"/static/afba53fb5d39d9a6f62b20222f336a9d/9c8d0/sean_barber_headshot.jpg 94w,\n/static/afba53fb5d39d9a6f62b20222f336a9d/f0bbb/sean_barber_headshot.jpg 188w,\n/static/afba53fb5d39d9a6f62b20222f336a9d/1874a/sean_barber_headshot.jpg 375w,\n/static/afba53fb5d39d9a6f62b20222f336a9d/dc8bd/sean_barber_headshot.jpg 563w,\n/static/afba53fb5d39d9a6f62b20222f336a9d/82e82/sean_barber_headshot.jpg 750w,\n/static/afba53fb5d39d9a6f62b20222f336a9d/8f6ea/sean_barber_headshot.jpg 6000w",sizes:"(max-width: 375px) 100vw, 375px"}}},deekshita_jaligama_headshot:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:1,src:"/static/487d06c2cb6272b169f91a19aaadc079/3234f/deekshitha_jaligama_headshot.png",srcSet:"/static/487d06c2cb6272b169f91a19aaadc079/4de36/deekshitha_jaligama_headshot.png 94w,\n/static/487d06c2cb6272b169f91a19aaadc079/03cea/deekshitha_jaligama_headshot.png 188w,\n/static/487d06c2cb6272b169f91a19aaadc079/3234f/deekshitha_jaligama_headshot.png 375w,\n/static/487d06c2cb6272b169f91a19aaadc079/fa3eb/deekshitha_jaligama_headshot.png 563w,\n/static/487d06c2cb6272b169f91a19aaadc079/4a930/deekshitha_jaligama_headshot.png 566w",sizes:"(max-width: 375px) 100vw, 375px"}}},david_robinson_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABtXKzJ1GSG//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMRBBP/2gAIAQEAAQUCNqgDoWe6RMa3FCE6f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwHKP//EABsQAAICAwEAAAAAAAAAAAAAAAABITECEBIi/9oACAEBAAY/ApZ6gslGT5V6/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECExYf/aAAgBAQABPyGEHmnit4oQAgcnYgdalgoT/9oADAMBAAIAAwAAABA//wD/xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPxBZv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QH//EABwQAAICAwEBAAAAAAAAAAAAAAABESExUWFB0f/aAAgBAQABPxCZULxKWOGA7Skvo+bjQmWW2G3sgVt6wLNc6P/Z",aspectRatio:1,src:"/static/1a20c1953a57c978d2d4e74d2790052b/1874a/david_robinson_headshot.jpg",srcSet:"/static/1a20c1953a57c978d2d4e74d2790052b/9c8d0/david_robinson_headshot.jpg 94w,\n/static/1a20c1953a57c978d2d4e74d2790052b/f0bbb/david_robinson_headshot.jpg 188w,\n/static/1a20c1953a57c978d2d4e74d2790052b/1874a/david_robinson_headshot.jpg 375w,\n/static/1a20c1953a57c978d2d4e74d2790052b/dc8bd/david_robinson_headshot.jpg 563w,\n/static/1a20c1953a57c978d2d4e74d2790052b/82e82/david_robinson_headshot.jpg 750w,\n/static/1a20c1953a57c978d2d4e74d2790052b/f0528/david_robinson_headshot.jpg 870w",sizes:"(max-width: 375px) 100vw, 375px"}}},arvid_haque_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEBQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAaxJxqGEk5TLo1TKK//EABoQAAMBAQEBAAAAAAAAAAAAAAABAhEDEiH/2gAIAQEAAQUCE1Rhf2YnOpXTa9+HPRNKiqNP/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BI//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwFwi//EABwQAAIDAAMBAAAAAAAAAAAAAAERABAhEjFhgf/aAAgBAQAGPwKYXSjAWVxX2ZpPbo+3/8QAHhAAAwEAAQUBAAAAAAAAAAAAAAERITEQQVFhcYH/2gAIAQEAAT8hWLRNl8MYVWarqExyVUu/SnxLmvA4mjQpU1npn78F3xrZR//aAAwDAQACAAMAAAAQ6zWM/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQEAEP/aAAgBAwEBPxCKPGmd/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAECAQE/EKKYMf/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExUYFBocH/2gAIAQEAAT8QBZABVcaabsGZR5kwCijBD4wzExdNifuVe4Qnc6CRaezFHlMtt4E5O+8h9ePQcghFrfiov1iqkQW8PGQdaz//2Q==",aspectRatio:1,src:"/static/25864138916b2c5ff5cb7f1e6cf9edae/1874a/arvid_haque_headshot.jpg",srcSet:"/static/25864138916b2c5ff5cb7f1e6cf9edae/9c8d0/arvid_haque_headshot.jpg 94w,\n/static/25864138916b2c5ff5cb7f1e6cf9edae/f0bbb/arvid_haque_headshot.jpg 188w,\n/static/25864138916b2c5ff5cb7f1e6cf9edae/1874a/arvid_haque_headshot.jpg 375w,\n/static/25864138916b2c5ff5cb7f1e6cf9edae/dc8bd/arvid_haque_headshot.jpg 563w,\n/static/25864138916b2c5ff5cb7f1e6cf9edae/82e82/arvid_haque_headshot.jpg 750w,\n/static/25864138916b2c5ff5cb7f1e6cf9edae/92df5/arvid_haque_headshot.jpg 1600w",sizes:"(max-width: 375px) 100vw, 375px"}}},william_wale_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABVhaazpJw/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAIBESIDMf/aAAgBAQABBQKxvVJnXZt2f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/AYf/xAAYEAADAQEAAAAAAAAAAAAAAAAAARBxAv/aAAgBAQAGPwIc50WT/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERITFBYXGB/9oACAEBAAE/IckVVrQ1Ps9EOn4E0f/aAAwDAQACAAMAAAAQDN//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EDpkN//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxDSP//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExcVGBwdHw/9oACAEBAAE/EG3oiy23KoBZ8qIHsGzrkjwYTv7fMLHM/9k=",aspectRatio:1,src:"/static/2d230514e33d302f131c637988e5b064/1874a/william_wale_headshot.jpg",srcSet:"/static/2d230514e33d302f131c637988e5b064/9c8d0/william_wale_headshot.jpg 94w,\n/static/2d230514e33d302f131c637988e5b064/f0bbb/william_wale_headshot.jpg 188w,\n/static/2d230514e33d302f131c637988e5b064/1874a/william_wale_headshot.jpg 375w,\n/static/2d230514e33d302f131c637988e5b064/dc8bd/william_wale_headshot.jpg 563w,\n/static/2d230514e33d302f131c637988e5b064/82e82/william_wale_headshot.jpg 750w,\n/static/2d230514e33d302f131c637988e5b064/109d8/william_wale_headshot.jpg 1500w",sizes:"(max-width: 375px) 100vw, 375px"}}},johan_hedstrom_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAUw/cHKKk//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMxEv/aAAgBAQABBQKNolIBsdV5w//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/AYf/xAAYEAACAwAAAAAAAAAAAAAAAAAAEQEQIf/aAAgBAQAGPwK9EiT/xAAYEAEBAQEBAAAAAAAAAAAAAAABEQBRcf/aAAgBAQABPyHCPmIj7iQKTCUY6wcd/9oADAMBAAIAAwAAABDcD//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QHmQ3/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAECAQE/EBOyX//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExUUH/2gAIAQEAAT8QsvHI1B1KHscEFgW5Np1cWKJ749JYnIpP/9k=",aspectRatio:1,src:"/static/bc6f6696a59a998a4ec8a6eea0259525/1874a/johan_hedstrom_headshot.jpg",srcSet:"/static/bc6f6696a59a998a4ec8a6eea0259525/9c8d0/johan_hedstrom_headshot.jpg 94w,\n/static/bc6f6696a59a998a4ec8a6eea0259525/f0bbb/johan_hedstrom_headshot.jpg 188w,\n/static/bc6f6696a59a998a4ec8a6eea0259525/1874a/johan_hedstrom_headshot.jpg 375w,\n/static/bc6f6696a59a998a4ec8a6eea0259525/dc8bd/johan_hedstrom_headshot.jpg 563w,\n/static/bc6f6696a59a998a4ec8a6eea0259525/82e82/johan_hedstrom_headshot.jpg 750w,\n/static/bc6f6696a59a998a4ec8a6eea0259525/8f6ea/johan_hedstrom_headshot.jpg 6000w",sizes:"(max-width: 375px) 100vw, 375px"}}},alima_abdirova_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAWltkRcOZl//xAAbEAACAQUAAAAAAAAAAAAAAAABAgADEiEiMv/aAAgBAQABBQIuYKzXdRzAdkOP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQEABj8CZLeFHv8A/8QAGxABAAICAwAAAAAAAAAAAAAAAQARITFRYaH/2gAIAQEAAT8huAZQ4TbWniaiCZJUL3PXP//aAAwDAQACAAMAAAAQp/8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAExUf/aAAgBAwEBPxDUU//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxAJDb//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMWGh/9oACAEBAAE/EA8hkuLoyMejyDYV0tPWMV40vyDt0EQQHFP/2Q==",aspectRatio:1,src:"/static/4ab358b92bcd7ed81a712839f572ad8a/1874a/alima_abdirova_headshot.jpg",srcSet:"/static/4ab358b92bcd7ed81a712839f572ad8a/9c8d0/alima_abdirova_headshot.jpg 94w,\n/static/4ab358b92bcd7ed81a712839f572ad8a/f0bbb/alima_abdirova_headshot.jpg 188w,\n/static/4ab358b92bcd7ed81a712839f572ad8a/1874a/alima_abdirova_headshot.jpg 375w,\n/static/4ab358b92bcd7ed81a712839f572ad8a/dc8bd/alima_abdirova_headshot.jpg 563w,\n/static/4ab358b92bcd7ed81a712839f572ad8a/82e82/alima_abdirova_headshot.jpg 750w,\n/static/4ab358b92bcd7ed81a712839f572ad8a/504ff/alima_abdirova_headshot.jpg 1242w",sizes:"(max-width: 375px) 100vw, 375px"}}},adit_bhagat_headshot:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAG3iYbyCP/EABoQAAICAwAAAAAAAAAAAAAAAAABAgMREiH/2gAIAQEAAQUCIvhbLCVj3P/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAABEBEx/9oACAEBAAY/AjuxCn//xAAaEAACAwEBAAAAAAAAAAAAAAAAAREhMUFx/9oACAEBAAE/IfCZGHB6Ce6OXVhNH//aAAwDAQACAAMAAAAQbB//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPxCH/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qh//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFBMWFx8f/aAAgBAQABPxA5ds1GrFgt73BKeRIAJweZl1aqar6wxeT/2Q==",aspectRatio:1,src:"/static/6f98471000b57ec09d58fbd2688610ae/1874a/adit_bhagat_headshot.jpg",srcSet:"/static/6f98471000b57ec09d58fbd2688610ae/9c8d0/adit_bhagat_headshot.jpg 94w,\n/static/6f98471000b57ec09d58fbd2688610ae/f0bbb/adit_bhagat_headshot.jpg 188w,\n/static/6f98471000b57ec09d58fbd2688610ae/1874a/adit_bhagat_headshot.jpg 375w,\n/static/6f98471000b57ec09d58fbd2688610ae/dc8bd/adit_bhagat_headshot.jpg 563w,\n/static/6f98471000b57ec09d58fbd2688610ae/82e82/adit_bhagat_headshot.jpg 750w,\n/static/6f98471000b57ec09d58fbd2688610ae/9b83c/adit_bhagat_headshot.jpg 757w",sizes:"(max-width: 375px) 100vw, 375px"}}},accenture_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxklEQVQY033QPQvBURTH8fMnC5FCpChl8hIMNmVnMUiKwWJgkRg8FAakJNmUZ7LKWzB7Myx/38tdufXp/O49957hinyX8aN+8lzuFhVu8ozd5DVDXO37crXIn2X8aphifnoPMSN3MQ9I/xvkhlfnKKzwwK/P/Hlpq4GBqizDPgkVycGEZGxUO1xw6DlO9aCBM+oYI4sFCujigqauqr+3im1ILek3R3SwwloN3GCn5VDGCElsMcUANX6lZYjRI1f0nZmWwgmTNzSOKsP406NzAAAAAElFTkSuQmCC",width:246,height:66,src:"/static/649c1c773497b49abf2c8d9520207a83/2e197/accenture_logo.png",srcSet:"/static/649c1c773497b49abf2c8d9520207a83/2e197/accenture_logo.png 1x"}}},deloitte_logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABgBMI/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAMBAhP/2gAIAQEAAQUC1SapLyubf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAABMwIi/9oACAEBAAY/ApEjlPKP/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIWExUf/aAAgBAQABPyF6JYgDIkIU24xeQ7P/2gAMAwEAAgADAAAAEIf/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EEf/xAAcEAEAAgMAAwAAAAAAAAAAAAABESEAMWFRcYH/2gAIAQEAAT8QkNDBIGrop9suEvurNJ57PzKxaBW0Wyuf/9k=",width:400,height:104,src:"/static/d7546faf47ab5265937d0224975dab92/a3fe4/Deloitte-1024x296.jpg",srcSet:"/static/d7546faf47ab5265937d0224975dab92/a3fe4/Deloitte-1024x296.jpg 1x,\n/static/d7546faf47ab5265937d0224975dab92/8c076/Deloitte-1024x296.jpg 1.5x,\n/static/d7546faf47ab5265937d0224975dab92/d86a9/Deloitte-1024x296.jpg 2x"}}},silverCrest_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABcSAAAXEgFnn9JSAAABPElEQVQY00WQy07CQBiFeTkXvIbGd3BjXLtTw00gaCkU4gaIK0JI1ERxIyFRY6HSmU4v0xu0pbRCL+CEYjyLPzl/8uXknBQPhCkPNVVTDZOXpdV6HQbBZrPZbrfJTRRF0Wq1Xi4923Yw1gBEBEwRUkTSkGXPy8Xu0yPTbn1xnCyKGGPXdQkfBAEEwJpbvu+TD0JIVf/gbx7KMr7ttPq9XpOmD9Jpqt2qUdTVxWXpulir0uViiaaqzUaDqdVzmWw+m/uHSbKApO7Lc51hjg+PTk7P7h7676MRuxM34fgpz00m450dDF6Hb0OMVSiIexgh6ZMdZwqFfOWmct+BmjYzTcu2l6Si5zmO4//45syczy1d1wGAiqLuk5PBZEnRdOMDgJntRGEUhmEcx6RwvBOxpLnn+YuFaximJCoJ/AvLyDDLwhpLwwAAAABJRU5ErkJggg==",width:400,height:104,src:"/static/884d714b1e5a61a5b6bbff5045950bcc/34a33/silvercrest_solutions_logo.png",srcSet:"/static/884d714b1e5a61a5b6bbff5045950bcc/34a33/silvercrest_solutions_logo.png 1x,\n/static/884d714b1e5a61a5b6bbff5045950bcc/d7d2b/silvercrest_solutions_logo.png 1.5x,\n/static/884d714b1e5a61a5b6bbff5045950bcc/31c9d/silvercrest_solutions_logo.png 2x"}}},weiss_scholarship_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAC4jAAAuIwF4pT92AAABeElEQVQY01WPy0sCURTG+6vatGoRLXogIRUtiiiiwGhRRJs2RYuIpIygl2GhGT0mtUnH0RzHxkeZmyyV1FoUtIigMXzM3HPvbcQi+zgczuP7cTgNcGQn8idk0jQkvJbw4mnA7RPe315xQQa7FdZNOCzhXBYsZjBvAeuidWpQmhrhSgSTsTxu2LmLX1+O3UirQir1EotCa7Ni3av0dSuTExW9TtlYV5mT/3BXR3loAOs7X6ZnZiPhXHKK3ustC1OMw0d7dOWFOcUwqhqXKv296soy+PkqhPHfZZLPowMrMQzPp4sjHvE5MrhmMmUj16StBYkCBYBDW6W9Vd3dRkf2H5KQKoydZ1SW8WOGSKESpcGHtCMuxT6K9KuA3CxVlKrzKQ+2fWVnEzkYUg8XKQVtgEFrEFIJBm2r5ZoJaTDGiFL1908MNaEqzJ3aPcxhkHMlwuJtNOR1Hgd5VuDORZ6V+AvedaIVyUQsxLligjcS4Pwso0XA4wwL3m8OWlRFIfdXXQAAAABJRU5ErkJggg==",width:220,height:80,src:"/static/367a63d9e66a89c4bf329e2f60f73de6/8676f/weiss_scholarship_logo.png",srcSet:"/static/367a63d9e66a89c4bf329e2f60f73de6/8676f/weiss_scholarship_logo.png 1x,\n/static/367a63d9e66a89c4bf329e2f60f73de6/0317b/weiss_scholarship_logo.png 1.5x"}}},AccentureCaseComp:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEm0lEQVQ4y32UaUxbRxDH16GK1EYVH3qSSi2Kmkj9lKaNqvRClXokVY4qEhGFQhIqRRVKKS1NIUoIhFQEgYGI00QcJWDABmwwl2Nz2BwhgLHBnDZQwDbmMgZjg7F5fjvd94BIbQkrjXY1O/N7/9mdt6gqKPgFREbBZ37hI0XF0F/0yKPOL8Dq/EKPTlgB0ojfBsn2QSbmJrGezCyU/MZhtO84jtDrw8KKRaOyDbozMunBsnLozeHh4YpKil5ehr+++PJ3Jk76a6QXM2cce29/oNA/IBPIaI29SxF1MK1Q4uXxcXBarTTj15bwracRYmXFnPzeKzxEyPk5WMAJvyzk/BRQxjlzMpPlnPs4G6FfiEB9XT1mEpX3/sREIVbxcvGaycT6yKAAYxCFXMnbX9a17UkeFd22k+jpSEyCzqRk3JOVA4q4u2DuUzNQFmxoU+JQ5E2EFnpzUDBRe/VNhEKJBRNDnG3a2+y5NO4C5X9EQ3vCfRZgnZwEUvauSjwgboS08Dzc1Tm70SrVbSoe653tTRMOWa0OwgLLIxlcUozMC11G6NhIlcjFZCni4vHa7CyralLeBOq8fKBcbkw7bMANiMWWZRfsNRpEQ6sIXXrrWfWlZ88nMhuTTc2UPOom2BcW8VhtHQxVilh1dQm5uCq3iV27Nt14a4vCbve2YcBbzKHciajNfwZ8GSFvVQ7PyGSYlQq6l8sFLY8H4HbB+sw0JAXf31OZbnhx94xxf48ZjhyK+QhxLwaxjZ126vMrdQ+LQSZq8EjLRFgqqAG5SAKJITHQ3TwK1bVi4PNLQVxdDSV8PqSmPSBzGa6orGTWtE4/Bjxu5zC6oVlim/X00+XohukVaB4xeGqGDFgyOAOdf89CpHgUquqJVfAJTAIymZyYDERiMXR0dODikhLmIx6T0QwpcS3y7ZpzdEfE5o0NpgyVg6brLRT0OWiYowCcxPdjeg9g5/8q3i2Xbf6WRv0GQgHvsLwI7UqJlTiHbG6qyLAOKTob/u7JAhyVmkCx4sYC7RJOLuxj8miXm/JQlIemtiiaXA4DczsdAOSviWdhB6qNft1rNNTOObGDotmvZhhd+JVmC7zWagXuhAPbiDOsoJ+eGrfueTnlBaopgjrEAmNHbRrG6d9t8Uhm16HG6sG+qc3gEy+BE/EirDMsgmELaJXFBaEJbQuNfI1WWKweqSxWD4tK+wcf8bqng74tvMSwrv8g8EJhAyulDPCqZoV6SWKEIL0b+4Xnwqvf3MLvfngNBz5soWfIvnzRaUe3eo/udNqBnZmz23pLC/adVZzGRzS/aVPN2eH6UzPNbR/HKQ+EODFbglOzqkHQpaeYBr3QtRTLhJPlgf8+C5oe478dF7XrURrDKlgmDZRhyowFVUo8NTOP+wYmPAa9EXjT6+Pog7oXmVif5F7OBb9c8lTloPOf5KCzp7LRV++ns5yvT6TvEM/pD97TLg1T65vMRWLX6hq418jVebbwk/kN8JWaApiwM+3zbM/6PjY//xX7tNPCBh1vW/K/MWrHt0dtjhidfeP2mN1xR2eHQM2qbKdUhCpMKFRtRYelzwf+A5Udsh/GwGsvAAAAAElFTkSuQmCC",width:300,height:297,src:"/static/fd269d8cd923444fb5e14fd83b86e0d3/e99fb/AccentureCaseCompLogo.png",srcSet:"/static/fd269d8cd923444fb5e14fd83b86e0d3/e99fb/AccentureCaseCompLogo.png 1x,\n/static/fd269d8cd923444fb5e14fd83b86e0d3/22758/AccentureCaseCompLogo.png 1.5x,\n/static/fd269d8cd923444fb5e14fd83b86e0d3/60397/AccentureCaseCompLogo.png 2x"}}}}}}}]);
//# sourceMappingURL=4-fcc11b1888e616c2575a.js.map