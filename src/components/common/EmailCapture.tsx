import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";

const schemaFull = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  website: z.string().optional(),
});

const schemaEmailOnly = z.object({
  email: z.string().email(),
  website: z.string().optional(),
});

interface EmailCaptureProps extends React.HTMLAttributes<HTMLFormElement> {
  list: "jcal" | "matalino" | "general";
  emailOnly?: boolean;
  successMessage?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ list, className, emailOnly = false, successMessage, ...props }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<any>({
    resolver: zodResolver(emailOnly ? schemaEmailOnly : schemaFull),
  });

  const onSubmit = async (data: any) => {
    if (data.website) { return; } // honeypot
    const payload = { name: data.name, email: data.email, list, timestamp: new Date().toISOString() };
    // Stub: log and succeed
    
    trackEvent('email_submit', { list });
    toast({ title: successMessage || "Thanks. You are on the list." });
    reset();
  };

  return (
    <form id="signup" onSubmit={handleSubmit(onSubmit)} className={className} aria-label="Email capture" {...props}>
      <div className="flex flex-col sm:flex-row gap-2">
        {!emailOnly && (
          <Input type="text" placeholder="Your name" aria-label="Your name" {...register('name')} required />
        )}
        <Input type="email" placeholder="you@example.com" aria-label="Email address" {...register('email')} required />
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden name="website" {...register('website')} />
        <Button type="submit" disabled={isSubmitting} data-cta={list === 'jcal' ? 'join-jcal' : list === 'matalino' ? 'join-matalino' : 'join-general'}>
          Join
        </Button>
      </div>
      {(errors.email || (!emailOnly && errors.name)) && <p className="mt-2 text-sm text-destructive">{emailOnly ? 'Enter a valid email.' : 'Enter your name and a valid email.'}</p>}
    </form>
  );
};

export default EmailCapture;
