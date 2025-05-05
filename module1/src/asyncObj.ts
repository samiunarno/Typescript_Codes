{
  type something = {
    something: string;
  };

  const something = {
    something: "hello",
  };
  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const newdata: something = something;

      if (newdata) {
        resolve(newdata);
      } else {
        reject("No ENtry");
      }
    });
  };

  const ShowView = async (): Promise<something> => {
    const data: something = await createPromise();
    console.log(data);
    return data;
  };

  type smt = {
    id: number;
    userId: number; // Note: JSONPlaceholder uses `userId`, not `userid`
    title: string;
    completed: boolean;
  };
  //   const smts = {
  //     id: 101,
  //     userID: 1,
  //     title: "Sam",
  //     complete: true,
  //   };

  const getToDo = async (): Promise<smt> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data: smt = await response.json();

    console.log(data); //
    return data; //
  };

  getToDo();
  ShowView();
}
