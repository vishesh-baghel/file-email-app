export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  date: string;
  read?: boolean;
  starred?: boolean;
  important?: boolean;
  labels?: string[];
  attachments?: string[];
}
