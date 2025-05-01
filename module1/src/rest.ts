const greet = (...friend: string[]) => {
  friend.forEach((friend: string) => console.log(`hi ${friend}`));
};

greet("Samiun", "Arno", "Tony");
