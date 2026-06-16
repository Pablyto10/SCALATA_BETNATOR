let data=JSON.parse(localStorage.getItem('steps')||'[]');

function render(){
 const rows=document.getElementById('rows');
 rows.innerHTML='';
 data.forEach(s=>{
  rows.innerHTML+=`<tr><td>${s.evento}</td><td>${s.quota}</td><td>${s.stake}</td></tr>`;
 });
 localStorage.setItem('steps',JSON.stringify(data));
 draw();
}
function addStep(){
 data.push({
  evento:document.getElementById('evento').value,
  quota:parseFloat(document.getElementById('quota').value||0),
  stake:parseFloat(document.getElementById('stake').value||0)
 });
 render();
}
function draw(){
 const ctx=document.getElementById('bankrollChart');
 new Chart(ctx,{type:'line',data:{labels:data.map((_,i)=>i+1),datasets:[{data:data.map(x=>x.stake*x.quota)}]}});
}
render();
