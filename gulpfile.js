const gulp = require("gulp");

require("./dev.js");
require("./docs.js");

gulp.task(
  "default",
  gulp.series(
    "cleanDev",
    gulp.parallel("htmlDev", "scssDev", "imgDev", "jsDev"),
    gulp.parallel("serveDev", "watchDev"),
    // "pages"
  )
);

gulp.task(
  "docs",
  gulp.series(
    "cleanDocs",
    gulp.parallel("htmlDocs", "scssDocs", "imgDocs", "jsDocs"),
    // "pages"
  )
);
