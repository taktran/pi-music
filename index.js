var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

// Check if the specified sound file exists
var sound = process.argv[2];
if (!fs.existsSync(sound)) {
  console.log('File: ' + sound + ' not found.');
  process.exit(1);
}

fs.createReadStream(sound)
  .pipe(new lame.Decoder())
  .on('format', function (format) {
    this.pipe(new Speaker(format));
  });
