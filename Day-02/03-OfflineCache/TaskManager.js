(function(){

		
		window.addEventListener("DOMContentLoaded", init);

		function init(){
			document.getElementById("btnAdd").addEventListener("click", onBtnAddClick);
			document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
			loadTasksFromStorage();
			//attachTaskEvents();
		}
		function loadTasksFromStorage(){
			var storageTasks = taskStorage.getAll();
			for(var i=0;i<storageTasks.length;i++)
				addTaskToList(storageTasks[i]);
		}
		function onBtnAddClick(){
			var taskName = document.getElementById("txtTask").value;
			var newTask = taskStorage.add(taskName);
			addTaskToList(newTask);
		}
		function addTaskToList(newTask){
			var newTaskItem = document.createElement("li");
			newTaskItem.innerHTML = newTask.name;
			newTaskItem.setAttribute("task-id", newTask.id);
			newTaskItem.addEventListener("click", onTaskItemClick);
			document.getElementById("olTaskList").appendChild(newTaskItem);
		}
		function attachTaskEvents(){
			var taskItems = document.getElementById("olTaskList").children;
			for(var i=0;i<taskItems.length;i++)
				taskItems[i].addEventListener("click", onTaskItemClick);
		}
		function onTaskItemClick(){
			this.classList.toggle("completed");
		}
		function onBtnRemoveCompletedClick(){
			var taskItems = document.getElementById('olTaskList').children;
			for(var i=taskItems.length-1;i>=0;i--){
				if (taskItems[i].classList.contains("completed")){
					var taskId = taskItems[i].getAttribute("task-id");
					taskStorage.remove(taskId);
					taskItems[i].remove();
				}
			}
		}
	})();