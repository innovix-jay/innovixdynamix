import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";
import { supabase } from "@/integrations/supabase/client";

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
    try {
      if (data.website) { return; } // honeypot
      
      console.log('Submitting email capture:', { email: data.email, list });
      
      const payload = {
        name: data.name,
        email: data.email,
        list,
        source_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        website: data.website,
      };

      const { data: fnData, error } = await supabase.functions.invoke('collect-email', { body: payload });
      
      console.log('Edge function response:', { fnData, error });
      
      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      trackEvent('email_submit', { list });
      toast({ 
        title: successMessage || "Check your email to confirm.", 
        description: "We sent you a confirmation link. Click it to complete your signup." 
      });
      reset();
    } catch (e: any) {
      console.error('email capture submit failed:', e);
      toast({ 
        title: 'Something went wrong', 
        description: e.message || 'Please try again.', 
        variant: 'destructive' 
      });
    }
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
