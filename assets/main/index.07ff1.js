window.__require=function t(e,o,n){function i(l,c){if(!o[l]){if(!e[l]){var s=l.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!c&&a)return a(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+l+"'")}l=s}var d=o[l]={exports:{}};e[l][0].call(d.exports,function(t){return i(e[l][1][t]||t)},d,d.exports,t,e,o,n)}return o[l].exports}for(var r="function"==typeof __require&&__require,l=0;l<n.length;l++)i(n[l]);return i}({Balls:[function(t,e,o){"use strict";cc._RF.push(e,"372acY3hq1NfbMMOq3GK5V+","Balls");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,l=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(l=(r<3?i(l):r>3?i(e,o,l):i(e,o))||l);return r>3&&l&&Object.defineProperty(e,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=cc._decorator,c=l.ccclass,s=l.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ball1=null,e.ball2=null,e.ball3=null,e.ball4=null,e.ball5=null,e.ball6=null,e.ball7=null,e.ball8=null,e.ball9=null,e.ball10=null,e.ball11=null,e}return i(e,t),e.prototype.getBalls=function(){return[this.ball1,this.ball2,this.ball3,this.ball4,this.ball5,this.ball6,this.ball7,this.ball8,this.ball9,this.ball10,this.ball11]},r([s({type:cc.Prefab})],e.prototype,"ball1",void 0),r([s({type:cc.Prefab})],e.prototype,"ball2",void 0),r([s({type:cc.Prefab})],e.prototype,"ball3",void 0),r([s({type:cc.Prefab})],e.prototype,"ball4",void 0),r([s({type:cc.Prefab})],e.prototype,"ball5",void 0),r([s({type:cc.Prefab})],e.prototype,"ball6",void 0),r([s({type:cc.Prefab})],e.prototype,"ball7",void 0),r([s({type:cc.Prefab})],e.prototype,"ball8",void 0),r([s({type:cc.Prefab})],e.prototype,"ball9",void 0),r([s({type:cc.Prefab})],e.prototype,"ball10",void 0),r([s({type:cc.Prefab})],e.prototype,"ball11",void 0),r([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],Ball:[function(t,e,o){"use strict";cc._RF.push(e,"8a917iZ+gZKZp3HYN+gD5T7","Ball");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,l=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(l=(r<3?i(l):r>3?i(e,o,l):i(e,o))||l);return r>3&&l&&Object.defineProperty(e,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=cc._decorator,c=l.ccclass,s=(l.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.destroyed=!1,e}var o;return i(e,t),o=e,e.prototype.onBeginContact=function(t,e,n){var i=this,r=e.node,l=n.node,c=n.node.getComponent(o);if(c)if(this.destroyed||c.destroyed)t.disabled=!0;else if(c.level===this.level&&this.level<this.main.levelCount&&c.index<this.index){this.destroyed=!0,c.destroyed=!0,t.disabled=!0;var s=n.node.position.x,a=n.node.position.y;r.removeComponent(cc.Collider),r.removeComponent(cc.RigidBody),cc.tween(r).to(.05,{position:cc.v3(s,a)}).call(function(){r.destroy(),l.destroy(),i.main.setPhysics(i.main.reSpawnBall(++i.level,s,a))}).start()}},o=r([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"1ceccTrKqtLMrK/wgj3oxUG","Main");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,l=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(l=(r<3?i(l):r>3?i(e,o,l):i(e,o))||l);return r>3&&l&&Object.defineProperty(e,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=t("./Ball"),c=t("./Balls"),s=cc._decorator,a=s.ccclass,d=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.balls=null,e.wallColor=null,e.isMousedown=!1,e.index=0,e.levelCount=11,e.width=480,e.height=840,e.wallWidth=1,e.wallHeight=1920,e}return i(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onMousedown()),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMousemove()),this.node.on(cc.Node.EventType.MOUSE_UP,this.onMouseup()),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseup()),this.node.on(cc.Node.EventType.TOUCH_START,this.onMousedown()),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onMousemove()),this.node.on(cc.Node.EventType.TOUCH_END,this.onMouseup()),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onMouseup());var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-960),this.width=this.node.width,this.width>1920&&(this.width=1920),this.leftWall=this.createWall("LeftWall",-this.width/2),this.rightWall=this.createWall("RightWall",this.width/2),this.ballArr=this.balls.getBalls(),this.spawnNewBall(0)},e.prototype.reSpawnBall=function(t,e,o){var n=cc.instantiate(this.balls.getBalls()[t]);n.setPosition(e,o),n.scale=.7;var i=n.addComponent(l.default);return i.main=this,i.level=t,i.index=this.index++,this.node.addChild(n),n},e.prototype.spawnNewBall=function(t){var e=this,o=cc.instantiate(this.balls.getBalls()[t]);o.setPosition(0,this.node.height/2-60);var n=o.addComponent(l.default);n.main=this,n.level=t,n.index=this.index++,this.scheduleOnce(function(){o.scale=0,e.node.addChild(o),e.currentNode=o,cc.tween(o).to(.2,{scale:.7},{easing:"backOut"}).start()},1)},e.prototype.setPhysics=function(t){t.addComponent(cc.RigidBody).enabledContactListener=!0;var e=t.addComponent(cc.PhysicsCircleCollider);e.radius=t.width/2,e.restitution=.1,e.density=1,e.apply()},e.prototype.onMousedown=function(){var t=this;return function(e){t.currentNode&&(t.isMousedown=!0,t.currentNode.setPosition(t.getMouseBallPosition(e.getLocationX())))}},e.prototype.onMousemove=function(){var t=this;return function(e){t.isMousedown&&t.currentNode&&t.currentNode.setPosition(t.getMouseBallPosition(e.getLocationX()))}},e.prototype.onMouseup=function(){var t=this;return function(e){t.isMousedown&&t.currentNode&&(t.currentNode.setPosition(t.getMouseBallPosition(e.getLocationX())),t.setPhysics(t.currentNode),t.currentNode=null,t.spawnNewBall(Math.round(4*Math.random()))),t.isMousedown=!1}},e.prototype.getMouseBallPosition=function(t){var e=t;return e<this.currentNode.width/2*this.currentNode.scaleX?e=this.currentNode.width/2*this.currentNode.scaleX:e>this.node.width-this.currentNode.width/2*this.currentNode.scaleX&&(e=this.node.width-this.currentNode.width/2*this.currentNode.scaleX),cc.v2(e-this.node.width/2,this.currentNode.position.y)},e.prototype.createWall=function(t,e){var o=new cc.Node(t),n=o.addComponent(cc.Sprite);n.spriteFrame=this.wallColor,n.sizeMode=cc.Sprite.SizeMode.CUSTOM,o.anchorX=.5,o.anchorY=.5,o.setPosition(e,0),o.height=this.wallHeight,o.width=this.wallWidth,o.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var i=o.addComponent(cc.PhysicsBoxCollider);return i.size=cc.size(o.width,o.height),i.apply(),this.node.addChild(o),o},r([d({type:c.default})],e.prototype,"balls",void 0),r([d({type:cc.SpriteFrame})],e.prototype,"wallColor",void 0),r([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./Ball":"Ball","./Balls":"Balls"}]},{},["Ball","Balls","Main"]);