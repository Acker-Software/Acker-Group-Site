import type { PropsWithChildren } from "react";
import { Navbar, Footer } from "../components";
import { SiteProvider } from "../context/SiteContext";
import type { SiteId } from "@acker/config";

export const SiteLayout = ({ siteId, children }: PropsWithChildren<{ siteId: SiteId }>) => (
  <SiteProvider siteId={siteId}>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pb-24 pt-12">{children}</main>
      <Footer />
    </div>
  </SiteProvider>
);
