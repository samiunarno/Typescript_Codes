{
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  // Async function to fetch a Todo
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: Todo = await response.json();
    console.log(data); // This will now actually run
    return data;
  };

  getTodo(); // Call it to see the result in console

  type Something = { something: string };

  // Simulate an async operation that returns a promise
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // Async function to consume the simulated promise
  const showData = async (): Promise<Something> => {
    const data = await createPromise();
    console.log(data); // Log the result
    return data;
  };

  showData(); // Call it
}
