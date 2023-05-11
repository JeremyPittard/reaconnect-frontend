import { FormEvent, useState, use } from "react";
import { addToList, handleErrors } from "@/utils/createWaitlist";
import CustomButton from "./CustomButton";

type emailSubmissionStatus = "success" | "failed" | "not-submitted";

const WaitlistForm = ({ formName }: { formName?: string }) => {
  const [emailAddress, setEmailAddress] = useState("not-submitted");
  const [name, setName] = useState("Honey");
  const [sumbissionStatus, setSubmissionStatus] =
    useState<emailSubmissionStatus>("not-submitted");

  const handleFormSubmission = async (event: FormEvent) => {
    event?.preventDefault();
    if (name != "Honey") {
      setSubmissionStatus("success");
      console.log("I'm watching you");
      return;
    }

    addToList(emailAddress, 3)
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("success");
          return response.json();
        }
        setSubmissionStatus("failed");
        throw new Error(response.statusText);
      })
      .then((response) => console.log(response))
      .catch((err) => {
        setSubmissionStatus("failed"), console.log(err, "oopsies");
      });
  };

  return (
    <form
      name={formName ? `waitlist-form-${formName}` : "waitlist-form"}
      onSubmit={(event) => handleFormSubmission(event)}
      className="max-w-xd md:max-w-md flex flex-col md:block"
    >
      <label
        htmlFor={formName ? `email-${formName}` : `email`}
        id={formName ? `email-label-${formName}` : `email-label`}
      >
        enter your email for product updates below
      </label>
      <input
        id={formName ? `email-${formName}` : `email`}
        type="email"
        onChange={(event) => setEmailAddress(event.target.value)}
        className="px-3 py-2 mr-1 mb-2 bg-pale-yellow border border-storm-green outline-storm-green focus-visible:ring-red-500"
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
      <CustomButton buttonType="submit">join the waitlist</CustomButton>
    </form>
  );
};

export default WaitlistForm;
