requirejs.config({
//	baseUrl:"./js_plugins"      This is Standard path
    paths: {
        jquery: [
            'http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min',
            //If the CDN location fails, load from this location
            'js_plugins/jquery'
            	],
//		css:'js_plugins/css',
   },
//   shim:{
//	   'test':{
//           deps:['css!test/test']
//       }
//   }
});
// requireConfigLoadingSuccess  is used to loading all kind of javascript files
window.requireConfigLoadingSuccess=true;