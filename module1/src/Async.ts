{
  console.log("Code is Like a Cycle, It Has No END");

  const createPrint = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Hello World";
      if (data) {
        resolve(data);
      } else {
        reject("No Data Found");
      }
    });
  };

  const printData = async () => {
    const data = await createPrint();
    console.log(data);
  };

  console.log(printData(), "Thank you");
}
