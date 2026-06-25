import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
    const profileImage = PlaceHolderImages.find(p => p.id === 'profile-photo');
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

    const socialLinks = [
        { icon: Linkedin, href: "#" },
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" },
    ];

    return (
        <div className="bg-background min-h-screen font-body text-foreground/90 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
             {heroImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover opacity-20"
                        data-ai-hint={heroImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>
            )}
            
            <main className="container z-10">
                <Card className="mx-auto max-w-4xl rounded-3xl shadow-2xl resume-card overflow-hidden bg-card/80 backdrop-blur-sm">
                    {/* Header Section */}
                    <CardHeader className="p-0 relative h-64">
                         {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={heroImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                            {profileImage && (
                                <Image
                                    src={profileImage.imageUrl}
                                    alt={profileImage.description}
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover aspect-square border-4 border-white/80 shadow-lg mb-4"
                                    data-ai-hint={profileImage.imageHint}
                                    priority
                                />
                            )}
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Jessica Emil B. Compuesto, MD</h1>
                            <p className="text-lg md:text-xl text-white/90 mt-1">Physician | Geologist</p>
                             <Button variant="outline" className="mt-4 bg-white/20 text-white hover:bg-white/30 border-white/50 group">
                                <FileText className="mr-2 h-4 w-4" /> CV
                            </Button>
                        </div>
                    </CardHeader>

                    {/* Body Section */}
                    <CardContent className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Left Column: About */}
                        <div className="md:col-span-2 space-y-6">
                            <section id="about">
                                <h2 className="font-headline text-3xl text-primary mb-4">About</h2>
                                <p className="text-base leading-relaxed">
                                    Licensed physician with prior residency training in Ophthalmology, experienced in managing high-volume outpatient, emergency, and surgical cases with accurate and structured clinical documentation. Skilled in both hospital and community healthcare, including municipal health leadership.
                                </p>
                            </section>
                        </div>

                        {/* Right Column: Contact */}
                        <div className="space-y-6">
                            <section id="contact">
                                <h2 className="font-headline text-3xl text-primary mb-4">Get in touch</h2>
                                <div className="space-y-4">
                                    <Button asChild variant="outline" className="w-full justify-start text-left">
                                        <Link href="mailto:jessica.compuesto@email.com"><Mail className="mr-3" /> Email</Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full justify-start text-left">
                                        <Link href="tel:+1234567890"><Phone className="mr-3" /> Phone</Link>
                                    </Button>
                                </div>
                            </section>
                            <div className="flex justify-center md:justify-start space-x-2 pt-4">
                                {socialLinks.map((link, index) => (
                                    <Button key={index} asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                            <link.icon />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
