// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
 
var myStringify = function(obj){
  var partial, result;
  if(typeof obj==='string' ){
    return '"'+obj+'"';
  }
  else if(typeof obj==='boolean'){
    return obj.toString();
  }
  
  else if(typeof obj==='number'){
    return obj.toString();
  }
  
  else if(obj===null){
   return "" + obj;
  }
  
  
  else if(_.isArray(obj)){
    var arrayPartial = [];
    for(var i = 0; i<obj.length; i++){
       arrayPartial.push(myStringify(obj[i]));
    
    }
    return '['+arrayPartial.join(',')+']';
  }
  else{
      var objPartial =[];
      for(var key in obj){
	  if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
		delete obj[key];
	  }else{
        var strKey = myStringify(key);
        var strVal = myStringify(obj[key]);
		objPartial.push(strKey+":"+strVal);
		}
			
    }
    return '{'+objPartial.join(',')+'}';
  }
  
};

