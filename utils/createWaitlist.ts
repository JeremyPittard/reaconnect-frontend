export const addToList = (emailAddress: string, listID: number = 3) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify({
      listIds: [listID],
      updateEnabled: false,
      email: emailAddress,
      attributes: { INVESTING: true, BUYING: true, SELLING: false },
    }),
  };

  return fetch("https://api.sendinblue.com/v3/contacts", options);
};

export const handleErrors = (response: Response) => {
  if (!response.ok) console.log(response.statusText, "status text");
  return response;
};
