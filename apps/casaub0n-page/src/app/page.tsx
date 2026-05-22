import { Top } from "@/components/templates/Top";
import { layoutMetadata } from "@/components/layouts/layoutMetadata";

// eslint-disable-next-line unicorn/prefer-export-from
export const metadata = layoutMetadata;

export default function Page() {
  return (
    <>
      <Top />
    </>
  )
}
