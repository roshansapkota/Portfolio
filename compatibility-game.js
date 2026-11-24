/* Cosmic compatibility test (one play per page visit) */
(function(){
var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),keys=document.getElementById("keys"),i1=document.getElementById("i1"),i2=document.getElementById("i2"),sm=document.getElementById("sm"),rx=document.getElementById("rx"),rf=document.getElementById("rf"),rm=document.getElementById("rm"),pc=document.getElementById("pc"),vd=document.getElementById("vd");
var f=null,l=null,still=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
A.forEach(function(c){var b=document.createElement("button");b.type="button";b.className="key";b.textContent=c;b.setAttribute("aria-label","Letter "+c);b.addEventListener("click",function(){pick(c,b)});keys.appendChild(b)});
function pick(c,b){if(l!==null)return;b.classList.add("sel");
if(f===null){f=c;i1.textContent=c;i1.className="";i2.className="on";sm.textContent="Step 2: your last name starts with…";return}
l=c;i2.textContent=c;i2.className="";keys.hidden=true;sm.textContent="Calculating our cosmic compatibility…";run()}
function score(){var a=f.charCodeAt(0),b=l.charCodeAt(0);return 61+((a*31+b*17+a*b)%39)}
function run(){var p=score(),msgs=["Reading the stars…","Compiling feelings…","Debugging destiny on 127.0.0.1…","Calibrating the ladder to Mars…"];
rx.hidden=false;pc.textContent="";vd.textContent="";rf.style.width="0";
if(still){finish(p);return}
msgs.forEach(function(m,i){setTimeout(function(){rm.textContent=m;rf.style.width=((i+1)*25)+"%"},i*750)});
setTimeout(function(){rm.textContent="";count(p)},msgs.length*750+300)}
function count(p){var t0=null;function s(t){if(t0===null)t0=t;var k=Math.min((t-t0)/1400,1);pc.textContent=Math.round(p*k)+"%";if(k<1)requestAnimationFrame(s);else finish(p)}requestAnimationFrame(s)}
function finish(p){pc.textContent=p+"%";rf.style.width="100%";rm.textContent="";
var v=p>=91?"Cosmic match! Even Elon would be jealous. 🚀":p>=81?"Excellent compatibility. A perfect git merge with zero conflicts. ✨":p>=71?"Strong signal! Like Wi-Fi and a window seat. 📶":"Solid connection. Like Python and indentation: it works if we’re careful. 🐍";
vd.textContent="You and Roshan are "+p+"% compatible. "+v;sm.textContent="Result for "+f+"."+l+". One play per visit, so that one counts!"}
})();
