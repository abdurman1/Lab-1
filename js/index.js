import { getToDoData } from "./lib/firebase/api";
import { toDoItemTemplate } from "./templates/toDoItem";
/* 
           
			  
*/

async function appInit() {
	const appData = await getToDoData();
	
	const toDoItems = Object.values(appData).map((object) => {
		console.log(toDoItemTemplate(obj.todo))
	});


	toDoItems.forEach((todo) =>{
		document.querySelector('#root').insertAdjacentElement('afterbegin', todo)
	}
	)

	console.log(toDoItems);
}

appInit();