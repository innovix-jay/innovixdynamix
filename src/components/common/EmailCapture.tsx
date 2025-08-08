import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";

const schema = z.object({
  email: z.string().email(),
  website: z.string().optional(),
});

interface EmailCaptureProps extends React.HTMLAttributes<HTMLFormElement> {
  list: "jcal" | "matalino" | "general";
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ list, className, ...props }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    if (data.website) { return; } // honeypot
    const payload = { email: data.email, list, timestamp: new Date().toISOString() };
    // Stub: log and succeed
    console.log('[email-webhook] payload', payload);
    trackEvent('email_submit', { list });
    toast({ title: "Thanks. You are on the list." });
    reset();
  };

  return (
    <form id="signup" onSubmit={handleSubmit(onSubmit)} className={className} aria-label="Email capture" {...props}>
      <div className="flex gap-2">
        <Input type="email" placeholder="you@example.com" aria-label="Email address" {...register('email')} />
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden name="website" {...register('website')} />
        <Button type="submit" disabled={isSubmitting} data-cta={list === 'jcal' ? 'join-jcal' : list === 'matalino' ? 'join-matalino' : 'join-general'}>
          Join
        </Button>
      </div>
      {errors.email && <p className="mt-2 text-sm text-destructive">Enter a valid email.</p>}
    </form>
  );
};

export default EmailCapture;
