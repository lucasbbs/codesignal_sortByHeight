function sortByHeight(a) {
     indexPeople = a.map((v,i)=>({index:i, value:v})).filter(v=>v.value>0).map(v=>v.index);
     mappedPeople = a.map((v,i)=>({index:i, value:v})).filter(v=>v.value>0).sort((a,b)=> a.value-b.value).map((v,i)=>({index:indexPeople[i], value:v.value}));
     mappedTrees = (a.map((v,i)=>({index:i, value:v})).filter(v=>v.value<=0));
     let line = mappedPeople.concat(mappedTrees).sort((a,b)=> a.index-b.index).map(v=>v.value);
     console.log(mappedPeople.concat(mappedTrees).sort((a,b)=> a.index-b.index));
    
     return line;
} 



// function sortByHeight(a) {
//      mappedPeople = (a.map((v,i)=>({index:i, value:v})).filter(v=>v.value>0).sort((a,b)=> a.value-b.value).map(v=>v.value));
//     console.log(mappedPeople);
//      mappedTrees = (a.map((v,i)=>({index:i, value:v})).filter(v=>v.value<=0)).map(v=>v.index);
//      line = [];
//      for(i=0;i<a.length;i++){
//           if(mappedTrees.indexOf(i) != -1){
//                line.push(-1);
//           }else{
//                line.push(mappedPeople[0]);
//                mappedPeople.shift();
//           };
//      }
//      return line;
// } 
