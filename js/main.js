
/* Footer year, stats count-up and contact form */
(function(){

document.getElementById("yr").textContent=new Date().getFullYear();


var nums=document.querySelectorAll(".stat b"),rm=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
function count(el){var to=+el.dataset.n,t0=null,r=(el._r=(el._r||0)+1);function f(t){if(el._r!==r)return;if(t0===null)t0=t;var p=Math.min((t-t0)/2400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,2)));el.classList.toggle("run",p<1);if(p<1)requestAnimationFrame(f)}el.textContent="0";requestAnimationFrame(f)}
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);io.unobserve(e.target)}})},{threshold:.4});nums.forEach(function(n){io.observe(n)})}else{nums.forEach(function(n){n.textContent=n.dataset.n})}

document.getElementById("send").addEventListener("click",function(){
var n=document.getElementById("n").value,e=document.getElementById("e").value,m=document.getElementById("m").value;
location.href="mailto:sapkoroshan@gmail.com?subject="+encodeURIComponent("Hello from "+(n||"your portfolio"))+"&body="+encodeURIComponent(m+"\n\n"+n+" "+e);
});
})();
