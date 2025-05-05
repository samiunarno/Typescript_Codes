{
  //Promise Async :

  const createPrint = () => {
    return new Promise((resolve, reject) => {
      const data: string = "Hello there";

      if (data) {
        resolve(data);
      } else {
        reject("No Data");
      }
    });
  };

  //calling the function

  const ShowView = async () => {
    const data = await createPrint();
    console.log(data);
  };
  ShowView();
}
