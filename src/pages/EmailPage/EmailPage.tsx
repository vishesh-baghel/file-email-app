import { useEffect, useState } from "react";
import emailApi from '../../services/api/emailApi';

export interface EmailPageProps {}

export default function EmailPage(props: EmailPageProps) {
  const [emailId, setEmailId] = useState<string>("");

  useEffect(() => {
    setEmailId(window.location.pathname.split("/").pop() || "");
    getEmailById(emailId);
  }, []);

  const getEmailById = (emailId: string) => {
    if (emailApi.getOne) {
      emailApi.getOne(emailId).then((email) => {
        console.log(email);
      })
    }
  }

  return <div>email</div>;
}
