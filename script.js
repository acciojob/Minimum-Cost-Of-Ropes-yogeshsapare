function calculateMinCost(){
	let ropelengthsStr=document.getElementById('rope-lengths').value;
	let ropelengthsArr=ropelengthsStr.split(",").map(Number);
	let n=ropelengthsArr.length;

let pq=[];
	for(let i=0;i<n;i++){
		pq.push(ropelengthsArr[i]);
	}
pq.sort((a,b)=>a-b);

let res=0;
while(pq.length>1){
	let first=pq.shift();
	let second= pq.shift();
	res+=first+second;
	pq.push(first+second);
	pq.sort((a,b)=>a-b);
}
	document.getElementById('result').textContent=res;
}