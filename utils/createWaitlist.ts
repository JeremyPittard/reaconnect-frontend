export const addToList = (emailAddress: string, listID: number = 3) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.NEXT_PUBLIC_BKEY,
    },
    body: JSON.stringify({
      listIds: [listID],
      updateEnabled: false,
      email: emailAddress,
      attributes: { INVESTING: true, BUYING: true, SELLING: false },
    }),
  };

  return fetch(`${process.env.NEXT_PUBLIC_BADD}`, options);
};

export const handleErrors = (response: Response) => {
  if (!response.ok) console.log(response.statusText, "status text");
  return response;
};
