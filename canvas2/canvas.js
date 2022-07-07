window.addEventListener('load',()=>{
   const canvas=document.querySelector("#canvas");
   const ctx=canvas.getContext("2d");
   canvas.height=window.innerHeight;
   canvas.width=window.innerWidth;
   ctx.strokeStyle="blue";
   ctx.strokeRect(200,200,30,150);
   ctx.strokeStyle="red";
   ctx.strokeRect(230,200,100,30);
   ctx.strokeStyle="red";
   ctx.strokeRect(230,260,100,30);
   ctx.strokeStyle="red";
   ctx.strokeRect(230,320,100,30);

})
