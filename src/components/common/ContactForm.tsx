import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  interest: z.enum(["JCAL","Matalino","General"]).default("General"),
  message: z.string().min(1),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC<React.HTMLAttributes<HTMLFormElement>> = (props) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        ...data,
        source_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      };

      const { error } = await supabase.functions.invoke('submit-contact', { body: payload });
      if (error) throw error;

      trackEvent('contact_submit', { source: 'contact_page' });
      toast({ title: "Thanks. We received your message.", description: "We’ll reply soon." });
      reset();
    } catch (e: any) {
      console.error('contact submit failed', e);
      toast({ title: 'Something went wrong', description: 'Please try again.', variant: 'destructive' });
    }
  };

  return (
    <form id="contact-form" aria-label="Contact form" onSubmit={handleSubmit(onSubmit)} {...props}>
      <div className="grid gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && <p className="text-sm text-destructive mt-1">Name is required.</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input type="email" aria-invalid={!!errors.email} {...register('email')} />
          {errors.email && <p className="text-sm text-destructive mt-1">Valid email required.</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Company (optional)</label>
          <Input {...register('company')} />
        </div>
        <div>
          <label className="block text-sm mb-1">Interest</label>
          <select className="w-full h-10 rounded-md border bg-background" aria-label="Interest" {...register('interest')}>
            <option>JCAL</option>
            <option>Matalino</option>
            <option>General</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <Textarea rows={4} aria-invalid={!!errors.message} {...register('message')} />
          {errors.message && <p className="text-sm text-destructive mt-1">Message is required.</p>}
        </div>
        {/* Honeypot field */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden name="website" {...register('website')} />
        <div>
          <Button type="submit" disabled={isSubmitting}>Send</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
