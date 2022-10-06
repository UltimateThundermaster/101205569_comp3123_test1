const fs = require('fs')

folder='./logs/'


fs.access(folder, (err) => {
    if(err) {
        fs.mkdirSync(folder, {recursive: true})
        content = "hello"
        for(let i = 0; i < 10; i++) {
            fs.writeFile(folder+`log${i}.txt`, content, err => {
                if (err) {
                  throw err
                }else {
                    console.log(`log${i}.txt`)
                }
              })
        }
    }else {
        fs.readdir(folder, (err, files) => {
            if (err) throw err;
            
            for (const file of files) {
                console.log('delete files...'+file )
                fs.unlinkSync(folder+file);
            }
            fs.rm(folder, { recursive: true }, (err) => {
                if(err) {
                    console.log(err)
                }
            });
            
          });
    }
})
