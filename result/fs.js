const https = require('https')
const fs = require('fs')

https.get('https://jsonplaceholder.typicode.com/posts',
res => {
  let body = "";

  res.on('data', data => {
    body += data;
  })

  res.on('end', () => fs.writeFile('posts.json', body, (err) => {
    if (err) throw err;
    console.log('file created successfully');
}))

})
