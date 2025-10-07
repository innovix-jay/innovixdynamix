import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
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
  inquiry_type: z.enum(["General Inquiry", "Training & Enablement", "Partnership & Teaming", "Product Demo (JCAL/Matalino)", "Technical Support"]).default("General Inquiry"),
  message: z.string().min(1),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC<React.HTMLAttributes<HTMLFormElement>> = (props) => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({ 
    resolver: zodResolver(schema),
    defaultValues: {
      inquiry_type: "General Inquiry"
    }
  });

  // Pre-select inquiry type based on query parameter
  useEffect(() => {
    const inquiry = searchParams.get('inquiry');
    if (inquiry === 'partnership') {
      setValue('inquiry_type', 'Partnership & Teaming');
    } else if (inquiry === 'training') {
      setValue('inquiry_type', 'Training & Enablement');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        ...data,
        source_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      };

      const { data: fnData, error } = await supabase.functions.invoke('submit-contact', { body: payload });
      
      if (error) {
        console.error('Edge function error:', error);
        // Try multiple paths to extract the error message
        const errorMessage = 
          (error as any).context?.body?.error || 
          (fnData as any)?.error || 
          error.message || 
          'Please try again.';
        throw new Error(errorMessage);
      }
      
      // Also check if the response itself contains an error
      if (fnData?.error) {
        throw new Error(fnData.error);
      }

      trackEvent('contact_submit', { source: 'contact_page' });
      toast({ title: "Thanks. We received your message.", description: "We’ll reply soon." });
      reset();
    } catch (e: any) {
      console.error('contact submit failed', e);
      toast({ 
        title: 'Something went wrong', 
        description: e.message || 'Please try again.', 
        variant: 'destructive' 
      });
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
          <label className="block text-sm mb-1">Inquiry Type</label>
          <select 
            className="w-full h-10 rounded-md border bg-background px-3" 
            aria-label="Inquiry Type" 
            {...register('inquiry_type')}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Training & Enablement">Training & Enablement</option>
            <option value="Partnership & Teaming">Partnership & Teaming</option>
            <option value="Product Demo (JCAL/Matalino)">Product Demo (JCAL/Matalino)</option>
            <option value="Technical Support">Technical Support</option>
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
