import * as react from 'react';
import { PropsWithChildren, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { SiteId, PageSlug } from '@acker/config';
import { Metadata } from 'next';

declare const SiteLayout: ({ siteId, children }: PropsWithChildren<{
    siteId: SiteId;
}>) => react.JSX.Element;

declare const createHomePage: (siteId: SiteId) => () => react.JSX.Element;
declare const createDynamicSitePage: (siteId: SiteId) => {
    Page: ({ params }: {
        params: {
            slug: string;
        };
    }) => react.JSX.Element;
    generateStaticParams: () => {
        slug: string;
    }[];
    generateMetadata: ({ params }: {
        params: {
            slug: PageSlug;
        };
    }) => Metadata;
};
declare const siteMetadata: (siteId: SiteId) => {
    title: string;
    description: string;
};

declare const Navbar: () => react.JSX.Element;

declare const Footer: () => react.JSX.Element;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};
declare const Button: ({ variant, className, ...props }: ButtonProps) => react.JSX.Element;

type CardProps = PropsWithChildren<{
    title?: string;
    description?: string;
    className?: string;
}>;
declare const Card: ({ title, description, children, className }: CardProps) => react.JSX.Element;

interface ContainerProps extends PropsWithChildren {
    className?: string;
}
declare const Container: ({ children, className }: ContainerProps) => react.JSX.Element;

interface TypographyProps extends PropsWithChildren {
    variant?: "h1" | "h2" | "h3" | "h4" | "p" | "small";
    className?: string;
}
declare const Typography: ({ variant, children, className }: TypographyProps) => react.JSX.Element;

interface PageComposerProps {
    site: any;
    pageSlug: string;
}
declare const PageComposer: ({ site, pageSlug }: PageComposerProps) => react.JSX.Element;

interface LogoProps {
    className?: string;
    height?: number;
}
declare const Logo: ({ className, height }: LogoProps) => react.JSX.Element;

interface HeroSectionProps extends PropsWithChildren {
    title?: string;
    subtitle?: string;
    className?: string;
}
declare const HeroSection: ({ title, subtitle, children, className }: HeroSectionProps) => react.JSX.Element;

interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    className?: string;
}
declare const Modal: ({ isOpen, onClose, title, children, className }: ModalProps) => react.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
declare const Input: ({ label, error, className, id, ...props }: InputProps) => react.JSX.Element;

interface SEOHeadProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}
declare function generateSEOMetadata({ title, description, url, image, }: SEOHeadProps): Metadata;
declare const SEOHead: typeof generateSEOMetadata;

export { Button, Card, Container, Footer, HeroSection, Input, Logo, Modal, Navbar, PageComposer, SEOHead, SiteLayout, Typography, createDynamicSitePage, createHomePage, siteMetadata };
