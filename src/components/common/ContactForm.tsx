import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  interest: z.enum(["JCAL","Matalino","General"]).default("General"),
  message: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC<React.HTMLAttributes<HTMLFormElement>> = (props) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const payload = { ...data, timestamp: new Date().toISOString() };
    
    trackEvent('contact_submit', { source: 'contact_page' });
    toast({ title: "Thanks. We received your message.", description: "We’ll reply soon." });
    reset();
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
        <div>
          <Button type="submit" disabled={isSubmitting}>Send</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
