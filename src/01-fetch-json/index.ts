import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: Number,
  title: String,
  completed: Boolean
}

axios.get(URL)
  .then((response) => {
    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
      The todo with ID: ${ID}
      Has a title of: ${title}
      It is completed: ${completed}
    `);
  });
