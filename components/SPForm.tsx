import React, { FormEvent, useState } from "react";
import CustomButton from "./CustomButton";
import ThreeDotsWave from "./Loader";
import { addSPList } from "@/utils/createWaitlist";
type emailSubmissionStatus = "success" | "failed" | "not-submitted";

const SPForm = ({ formName }: { formName: string }) => {
  const [emailAddress, setEmailAddress] = useState("not-submitted");
  const [fName, setFName] = useState("not-submitted");
  const [lName, setLName] = useState("not-submitted");
  const [cName, setCName] = useState("not-submitted");
  const [mobile, setMobile] = useState("not-submitted");
  const [name, setName] = useState("Honey");
  const [sumbissionStatus, setSubmissionStatus] =
    useState<emailSubmissionStatus>("not-submitted");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFormSubmission = async (event: FormEvent) => {
    event?.preventDefault();
    setIsSubmitting(true);
    if (name != "Honey") {
      setSubmissionStatus("success");
      setIsSubmitting(false);
      return;
    }

    addSPList(fName, lName, cName, mobile, emailAddress, 3)
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("success");
          setIsSubmitting(false);
          return response.json();
        }
        setSubmissionStatus("failed");
        setIsSubmitting(false);
        throw new Error(response.statusText);
      })
      .then((response) => console.log(response))
      .catch((err) => {
        setIsSubmitting(false);
        setSubmissionStatus("failed"), console.log(err, "oopsies");
      });
  };

  if (isSubmitting) {
    return <ThreeDotsWave />;
  }
  if (sumbissionStatus == "failed") {
    return (
      <p className="bold border bg-storm-green text-pale-yellow  py-2 px-4">
        Sorry there has been an error submitting your email,
        <br /> please try again later
      </p>
    );
  }
  if (sumbissionStatus == "success") {
    return (
      <p className="bold border bg-storm-green text-pale-yellow p-2">
        Thanks for joining us Keep your eyes peeled for news!
      </p>
    );
  }
  if (sumbissionStatus == "not-submitted") {
    return (
      <form
        className="md:max-w-md flex flex-col mx-auto py-24"
        onSubmit={(event) => handleFormSubmission(event)}
      >
        <legend className="sr-only">{formName}</legend>

        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          name="fname"
          type="text"
          placeholder=""
          className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
          onChange={(event) => setFName(event.target.value)}
          required={true}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          id="lname"
          name="lname"
          type="text"
          placeholder=""
          className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
          onChange={(event) => setLName(event.target.value)}
          required={true}
        />

        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder=""
          className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
          onChange={(event) => setCName(event.target.value)}
          required={true}
        />

        <label htmlFor="number">Mobile Number</label>
        <input
          id="number"
          name="number"
          type="text"
          placeholder=""
          className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
          onChange={(event) => setMobile(event.target.value)}
          required={true}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder=""
          className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
          onChange={(event) => setEmailAddress(event.target.value)}
          required
        />

        <label
          htmlFor={formName ? `name-${formName}` : `name`}
          id={formName ? `name-label-${formName}` : `name-label`}
          className="hidden"
        >
          enter your email for product updates below
        </label>
        <input
          id={formName ? `name-${formName}` : `name`}
          type="hidden"
          onChange={(event) => setName(event.target.value)}
        />

        <CustomButton buttonType="submit"> Submit</CustomButton>
      </form>
    );
  }
  return null;
};

export default SPForm;
