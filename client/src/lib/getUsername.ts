export const getUserNamePlaceholder = (userId: number) => {
  const userArray = [
    "_",
    "태로링",
    "아무개",
    "코드스테이츠",
    "정원철",
    "우영우",
    "스파이더맨",
    "김삼순",
    "이소라",
    "장문영",
    "김태현",
  ];

  return userArray[userId];
};
