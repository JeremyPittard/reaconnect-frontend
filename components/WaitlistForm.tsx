import { FormEvent, useState } from "react";
import { addToList } from "@/utils/createWaitlist";
import CustomButton from "./CustomButton";
import ThreeDotsWave from "./Loader";

type emailSubmissionStatus = "success" | "failed" | "not-submitted";

const WaitlistForm = ({ formName }: { formName?: string }) => {
  const [emailAddress, setEmailAddress] = useState("not-submitted");
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

    addToList(emailAddress, 3)
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
        name={formName ? `waitlist-form-${formName}` : "waitlist-form"}
        id={formName ? `waitlist-form-${formName}` : "waitlist-form"}
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
          required
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
  }
};

export default WaitlistForm;
