//
import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./search";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <>

        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
    
    </>
  );
}

// export const revalidate = 60;
