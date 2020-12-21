(this["webpackJsonporange-portfolio"]=this["webpackJsonporange-portfolio"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),i=t.n(l);t(76),t(77),t(78);var c=function(){return r.a.createElement("section",{className:"aboutText",id:"about",alignItems:"center"},r.a.createElement("div",{className:"me"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("img",{className:"background-img",alt:"",src:"https://user-images.githubusercontent.com/44556715/90456642-7ee0d900-e0c7-11ea-819d-5522d9baf8d5.png"}),r.a.createElement("h1",null,"Hello! My name is Jackie, and I'm a developer and animator. ")),r.a.createElement("h4",null,"I am an undergrad at Northeastern University studying Computer Science and Media Arts, a computer graphics major under the Computer and Information Sciences Department."),r.a.createElement("h4",null,"I love exploring topics relating graphics, animation, and code! In my freetime I enjoy drawing, playing guitar, traveling, skateboarding, and spending time outdoors."),r.a.createElement("h4",null," My intern experiences:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Electronic Arts")," incoming summer 2021 (Tech Art Internship)"),r.a.createElement("li",null,r.a.createElement("b",null,"Lucasfilm, ILM"),"  spring 2021 (Core Pipeline Software Co-op)"),r.a.createElement("li",null,r.a.createElement("b",null,"Human Movement Lab")," all of 2020 (Motion Capture engineering, VR, Computer Graphics, Python, Blender)"),r.a.createElement("li",null,r.a.createElement("b",null,"Scout Studio"),"  fall 2019 (React.js, web development, design) "),r.a.createElement("li",null,r.a.createElement("b",null,"Bank of America")," summer 2019 (React.js, Node.js, web development)")))))},s=t(7),o=t(12),m=t(8),u=t(9),d=(t(79),n.Component,t(111)),h=t(115),g=t(113),p=(t(80),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={showMessageSpreadsheet:!1,showMessageAutoLabel:!1},e}return Object(o.a)(t,[{key:"onButtonClickHandler",value:function(e){"spreadsheet"===e&&this.setState({showMessageSpreadsheet:!this.state.showMessageSpreadsheet}),"autolabel"===e&&this.setState({showMessageAutoLabel:!this.state.showMessageAutoLabel})}},{key:"displayText",value:function(e){return!0===e?"Show less":"Show more"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"code-page",id:"code"},r.a.createElement("h1",null,"Coding Projects"),r.a.createElement(d.a,{className:"deck1"},r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/91363232-2e096880-e7ca-11ea-8830-abe13dfff70e.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/91363259-3c578480-e7ca-11ea-9e96-c32ff6969682.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90033511-8e0df400-dc8d-11ea-883d-ce077dcdc1ec.png",alt:"First slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Raytracer"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Renders realistic images through ray tracing techniques on 3D scenes."),r.a.createElement("li",null,"Used C++ to implement space-time raytracing, motion blur, AABBs, BVH volumes, image textures, perlin noise, Vector3 math operations, rays, shaders, lights, geometry in a scene, normal determination, antialiasing, materials with refraction and reflection, and cameras.")),r.a.createElement("a",{href:"https://github.com/jallex/Raytracer",rel:"noopener noreferrer",target:"_blank"},"See project!"))),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Graphics Programming"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90458262-ebf66d80-e0cb-11ea-8bcd-c47025f13c28.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90645804-662a0d80-e204-11ea-9a15-ef242cf043da.gif",alt:"Second slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block h-100",src:"https://user-images.githubusercontent.com/44556715/90458246-df721500-e0cb-11ea-901b-438f2d121317.gif",alt:"Third slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Markerless Mocap Data Animation"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"Tracked human body parts using computer vision and neural networks in markerless mocap system on rgb video and performed 3D reconstruction on 2D video coordinates."),r.a.createElement("li",null,"Created 3D animation of human skeleton and objects such as juggling balls using Python and Blender API"),"   "),this.state.showMessageAutoLabel&&r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"Using API, created empties at each marker location, connected them with bones, rigged armature to custom mesh, added materials, lighting cameras.")),r.a.createElement("i",{onClick:function(){return e.onButtonClickHandler("autolabel")},className:"more-button","aria-hidden":"true"},this.displayText(this.state.showMessageAutoLabel)),r.a.createElement("a",{href:"https://github.com/MatthisLab/VisualizationGoProMocap",rel:"noopener noreferrer",target:"_blank"},"See project!"))),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Graphics Programming | Research"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90457857-b309c900-e0ca-11ea-9ec1-602af3d1058e.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/91449976-c561d080-e849-11ea-809c-4b42e5d14175.gif",alt:"Second slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Marker Mocap Data Animation"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"Using Python and the Blender API, translated marker mocap data into 3D environment with animated human skeleton."),r.a.createElement("li",null,"Using API, created an animated armature with keyframed data for each bone, created mesh and parented to armature, applied material and lighting to scene, incorporated force plate data, matched frame rates, rendered out frames "),r.a.createElement("li",null," Calculated vectors and matrices related to position and rotation quaternions in 3D space, performed calibrations, projected rays, manipulated cameras and rigid bodies."),r.a.createElement("li",null,"Wrote post-processing software to create fluid pipeline converting across different data file formats.")),r.a.createElement("a",{href:"https://github.com/MatthisLab/Mocap-Cyr-Wheel",rel:"noopener noreferrer",target:"_blank"},"See project!"))),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Graphics Programming | Research")))),r.a.createElement(d.a,{className:"deck1"},r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90457756-78079580-e0ca-11ea-867b-bb03d63bd8ef.png",alt:"Third slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90457742-6faf5a80-e0ca-11ea-808c-2d07be0804f7.gif",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90457644-1ba47600-e0ca-11ea-9348-8288d707c4a8.gif",alt:"Third slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"h-50",src:"https://user-images.githubusercontent.com/44556715/90457677-3676ea80-e0ca-11ea-83f9-283ce580e79c.gif",alt:"Third slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Mocap Data clean-up:"),r.a.createElement(h.a.Title,null,"Autolabel Unlabeled Trajectories"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"Created a system to identify unlabeled trajectories that belong to the same marker during mocap data collection session, and combine them into a single labeled trajectory."),r.a.createElement("li",null,"Pinpoint same marker trajectories using rgb camera frustum information such as far and near planes")),this.state.showMessageAutoLabel&&r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"Add mesh and armature to mocap data via Python script and Blender to create visualization"),r.a.createElement("li",null,"Use Unity 3D environment and C# to cast an expanding ray, detect collision, and label desired trajectory")),r.a.createElement("i",{onClick:function(){return e.onButtonClickHandler("autolabel")},className:"more-button","aria-hidden":"true"},this.displayText(this.state.showMessageAutoLabel)),r.a.createElement("div",{className:"Automated-Label"},r.a.createElement("a",{href:"https://github.com/jallex/Automated-Labeling-Unlabeled-Trajectories",rel:"noopener noreferrer",target:"_blank"},"See project!")))),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Graphics Programming | Animation"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90459185-91124580-e0ce-11ea-9689-bb7cdb551aa4.PNG",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90459184-9079af00-e0ce-11ea-9077-81814ef633ba.png",alt:"Third slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90459186-91aadc00-e0ce-11ea-991e-59c94850d4be.png",alt:"Third slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Spreadsheet (Mini Excel)"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,'Using Java and Swing and the MVC design pattern, I created a working spreadsheet similar to Microsoft Excel and  Google Sheets." Able to open saved sheets or create a new one. '),r.a.createElement("li",null,"Allows for infinite scrolling."),r.a.createElement("li",null,"GoF patterns used: Composition, Visitor, Builder, Command, Observor")),this.state.showMessageSpreadsheet&&r.a.createElement("ul",{class:"my-list-style"},r.a.createElement("li",null,"If a value is edited, all cells that reference this cell will also be updated. "),r.a.createElement("li",null,"Cells that contain formulas may be functions of a fixed number of arguments, or of a range of values; they can contain conditionals to select among options; by creating a bunch of similar, consecutive rows they can even simulate fixed-length iteration. Formulas are only restricted to not contain cyclic references. "),r.a.createElement("li",null,"Ability to create a group of spreadsheets and reference between them."),r.a.createElement("li",null,"The spreadsheet has user mouse, key, and event listeners. For example, the user is able to navigate using the keyboard arrow keys, and click buttons to change selected cells and their contents."),r.a.createElement("li",null,"Extensive unit testing.")),r.a.createElement("i",{onClick:function(){return e.onButtonClickHandler("spreadsheet")},className:"more-button","aria-hidden":"true"},this.displayText(this.state.showMessageSpreadsheet)),"Project code available upon request.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Object-Oriented Programming | Model-View-Controller"))),r.a.createElement(h.a,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/90459174-8788dd80-e0ce-11ea-9f1c-d7c21e4df6d9.PNG",alt:"First slide"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Pyramid Solitaire (3 models)"),r.a.createElement(h.a.Text,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Using Java and the MVC design pattern, I created a solitaire game with 3 different models with different rules- basic, relaxed, and tripeaks."),r.a.createElement("li",null,"Textual view of game displayed in terminal."),r.a.createElement("li",null,"Created Mock models for extensive unit testing.")),"Project Code available upon request.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Object-Oriented Programming | Model-View-Controller")))))}}]),t}(n.Component)),b=(t(83),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"work3D-page",id:"work3D"},r.a.createElement("h1",null,"3D Modeling and Animation"),r.a.createElement(d.a,{className:"deck1"},r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102719179-9076ff00-42ba-11eb-8f13-094b661d6a7a.jpg",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102735172-b67abe80-430f-11eb-822d-8c4fc720be8b.gif",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102735342-22f5bd80-4310-11eb-8241-6639c351a151.gif",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102781932-78f55000-4366-11eb-8f9a-e75b5078b92e.gif",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102734786-ac0bf500-430e-11eb-9bdd-4617593cf5fa.gif",alt:"First slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Game Animations "),r.a.createElement(h.a.Text,null,"Walk cycle, run cycle, idle cycle, and kick animated in Maya for export into Unreal Engine 4.",r.a.createElement("br",null),"Rigged character asset from Adobe Mixamo.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Maya | Game Animation"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102789144-b90e0000-4371-11eb-9639-10d6cb76e4f3.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102803067-a9001b80-4385-11eb-89f9-6c49cd778834.png",alt:"First slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Before Dawn "),r.a.createElement(h.a.Text,null,"RPG created using Unreal Engine 4, with all environment assets created and imported from Maya, ZBrush and Substance Painter. Environment created in collaboration with 2 other artists.",r.a.createElement("br",null)," I made all animations, and created blueprints in UE4 for the animation controller and to allow user functionality, such as the camera controller to allow switching between first person and third person in game.",r.a.createElement("br",null)," I was responsible for the sky, river, cabin, their textures, normal maps, environment lighting.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://vimeo.com/493464875",rel:"noopener noreferrer",target:"_blank"},"See project!"))),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Unreal Engine 4 | Maya | Substance Painter | ZBrush")))),r.a.createElement(d.a,{className:"deck1"},r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/99191394-73d72c80-273a-11eb-8c71-954fc65aefc9.jpg",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102714720-7fb89000-429e-11eb-9308-cbf302f9b0d8.jpg",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/99191401-76398680-273a-11eb-9a0c-766886960023.jpg",alt:"First slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Kitchen Environment "),r.a.createElement(h.a.Text,null,"I modeled my kitchen from scratch using real-life reference, done in Maya. Technical execution included utilizing holding edges, and keeping realistic proportions and forms. Shaded with natural surfacing using Arnold AI Standard Surfaces so that metallic objects appear specular, and others diffuse.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"3D Modeling | Maya | Shading | Environments"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{interval:"100000000000000"},r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102717484-9ec01d80-42b0-11eb-9897-7fd2d0ffac50.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102717393-0c1f7e80-42b0-11eb-9ab9-b9fbc502bb11.gif",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102717496-b7c8ce80-42b0-11eb-9b24-3f7e60a5ccba.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102717504-c9aa7180-42b0-11eb-8f2b-e71efc169e81.png",alt:"First slide"})),r.a.createElement(g.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://user-images.githubusercontent.com/44556715/102717510-d62eca00-42b0-11eb-8678-98cfa4a2f14c.jpg",alt:"First slide"}))),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Character Model"),r.a.createElement(h.a.Text,null,"Character modeled from scratch in Maya, and textures created with Substance Painter and Photoshop. ",r.a.createElement("br",null),"I took video game concept art of a character from Horizon Zero Dawn as reference, and modeled as well as textured the body, face, hands, clothes, and entire model.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"3D Modeling | Maya | Substance Painter | Shading | Character Art")))),r.a.createElement(d.a,{className:"deck1"},r.a.createElement(h.a,null,r.a.createElement(h.a.Img,{variant:"top",src:"https://user-images.githubusercontent.com/44556715/90456843-f6af0380-e0c7-11ea-86c5-20096f24363f.png"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Chair 3D model for AR"),r.a.createElement(h.a.Text,null,"Chair 3D asset modeled from scratch based on photo reference for furniture company's AR feature, allowing customers to see the furniture with completely accurate size, textures, and colors in their room before purchasing.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"3D Modeling | Blender | Shading | UV unwrap | Bake"))),r.a.createElement(h.a,null,r.a.createElement(h.a.Img,{variant:"top",src:"https://user-images.githubusercontent.com/44556715/90456909-1cd4a380-e0c8-11ea-9953-5100731ec972.png"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Shiba Character Asset"),r.a.createElement(h.a.Text,null,"Shiba character asset created for the Talent Show animation.")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"3D Modeling | Maya | Shading | UV unwrap | Bake"))),r.a.createElement(h.a,null,r.a.createElement(h.a.Img,{variant:"top",src:"https://user-images.githubusercontent.com/44556715/90457038-750ba580-e0c8-11ea-889b-40087c6dbdc4.png"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Talent Show "),r.a.createElement(h.a.Text,null,'Animation created based on the prompt "One act in a talent show" - Character animation, modeling, rigging, UVs, props, materials, lighting all done in Maya.'),r.a.createElement("a",{href:"https://vimeo.com/448719019",rel:"noopener noreferrer",target:"_blank"},"See project!")),r.a.createElement(h.a.Footer,null,r.a.createElement(h.a.Text,null,"Animation | Maya | Character Design | Modeling")))))}}]),t}(n.Component)),E=t(20),f=(t(84),t(46)),v=(t(85),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tiles"},this.props.data.map((function(e){return r.a.createElement(w,{data:e,key:e.id})})))}}]),t}(r.a.Component)),w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={open:!1,mouseOver:!1},n._clickHandler=n._clickHandler.bind(Object(E.a)(n)),n._mouseEnter=n._mouseEnter.bind(Object(E.a)(n)),n._mouseLeave=n._mouseLeave.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"_mouseEnter",value:function(e){e.preventDefault(),!1===this.state.mouseOver&&(console.log(this.props.data.name),this.setState({mouseOver:!0}))}},{key:"_mouseLeave",value:function(e){e.preventDefault(),!0===this.state.mouseOver&&this.setState({mouseOver:!1})}},{key:"_clickHandler",value:function(e){e.preventDefault(),!1===this.state.open?this.setState({open:!0}):this.setState({open:!1})}},{key:"openPopupbox",value:function(e){var a=r.a.createElement("div",null,r.a.createElement("img",{className:"modal-img",alt:"",src:e}));f.PopupboxManager.open({content:a}),this.setState({open:!1})}},{key:"render",value:function(){var e;return e={width:"auto",height:"100%"},r.a.createElement("div",{className:"tile"},this.state.open&&r.a.createElement("img",{onMouseEnter:this._mouseEnter,onMouseLeave:this._mouseLeave,src:this.props.data.image,onClick:this._clickHandler,alt:this.props.data.name,style:e})&&this.openPopupbox(this.props.data.image),!this.state.open&&r.a.createElement("img",{onMouseEnter:this._mouseEnter,onMouseLeave:this._mouseLeave,src:this.props.data.image,onClick:this._clickHandler,alt:this.props.data.name,style:e}))}}]),t}(r.a.Component),k=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{data:this.props.data})}}]),t}(r.a.Component),y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e={titleBar:{enable:!0},fadeIn:!0,fadeInSpeed:500};return r.a.createElement("div",{className:"artwork-page",id:"artwork"},r.a.createElement("h1",null,"Artwork and Illustration"),r.a.createElement(k,{data:[{id:2,name:"Forest",image:"https://user-images.githubusercontent.com/44556715/90457269-13980680-e0c9-11ea-8a00-366dae248570.jpg"},{id:3,name:"Bottles",image:"https://user-images.githubusercontent.com/44556715/90457270-13980680-e0c9-11ea-8eb7-6a731c506df7.jpg"},{id:1,name:"Ballet",image:"https://user-images.githubusercontent.com/44556715/90457265-1266d980-e0c9-11ea-896a-1ad1f15c09d3.png"},{id:4,name:"Dog",image:"https://user-images.githubusercontent.com/44556715/90457271-13980680-e0c9-11ea-9b35-f6cb875ac530.JPG"},{id:5,name:"Fire",image:"https://user-images.githubusercontent.com/44556715/90457272-14309d00-e0c9-11ea-8611-9a53a58086e7.JPG"},{id:6,name:"Water",image:"https://user-images.githubusercontent.com/44556715/90457274-14309d00-e0c9-11ea-976f-c7e58748c066.JPG"},{id:7,name:"Earth",image:"https://user-images.githubusercontent.com/44556715/90457276-14309d00-e0c9-11ea-9bec-f8ed95268745.JPG"},{id:8,name:"Wind",image:"https://user-images.githubusercontent.com/44556715/90457277-14c93380-e0c9-11ea-8a59-476ec3ef5116.JPG"},{id:9,name:"Eye fire",image:"https://user-images.githubusercontent.com/44556715/90457278-14c93380-e0c9-11ea-85c6-26cd6da189e5.JPG"},{id:10,name:"Eye water",image:"https://user-images.githubusercontent.com/44556715/90457281-1561ca00-e0c9-11ea-9a79-a1cb6bb99a5a.JPG"},{id:12,name:"Watch",image:"https://user-images.githubusercontent.com/44556715/90457282-15fa6080-e0c9-11ea-9480-dcb243ce4c19.jpeg"},{id:17,name:"Skeleton",image:"https://user-images.githubusercontent.com/44556715/90457291-198de780-e0c9-11ea-8d31-01398b290543.jpg"},{id:16,name:"Eggs",image:"https://user-images.githubusercontent.com/44556715/90457290-18f55100-e0c9-11ea-9478-c803d83f7b43.JPG"},{id:13,name:"Astro red",image:"https://user-images.githubusercontent.com/44556715/90457283-15fa6080-e0c9-11ea-90e0-2244e940300d.gif"},{id:14,name:"Astro blue",image:"https://user-images.githubusercontent.com/44556715/90457284-1692f700-e0c9-11ea-9e3d-41e919305763.gif"},{id:15,name:"Hand animated",image:"https://user-images.githubusercontent.com/44556715/90457285-1692f700-e0c9-11ea-900b-24937e305571.gif"},{id:18,name:"Hand pencil",image:"https://user-images.githubusercontent.com/44556715/90457293-198de780-e0c9-11ea-8db8-e5873807ab90.JPG"}]}),r.a.createElement(f.PopupboxContainer,e))}}]),t}(n.Component),N=(t(86),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={showMessage:!1},e.onButtonClickHandler=function(){e.setState({showMessage:!e.state.showMessage})},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-page",id:"contact"},r.a.createElement("h1",null,"Contact"),this.state.showMessage&&r.a.createElement("p",null,"jackieallex@gmail.com"),r.a.createElement("div",{className:"social-links"},r.a.createElement("div",{className:"email"},r.a.createElement("i",{onClick:this.onButtonClickHandler,className:"fa fa-envelope","aria-hidden":"true"})),r.a.createElement("div",{className:"linked-in"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jacquelineallex",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"http://www.github.com/jallex",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))),r.a.createElement("img",{className:"img",src:"https://user-images.githubusercontent.com/44556715/90457110-ad12e880-e0c8-11ea-807e-bb61444e60c6.png",alt:""})," ",r.a.createElement("div",{className:"visiting"},r.a.createElement("p",null,"Thanks for visiting!")))}}]),t}(n.Component)),j=(t(87),t(1)),x=t(59),C=t(60),M=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new j.ab;e.background=new j.g(13207661);var a=new j.P(35,window.innerWidth/window.innerHeight,.1,1e3);a.rotation.x=.05;var t=new j.Y(16777215,3.7,100,100);t.position.set(1,1,10),t.lookAt(1,1,3),e.add(t);var n=new j.Q(16777215,30,100);n.position.set(50,50,50),e.add(n);var r,l=new j.mb({antialias:!0});l.setSize(window.innerWidth/3.5,window.innerWidth/3.5),document.getElementsByClassName("image")[0].appendChild(l.domElement),l.autoClear=!1,a.position.z=5,(new x.a).load("/orange-model2.glb",(function(a){console.log(a.scene),(r=a.scene.children[0]).cursor="pointer",r.on("touchstart",(function(e){r.material.wireframe=!r.material.wireframe})),e.add(a.scene),r&&(r.rotation.x+=.8),r.addEventListener("mousedown",(function(){r.material.wireframe=!r.material.wireframe})),a.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0)}))}),(function(e){console.log("An error happened")}),(function(e){console.log(e)}));new C.a(l,e,a);a.updateProjectionMatrix(),l.setSize(window.innerWidth/3.5,window.innerHeight/3.5);function i(){window.innerWidth<window.innerHeight?(a.aspect=2*window.innerHeight/window.innerHeight,a.updateProjectionMatrix(),l.setSize(2*window.innerHeight/3.5,window.innerHeight/3.5)):(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth/3.5,window.innerHeight/3.5))}!function t(){requestAnimationFrame(t),r&&(r.rotation.y+=.02),l.clear(),l.render(e,a)}(),i(),window.addEventListener("resize",i,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize,!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"100%",margin:0,padding:0},className:"homeText",id:"home",alignitems:"center"},r.a.createElement("div",{className:"home-grid"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://user-images.githubusercontent.com/44556715/90459318-f82ffa00-e0ce-11ea-9715-7abbfd1b3450.png",alt:"",className:"fishes"}),r.a.createElement("div",{ref:function(a){return e.mount=a}})),r.a.createElement("div",{className:"banner-text"},r.a.createElement("div",{className:"cont"},r.a.createElement("h1",null,"Jackie Allex")),r.a.createElement("div",{className:"social-links"},r.a.createElement("div",{className:"linked-in"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jacquelineallex",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"http://www.github.com/jallex",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(n.Component),T=t(24),I=(t(95),t(114)),S=t(116),A=t(112),O=t(61),P=t.n(O),F=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-mobile",id:"navbar2"},r.a.createElement(I.a,{expand:"md",className:"navv",variant:"light"},r.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav",style:{textDecoration:"none",color:"white"}}),r.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(S.a,{className:"nav-items navbar-default"},r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:500},"Home")),r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:500},"About")),r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"code",spy:!0,smooth:!0,offset:-50,duration:500},"Code")),r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"work3D",spy:!0,smooth:!0,offset:-50,duration:500},"3D Modeling and Animation")),r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"artwork",spy:!0,smooth:!0,offset:-50,duration:500},"Artwork")),r.a.createElement(A.a.Item,{className:"nav-item",id:"nav-dropdown"},r.a.createElement(T.Link,{style:{textDecoration:"none",color:"white"},activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:500,duration:500},"Contact"))),r.a.createElement("div",{className:"nav-item-link"},r.a.createElement("a",{href:P.a,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"white"}},"Resume")))))}}]),t}(n.Component),B=t(66),D=t.n(B),L=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"navbar"},r.a.createElement(F,null)),r.a.createElement("div",{className:"sections"},r.a.createElement("div",{className:"div1"}," ",r.a.createElement(M,null)," "),r.a.createElement("div",{style:{width:"100%",margin:0},className:"div2"},r.a.createElement(D.a,null,r.a.createElement(c,null))),r.a.createElement("div",{style:{width:"100%",margin:0},className:"div4"},r.a.createElement(p,null)),r.a.createElement("div",{style:{width:"100%",margin:0},className:"div5"},r.a.createElement(b,null)),r.a.createElement("div",{style:{width:"100%",margin:0},className:"div6"},r.a.createElement(y,null)),r.a.createElement("div",{style:{width:"100%",margin:0},className:"div7"},r.a.createElement(N,null))))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(101),t(102);var G=t(70);t(103);i.a.render(r.a.createElement(G.a,null,r.a.createElement(L,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");H?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()},61:function(e,a,t){e.exports=t.p+"static/media/resume.c16c2951.pdf"},71:function(e,a,t){e.exports=t(106)},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},95:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.f7fdd3c9.chunk.js.map