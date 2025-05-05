{
  type smt = {
    something: string;
  };

  const smts = {
    something: "Hello",
  };

  const createpromise = (): Promise<smt> => {
    return new Promise<smt>((resolve, reject) => {
      const data: smt = smts;
      if (data) {
        resolve(data);
      } else {
        reject("Failed");
      }
    });
  };
  const printData = async (): Promise<smt> => {
    const data: smt = await createpromise();
    return data;
  };
  console.log(printData(), "Thank You");

  type ToDo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;

    console.log(data);
  };
  getToDo();
}
