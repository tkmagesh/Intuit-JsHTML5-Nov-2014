var taskStorage = (function(){
	var storage = window.localStorage;
	function addTask(taskName){
		var newId = new Date().getTime().toString();
		storage.setItem(newId,taskName);
		return {
			id : newId,
			name : taskName
		};
	}

	function getAllTasks(){
		var result = [];
		for(var i=0;i<storage.length;i++){
			var taskId = storage.key(i);
			var taskName = storage.getItem(taskId);
			result.push({
				id : taskId,
				name : taskName
			});
		}
		return result;
	}
	function removeTask(taskId){
		storage.removeItem(taskId);
	}
	return {
		add : addTask,
		getAll : getAllTasks,
		remove : removeTask
	}
})();
