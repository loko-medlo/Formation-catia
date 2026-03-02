import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the validation schema using Zod
const formSchema = z.object({
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères."),
    email: z.string().email("Adresse email invalide."),
    phone: z.string().min(10, "Le numéro doit contenir au moins 10 caractères."),
    studyLevel: z.string().min(1, "Veuillez sélectionner un niveau d'étude."),
    studyField: z.string().min(2, "Ce champ est obligatoire."),
    status: z.enum(["membre", "externe_session1", "externe_nouveau"], {
        required_error: "Veuillez sélectionner votre statut.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

// The Google Apps Script Web App URL provided by the user
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyK8xLAiN4Rqy1F5_hBX_XrwDBwrAEwSqsGt2xDUo93v4xOSPYclTy9JPWeuMaqNYqn/exec";

export function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    // Initialize the form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lastName: "",
            firstName: "",
            email: "",
            phone: "",
            studyLevel: "",
            studyField: "",
            status: "membre",
        },
    });

    // Handle form submission
    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            // Prepend a single quote to force Google Sheets to treat the phone number as text
            const submissionValues = {
                ...values,
                phone: `'${values.phone}`
            };

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                // Using "text/plain" bypasses strict CORS preflight checks for Google Apps Script
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(submissionValues),
            });

            const result = await response.json();

            if (result.result === "success") {
                toast({
                    title: "Inscription réussie ! 🎉",
                    description: "Vos informations ont bien été enregistrées.",
                });
                form.reset();
            } else {
                throw new Error(result.message || "Erreur inconnue");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            toast({
                variant: "destructive",
                title: "Erreur d'envoi",
                description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Votre nom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Votre prénom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Téléphone (WhatsApp)</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+212 6..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="studyLevel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Niveau d'étude</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez un niveau" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Bac+1">Bac+1 (Classes Prépas, L1...)</SelectItem>
                                            <SelectItem value="Bac+2">Bac+2 (DUT, BTS, L2...)</SelectItem>
                                            <SelectItem value="Bac+3">Bac+3 (Licence, 1ère année CI...)</SelectItem>
                                            <SelectItem value="Bac+4">Bac+4 (Master 1, 2ème année CI...)</SelectItem>
                                            <SelectItem value="Bac+5">Bac+5 (Master 2, 3ème année CI...)</SelectItem>
                                            <SelectItem value="Autre">Autre</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="studyField"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Filière</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex : Génie Mécanique, Industriel..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Statut</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid gap-4"
                                    >
                                        <FormItem className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-border bg-card/50 hover:bg-muted transition-all cursor-pointer group gap-2">
                                            <div className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="membre" className="border-muted-foreground" />
                                                </FormControl>
                                                <FormLabel className="font-bold cursor-pointer text-sm sm:text-base">
                                                    Membre du Club Robotech
                                                </FormLabel>
                                            </div>
                                            <div className="flex items-center self-end sm:self-auto">
                                                <span className="px-3 py-1 bg-muted-foreground/10 text-muted-foreground text-[10px] font-black uppercase tracking-widest rounded-lg border border-muted-foreground/20">
                                                    Gratuit
                                                </span>
                                            </div>
                                        </FormItem>

                                        <FormItem className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-secondary/20 bg-secondary/10 hover:bg-secondary/20 hover:border-secondary/40 transition-all cursor-pointer group gap-2">
                                            <div className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="externe_session1" className="text-secondary border-secondary/50" />
                                                </FormControl>
                                                <FormLabel className="font-bold cursor-pointer text-sm sm:text-base text-white">
                                                    Externe (Déjà assisté Séance 1)
                                                </FormLabel>
                                            </div>
                                            <div className="flex items-center self-end sm:self-auto">
                                                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-black uppercase tracking-widest rounded-lg glow-secondary">
                                                    10 DH
                                                </span>
                                            </div>
                                        </FormItem>

                                        <FormItem className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-primary/20 bg-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer group gap-2">
                                            <div className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="externe_nouveau" className="text-primary border-primary/50" />
                                                </FormControl>
                                                <FormLabel className="font-bold cursor-pointer text-sm sm:text-base text-white">
                                                    Externe (Nouveau participant)
                                                </FormLabel>
                                            </div>
                                            <div className="flex items-center self-end sm:self-auto">
                                                <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-lg glow-primary">
                                                    20 DH
                                                </span>
                                            </div>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full text-base py-6 glow-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            "S'inscrire à la formation"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
