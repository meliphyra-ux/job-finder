export const calculateDaysAfterCreation = (createdAt: string): string => {
  const days = Math.floor(
    (Date.now() - Date.parse(createdAt)) / 1000 / 60 / 60 / 24
  );
  return (
    'Created ' +
    `${days < 365 ? `${days} days ago` : `${Math.floor(days / 365)} years ago`}`
  );
};
