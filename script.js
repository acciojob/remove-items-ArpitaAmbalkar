//your JS code here. If required.
let select=document.getElementById("colorSelect");
let btn=document.getElementById("removeBtn");

btn.addEventListener("click",()=>{
	let index=select.selectedIndex;
	if(index >= 0){ 
        select.remove(index);
	}
	
})