/* Hero night sky: still aurora, twinkling stars and tree-line ground */
(function(){
var c=document.getElementById("sky"),g=c.getContext("2d"),W=0,H=0,S=[],T=[],A=document.createElement("canvas"),vis=true,still=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
function size(){var r=c.parentNode.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,2),i;W=r.width;H=r.height;c.width=W*d;c.height=H*d;g.setTransform(d,0,0,d,0,0);S=[];for(i=0;i<W*H/2400;i++)S.push([Math.random()*W,Math.random()*H*.85,Math.random()*1.3+.25,Math.random()*6.28,.4+Math.random()*1.6]);T=[];for(i=0;i<W;i+=7)T.push(Math.random()>.55?8+Math.random()*30:0);aurora();if(still)draw(0)}
function mk(sd){var r=sd,a=[],i;for(i=0;i<256;i++){r=(r*16807)%2147483647;a.push(r/2147483647)}return function(x){var i=Math.floor(x),f=x-i,u=f*f*(3-2*f),p=a[i&255],q=a[(i+1)&255];return p+(q-p)*u}}
function fbm(n,x){return .5*n(x)+.25*n(x*2.1+7)+.125*n(x*4.3+13)+.0625*n(x*8.7+3)}
function aurora(){A.width=W;A.height=H;var a=A.getContext("2d"),n=mk(48271),m=mk(9173),x;a.globalCompositeOperation="lighter";
[[.42,.5,"120,255,170","60,220,190","170,100,255",.42],[.31,.36,"90,255,210","90,170,255","210,110,255",.26]].forEach(function(L,li){
for(x=0;x<W;x++){var u=x/W,
y0=H*L[0]+Math.sin(u*6.9+li*1.7)*H*.07+Math.sin(u*16+li)*H*.03+(fbm(n,u*3+li*5)-.5)*H*.12,
fold=Math.min(1.2,.3+1.4*fbm(m,u*4+li*3)),
h=Math.min(H*L[1]*fold,y0-4),
ray=Math.min(1,Math.pow(.2+.8*fbm(n,x*.05+li*11),1.5)*2),
al=ray*L[5]*(.4+.6*Math.min(1,fold)),gr;
if(h<2)continue;gr=a.createLinearGradient(0,y0,0,y0-h);
gr.addColorStop(0,"rgba("+L[2]+","+(.1*al).toFixed(3)+")");gr.addColorStop(.07,"rgba("+L[2]+","+(.95*al).toFixed(3)+")");gr.addColorStop(.3,"rgba("+L[3]+","+(.45*al).toFixed(3)+")");gr.addColorStop(.7,"rgba("+L[4]+","+(.16*al).toFixed(3)+")");gr.addColorStop(1,"rgba("+L[4]+",0)");
a.fillStyle=gr;a.fillRect(x,y0-h,1.3,h)}})}
function ridge(x){return H*.93-Math.sin(x*.004+1)*H*.025-Math.sin(x*.013)*H*.012}
function draw(t){g.globalCompositeOperation="source-over";g.clearRect(0,0,W,H);var i,x,a,s;
for(i=0;i<S.length;i++){s=S[i];a=.3+.7*(.5+.5*Math.sin(t*s[4]+s[3]));g.fillStyle="rgba(255,255,255,"+a.toFixed(2)+")";g.beginPath();g.arc(s[0],s[1],s[2],0,6.283);g.fill()}
g.drawImage(A,0,0,W,H);g.globalCompositeOperation="source-over";g.fillStyle="#010409";g.beginPath();g.moveTo(0,H);for(x=0;x<=W;x+=6)g.lineTo(x,ridge(x));g.lineTo(W,H);g.fill();
for(i=0;i<T.length;i++){if(!T[i])continue;x=i*7;var b=ridge(x)+4;g.beginPath();g.moveTo(x-5,b);g.lineTo(x+1,b-T[i]);g.lineTo(x+7,b);g.fill()}}
function loop(t){if(vis&&!document.hidden)draw(t/1000);requestAnimationFrame(loop)}
size();window.addEventListener("resize",size);
if("IntersectionObserver" in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(c.parentNode);
if(!still)requestAnimationFrame(loop);
})();
