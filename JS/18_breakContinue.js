// LECTURE 18

// break
for (let index = 0; index < 10; index++) {
    if (index === 5) break; //to terminate
    console.log(index);  // 0,1,2,3,4 
}


//continue
for (let index = 0; index < 10; index++) {
    // if(index === 5) continue; //to skip
    if (index % 2 === 0) continue; //will skip all even numbers
    console.log(index); //wil only print the remaining odd numbers
}



