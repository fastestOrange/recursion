// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	result = [];
	var check = function(element){
		if(_.contains(element.classList,className)){
			//console.log(element);
			result.push(element)
		}
		
		var moreNodes = element.childNodes;
		
		_.each(moreNodes, function(item){
			if(item.classList){
				check(item);
			}
			
		});
	};

	check(document.body);

  return result;
	
};
