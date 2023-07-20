export interface Email {
  id: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  message: string;
  date: Date;
  folder: string;
  read?: boolean;
  starred?: boolean;
  important?: boolean;
  labels?: string[];
  attachments?: string[];
}
