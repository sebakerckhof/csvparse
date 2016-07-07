'use strict';
const transform = require('stream-transform');
const parse = require('csv-parse');
const fs = require('fs');

function test(){

  const transformer = transform(function(record,cb){
    //handle record
    console.log(JSON.stringify(record));
    cb(null,record);
  }
    ,function(err){}
  );

  const parser = parse({
    trim:true,
    skip_empty_lines:false,
    columns: ['mac','serial']
  });

  var stream = fs.createReadStream(__dirname + '/test.csv');
  stream.pipe(parser).pipe(transformer);
}

test();


