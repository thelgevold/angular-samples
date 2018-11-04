var webpackConfig = {
  mode: 'TMPL_mode',
  entry: {
    TMPL_entry_point
  },
  output: {
    filename: '[name].js',
    TMPL_out_dir
  },
  // optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
  //       vendor: {
	// 				test: /[\\/]external[\\/]/,
	// 				chunks: "initial",
	// 				name: "vendor",
	// 				priority: 10,
  //         enforce: true,
          
	// 			}
	// 		}
	// 	}
  // },
  
  module: {
    rules: [
      { parser: { amd: false } }
    ]
  },

  resolve: {
    alias: {
      '@angular/common': `${process.cwd()}/TMPL_root_dir/external/angular/packages/common`,
      '@angular/core': `${process.cwd()}/TMPL_root_dir/external/angular/packages/core`,
      '@angular/elements': `${process.cwd()}/TMPL_root_dir/external/angular/packages/elements`,
      '@angular/platform-browser': `${process.cwd()}/TMPL_root_dir/external/angular/packages/platform-browser`,
      '@angular/forms': `${process.cwd()}/TMPL_root_dir/external/angular/packages/forms`,
      '@angular/router': `${process.cwd()}/TMPL_root_dir/external/angular/packages/router`,
      '@angular/http': `${process.cwd()}/TMPL_root_dir/external/angular/packages/http`,

      'rxjs/operators': `${process.cwd()}/TMPL_root_dir/external/rxjs/operators`,
      'rxjs': `${process.cwd()}/TMPL_root_dir/external/rxjs`,

      //Rewrite absolute workspace imports in ngfactory files
      'TMPL_workspace': `${process.cwd()}/TMPL_root_dir`
    }
  }
};

module.exports = webpackConfig;