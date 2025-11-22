let a=JSON.parse(localStorage.getItem("ag")||"[]"),
f=document.getElementById("f"),tb=document.querySelector("#t tbody"),
tot=document.getElementById("tot");u();

f.onsubmit=e=>{
e.preventDefault();
a.push({h:h.value,c:c.value,s:s.value,v:+v.value,p:p.value,x:0});
salvar();u();f.reset();
}

function salvar(){localStorage.setItem("ag",JSON.stringify(a));}

function u(){
tb.innerHTML="";let t=0;
a.forEach((o,i)=>{
let r=tb.insertRow();
r.insertCell().innerHTML=`<input type=checkbox ${o.x?"checked":""} onchange="a[${i}].x=this.checked;salvar()">`;
r.insertCell().textContent=o.h;
r.insertCell().textContent=o.c;
r.insertCell().textContent=o.s;
r.insertCell().textContent=o.v;
r.insertCell().textContent=o.p;
r.insertCell().innerHTML=`<button onclick="a.splice(${i},1);salvar();u()">X</button>`;
t+=o.v;
});
tot.textContent=t;
}
