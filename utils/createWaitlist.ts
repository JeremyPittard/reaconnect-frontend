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
      attributes: {
        INVESTING: false,
        BUYING: true,
        SELLING: false,
      },
    }),
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return fetch(`${process.env.NEXT_PUBLIC_BADD}`, options);
};

export const addInvestorToList = (
  firstName: string,
  lastName: string,
  companyName: string,
  mobile: string,
  emailAddress: string,
  listID: number = 3
) => {
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
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        COMPANY: companyName,
        MOBILE: mobile,
        INVESTING: true,
        BUYING: false,
        SELLING: false,
      },
    }),
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return fetch(`${process.env.NEXT_PUBLIC_BADD}`, options);
};
export const addSPList = (
  firstName: string,
  lastName: string,
  companyName: string,
  mobile: string,
  emailAddress: string,
  listID: number = 3
) => {
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
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        COMPANY: companyName,
        MOBILE: mobile,
        INVESTING: false,
        BUYING: false,
        SELLING: false,
        SERVICEPROVIDER: true,
      },
    }),
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return fetch(`${process.env.NEXT_PUBLIC_BADD}`, options);
};

export const handleErrors = (response: Response) => {
  if (!response.ok) console.log(response.statusText, "status text");
  return response;
};
