var express=require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

var port = 9999;
var app=express();

const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo : true,
    publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname , '../src/index.html'));
});

app.listen(port,function(error){
    if(error)
    {
        console.log(error);
    }
    else{
        open('http://localhost:' +port);
    }
});
