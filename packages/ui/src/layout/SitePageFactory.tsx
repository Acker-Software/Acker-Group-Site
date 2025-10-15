import { getPageMetadata, getSite, getSiteMetadata, getSiteRoutes, type SiteId, type PageSlug } from "@acker/config";
import { PageComposer } from "../components";
import type { Metadata } from "next";

export const createHomePage = (siteId: SiteId) => () => {
  const site = getSite(siteId);
  return <PageComposer site={site} pageSlug="home" />;
};

export const createDynamicSitePage = (siteId: SiteId) => {
  const site = getSite(siteId);
  const Page = ({ params }: { params: { slug: string } }) => <PageComposer site={site} pageSlug={params.slug} />;
  const generateStaticParams = () => getSiteRoutes(siteId).filter((slug) => slug !== "home").map((slug) => ({ slug }));
  const generateMetadata = ({ params }: { params: { slug: PageSlug } }): Metadata => getPageMetadata(siteId, params.slug);
  return { Page, generateStaticParams, generateMetadata };
};

export const siteMetadata = (siteId: SiteId) => getSiteMetadata(siteId);
