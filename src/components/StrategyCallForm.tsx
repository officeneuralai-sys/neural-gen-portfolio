import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// List of services for the dropdown
const services = [
    "AI Calling Agent",
    "Basic Automation",
    "CCTV AI Monitoring",
    "Business Analytics",
    "Restaurant Automation",
    "Marketing Automation",
    "Real Estate AI Suite",
    "Full Stack Development",
    "AI Social Media Content",
    "Other"
];

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  workEmail: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  companyDomain: z.string().min(2, { message: "Please enter a valid domain." }),
  serviceOfInterest: z.string({ required_error: "Please select a service." }),
  challenge: z.string().min(10, { message: "Please describe your challenge in at least 10 characters." }),
});

export const StrategyCallForm = ({ serviceTitle }: { serviceTitle?: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companyDomain: "",
      serviceOfInterest: serviceTitle || "",
      challenge: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log("Strategy Call Request:", values);
    toast({
      title: "Request Sent!",
      description: "Our team will review your information and get back to you shortly.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Email</FormLabel>
              <FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyDomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Domain</FormLabel>
              <FormControl>
                <Input placeholder="company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceOfInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service of Interest</FormLabel>
              {serviceTitle ? (
                <FormControl>
                  <Input {...field} readOnly className="bg-muted" />
                </FormControl>
              ) : (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your project or challenge</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., We're looking to reduce customer support costs..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit Request</Button>
      </form>
    </Form>
  );
};
