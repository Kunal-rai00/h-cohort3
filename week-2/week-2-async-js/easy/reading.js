// let fs = require("fs")

// fs.readFile("a.txt", "utf-8", (err, data)=>{
//     if (err){
//         console.log("Error reading the file:", err);
        
//     }
//     console.log(data)
    
// })


const fs = require('fs');

// Read the file
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Modify the content
  let updatedData = data.replace('oldText', 'newText'); // Replace oldText with newText

  // Write the updated content back to the file
  fs.writeFile('a.txt', updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
    } else {
      console.log('File updated successfully');
    }
  });
});

  
