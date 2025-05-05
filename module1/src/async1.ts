{
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const newdata: string = " Hello World";

      if (newdata) {
        resolve(newdata);
      } else {
        reject("No ENtry");
      }
    });
  };

  const ShowView = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };
  ShowView();
}
