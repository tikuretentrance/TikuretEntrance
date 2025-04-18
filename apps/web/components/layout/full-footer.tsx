import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, ArrowRight, SendIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react';

export function FullFooter() {
  return (
    <footer className="min-h-screen flex items-center justify-center bg-gradient from-background to-muted py-16">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TikuretEntrance</span>
            </div>
            <p className="text-muted-foreground text-md">
              Comprehensive preparation platform for Ethiopian university entrance exams,
              helping students achieve their academic goals through personalized learning.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/tikuret_entrance" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <IconBrandInstagram />
              </Link>
              <Link href="https://t.me/tikuretentrance" target="_blank" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <IconBrandTelegram />
              </Link>
              <Link href="https://www.youtube.com/@tikuretentrance" target="_blank" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <IconBrandYoutube />
              </Link>
              <Link href="https://facebook.com/" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <IconBrandFacebook />
              </Link>
              {/* <Link href="https://twitter.com" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>  */}
              <Link href="https://www.tiktok.com/@tikuretentrance" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <IconBrandTiktok />
              </Link>


            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Study Materials", href: "/books" },
                { name: "Practice Exams", href: "#" },
                { name: "Courses", href: "#" },
                { name: "FAQ", href: "/faq" },
                // { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">+251 912 018 482</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">info@tikuretentrance.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest exam updates and study tips.
            </p>
            <div className="p-1 border rounded-lg bg-background">
              <div className="flex gap-2">
                <Input placeholder="Your email" className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                <Button className="gradient-primary">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              By subscribing, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and consent to receive updates from TikuretEntrance.
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6 mb-16">
          <div className="space-y-4">
            <h4 className="font-medium">Natural Sciences</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">Mathematics</li>
              <li className="hover:text-primary transition-colors">Physics</li>
              <li className="hover:text-primary transition-colors">Chemistry</li>
              <li className="hover:text-primary transition-colors">Biology</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Social Sciences</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">History</li>
              <li className="hover:text-primary transition-colors">Geography</li>
              <li className="hover:text-primary transition-colors">Civics</li>
              <li className="hover:text-primary transition-colors">Economics</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Languages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">English</li>
              <li className="hover:text-primary transition-colors">Amharic</li>
              <li className="hover:text-primary transition-colors">Afaan Oromo</li>
              <li className="hover:text-primary transition-colors">Tigrinya</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/books" className="hover:text-primary transition-colors">Textbooks</Link></li>
              <li className="hover:text-primary transition-colors">Practice Tests</li>
              <li className="hover:text-primary transition-colors">Study Notes</li>
              <li className="hover:text-primary transition-colors">Question Banks</li>
              {/* <li><Link href="/dashboard/question-banks" className="hover:text-primary transition-colors">Question Banks</Link></li> */}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/feedback" className="hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/#" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TikuretEntrance. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}