$(function(){$.getScript("/js/qq_canvas.js",function(){function e(){C=new CAV.CanvasRenderer,t(y.renderer)}function t(e){switch(f&&b.removeChild(f.element),e){case v:f=C}f.setSize(I.offsetWidth,I.offsetHeight),b.appendChild(f.element)}function n(){l=new CAV.Scene}function a(){l.remove(h),f.clear(),g=new CAV.Plane(A.width*f.width,A.height*f.height,A.segments,A.slices),u=new CAV.Material(A.ambient,A.diffuse),h=new CAV.Mesh(g,u),l.add(h);var e,t;for(e=g.vertices.length-1;e>=0;e--)(t=g.vertices[e]).anchor=CAV.Vector3.clone(t.position),t.step=CAV.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),t.time=Math.randomInRange(0,Math.PIM2)}function i(){var e,t;for(e=l.lights.length-1;e>=0;e--)t=l.lights[e],l.remove(t);for(f.clear(),e=0;e<p.count;e++)(t=new CAV.Light(p.ambient,p.diffuse)).ambientHex=t.ambient.format(),t.diffuseHex=t.diffuse.format(),l.add(t),t.mass=Math.randomInRange(.5,1),t.velocity=CAV.Vector3.create(),t.acceleration=CAV.Vector3.create(),t.force=CAV.Vector3.create()}function o(e,t){f.setSize(e,t),CAV.Vector3.set(w,f.halfWidth,f.halfHeight),a()}function c(){V=Date.now()-M,r(),s(),requestAnimationFrame(c)}function r(){var e,t,n,a,i,o,c,r=A.depth/2;for(CAV.Vector3.copy(p.bounds,w),CAV.Vector3.multiplyScalar(p.bounds,p.xyScalar),CAV.Vector3.setZ(R,p.zOffset),a=l.lights.length-1;a>=0;a--){i=l.lights[a],CAV.Vector3.setZ(i.position,p.zOffset);var s=Math.clamp(CAV.Vector3.distanceSquared(i.position,R),p.minDistance,p.maxDistance),d=p.gravity*i.mass/s;CAV.Vector3.subtractVectors(i.force,R,i.position),CAV.Vector3.normalise(i.force),CAV.Vector3.multiplyScalar(i.force,d),CAV.Vector3.set(i.acceleration),CAV.Vector3.add(i.acceleration,i.force),CAV.Vector3.add(i.velocity,i.acceleration),CAV.Vector3.multiplyScalar(i.velocity,p.dampening),CAV.Vector3.limit(i.velocity,p.minLimit,p.maxLimit),CAV.Vector3.add(i.position,i.velocity)}for(o=g.vertices.length-1;o>=0;o--)c=g.vertices[o],e=Math.sin(c.time+c.step[0]*V*A.speed),t=Math.cos(c.time+c.step[1]*V*A.speed),n=Math.sin(c.time+c.step[2]*V*A.speed),CAV.Vector3.set(c.position,A.xRange*g.segmentWidth*e,A.yRange*g.sliceHeight*t,A.zRange*r*n-r),CAV.Vector3.add(c.position,c.anchor);g.dirty=!0}function s(){f.render(l)}function d(){window.addEventListener("resize",m)}function m(e){o(I.offsetWidth,I.offsetHeight),s()}var V,f,l,h,g,u,C,A={width:5.5,height:5.5,depth:10,segments:12,slices:6,xRange:.8,yRange:.1,zRange:1,ambient:"#525252",diffuse:"#FFFFFF",speed:2e-4},p={count:2,xyScalar:1,zOffset:100,ambient:"#002c4a",diffuse:"#005584",speed:.001,gravity:1200,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!1,draw:!1,bounds:CAV.Vector3.create(),step:CAV.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},v="canvas",y={renderer:v},M=Date.now(),w=CAV.Vector3.create(),R=CAV.Vector3.create(),I=document.getElementById("container"),b=document.getElementById("anitOut");e(),n(),a(),i(),d(),o(I.offsetWidth,I.offsetHeight),c()}),document.getElementById("canvas_nav").height="0",document.getElementById("canvas_nav").style.display="none"});